import React, { useEffect, useState } from 'react';
import type { CSSProperties } from 'styled-components';
import { StyledModalContainer, StyledModalContent } from 'components/Modal/Modal.style';
import { createPortal } from 'react-dom';

import type { ModalProps } from './Modal.types';

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
    const [opened, setOpened] = useState(false);

    const [contentStyles, setContentStyles] = useState<CSSProperties | undefined>();

    useEffect(() => {
        if (isOpen) {
            setOpened(true);

            const timerId = setTimeout(() => {
                setContentStyles({ opacity: 1, transform: 'translateY(0)' });
            }, 0);

            return () => clearTimeout(timerId);
        }
        setContentStyles({ opacity: 0, transform: 'translateY(50px)' });

        const timerId = setTimeout(() => {
            setOpened(false);
        }, 200);

        return () => clearTimeout(timerId);
    }, [isOpen]);

    return createPortal(
        <StyledModalContainer isOpen={isOpen} onClick={onClose}>
            {opened && (
                <StyledModalContent onClick={(e) => e.stopPropagation()} style={contentStyles}>
                    {children}
                </StyledModalContent>
            )}
        </StyledModalContainer>,
        document.getElementById('root') as HTMLElement,
    );
};
