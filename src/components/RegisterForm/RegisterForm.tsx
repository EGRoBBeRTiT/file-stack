import React from 'react';
import { IcUser } from 'assets';
import { Text } from 'components/Text';
import { Colors } from 'global/colors.style';
import { Form } from 'react-final-form';
import { noop } from 'utils';
import { appRoutes } from 'routes';

import type { RegisterFormProps } from './RegisterForm.types';
import {
    StyledRegisterFormContainer,
    StyledButton,
    StyledForm,
    StyledInputField,
    StyledRegisterButton,
} from './RegisterForm.style';

export const RegisterForm = ({ className }: RegisterFormProps) => (
    <StyledRegisterFormContainer className={className}>
        <IcUser />
        <Text type="title-2" color={Colors.PRIMARY}>
            Регистрация
        </Text>
        <Form onSubmit={noop}>
            {({ handleSubmit }) => (
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInputField name="username" placeholder="Username" />
                    <StyledInputField name="email" placeholder="e-mail" type="email" autoComplete="email" />
                    <StyledInputField
                        name="password"
                        placeholder="Пароль"
                        type="password"
                        autoComplete="new-password"
                    />
                    <StyledInputField
                        name="passwordRepeat"
                        placeholder="Повторите пароль"
                        type="password"
                        autoComplete="new-password"
                    />
                    <StyledButton type="submit" isFullWidth>
                        <Text type="text-1">Зарегистрироваться</Text>
                    </StyledButton>
                    <StyledRegisterButton href={appRoutes.login()} buttonType="text-only">
                        <Text type="text-1">Войти</Text>
                    </StyledRegisterButton>
                </StyledForm>
            )}
        </Form>
    </StyledRegisterFormContainer>
);
