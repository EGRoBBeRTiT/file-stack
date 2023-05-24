import type { DownloadFileProps } from 'api/file/downloadFile';
import type { UploadFileProps, UploadFileResponse } from 'api/file/uploadFile';
import type { AxiosResponse } from 'axios';
import type { APIRoutes } from 'types/Routes.types';

export interface FileApi {
    uploadFile: (data: UploadFileProps) => Promise<AxiosResponse<UploadFileResponse, unknown> | undefined>;
    downloadFile: (data: DownloadFileProps) => Promise<AxiosResponse<string, unknown> | undefined>;
    loadFilesList: () => Promise<AxiosResponse<UploadFileResponse[], unknown> | undefined>;
    deleteFile: (data: DownloadFileProps) => Promise<AxiosResponse<undefined, unknown> | undefined>;
}

const POST_FILE_PREFIX = 'post_file/' as const;
const DOWNLOAD_FILE_PREFIX = 'get_file/' as const;
const LOAD_FILES_LIST_PREFIX = 'list_files/' as const;
const DELETE_FILE_LIST_PREFIX = 'remove_file/' as const;

export const FILE_ROUTES: APIRoutes<FileApi> = {
    uploadFile: () => `${POST_FILE_PREFIX}`,
    downloadFile: () => `${DOWNLOAD_FILE_PREFIX}`,
    loadFilesList: () => `${LOAD_FILES_LIST_PREFIX}`,
    deleteFile: () => `${DELETE_FILE_LIST_PREFIX}`,
};
