import { ToastContext } from 'components/ToastContext';
import { useContext } from 'react';

export const useToast = () => useContext(ToastContext);
