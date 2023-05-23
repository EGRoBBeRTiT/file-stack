export interface RegisterFormValues {
    email?: string;
    password?: string;
    passwordRepeat?: string;
    username?: string;
}

export interface RegisterFormProps {
    className?: string;
    onFormSubmit: (values: RegisterFormValues) => void;
}
