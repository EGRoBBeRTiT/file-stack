import { FileButton } from 'components/FileButton';
import { FileItem } from 'components/FileItem';
import { Text } from 'components/Text';
import { Colors } from 'global/colors.style';
import { Include } from 'global/mixins.style';
import { Styles } from 'global/styles';
import styled from 'styled-components';

export const StylesFilesListContainer = styled.div`
    width: 100%;
    background: ${Colors.BASE_0};
    border-radius: ${Styles.CONTAINER_BORDER_RADIUS};
    padding: ${Styles.CONTENT_PADDING};
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    max-height: calc(100vh - ${Styles.MAX_HEADER_HEIGHT} - 2 * ${Styles.CONTENT_PADDING});

    ${Include.desktop} {
        box-shadow: 0px 0px 2px rgba(58, 66, 75, 0.1), 0px 2px 4px rgba(58, 66, 75, 0.2);
    }
`;

export const StyledButton = styled(FileButton)`
    margin-block-start: auto;
    margin-inline-start: auto;
`;

export const StyledFileItem = styled(FileItem)<{ grey?: boolean }>`
    background-color: ${({ grey }) => (grey ? Colors.BASE_10 : 'none')};
`;

export const StyledFilesList = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    margin-block-end: ${Styles.ELEMENT_MAIN_PADDING};
    margin-block-start: 24px;

    ${Include.CustomScrollbar()}
`;

export const StyledTextTitle = styled(Text)`
    display: flex;
    align-items: center;
    gap: 14px;
`;

export const StyledLabels = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background: ${Colors.BASE_0};
    margin-block-end: ${Styles.ELEMENT_SMALL_PADDING};

    border-bottom: 1px solid ${Colors.BASE_70};
    padding-bottom: ${Styles.ELEMENT_SMALL_PADDING};

    ${Include.desktop} {
        padding-inline-end: 114px;
    }
`;

export const StyledNameLabel = styled(Text)``;

export const StyledSizeLabel = styled(Text)`
    margin-inline-start: auto;
    width: 160px;
    min-width: 62px;
`;

export const StyledDateLabel = styled(Text)``;

export const StyledModalContent = styled.div`
    background: ${Colors.BASE_0};
    border-radius: ${Styles.CONTAINER_BORDER_RADIUS};
    padding: ${Styles.ELEMENT_MAIN_PADDING};
    max-width: 400px;
`;

export const StyledModalButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-block-start: ${Styles.ELEMENT_MAIN_PADDING};
`;
