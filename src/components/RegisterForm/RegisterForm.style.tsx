import { Button } from 'components/Button';
import { InputField } from 'components/Fields/InputField';
import { Colors } from 'global/colors.style';
import { Styles } from 'global/styles';
import styled from 'styled-components';

export const StyledRegisterFormContainer = styled.div`
    border-radius: ${Styles.CONTAINER_BORDER_RADIUS};
    background: ${Colors.PRIMARY_PALE};
    height: fit-content;

    padding: 74px 56px 18px;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 512px;

    margin: auto;
`;

export const StyledInputField = styled(InputField)`
    margin-block-start: 16px;

    &:first-of-type {
        margin-block-start: 20px;
    }
`;

export const StyledButton = styled(Button)`
    margin-block-start: 32px;
`;

export const StyledRegisterButton = styled(Button)`
    margin-block-start: 16px;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;
