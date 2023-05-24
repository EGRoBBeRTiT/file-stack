import type { AxiosResponse } from 'axios';
import { axiosInstance } from 'api/axios';

import { USER_ROUTES } from './user.routes';

export interface GetProfileResponse {
    id: number;
    email: string;
    username: string;
}

export const logout = async (): Promise<AxiosResponse<undefined, unknown> | undefined> => {
    const response = await axiosInstance.post<undefined>(USER_ROUTES.logout());

    return response;
};
