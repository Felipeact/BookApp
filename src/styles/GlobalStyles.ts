import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: 'Rajdhani', sans-serif;
    
  }

  body {
    background: var(--gray-ligth);
}

  :root {
    --white: #FFFFFF;
    --black: #000000;
    --gray: #C4C4C4;
    --green: #4CD62B;
    --red: #E83F5B;
    --gray-ligth: #F2F3F5;
    --purple: #5965E0;
    --purple-dark: #1033AF;
  }
`