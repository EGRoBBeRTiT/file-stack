import { Colors } from 'global/colors.style';
import { Styles } from 'global/styles';
import styled, { css } from 'styled-components';

export const StyledToastContent = styled.div`
    transform: translateY(100%);
    transition: all 200ms;

    width: 500px;
    border-radius: ${Styles.ELEMENT_BORDER_RADIUS};
    background: ${Colors.BASE_10};
    padding: ${Styles.ELEMENT_MAIN_PADDING};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const StyledToastContainer = styled.div<{ isOpen: boolean }>`
    z-index: 9999;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: none;

    ${({ isOpen }) =>
        !isOpen &&
        css`
            visibility: hidden;
        `}
`;
