import { FilesList } from 'components/FilesList';
import { useLoadFilesList } from 'hooks/loaders/useLoadFilesList';
import React from 'react';
import { useAppSelector } from 'store';

export const FilesListPage = () => {
    const { filesList } = useAppSelector((store) => store.file);

    useLoadFilesList(!filesList?.length);

    return <FilesList filesList={filesList} />;
};
