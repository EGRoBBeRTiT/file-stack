import React from 'react';
import { StyledText } from 'components/Text/Text.style';

import type { TextProps } from './Text.types';

export const Text = ({ children, as = 'div', ...props }: TextProps) => (
    <StyledText as={as} {...props}>
        {children}
    </StyledText>
);
