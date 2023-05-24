import { createContext } from 'react';
import { noop } from 'utils';

export const ToastContext = createContext<(message?: string) => void>(noop);
