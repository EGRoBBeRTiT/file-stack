import React, { useCallback } from 'react';
import { getDateLabel, getSizeLabel } from 'components/FileItem/FileItem.utils';
import { IcDownload, IcTrash } from 'assets';

import type { FileItemProps } from './FileItem.types';
import {
    StyledActionButtons,
    StyledDateText,
    StyledFileIcon,
    StyledFileItem,
    StyledFileNameText,
    StyledIconButton,
    StyledSizeText,
} from './FileItem.style';

export const FileItem = ({ className, file, onDeleteClick, ...props }: FileItemProps) => {
    const handleDelete = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            onDeleteClick?.(file.name);
        },
        [file.name, onDeleteClick],
    );

    return (
        <StyledFileItem className={className} {...props}>
            <div />
            <StyledFileIcon fileName={file.name ?? ''} />
            <StyledFileNameText type="text-0">{file.name}</StyledFileNameText>

            <StyledSizeText type="text-0">{getSizeLabel(file.size)}</StyledSizeText>
            <StyledDateText type="text-0">{getDateLabel(file.lastModified)}</StyledDateText>
            <StyledActionButtons>
                <StyledIconButton>
                    <IcDownload />
                </StyledIconButton>
                <StyledIconButton onClick={handleDelete}>
                    <IcTrash />
                </StyledIconButton>
            </StyledActionButtons>
        </StyledFileItem>
    );
};
