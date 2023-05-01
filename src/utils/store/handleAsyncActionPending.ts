import type { WritableDraft } from 'immer/dist/internal';
import type { AsyncState } from 'types/AsyncState.types';

export const handleAsyncActionPending = (state: WritableDraft<AsyncState>) => {
    state.error = undefined;
    state.status = 'pending';
};
