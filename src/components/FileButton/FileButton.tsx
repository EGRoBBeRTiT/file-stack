import React, { useCallback, useRef, useState } from 'react';
import { Button } from 'components/Button';
import { Text } from 'components/Text';

import type { FileButtonProps } from './FileButton.types';
import { StyledHiddenInput } from './FileButton.style';

export const FileButton = ({ className }: FileButtonProps) => {
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

    return (
        <>
            {fileUrl && <img alt="preview" src={fileUrl} style={{ width: '100px', height: '100px' }} />}
            <Button className={className} onClick={handleButtonClick}>
                <Text type="text-1">Загрузить файл</Text>
            </Button>
            <Text type="text-1">{file?.name}</Text>
            <StyledHiddenInput ref={inputRef} type="file" onChange={handleFIleInputChange} />
        </>
    );
};
