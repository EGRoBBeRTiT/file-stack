import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import type { AsyncState } from 'types/AsyncState.types';
import { handleAsyncActionFulfilled, handleAsyncActionPending, handleAsyncActionReject } from 'utils';
import type { AppFile } from 'types/Files.types';

import { uploadFileAction, FILE_SLICE, deleteFileAction, getFilesListAction } from './file.actions';

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
        builder.addMatcher(isAnyOf(uploadFileAction.fulfilled), (state, { payload }) => {
            if (state.filesList && payload) {
                state.filesList[state.filesList.length] = payload;
            } else if (payload) {
                state.filesList = [payload];
            }
        });
        builder.addMatcher(isAnyOf(deleteFileAction.fulfilled), (state, { meta }) => {
            const { fileName } = meta.arg;

            state.filesList = state.filesList?.filter((file) => file.name !== fileName);
        });

        builder
            .addMatcher(
                isAnyOf(
                    uploadFileAction.pending,
                    deleteFileAction.pending,
                    getFilesListAction.pending,
                    deleteFileAction.pending,
                ),
                handleAsyncActionPending,
            )
            .addMatcher(
                isAnyOf(
                    uploadFileAction.fulfilled,
                    deleteFileAction.fulfilled,
                    getFilesListAction.fulfilled,
                    deleteFileAction.fulfilled,
                ),
                handleAsyncActionFulfilled,
            )
            .addMatcher(
                isAnyOf(
                    uploadFileAction.rejected,
                    deleteFileAction.rejected,
                    getFilesListAction.rejected,
                    deleteFileAction.rejected,
                ),
                handleAsyncActionReject,
            );
    },
});

export default fileSlice.reducer;
