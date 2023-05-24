import type { ReactNode } from 'react';

export interface ToastProps {
    children: ReactNode;
    className?: string;
    onClose: () => void;
    isOpen: boolean;
}
