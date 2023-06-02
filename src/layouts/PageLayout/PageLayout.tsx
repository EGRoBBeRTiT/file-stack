import { AppHeader } from 'components/AppHeader';
import React from 'react';
import { Outlet } from 'react-router-dom';

import type { PageLayoutProps } from './PageLayout.types';
import { StyledContent, StyledPageLayout } from './PageLayout.style';

export const PageLayout = ({ background, className }: PageLayoutProps) => (
    <StyledPageLayout background={background}>
        <AppHeader />
        <StyledContent className={className}>
            <Outlet />
        </StyledContent>
    </StyledPageLayout>
);
