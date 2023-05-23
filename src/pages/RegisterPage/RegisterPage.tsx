import type { RegisterFormValues } from 'components/RegisterForm';
import { RegisterForm } from 'components/RegisterForm';
import React, { useCallback } from 'react';
import { useAppDispatch } from 'store';
import { registerAction } from 'store/user';

export const RegisterPage = () => {
    const dispatch = useAppDispatch();

    const handleRegisterSubmit = useCallback(
        ({ email, password, passwordRepeat, username }: RegisterFormValues) => {
            dispatch(
                registerAction({
                    email: email ?? '',
                    password: password ?? '',
                    passwordRepeat: passwordRepeat ?? '',
                    username: username ?? '',
                }),
            );
        },
        [dispatch],
    );

    return <RegisterForm onFormSubmit={handleRegisterSubmit} />;
};
