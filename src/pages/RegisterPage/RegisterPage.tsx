import type { RegisterFormValues } from 'components/RegisterForm';
import { RegisterForm } from 'components/RegisterForm';
import { useToast } from 'hooks/useToast';
import React, { useCallback } from 'react';
import { useAppDispatch } from 'store';
import { registerAction } from 'store/user';

export const RegisterPage = () => {
    const dispatch = useAppDispatch();
    const showToast = useToast();

    const handleRegisterSubmit = useCallback(
        ({ email, password, passwordRepeat, username }: RegisterFormValues) => {
            dispatch(
                registerAction({
                    email: email ?? '',
                    password: password ?? '',
                    passwordRepeat: passwordRepeat ?? '',
                    username: username ?? '',
                }),
            ).then(() => {
                showToast('Вы зарегистрировались!');
            });
        },
        [dispatch, showToast],
    );

    return <RegisterForm onFormSubmit={handleRegisterSubmit} />;
};
