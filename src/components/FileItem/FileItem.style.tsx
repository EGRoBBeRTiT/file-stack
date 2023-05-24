import { FileIcon } from 'components/FileIcon';
import { Text } from 'components/Text';
import { Colors } from 'global/colors.style';
import { Include } from 'global/mixins.style';
import { Styles } from 'global/styles';
import styled from 'styled-components';

export const StyledActionButtons = styled.div`
    width: 96px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: ${Styles.ELEMENT_SMALL_PADDING};
`;

export const StyledFileItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px ${Styles.ELEMENT_MAIN_PADDING};
    min-height: 48px;
    cursor: pointer;

    border: 2px solid transparent;
    transition: border-color 100ms linear;
    transition: background-color 100ms linear;

    &:not(:hover) {
        ${StyledActionButtons} {
            svg {
                display: none;
            }
        }
    }

    &:hover {
        border-color: ${Colors.PRIMARY};
    }

    &:active {
        background-color: ${Colors.PRIMARY_PALE};
    }
`;

export const StyledFileIcon = styled(FileIcon)`
    width: fit-content;
    height: 28px;
`;

export const StyledFileNameText = styled(Text)`
    margin-inline-start: ${Styles.ELEMENT_SMALL_PADDING};

    ${Include.cut_for_n_rows()}
`;

export const StyledSizeText = styled(Text)`
    margin-inline-start: auto;
    min-width: 160px;
`;

export const StyledDateText = styled(Text)`
    min-width: 120px;
    text-align: end;
`;

export const StyledIconButton = styled.button`
    all: unset;

    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 100ms linear;

    border-radius: ${Styles.ELEMENT_BORDER_RADIUS};

    &:hover {
        background: ${Colors.PRIMARY_PALE};
    }
`;
