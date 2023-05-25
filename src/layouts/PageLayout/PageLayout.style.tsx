import { Colors } from 'global/colors.style';
import { Include } from 'global/mixins.style';
import { Styles } from 'global/styles';
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
    padding: ${Styles.CONTENT_PADDING};
    max-width: calc(${Styles.MAX_CONTENT_WIDTH} + 2 * ${Styles.CONTENT_PADDING});
    min-height: calc(100vh - ${Styles.MAX_HEADER_HEIGHT});

    ${Include.mobile} {
        padding-inline: 0;
    }
`;
