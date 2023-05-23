import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import type { AsyncState } from 'types/AsyncState.types';
import { handleAsyncActionFulfilled, handleAsyncActionPending, handleAsyncActionReject } from 'utils';
import type { Profile } from 'types/Profile';

import { registerAction, loginAction, USER_SLICE, getProfileAction } from './user.actions';

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
        builder.addMatcher(
            isAnyOf(registerAction.fulfilled, loginAction.fulfilled, getProfileAction.fulfilled),
            (state, { payload }) => {
                state.profile = payload;
            },
        );

        builder
            .addMatcher(
                isAnyOf(registerAction.pending, loginAction.pending, getProfileAction.pending),
                handleAsyncActionPending,
            )
            .addMatcher(
                isAnyOf(registerAction.fulfilled, loginAction.fulfilled, getProfileAction.fulfilled),
                handleAsyncActionFulfilled,
            )
            .addMatcher(
                isAnyOf(registerAction.rejected, loginAction.rejected, getProfileAction.rejected),
                handleAsyncActionReject,
            );
    },
});

export default userSlice.reducer;
