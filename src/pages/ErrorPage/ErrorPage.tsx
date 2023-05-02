import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Button } from 'components/Button';
import { appRoutes } from 'routes';
import { Colors } from 'global/colors.style';

import { StyledErrorPage } from './ErrorPage.style';

export const ErrorPage = () => {
    const error = useRouteError() as { statusText?: string; message?: string };

    return (
        <StyledErrorPage id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
            <Button href={appRoutes.main()} replace buttonType="text-only" color={Colors.PRIMARY}>
                Go Home
            </Button>
        </StyledErrorPage>
    );
};
