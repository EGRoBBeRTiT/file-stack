import { Styles } from 'global/styles';
import { css } from 'styled-components';

export const Include = {
    CenteredFlexbox: () => css`
        display: flex;
        align-items: center;
        justify-content: center;
    `,

    mobile: () => `@media screen and (max-width: ${Styles.MOBILE_MAX_WIDTH})` as const,

    desktop: () => `@media screen and (min-width: ${Styles.DESKTOP_MIN_WIDTH})` as const,

    font: {
        title_0: () => css`
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 29px;
        `,

        title_1: () => css`
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
        `,

        title_2: () => css`
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 24px;
        `,

        label_1: () => css`
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
        `,

        text_1: () => css`
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 17px;
        `,
    },
} as const;
