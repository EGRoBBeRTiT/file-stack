import { Button } from 'components/Button';
import { Colors } from 'global/colors.style';
import { CONTENT_PADDING } from 'global/styles';
import styled from 'styled-components';

export const StylesFilesList = styled.div`
    width: 100%;
    background: ${Colors.BASE_0};
    border-radius: 16px;
    box-shadow: 0px 0px 2px rgba(58, 66, 75, 0.1), 0px 2px 4px rgba(58, 66, 75, 0.2);
    padding: ${CONTENT_PADDING}px;
    display: flex;
`;

export const StyledButton = styled(Button)`
    margin-block-start: auto;
    margin-inline-start: auto;
`;
