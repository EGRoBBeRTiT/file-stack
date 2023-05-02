import type { Colors } from 'global/colors.style';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DetailedHTMLElementProps<T extends HTMLElement> = Omit<DetailedHTMLProps<HTMLAttributes<T>, T>, 'ref'>;

export type TextType = 'title-0' | 'title-1' | 'title-2' | 'label-1' | 'text-1';

export type DivTextProps = DetailedHTMLElementProps<HTMLDivElement> & {
    type: TextType;
    as?: 'div';
};

export type ParagraphTextProps = DetailedHTMLElementProps<HTMLParagraphElement> & {
    type: TextType;
    as?: 'p';
};

export type SpanTextProps = DetailedHTMLElementProps<HTMLSpanElement> & {
    type: TextType;
    as?: 'span';
};

export type AnchorTextProps = DetailedHTMLElementProps<HTMLAnchorElement> & {
    type: TextType;
    as?: 'a';
};

export type HeadingTextProps = DetailedHTMLElementProps<HTMLHeadElement> & {
    type: TextType;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export type TextProps = (DivTextProps | ParagraphTextProps | SpanTextProps | AnchorTextProps | HeadingTextProps) & {
    color?: Colors;
};
