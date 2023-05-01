import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import type { WritableDraft } from 'immer/dist/internal';
import type { AsyncState } from 'types/AsyncState.types';

export const handleAsyncActionReject = (
    state: WritableDraft<AsyncState>,
    action: PayloadAction<
        unknown,
        string,
        {
            arg: unknown;
            requestId: string;
            requestStatus: 'rejected';
            aborted: boolean;
            condition: boolean;
        },
        SerializedError
    >,
) => {
    state.status = 'rejected';
    state.error = action.error.message;

    // eslint-disable-next-line no-console
    console.error(`at ${action.type}`, action.error);
};
