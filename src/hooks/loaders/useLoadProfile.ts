import { useIsLoggedIn } from 'hooks/useIsLoggedIn';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { getProfileAction } from 'store/user';

export const useLoadProfile = (shouldDo = true) => {
    const dispatch = useAppDispatch();
    const loggedIn = useIsLoggedIn();

    useEffect(() => {
        if (!loggedIn && shouldDo) {
            dispatch(getProfileAction());
        }
    }, [dispatch, loggedIn, shouldDo]);
};
