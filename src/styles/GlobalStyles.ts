import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    * { 
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        line-height: 1.6;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    html { 
        box-sizing: border-box;
        font-size: 16px;
        scroll-behavior: smooth;
    }
    *, *:before, *:after { 
        box-sizing: inherit;
    }

    body { 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #fff;
        overflow-x: hidden;
    }
    a { 
        color: #000 !important;
        text-decoration: none;
        padding: 0;
        margin: 0;
    }
`;
