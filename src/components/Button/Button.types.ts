import type { Colors } from 'global/colors.style';
import type { ReactNode } from 'react';
import type { LinkProps } from 'react-router-dom';

export interface ButtonProps
    extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>,
        Pick<LinkProps, 'reloadDocument' | 'replace' | 'state' | 'preventScrollReset' | 'relative' | 'target'> {
    children: ReactNode;
    href?: string;
    isFullWidth?: boolean;
    isFullHeight?: boolean;
    buttonType?: 'primary' | 'outlined' | 'danger' | 'text-only' | 'danger-outlined';
    color?: Colors;
}
