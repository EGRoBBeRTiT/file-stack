import { axiosInstance } from 'api/axios';
import { FILE_ROUTES } from 'api/file/file.routes';
import type { AxiosResponse } from 'axios';

export interface DownloadFileProps {
    fileName: string;
}

export const deleteFile = async ({
    fileName,
}: DownloadFileProps): Promise<AxiosResponse<undefined, unknown> | undefined> => {
    const response = await axiosInstance.delete(`${FILE_ROUTES.deleteFile()}?file_name=${fileName}`);

    return response;
};
