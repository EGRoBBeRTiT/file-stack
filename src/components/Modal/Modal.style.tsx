import styled, { css } from 'styled-components';

export const StyledModalContent = styled.div`
    opacity: 0;
    transform: translateY(50px);
    transition: all 200ms;
    transform: translate3d(0, 0, 0);
    min-width: 400px;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const StyledModalContainer = styled.div<{ isOpen: boolean }>`
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    background: none;

    transition: visibility 200ms, background 200ms;

    ${({ isOpen }) =>
        !isOpen
            ? css`
                  visibility: hidden;
              `
            : css`
                  background: rgba(0, 0, 0, 0.3);
              `}
`;
