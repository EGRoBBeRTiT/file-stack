import React from 'react';
import { useRouteError } from 'react-router-dom';

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
        </StyledErrorPage>
    );
};
