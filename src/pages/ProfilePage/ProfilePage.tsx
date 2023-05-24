import { IcUser } from 'assets';
import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { useIsLoggedIn } from 'hooks/useIsLoggedIn';
import { StyledProfilePage, StyledRow } from 'pages/ProfilePage/ProfilePage.style';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from 'routes';
import { useAppSelector } from 'store';

export const ProfilePage = () => {
    const navigate = useNavigate();
    const loggedIn = useIsLoggedIn();

    const { profile } = useAppSelector((state) => state.user);

    useEffect(() => {
        if (!loggedIn) {
            navigate(appRoutes.login());
        }
    }, [loggedIn, navigate]);

    return (
        <StyledProfilePage>
            <IcUser />
            <StyledRow>
                <Text type="label-1">E-mail</Text>
                <Text type="label-1">{profile?.email}</Text>
            </StyledRow>
            <Button>Выйти</Button>
        </StyledProfilePage>
    );
};
