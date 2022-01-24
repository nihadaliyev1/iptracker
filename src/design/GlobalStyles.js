import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html {
        font-size:62.5%;
    }

    body {
        color:${({ theme }) => theme.colors.darkgray};
        font-family:${({ theme }) => theme.fonts.rubik};
        font-weight: 700;
        line-height:1.7;
        box-sizing:border-box;
    }

`;

export default GlobalStyle;
