import React from 'react';
import type { LinkProps } from 'react-router-dom';

import type { ButtonProps } from './Button.types';
import { StyledButton, StyledLink } from './Button.style';

const ButtonLinkWrapper = ({
    children,
    isLink,
    href,
    isFullHeight,
    isFullWidth,
    ...props
}: { children: JSX.Element; isLink?: boolean; href?: string } & Partial<LinkProps> &
    Pick<ButtonProps, 'isFullHeight' | 'isFullWidth'>) =>
    isLink ? (
        <StyledLink {...props} fullheight={isFullHeight} fullwidth={isFullWidth} to={href ?? ''}>
            {children}
        </StyledLink>
    ) : (
        children
    );

export const Button = ({
    className,
    children,
    type = 'button',
    href,
    reloadDocument,
    replace,
    state,
    preventScrollReset,
    relative,
    target,
    buttonType,
    ...props
}: ButtonProps) => (
    <ButtonLinkWrapper
        isFullHeight={props.isFullHeight}
        isFullWidth={props.isFullWidth}
        isLink={!!href}
        href={href}
        reloadDocument={reloadDocument}
        replace={replace}
        state={state}
        preventScrollReset={preventScrollReset}
        relative={relative}
        target={target}
        className={href ? className : undefined}
    >
        <StyledButton className={href ? undefined : className} type={type} buttonType={buttonType} {...props}>
            {children}
        </StyledButton>
    </ButtonLinkWrapper>
);
