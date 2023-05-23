import type { AuthFormValues } from 'components/AuthForm';
import { AuthForm } from 'components/AuthForm';
import React, { useCallback } from 'react';
import { useAppDispatch } from 'store';
import { loginAction } from 'store/user';

export const AuthPage = () => {
    const dispatch = useAppDispatch();

    const handleAuthSubmit = useCallback(
        ({ email, password }: AuthFormValues) => {
            dispatch(loginAction({ email: email ?? '', password: password ?? '' }));
        },
        [dispatch],
    );

    return <AuthForm onFormSubmit={handleAuthSubmit} />;
};
