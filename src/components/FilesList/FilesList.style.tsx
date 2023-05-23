import { FileButton } from 'components/FileButton';
import { Colors } from 'global/colors.style';
import { Include } from 'global/mixins.style';
import { Styles } from 'global/styles';
import styled from 'styled-components';

export const StylesFilesList = styled.div`
    width: 100%;
    background: ${Colors.BASE_0};
    border-radius: ${Styles.CONTAINER_BORDER_RADIUS};
    padding: ${Styles.CONTENT_PADDING};
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    ${Include.desktop} {
        box-shadow: 0px 0px 2px rgba(58, 66, 75, 0.1), 0px 2px 4px rgba(58, 66, 75, 0.2);
    }
`;

export const StyledButton = styled(FileButton)`
    margin-block-start: auto;
    margin-inline-start: auto;
`;
