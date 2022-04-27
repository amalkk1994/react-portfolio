import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`


html, body {
    margin: 0;
    padding: 0;
}

*, *::after, *::before {
    box-sizing: border-box;
}

body {
    align-items: center;
    background: ${({ theme }) => theme.primaryColor};
    color: ${() => theme.primaryDark};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    text-rendering: optimizeLegibility;
}

p {
    line-height: 1.5;
    text-align: justify;
    text-justify: inter-word;
    animation: backInDown 1s;
    margin-bottom: 10px;
}

section {
    margin-top: 30px;
}

`;
