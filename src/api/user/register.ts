import { axiosInstance } from 'api/axios';
import type { AxiosResponse } from 'axios';

import { USER_ROUTES } from './user.routes';

export interface RegisterProps {
    email: string;
    username: string;
    password: string;
    passwordRepeat: string;
}

export interface RegisterResponse {
    id: number;
    email: string;
    username: string;
}

export const register = async (data: RegisterProps): Promise<AxiosResponse<RegisterResponse, unknown> | undefined> => {
    const response = await axiosInstance.post<RegisterResponse>(USER_ROUTES.register(), data);

    return response;
};
