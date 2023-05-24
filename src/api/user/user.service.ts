import { getProfile } from 'api/user/getProfile';

import type { LoginProps } from './login';
import { login } from './login';
import type { UserApi } from './user.routes';
import type { RegisterProps } from './register';
import { register } from './register';
import { logout } from './logout';

class UserService implements UserApi {
    register = (data: RegisterProps) => register(data);

    login = (data: LoginProps) => login(data);

    getProfile = () => getProfile();

    logout = () => logout();
}

export const userService = new UserService();
