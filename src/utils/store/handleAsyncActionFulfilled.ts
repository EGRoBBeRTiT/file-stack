import type { WritableDraft } from 'immer/dist/internal';
import type { AsyncState } from 'types/AsyncState.types';

export const handleAsyncActionFulfilled = (state: WritableDraft<AsyncState>) => {
    state.status = 'fulfilled';
    state.error = undefined;
};
