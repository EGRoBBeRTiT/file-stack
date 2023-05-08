import React from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from 'routes';

import { StyledAppHeader, StyledContent, StyledIcLogoFull, StyledIcUserRound } from './AppHeader.style';

export const AppHeader = () => (
    <StyledAppHeader>
        <StyledContent>
            <Link to={appRoutes.main()}>
                <StyledIcLogoFull />
            </Link>
            <Link to={appRoutes.profile()}>
                <StyledIcUserRound />
            </Link>
        </StyledContent>
    </StyledAppHeader>
);
