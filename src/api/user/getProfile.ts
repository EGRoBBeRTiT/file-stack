import type { AxiosResponse } from 'axios';
import { axiosInstance } from 'api/axios';

import { USER_ROUTES } from './user.routes';

export interface GetProfileResponse {
    id: number;
    email: string;
    username: string;
}

export const getProfile = async (): Promise<AxiosResponse<GetProfileResponse, unknown> | undefined> => {
    const response = await axiosInstance.get<GetProfileResponse>(USER_ROUTES.getProfile());

    return response;
};
