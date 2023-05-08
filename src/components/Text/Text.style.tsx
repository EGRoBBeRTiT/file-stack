import type { TextProps } from 'components/Text/Text.types';
import { Colors } from 'global/colors.style';
import { Include } from 'global/mixins.style';
import styled from 'styled-components';

export const StyledText = styled.span<Omit<TextProps, 'as'>>`
    color: ${({ color }) => color ?? Colors.BASE_100};

    ${({ type }) => {
        switch (type) {
            case 'title-0':
                return Include.font.title_0();
            case 'title-1':
                return Include.font.title_1();
            case 'title-2':
                return Include.font.title_2();
            case 'label-1':
                return Include.font.label_1();
            case 'text-1':
            default:
                return Include.font.text_1();
        }
    }}
`;
