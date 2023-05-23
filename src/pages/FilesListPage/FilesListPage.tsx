import { FilesList } from 'components/FilesList';
import { useLoadFilesList } from 'hooks/loaders/useLoadFilesList';
import React from 'react';

export const FilesListPage = () => {
    useLoadFilesList();

    return <FilesList />;
};
