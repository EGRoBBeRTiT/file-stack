import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GetProfileResponse } from 'api/user/getProfile';
import type { LoginProps, LoginResponse } from 'api/user/login';
import type { RegisterProps, RegisterResponse } from 'api/user/register';
import { userService } from 'api/user/user.service';
import type { AsyncThunkConfig } from 'store';
import { resetFileState } from 'store/file';

export const USER_SLICE = 'USER';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are

// typically used to make async requests.
export const registerAction = createAsyncThunk<RegisterResponse | undefined, RegisterProps, AsyncThunkConfig>(
    `${USER_SLICE}/REGISTER`,
    async (data) => {
        const response = await userService.register(data);

        return response?.data;
    },
);

export const loginAction = createAsyncThunk<LoginResponse | undefined, LoginProps, AsyncThunkConfig>(
    `${USER_SLICE}/LOGIN`,
    async (data) => {
        const response = await userService.login(data);

        return response?.data;
    },
);

export const getProfileAction = createAsyncThunk<GetProfileResponse | undefined, undefined, AsyncThunkConfig>(
    `${USER_SLICE}/GET_PROFILE`,
    async () => {
        const response = await userService.getProfile();

        return response?.data;
    },
);

export const logoutAction = createAsyncThunk<undefined, undefined, AsyncThunkConfig>(
    `${USER_SLICE}/LOGOUT`,
    async (_, { dispatch }) => {
        const response = await userService.logout();

        dispatch(resetFileState());

        return response?.data;
    },
);
