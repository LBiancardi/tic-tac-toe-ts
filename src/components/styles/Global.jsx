import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wgth@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.bodyGradient1};
    background: linear-gradient(0deg, ${({ theme }) =>
      theme.colors.bodyGradient1} 0%, ${({ theme }) =>
  theme.colors.bodyGradient2} 10%, ${({ theme }) =>
  theme.colors.bodyGradient3} 100%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    height: 100vh;
    margin: 0;
  }

  p {
    /* opacity: 0.6; */
    line-height: 1.5;
  }

  img {
    max-width: 100%
  }
`;

export default GlobalStyles;
