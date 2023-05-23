import { axiosInstance } from 'api/axios';
import { FILE_ROUTES } from 'api/file/file.routes';
import type { AxiosResponse } from 'axios';
import type { AppFile } from 'types/Files.types';

export const loadFilesList = async (): Promise<AxiosResponse<AppFile[], unknown> | undefined> => {
    const response = await axiosInstance.get<AppFile[]>(FILE_ROUTES.loadFilesList());

    return response;
};
