import styled, { css } from 'styled-components';
import { Colors } from 'global/colors.style';
import { darken, lighten } from 'polished';
import { Link } from 'react-router-dom';
import { Styles } from 'global/styles';

import type { ButtonProps } from './Button.types';

export const StyledLink = styled(Link)<{ fullwidth?: boolean; fullheight?: boolean }>`
    width: 100%;

    width: ${({ fullwidth }) => (fullwidth ? '100%' : 'fit-content')};
    height: ${({ fullheight }) => (fullheight ? '100%' : 'fit-content')};
`;

export const StyledButton = styled.button<Pick<ButtonProps, 'buttonType' | 'isFullHeight' | 'isFullWidth' | 'color'>>`
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'fit-content')};
    height: ${({ isFullHeight }) => (isFullHeight ? '100%' : '48px')};

    padding-inline: 18px;

    &,
    * {
        transition: all 120ms linear;
    }

    ${({ buttonType, color }) => {
        switch (buttonType) {
            case 'danger':
                return css`
                    background: ${Colors.DANGER};
                    border: none;

                    &,
                    * {
                        color: ${Colors.BASE_0} !important;
                    }

                    border-radius: ${Styles.ELEMENT_BORDER_RADIUS};

                    &:hover {
                        background: ${lighten(0.1, Colors.DANGER)};
                    }

                    &:active {
                        background: ${darken(0.1, Colors.DANGER)};
                    }
                `;
            case 'danger-outlined':
                return css`
                    background: none;
                    border: 1px solid ${Colors.DANGER};

                    &,
                    * {
                        color: ${Colors.DANGER} !important;
                    }

                    border-radius: ${Styles.ELEMENT_BORDER_RADIUS};

                    &:hover {
                        background: ${Colors.DANGER};
                        &,
                        * {
                            color: ${Colors.BASE_0} !important;
                        }
                    }

                    &:active {
                        background: ${darken(0.1, Colors.DANGER)};
                        &,
                        * {
                            color: ${Colors.BASE_0} !important;
                        }
                    }
                `;
            case 'outlined':
                return css`
                    background: none;
                    border: 1px solid ${Colors.PRIMARY};

                    border-radius: ${Styles.ELEMENT_BORDER_RADIUS};

                    &,
                    * {
                        color: ${Colors.PRIMARY} !important;
                    }

                    &:hover {
                        background: ${Colors.PRIMARY};
                        &,
                        * {
                            color: ${Colors.BASE_0} !important;
                        }
                    }

                    &:active {
                        background: ${darken(0.1, Colors.PRIMARY)};
                        &,
                        * {
                            color: ${Colors.BASE_0} !important;
                        }
                    }
                `;

            case 'text-only':
                return css`
                    background: none;
                    border: none;
                    padding: 0;
                    height: fit-content;
                    width: fit-content;

                    &,
                    * {
                        color: ${color ?? Colors.PRIMARY} !important;
                    }

                    &:hover {
                        &,
                        * {
                            color: ${lighten(0.1, color ?? Colors.PRIMARY)} !important;
                        }
                    }

                    &:active {
                        &,
                        * {
                            color: ${darken(0.1, color ?? Colors.PRIMARY)} !important;
                        }
                    }
                `;
            case 'primary':
            default:
                return css`
                    background: ${Colors.PRIMARY};
                    border: none;

                    border-radius: ${Styles.ELEMENT_BORDER_RADIUS};

                    &:hover {
                        background: ${lighten(0.05, Colors.PRIMARY)} !important;
                    }

                    &:active {
                        background: ${darken(0.1, Colors.PRIMARY)} !important;
                    }

                    &,
                    * {
                        color: ${Colors.BASE_0} !important;
                    }
                `;
        }
    }}
`;
