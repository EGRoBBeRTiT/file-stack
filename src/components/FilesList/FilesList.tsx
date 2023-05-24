import React, { useCallback, useState } from 'react';
import type { AppFile } from 'types/Files.types';
import { useAppDispatch } from 'store';
import { deleteFileAction, downloadFileAction } from 'store/file';
import { convertBase64toBlob, makeDownloadFile } from 'utils';
import { IcCloud } from 'assets';
import { Colors } from 'global/colors.style';
import { Modal } from 'components/Modal';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { useErrorAlert } from 'hooks/useErrorAlert';
import { getFileErrorName } from 'components/AlertErrorProvider/AlertErrorProvider.utils';
import { useToast } from 'hooks/useToast';

import {
    StyledButton,
    StyledDateLabel,
    StyledFileItem,
    StyledFilesList,
    StyledLabels,
    StyledModalButtons,
    StyledModalContent,
    StyledNameLabel,
    StyledSizeLabel,
    StyledTextTitle,
    StylesFilesListContainer,
} from './FilesList.style';
import type { FilesListProps } from './FilesList.types';

export const FilesList = ({ filesList }: FilesListProps) => {
    const dispatch = useAppDispatch();
    const alertError = useErrorAlert();
    const showToast = useToast();

    const [modalOpened, setModalOpened] = useState(false);
    const [selectedFileName, setSelectedFileName] = useState('');

    const handleItemClick = useCallback(
        (file: AppFile) => () => {
            dispatch(downloadFileAction({ fileName: file.name }))
                .then(({ payload }) => {
                    makeDownloadFile(convertBase64toBlob(payload as string), file.name);
                })
                .catch((error) => alertError(getFileErrorName(error)));
        },
        [alertError, dispatch],
    );

    const handleDeleteClick = useCallback((name: string) => {
        setSelectedFileName(name);
        setModalOpened(true);
    }, []);

    const handleDelete = useCallback(() => {
        dispatch(deleteFileAction({ fileName: selectedFileName }))
            .then(() => {
                setModalOpened(false);
                showToast(`Файл ${selectedFileName} удален`);
            })
            .catch((error) => alertError(getFileErrorName(error)));
    }, [alertError, dispatch, selectedFileName, showToast]);

    return (
        <StylesFilesListContainer>
            <StyledTextTitle type="title-0">
                Хранилище
                <IcCloud />
            </StyledTextTitle>
            <StyledFilesList>
                <StyledLabels>
                    <StyledNameLabel type="label-1" color={Colors.BASE_80}>
                        Файлы
                    </StyledNameLabel>
                    <StyledSizeLabel type="label-1" color={Colors.BASE_80}>
                        Размер
                    </StyledSizeLabel>
                    <StyledDateLabel type="label-1" color={Colors.BASE_80}>
                        Дата изменения
                    </StyledDateLabel>
                </StyledLabels>
                {filesList?.map((file, index) => (
                    <StyledFileItem
                        key={index}
                        file={file}
                        onClick={handleItemClick(file)}
                        grey={index % 2 === 1}
                        onDeleteClick={handleDeleteClick}
                    />
                ))}
            </StyledFilesList>
            <Modal isOpen={modalOpened} onClose={() => setModalOpened(false)}>
                <StyledModalContent>
                    <Text type="title-1">Файл безвозвратно будет удален</Text>
                    <StyledModalButtons>
                        <Button buttonType="outlined" onClick={() => setModalOpened(false)}>
                            Отмена
                        </Button>
                        <Button buttonType="danger" onClick={handleDelete}>
                            Удалить
                        </Button>
                    </StyledModalButtons>
                </StyledModalContent>
            </Modal>
            <StyledButton />
        </StylesFilesListContainer>
    );
};
