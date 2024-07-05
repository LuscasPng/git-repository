import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, border-style, #root {
    min-height: 100%;
  }

  body {
    background-color: #1f1f1f;
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222222;
    font-size: 14px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;