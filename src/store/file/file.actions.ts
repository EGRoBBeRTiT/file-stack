import { createAsyncThunk } from '@reduxjs/toolkit';
import type { DownloadFileProps } from 'api/file/downloadFile';
import { fileService } from 'api/file/file.service';
import type { UploadFileProps } from 'api/file/uploadFile';
import type { AsyncThunkConfig } from 'store';
import type { AppFile } from 'types/Files.types';

export const FILE_SLICE = 'FILE';

export const uploadFileAction = createAsyncThunk<AppFile | undefined, UploadFileProps, AsyncThunkConfig>(
    `${FILE_SLICE}/UPLOAD_FILE`,
    async (data) => {
        const response = await fileService.uploadFile(data);

        if (response?.data) {
            return { ...response?.data, lastModified: response?.data.last_modified ?? '' };
        }
    },
);

export const downloadFileAction = createAsyncThunk<string | undefined, DownloadFileProps, AsyncThunkConfig>(
    `${FILE_SLICE}/DOWNLOAD_FILE`,
    async (data) => {
        const response = await fileService.downloadFile(data);

        return response?.data;
    },
);

export const getFilesListAction = createAsyncThunk<AppFile[] | undefined, undefined, AsyncThunkConfig>(
    `${FILE_SLICE}/GET_FILES_LIST`,
    async () => {
        const response = await fileService.loadFilesList();

        return response?.data.map(({ last_modified: lastModified, ...file }) => ({
            ...file,
            lastModified,
        }));
    },
);

export const deleteFileAction = createAsyncThunk<undefined, DownloadFileProps, AsyncThunkConfig>(
    `${FILE_SLICE}/DELETE_FILE`,
    async (data) => {
        const response = await fileService.deleteFile(data);

        return response?.data;
    },
);
