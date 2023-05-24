import { createContext } from 'react';
import { noop } from 'utils';

export const AlertErrorContext = createContext<(message?: string) => void>(noop);
