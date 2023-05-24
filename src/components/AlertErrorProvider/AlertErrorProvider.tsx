import React, { useCallback, useState } from 'react';
import { AlertErrorContext } from 'components/AlertErrorContext';
import type { ReactNode } from 'react';
import { Modal } from 'components/Modal';
import { Text } from 'components/Text';
import { Colors } from 'global/colors.style';
import { Button } from 'components/Button';

import { ErrorText, StyledButtons, StyledModalContent } from './AlertErrorProvider.style';

export const AlertErrorProvider = ({ children }: { children: ReactNode }) => {
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
        <AlertErrorContext.Provider value={handleOpenModal}>
            <>
                {children}
                <Modal isOpen={modalOpened} onClose={handleModalClose}>
                    <StyledModalContent>
                        <Text type="title-1" color={Colors.DANGER}>
                            Ошибка!
                        </Text>
                        <ErrorText type="label-1" color={Colors.DANGER}>
                            {message}
                        </ErrorText>
                        <StyledButtons>
                            <Button buttonType="outlined" onClick={handleModalClose}>
                                OK
                            </Button>
                        </StyledButtons>
                    </StyledModalContent>
                </Modal>
            </>
        </AlertErrorContext.Provider>
    );
};
