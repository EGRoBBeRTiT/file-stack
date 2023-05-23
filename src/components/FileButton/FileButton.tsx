import React, { useCallback, useRef, useState } from 'react';
import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { useAppDispatch } from 'store';
import { downloadFileAction } from 'store/file';
import { makeDownloadFile } from 'utils';

import type { FileButtonProps } from './FileButton.types';
import { StyledHiddenInput } from './FileButton.style';

export const FileButton = ({ className }: FileButtonProps) => {
    const dispatch = useAppDispatch();

    const inputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | undefined>();
    const [fileUrl, setFileUrl] = useState<string | undefined>();

    const handleButtonClick = useCallback(() => inputRef.current?.click(), []);

    const handleFIleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.[0]);

        if (event.target.files?.[0]) {
            setFile(event.target.files[0]);

            setFileUrl(URL.createObjectURL(event.target.files[0] as Blob));
        }
    }, []);

    const handleDownload = useCallback(() => {
        dispatch(downloadFileAction({ fileName: 'Снимок экрана от 2023-05-18 23-56-41.png' })).then(({ payload }) => {
            makeDownloadFile(payload as Blob, 'Снимок экрана от 2023-05-18 23-56-41.png');
        });
    }, [dispatch]);

    return (
        <>
            {fileUrl && <img alt="preview" src={fileUrl} style={{ width: '100px', height: '100px' }} />}
            <div id="file" />
            <Button className={className} onClick={handleButtonClick}>
                <Text type="text-1">Загрузить файл</Text>
            </Button>
            <Button className={className} onClick={handleDownload}>
                <Text type="text-1">Скачать файл</Text>
            </Button>
            <Text type="text-1">{file?.name}</Text>
            <StyledHiddenInput ref={inputRef} type="file" onChange={handleFIleInputChange} />
        </>
    );
};
