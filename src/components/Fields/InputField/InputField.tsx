import { Input } from 'components/Input';
import React from 'react';
import { Field } from 'react-final-form';

import type { InputFieldProps } from './InputField.types';

export const InputField = (props: InputFieldProps<string>) => (
    <Field<string> {...props}>{({ input }) => <Input {...props} {...input} />}</Field>
);
