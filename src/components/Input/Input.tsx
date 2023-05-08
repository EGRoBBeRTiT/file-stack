import React from 'react';

import type { InputProps } from './Input.types';
import { StyledInput } from './Input.style';

export const Input = ({ ...props }: InputProps) => <StyledInput {...props} />;
