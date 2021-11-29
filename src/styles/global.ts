import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --box: #fff;
  
    --primary: #5429cc;
    --primary-light: #6933ff;
    --secondary: #33cc95;
    --red: #e52e4d;

    --title: #363f5f;
    --text: #969cb2;
    --text-on-color: #fff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: Poppins, sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
