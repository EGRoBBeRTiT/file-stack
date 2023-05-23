import type { InputProps } from 'components/Input/Input.types';
import type { FieldProps } from 'types/Form.types';

export type InputFieldProps<T extends string> = Omit<InputProps, keyof FieldProps<T>> &
    Omit<FieldProps<T>, 'children'> & {
        name: string;
    };
