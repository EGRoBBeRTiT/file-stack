import React from 'react';
import { IcLogoFull, IcUserRound } from 'assets';
import { Link } from 'react-router-dom';
import { appRoutes } from 'routes';

import { StyledAppHeader, StyledContent } from './AppHeader.style';

export const AppHeader = () => (
    <StyledAppHeader>
        <StyledContent>
            <Link to={appRoutes.main()}>
                <IcLogoFull />
            </Link>
            <Link to={appRoutes.profile()}>
                <IcUserRound />
            </Link>
        </StyledContent>
    </StyledAppHeader>
);
