import styled from 'styled-components';

export const AuthStyles: any = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  min-width: 1030px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .auth {
    &-container {
      border-radius: 10px;
      background: var(--white, #ffffff);
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.04);
    }
    
    &-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      
      &__logo {
        width: 40px;
      }
      
      &__title {
        color: var(--Dark-Gray, #3A3B3C);
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }

    &-checkbox {
      align-items: center;
      text-align: left;
      display: flex;
      
      &__wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      a {
        display: inline;
        color: var(--dark-purple);
      }

      .MuiSvgIcon-root {
        width: 23px;
        height: 23px;
      }

      .MuiFormControlLabel-label {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }

      .MuiCheckbox-root {
        padding: 0;
        margin-right: 4px;

        &.Mui-checked {
          color: var(--dark-gray);
        }
      }

      + p {
        display: none;
        animation: fadeIn 0.8s;
      }

      &.-error {
        .MuiSvgIcon-root {
          fill: var(--red);
        }

        + p {
          display: block;
        }
      }
    }
  }
`;
