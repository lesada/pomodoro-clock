import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;

    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0d0404;
    color: var(--text);
  }

  button {
    cursor: pointer;
  }

  :root {
    ${(props) => {
      const theme = props.theme;
      let append = "";
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });
      return append;
    }}
  }
  
`;

export default GlobalStyle;
