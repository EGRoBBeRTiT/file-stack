import type { AppState } from 'store';

export const isLoggedIn = (state: AppState) => !!state.user.profile;
