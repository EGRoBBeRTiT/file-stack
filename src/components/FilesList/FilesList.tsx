import React from 'react';
import { Text } from 'components/Text';

import type { FilesListProps } from './FilesList.types';
import { StyledButton, StylesFilesList } from './FilesList.style';

export const FilesList = ({ filesList }: FilesListProps) => (
    <StylesFilesList>
        {filesList?.map((_, index) => (
            <Text type="text-1">{index}</Text>
        ))}
        <StyledButton>
            <Text type="text-1">Загрузить файл</Text>
        </StyledButton>
    </StylesFilesList>
);
