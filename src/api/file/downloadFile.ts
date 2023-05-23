import { axiosInstance } from 'api/axios';
import { FILE_ROUTES } from 'api/file/file.routes';
import type { AxiosResponse } from 'axios';

export interface DownloadFileProps {
    fileName: string;
}

export const downloadFile = async ({
    fileName,
}: DownloadFileProps): Promise<AxiosResponse<string, unknown> | undefined> => {
    const response = await axiosInstance.get<string>(`${FILE_ROUTES.downloadFile()}?file_name=${fileName}`);

    return response;
};
