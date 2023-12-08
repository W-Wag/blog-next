import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
        outline: 0;
        box-shadow: 0  0 0 2px ${(props) => props.theme.colors.secondary};
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: ${(props) => props.theme.font.sizes.medium};
    color: ${(props) => props.theme.colors['gray-100']};
    background-color: ${(props) => props.theme.colors['gray-800']};
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: .6;
    }
  }


`;
