import styled from 'styled-components';

export const AuthStyles: any = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 12vh;
  
  .auth {
    &-container {
      border-radius: 10px;
      background: var(--white, #ffffff);
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.04);
    }
    
    &-grid {
      padding: 3.1rem 2.2rem;
    }
    
    &-top {
      display: flex;
      flex-direction: row;
      gap: 17px;
      margin-bottom: 0.5rem;
      
      &__logo {
        width: 40px;
      }
      
      &__title {
        color: var(--Dark-Gray, #3A3B3C);
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: normal;
      }
    }
    
    &-form {
    }
    
    &-input {
      margin-top: 1.2rem;
    }

    &-checkbox {
      &__wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin-top: 1.2rem;
      }
    }

    &-description {
      max-width: 23rem;
      margin-top: 1.25rem;
      color: var(--black, #000);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    
    &-above {
      max-width: 23rem;
      margin-top: 1.25rem;
      
      &__text {
        color: var(--Dark-Gray, #3A3B3C);
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin: 0;
      }
    }
    
    &-links {
      margin-top: 1.3rem;
      padding-left: 10px;
      max-width: 23rem;
      
      &__text {
        color: var(--Dark-Gray, #3A3B3C);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      &__link {
        color: var(--primary-700, #1A56DB);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: none;
        cursor: pointer;
      }
    }
    
    &-terms {
      &__wrap {
        margin-top: 0.6rem;
      }

      .MuiFormControlLabel-label {
        color: var(--Dark-Gray, #3A3B3C);
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      
      &__link {
        color: var(--primary, #3742FA);
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
      }
    }

    &-button {
      width: 100%;
      
      &__wrap {
        margin-top: 1.2rem;
      }
    }
  }

  @media (max-width: 48em) {
    padding-top: 15vh;
    
    .auth {
      &-grid {
        padding: 3.1rem 1.2rem;
      }

      &-description {
        max-width: 16.5rem;
      }

      &-above {
        max-width: 16.5rem;
      }

      &-links {
        max-width: 16.5rem;
      }
    }
  }
`;
