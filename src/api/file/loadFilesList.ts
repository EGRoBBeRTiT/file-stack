import { axiosInstance } from 'api/axios';
import { FILE_ROUTES } from 'api/file/file.routes';
import type { UploadFileResponse } from 'api/file/uploadFile';
import type { AxiosResponse } from 'axios';

export const loadFilesList = async (): Promise<AxiosResponse<UploadFileResponse[], unknown> | undefined> => {
    const response = await axiosInstance.get<UploadFileResponse[]>(FILE_ROUTES.loadFilesList());

    return response;
};
