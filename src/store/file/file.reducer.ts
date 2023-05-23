import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import type { AsyncState } from 'types/AsyncState.types';
import { handleAsyncActionFulfilled, handleAsyncActionPending, handleAsyncActionReject } from 'utils';
import type { AppFile } from 'types/Files.types';

import { uploadFileAction, FILE_SLICE, downloadFileAction, getFilesListAction } from './file.actions';

export interface FileState extends AsyncState {
    filesList: AppFile[] | undefined;
}

const initialState: FileState = {
    status: 'idle',
    filesList: undefined,
};

export const fileSlice = createSlice({
    name: FILE_SLICE,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(isAnyOf(getFilesListAction.fulfilled), (state, { payload }) => {
            state.filesList = payload;
        });

        builder
            .addMatcher(
                isAnyOf(uploadFileAction.pending, downloadFileAction.pending, getFilesListAction.pending),
                handleAsyncActionPending,
            )
            .addMatcher(
                isAnyOf(uploadFileAction.fulfilled, downloadFileAction.fulfilled, getFilesListAction.fulfilled),
                handleAsyncActionFulfilled,
            )
            .addMatcher(
                isAnyOf(uploadFileAction.rejected, downloadFileAction.rejected, getFilesListAction.rejected),
                handleAsyncActionReject,
            );
    },
});

export default fileSlice.reducer;
