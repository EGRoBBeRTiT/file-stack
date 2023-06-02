import React from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Colors } from 'global/colors.style';
import { PageLayout } from 'layouts/PageLayout';
import { AuthPage } from 'pages/AuthPage';
import { ErrorPage } from 'pages/ErrorPage';
import { FilesListPage } from 'pages/FilesListPage';
import { RegisterPage } from 'pages/RegisterPage';
import { appRoutes } from 'routes';
import { App } from 'App/App';
import { ProfilePage } from 'pages/ProfilePage';
import { ModelObject } from 'App/ModelObject';
import styled from 'styled-components';

const StyledPageLayout = styled(PageLayout)`
    max-width: 100vw;
`;

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />}>
            <Route
                path={appRoutes.root()}
                element={<Navigate to={appRoutes.main()} replace />}
                errorElement={<ErrorPage />}
            />
            <Route path={appRoutes.object()} element={<StyledPageLayout background={Colors.BASE_0} />}>
                <Route index element={<ModelObject />} />
            </Route>
            <Route path={appRoutes.main()} element={<PageLayout background={Colors.PRIMARY_PALE} />}>
                <Route index element={<FilesListPage />} />
            </Route>
            <Route path={appRoutes.auth()} element={<PageLayout background={Colors.BASE_0} />}>
                <Route path={appRoutes.login()} element={<AuthPage />} />
                <Route path={appRoutes.register()} index element={<RegisterPage />} />
                <Route path={appRoutes.profile()} index element={<ProfilePage />} />
            </Route>
        </Route>,
    ),
);
