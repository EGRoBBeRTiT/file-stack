import { axiosInstance } from 'api/axios';
import { FILE_ROUTES } from 'api/file/file.routes';
import type { AxiosResponse } from 'axios';

export interface UploadFileResponse {
    id: number;
    name: string;
    last_modified: string;
    size: number;
    hash: string;
}

export interface UploadFileProps {
    file: File;
    lastModified: string;
}

export const uploadFile = async ({
    file,
    lastModified,
}: UploadFileProps): Promise<AxiosResponse<UploadFileResponse, unknown> | undefined> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('last_modified', lastModified);

    const response = await axiosInstance.post<UploadFileResponse>(FILE_ROUTES.uploadFile(), formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response;
};
