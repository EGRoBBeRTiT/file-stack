import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import type { AppState, AppThunk } from 'store';
import type { AsyncState } from 'types/AsyncState.types';
import { handleAsyncActionFulfilled, handleAsyncActionPending, handleAsyncActionReject } from 'utils';

import { testAsyncAction } from './example.actions';

export interface ExampleState extends AsyncState {
    value: number;
}

const initialState: ExampleState = {
    value: 0,
    status: 'idle',
};

export const exampleSlice = createSlice({
    name: 'EXAMPLE',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        testIncrement: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        testIncrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder.addMatcher(isAnyOf(testAsyncAction.fulfilled), (state, action) => {
            state.value += action.payload;
        });

        builder
            .addMatcher(isAnyOf(testAsyncAction.pending), handleAsyncActionPending)
            .addMatcher(isAnyOf(testAsyncAction.fulfilled), handleAsyncActionFulfilled)
            .addMatcher(isAnyOf(testAsyncAction.rejected), handleAsyncActionReject);
    },
});

export const { testIncrement, testIncrementByAmount } = exampleSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.example.value)`
export const testSelectCount = (state: AppState) => state.example.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
    (amount: number): AppThunk =>
    (dispatch, getState) => {
        const currentValue = testSelectCount(getState());

        if (currentValue % 2 === 1) {
            dispatch(testIncrementByAmount(amount));
        }
    };

export default exampleSlice.reducer;
