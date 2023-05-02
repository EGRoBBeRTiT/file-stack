import { Colors } from 'global/colors.style';
import { CONTENT_PADDING, MAX_CONTENT_WIDTH, MAX_HEADER_HEIGHT } from 'global/styles';
import type { PageLayoutProps } from 'layouts/PageLayout/PageLayout.types';
import styled from 'styled-components';

export const StyledPageLayout = styled.div<PageLayoutProps>`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ background }) => background ?? Colors.BASE_0};
`;

export const StyledContent = styled.div`
    display: flex;
    width: 100%;
    padding: ${CONTENT_PADDING}px;
    max-width: calc(${MAX_CONTENT_WIDTH}px + 2 * ${CONTENT_PADDING}px);
    min-height: calc(100vh - ${MAX_HEADER_HEIGHT}px);
`;
