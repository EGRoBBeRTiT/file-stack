import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { ErrorPage } from 'pages/ErrorPage';
import { appRoutes } from 'routes';
import { PageLayout } from 'layouts/PageLayout';
import { Colors } from 'global/colors.style';
import { FilesListPage } from 'pages/FilesListPage';

export const App = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path={appRoutes.root()}
                element={<Navigate to={appRoutes.main()} replace />}
                errorElement={<ErrorPage />}
            />
            <Route path={appRoutes.main()} element={<PageLayout background={Colors.PRIMARY_PALE} />}>
                <Route index element={<FilesListPage />} />
            </Route>
            <Route path={appRoutes.auth()} element={<PageLayout background={Colors.BASE_0} />}>
                <Route path={appRoutes.login()} element={<div>Login</div>} />
                <Route path={appRoutes.register()} index element={<div>Register</div>} />
            </Route>
        </>,
    ),
);
