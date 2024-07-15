import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle: any = createGlobalStyle`
  ${normalize}
    // Variables
  :root {
    --inter: 'Inter', sans-serif;

    --white: #ffffff;
    --black: #000000;
    --dark-white: #F2F2F2;
    --Dark-Gray: #3A3B3C;
    --primary: #3742FA;
    --gray-500: #6B7280;
    --primary-5: #F1F1FA;
    --gray-600: #4B5563;
    --primary-700: #1A56DB;
    --gray-900: #111928;
    --red: #C60E0E;
    --background: #F9FAFB;

    --rounded-lg: 8px;
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
    letter-spacing: normal!important;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
