import { useAppSelector } from 'store';
import { isLoggedIn } from 'store/user/user.selectors';

export const useIsLoggedIn = () => useAppSelector(isLoggedIn);
