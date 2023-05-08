import { IcLogoFull, IcUserRound } from 'assets';
import { Colors } from 'global/colors.style';
import { Include } from 'global/mixins.style';
import { Styles } from 'global/styles';
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
    height: ${Styles.MAX_HEADER_HEIGHT};
`;

export const StyledContent = styled.div`
    height: 100%;
    width: 100%;
    padding-inline: ${Styles.CONTENT_PADDING};
    max-width: calc(${Styles.MAX_CONTENT_WIDTH} + 2 * ${Styles.CONTENT_PADDING});
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledIcLogoFull = styled(IcLogoFull)`
    display: flex;

    ${Include.mobile()} {
        width: 160px;
    }
`;

export const StyledIcUserRound = styled(IcUserRound)`
    display: flex;

    ${Include.mobile()} {
        width: 40px;
    }
`;
