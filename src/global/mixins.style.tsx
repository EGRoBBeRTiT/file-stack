import { Colors } from 'global/colors.style';
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

        text_0: () => css`
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
        `,

        text_1: () => css`
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 17px;
        `,
    },

    CustomScrollbar: (color = Colors.BASE_0) => css`
        &::-webkit-scrollbar {
            position: absolute;
            width: 8px;
            height: 8px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: ${color};
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: #cdcdcd80;
            border: 2px solid ${color};
            border-radius: 10px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #b4b4b480;
        }
    `,

    cut_for_n_rows: (n = 1) => css`
        display: -webkit-box;
        overflow: hidden;
        white-space: pre-line;
        text-overflow: ellipsis;
        -webkit-line-clamp: ${n};
        -webkit-box-orient: vertical;
    `,
} as const;
