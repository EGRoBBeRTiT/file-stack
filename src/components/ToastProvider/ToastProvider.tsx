import React, { useCallback, useState } from 'react';
import type { ReactNode } from 'react';
import { ToastContext } from 'components/ToastContext';
import { Toast } from 'components/Toast/Toast';

export const ToastProviderProvider = ({ children }: { children: ReactNode }) => {
    const [message, setMessage] = useState<string | undefined>();

    const [modalOpened, setOpenedModal] = useState(false);

    const handleOpenModal = useCallback((message?: string) => {
        setMessage(message);
        setOpenedModal(true);
    }, []);

    const handleModalClose = useCallback(() => {
        setOpenedModal(false);
    }, []);

    return (
        <ToastContext.Provider value={handleOpenModal}>
            <>
                {children}
                <Toast isOpen={modalOpened} onClose={handleModalClose}>
                    {message}
                </Toast>
            </>
        </ToastContext.Provider>
    );
};
