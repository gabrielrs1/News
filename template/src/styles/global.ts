import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    }

    body, html {
        overflow: hidden;

        width: 100vw;
        height: 100vh;

        background: #dfdfdf;
    }
`