import type { ReactNode } from 'react';

export interface ModalProps {
    children: ReactNode;
    className?: string;
    onClose: () => void;
    isOpen: boolean;
}
