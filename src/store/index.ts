import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import exampleReducer from 'store/example/example.reducer';
import { throwMiddleware } from 'utils';

export const makeStore = () =>
    configureStore({
        reducer: { example: exampleReducer },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(throwMiddleware),
    });

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export type AsyncThunkConfig = {
    /** return type for `thunkApi.getState` */
    state: AppState;
    /** type for `thunkApi.dispatch` */
    dispatch: AppDispatch;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
