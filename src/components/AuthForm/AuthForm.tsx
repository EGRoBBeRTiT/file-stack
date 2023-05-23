import React from 'react';
import { IcUser } from 'assets';
import { Text } from 'components/Text';
import { Colors } from 'global/colors.style';
import { Form } from 'react-final-form';
import { appRoutes } from 'routes';

import type { AuthFormProps, AuthFormValues } from './AuthForm.types';
import {
    StyledAuthFormContainer,
    StyledButton,
    StyledForm,
    StyledInputField,
    StyledRegisterButton,
} from './AuthForm.style';

export const AuthForm = ({ className, onFormSubmit }: AuthFormProps) => (
    <StyledAuthFormContainer className={className}>
        <IcUser />
        <Text type="title-2" color={Colors.PRIMARY}>
            Авторизация
        </Text>
        <Form<AuthFormValues> onSubmit={onFormSubmit}>
            {({ handleSubmit }) => (
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInputField name="email" placeholder="e-mail" type="email" autoComplete="email" />
                    <StyledInputField name="password" type="password" placeholder="Пароль" />
                    <StyledButton type="submit" isFullWidth>
                        <Text type="text-1">Войти</Text>
                    </StyledButton>
                    <StyledRegisterButton href={appRoutes.register()} buttonType="text-only">
                        <Text type="text-1">Зарегистрироваться</Text>
                    </StyledRegisterButton>
                </StyledForm>
            )}
        </Form>
    </StyledAuthFormContainer>
);
