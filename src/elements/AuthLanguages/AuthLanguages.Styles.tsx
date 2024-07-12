import styled from 'styled-components';

export const AuthLanguagesStyles: any = styled.div`
  display: flex;
  flex-direction: row;
  
  .authLang {
    &-name {
      color: var(--Dark-Gray, #3A3B3C);
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      
      &.-active {
        color: var(--primary, #3742FA);
      }
    }
    &-sep {
      display: inline-block;
      margin: 0 10px;
    }
  }
`;
