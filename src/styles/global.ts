import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }
  
 

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background: ${({ theme }) => theme.gray[900]};
    color: ${({ theme }) => theme.gray[300]};
  }

  input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: transparent;
    border: none;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;

    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  *:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.green[500]}
  }
`;
