import React, { useEffect, useState } from 'react';
import type { CSSProperties } from 'styled-components';
import { createPortal } from 'react-dom';
import { Text } from 'components/Text';
import { Colors } from 'global/colors.style';

import { StyledToastContainer, StyledToastContent } from './Toast.style';
import type { ToastProps } from './Toast.types';

export const Toast = ({ children, isOpen, onClose }: ToastProps) => {
    const [opened, setOpened] = useState(false);

    const [contentStyles, setContentStyles] = useState<CSSProperties | undefined>();

    useEffect(() => {
        if (isOpen) {
            setOpened(true);

            const timerId = setTimeout(() => {
                setContentStyles({ transform: 'translateY(-24px)' });
            }, 20);

            const timerIdRemove = setTimeout(() => {
                onClose();
            }, 4000);

            return () => {
                clearTimeout(timerId);
                clearInterval(timerIdRemove);
            };
        }
        setContentStyles({ transform: 'translateY(100%)' });

        const timerId = setTimeout(() => {
            setOpened(false);
        }, 200);

        return () => {
            clearTimeout(timerId);
        };
    }, [isOpen, onClose]);

    return createPortal(
        <StyledToastContainer isOpen={isOpen}>
            {opened && (
                <StyledToastContent onClick={(e) => e.stopPropagation()} style={contentStyles}>
                    <Text type="label-1" color={Colors.PRIMARY}>
                        {children}
                    </Text>
                </StyledToastContent>
            )}
        </StyledToastContainer>,
        document.getElementById('root') as HTMLElement,
    );
};
