import { axiosInstance } from 'api/axios';
import type { AxiosResponse } from 'axios';

import { USER_ROUTES } from './user.routes';

export interface LoginProps {
    email: string;
    password: string;
}

export interface LoginResponse {
    id: number;
    email: string;
    username: string;
}

export const login = async (data: LoginProps): Promise<AxiosResponse<LoginResponse, unknown> | undefined> => {
    const response = await axiosInstance.post<LoginResponse>(USER_ROUTES.login(), data);

    return response;
};
