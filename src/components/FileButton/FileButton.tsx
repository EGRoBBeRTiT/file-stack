import React, { useCallback, useRef } from 'react';
import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { useAppDispatch } from 'store';
import { uploadFileAction } from 'store/file';
import { useErrorAlert } from 'hooks/useErrorAlert';
import { getFileErrorName } from 'components/AlertErrorProvider/AlertErrorProvider.utils';
import { useToast } from 'hooks/useToast';

import type { FileButtonProps } from './FileButton.types';
import { StyledHiddenInput } from './FileButton.style';

export const FileButton = ({ className }: FileButtonProps) => {
    const dispatch = useAppDispatch();
    const alertError = useErrorAlert();
    const showToast = useToast();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = useCallback(() => inputRef.current?.click(), []);

    const handleFIleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files?.[0]) {
                dispatch(
                    uploadFileAction({
                        file: event.target.files[0],
                        lastModified: `${event.target.files[0].lastModified}`,
                    }),
                )
                    .then(() => {
                        showToast('Файл успешно добавлен');
                    })
                    .finally(() => {
                        event.target.files = null;
                    })
                    .catch((error) => alertError(getFileErrorName(error)));
            }
        },
        [alertError, dispatch, showToast],
    );

    return (
        <>
            <Button className={className} onClick={handleButtonClick}>
                <Text type="text-1">Загрузить файл</Text>
            </Button>
            <StyledHiddenInput ref={inputRef} type="file" onChange={handleFIleInputChange} />
        </>
    );
};
