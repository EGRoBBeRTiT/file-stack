import { Colors } from 'global/colors.style';
import { CONTENT_PADDING, MAX_CONTENT_WIDTH, MAX_HEADER_HEIGHT } from 'global/styles';
import styled from 'styled-components';

export const StyledAppHeader = styled.header`
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
    position: sticky;
    top: 0;
    left: 0;
    background: ${Colors.PRIMARY};
    display: flex;
    justify-content: center;
    height: ${MAX_HEADER_HEIGHT}px;
`;

export const StyledContent = styled.div`
    height: 100%;
    width: 100%;
    padding-inline: ${CONTENT_PADDING}px;
    max-width: calc(${MAX_CONTENT_WIDTH}px + 2 * ${CONTENT_PADDING}px);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
