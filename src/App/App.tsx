import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLoadProfile } from 'hooks/loaders/useLoadProfile';

export const App = () => {
    useLoadProfile();

    return <Outlet />;
};
