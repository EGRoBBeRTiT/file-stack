import React from 'react';
import { ICON_BY_FILE_TYPE } from 'components/FileIcon/FileIcon.constants';
import { GenericFileIcon } from 'assets';

import type { FileIconProps } from './FileIcon.types';

export const FileIcon = ({ fileName, ...props }: FileIconProps) => {
    const fileParts = fileName?.split('.');

    const fileType = `.${fileParts?.[(fileParts?.length ?? 1) - 1]}`;

    const Icon = ICON_BY_FILE_TYPE[fileType] ?? GenericFileIcon;

    return <Icon {...props} />;
};
