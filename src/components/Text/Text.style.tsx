import type { TextProps } from 'components/Text/Text.types';
import { Colors } from 'global/colors.style';
import styled, { css } from 'styled-components';

export const StyledText = styled.span<Omit<TextProps, 'as'>>`
    color: ${({ color }) => color ?? Colors.BASE_100};

    ${({ type }) => {
        switch (type) {
            case 'title-0':
                return css`
                    font-style: normal;
                    font-weight: 300;
                    font-size: 24px;
                    line-height: 29px;
                `;
            case 'title-1':
                return css`
                    font-style: normal;
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 29px;
                `;
            case 'title-2':
                return css`
                    font-style: normal;
                    font-weight: 300;
                    font-size: 20px;
                    line-height: 24px;
                `;
            case 'label-1':
                return css`
                    font-style: normal;
                    font-weight: 300;
                    font-size: 16px;
                    line-height: 19px;
                `;
            case 'text-1':
            default:
                return css`
                    font-style: normal;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 17px;
                `;
        }
    }}
`;
