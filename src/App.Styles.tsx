import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle: any = createGlobalStyle`
  ${normalize}
    // Variables
  :root {
    --inter: 'Inter', sans-serif;

    --white: #ffffff;
    --dark-white: #F2F2F2;
  }

  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    min-width: 320px;
    font-family: var(--inter)!important;
    font-weight: 400;
    font-size: 14px;
    line-height: normal;
    text-align: left;
    scrollbar-width: none;
    background-color: var(--dark-white)!important;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
