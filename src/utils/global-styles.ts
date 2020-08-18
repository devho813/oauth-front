import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';

export const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const hideScrollBar = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html{
    font-family: sans-serif;
  }
  body{
    letter-spacing: -0.025em;
    overflow-x: hidden;
  }
  html, body, #__next{
    width: 100%;
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    font: inherit;
    box-shadow: none;

    &:focus, &:active {
      outline: none;
    }
  }
`;

export default GlobalStyles;
