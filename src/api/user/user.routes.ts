import type { AxiosResponse } from 'axios';
import type { APIRoutes } from 'types/Routes.types';

import type { RegisterProps, RegisterResponse } from './register';
import type { LoginProps, LoginResponse } from './login';

export interface UserApi {
    register: (data: RegisterProps) => Promise<AxiosResponse<RegisterResponse, unknown> | undefined>;
    login: (data: LoginProps) => Promise<AxiosResponse<LoginResponse, unknown> | undefined>;
    getProfile: () => Promise<AxiosResponse<LoginResponse, unknown> | undefined>;
}

const REGISTER_PREFIX = 'register/' as const;
const LOGIN_PREFIX = 'login/' as const;
const USER_PREFIX = 'user/' as const;

export const USER_ROUTES: APIRoutes<UserApi> = {
    register: () => `${REGISTER_PREFIX}`,
    login: () => `${LOGIN_PREFIX}`,
    getProfile: () => `${USER_PREFIX}`,
};
