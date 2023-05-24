import type { RegisterFormValues } from 'components/RegisterForm';
import { RegisterForm } from 'components/RegisterForm';
import { useIsLoggedIn } from 'hooks/useIsLoggedIn';
import { useToast } from 'hooks/useToast';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from 'routes';
import { useAppDispatch } from 'store';
import { registerAction } from 'store/user';

export const RegisterPage = () => {
    const dispatch = useAppDispatch();
    const showToast = useToast();
    const loggedIn = useIsLoggedIn();
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            navigate(appRoutes.profile());
        }
    }, [loggedIn, navigate]);

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
                navigate(appRoutes.login());
                showToast('Вы зарегистрировались!');
            });
        },
        [dispatch, navigate, showToast],
    );

    return <RegisterForm onFormSubmit={handleRegisterSubmit} />;
};
