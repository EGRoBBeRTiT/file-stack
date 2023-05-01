import type { Middleware, PayloadAction, SerializedError } from '@reduxjs/toolkit';

export const throwMiddleware: Middleware =
    () =>
    (next) =>
    (
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
        next(action);

        if (action?.error) {
            throw action.error.message;
        }
    };
