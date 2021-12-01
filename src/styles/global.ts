import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --box: #fff;
    --input-bg: #e7e9ee;
    --border: #d7d7d7;
  
    --primary: #5429cc;
    --primary-light: #6933ff;
    --secondary: #33cc95;
    --red: #e52e4d;

    --title: #363f5f;
    --text: #969cb2;
    --text-in-color: #fff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
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
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .modal-overlay {
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: var(--background);
    width: 100%;
    max-width: 575px;
    padding: 3.5rem 3rem;
    position: relative;
    border-radius: 0.25rem;

    & > button {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;

      background: none;
      border: none;
      transition: filter 0.2s;

      &:hover {
      filter: brightness(0.8);
    }
    }
  }
`;
