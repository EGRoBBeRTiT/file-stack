import { Button } from 'components/Button';
import { Styles } from 'global/styles';
import styled from 'styled-components';

export const StyledProfilePage = styled.div`
    align-self: center;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 200px;
`;

export const StyledRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-start: ${Styles.CONTENT_PADDING};
`;

export const StyledButton = styled(Button)`
    margin-block-start: 50px;
`;
