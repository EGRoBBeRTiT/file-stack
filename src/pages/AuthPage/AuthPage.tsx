import type { AuthFormValues } from 'components/AuthForm';
import { AuthForm } from 'components/AuthForm';
import { useErrorAlert } from 'hooks/useErrorAlert';
import { useIsLoggedIn } from 'hooks/useIsLoggedIn';
import { useToast } from 'hooks/useToast';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from 'routes';
import { useAppDispatch } from 'store';
import { loginAction } from 'store/user';

export const AuthPage = () => {
    const dispatch = useAppDispatch();
    const showToast = useToast();
    const alertError = useErrorAlert();
    const navigate = useNavigate();

    const loggedIn = useIsLoggedIn();

    useEffect(() => {
        if (loggedIn) {
            navigate(appRoutes.profile());
        }
    }, [loggedIn, navigate]);

    const handleAuthSubmit = useCallback(
        ({ email, password }: AuthFormValues) => {
            dispatch(loginAction({ email: email ?? '', password: password ?? '' }))
                .then(() => {
                    showToast('Вход успешно выполнен');
                })
                .catch(alertError);
        },
        [alertError, dispatch, showToast],
    );

    return <AuthForm onFormSubmit={handleAuthSubmit} />;
};
