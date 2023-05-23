import { Include } from 'global/mixins.style';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --max-content-width: 1200px;

        --content-padding: 32px;

        --input-height: 48px;

        --max-header-height: 64px;

        --container-border-radius: 8px;

        --element-border-radius: 8px;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        min-height: 100% !important;
        height: 100%;
        min-width: 100vw;
        max-width: 100vw;
        overflow-x: hidden;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        ${Include.mobile()} {
            --content-padding: 16px;
        }

        &,
        * {
            box-sizing: border-box;
        }
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    &,
    * {
        box-sizing: border-box;
    }
`;
