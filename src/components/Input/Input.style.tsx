import { Colors } from 'global/colors.style';
import { Include } from 'global/mixins.style';
import { Styles } from 'global/styles';
import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const StyledInput = styled.input`
    --input-border-radius: 8px;
    --input-padding-inline: 10px;

    all: unset;

    height: ${Styles.INPUT_HEIGHT};
    width: 100%;
    border-radius: var(--input-border-radius);
    border: 2px solid ${Colors.PRIMARY_PALE};
    padding-inline: var(--input-padding-inline);
    transition: all 140ms;
    box-sizing: border-box;

    ${Include.font.text_1()}

    &:hover {
        border: 2px solid ${lighten(0.2, Colors.PRIMARY)};
    }

    &:active {
        border: 2px solid ${darken(0.1, Colors.PRIMARY)};
    }

    &:focus {
        border: 2px solid ${Colors.PRIMARY};
    }

    &::placeholder {
        color: ${Colors.BASE_70};
    }
`;
