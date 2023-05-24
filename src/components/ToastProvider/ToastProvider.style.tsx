import { Text } from 'components/Text';
import { Colors } from 'global/colors.style';
import { Styles } from 'global/styles';
import styled from 'styled-components';

export const StyledModalContent = styled.div`
    background: ${Colors.BASE_0};
    border-radius: ${Styles.CONTAINER_BORDER_RADIUS};
    padding: ${Styles.ELEMENT_MAIN_PADDING};
    max-width: 400px;
`;

export const StyledButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-block-start: ${Styles.CONTENT_PADDING};
`;

export const ErrorText = styled(Text)`
    margin-block-start: ${Styles.ELEMENT_SMALL_PADDING};
`;
