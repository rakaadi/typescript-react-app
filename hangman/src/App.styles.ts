import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body, #root {
        background-color: #34495e;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 80vh;
        margin: 0;
        overflow: hidden;
    }

    h1 {
        margin: 20px 0 0;
    }
`;