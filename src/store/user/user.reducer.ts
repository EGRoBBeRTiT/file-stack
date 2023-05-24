import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import type { AsyncState } from 'types/AsyncState.types';
import { handleAsyncActionFulfilled, handleAsyncActionPending, handleAsyncActionReject } from 'utils';
import type { Profile } from 'types/Profile';

import { registerAction, loginAction, USER_SLICE, getProfileAction, logoutAction } from './user.actions';

export interface UserState extends AsyncState {
    profile: Profile | undefined;
}

const initialState: UserState = {
    status: 'idle',
    profile: undefined,
};

export const userSlice = createSlice({
    name: USER_SLICE,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(isAnyOf(loginAction.fulfilled, getProfileAction.fulfilled), (state, { payload }) => {
            state.profile = payload;
        });

        builder.addMatcher(isAnyOf(logoutAction.fulfilled), (state) => {
            state.profile = undefined;
        });

        builder
            .addMatcher(
                isAnyOf(registerAction.pending, loginAction.pending, getProfileAction.pending, logoutAction.pending),
                handleAsyncActionPending,
            )
            .addMatcher(
                isAnyOf(
                    registerAction.fulfilled,
                    loginAction.fulfilled,
                    getProfileAction.fulfilled,
                    logoutAction.fulfilled,
                ),
                handleAsyncActionFulfilled,
            )
            .addMatcher(
                isAnyOf(
                    registerAction.rejected,
                    loginAction.rejected,
                    getProfileAction.rejected,
                    logoutAction.rejected,
                ),
                handleAsyncActionReject,
            );
    },
});

export default userSlice.reducer;
