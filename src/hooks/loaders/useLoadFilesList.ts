import { useIsLoggedIn } from 'hooks/useIsLoggedIn';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { getFilesListAction } from 'store/file';

export const useLoadFilesList = (shouldDo = true) => {
    const dispatch = useAppDispatch();
    const loggedIn = useIsLoggedIn();

    useEffect(() => {
        if (loggedIn && shouldDo) {
            dispatch(getFilesListAction());
        }
    }, [dispatch, loggedIn, shouldDo]);
};
