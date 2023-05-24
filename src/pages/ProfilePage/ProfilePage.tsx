import { IcUser } from 'assets';
import { Text } from 'components/Text';
import { Colors } from 'global/colors.style';
import { useIsLoggedIn } from 'hooks/useIsLoggedIn';
import { StyledProfilePage, StyledRow } from 'pages/ProfilePage/ProfilePage.style';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from 'routes';
import { useAppDispatch, useAppSelector } from 'store';
import { logoutAction } from 'store/user';
import { useErrorAlert } from 'hooks/useErrorAlert';

import { StyledButton } from './ProfilePage.style';

export const ProfilePage = () => {
    const navigate = useNavigate();
    const loggedIn = useIsLoggedIn();
    const dispatch = useAppDispatch();
    const alertError = useErrorAlert();

    const { profile } = useAppSelector((state) => state.user);

    useEffect(() => {
        if (!loggedIn) {
            navigate(appRoutes.login());
        }
    }, [loggedIn, navigate]);

    const handleLogout = useCallback(() => {
        dispatch(logoutAction()).catch(alertError);
    }, [alertError, dispatch]);

    return (
        <StyledProfilePage>
            <IcUser />
            <StyledRow>
                <Text type="text-1" color={Colors.BASE_80}>
                    E-mail:
                </Text>
                <Text type="label-1">{profile?.email}</Text>
            </StyledRow>
            <StyledRow>
                <Text type="text-1" color={Colors.BASE_80}>
                    Username:
                </Text>
                <Text type="label-1">{profile?.username}</Text>
            </StyledRow>
            <StyledButton isFullWidth onClick={handleLogout}>
                Выйти
            </StyledButton>
        </StyledProfilePage>
    );
};
