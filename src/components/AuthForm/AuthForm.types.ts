export interface AuthFormValues {
    email?: string;
    password?: string;
}

export interface AuthFormProps {
    className?: string;
    onFormSubmit: (values: AuthFormValues) => void;
}
