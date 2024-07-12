import styled from 'styled-components';

export const FormControl: any = styled.div`
  position: relative;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  textarea:-webkit-autofill:active,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus,
  select:-webkit-autofill:active {
    -webkit-text-fill-color: var(--gray-500, #6B7280);
    transition: background-color 5000s ease-in-out 0s;
    filter: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  .input {
    &-img {
      display: block;
      position: absolute;
      width: auto;
      height: 16px;
      top: 14px;
      left: 14px;
    }
    
    //&-url {
    //  position: absolute;
    //  display: block;
    //  left: 0;
    //  bottom: 0;
    //  padding: 10px 11px 10px 14px;
    //  font-weight: 400;
    //  font-size: 16px;
    //  line-height: 24px;
    //  color: var(--gray);
    //  border-right: 1px solid var(--light-gray);
    //}
  }
  
  &.-image {
    input {
      padding-left: 41px;
    }
  }

  &.-error {
    input {
      border: 1px solid #FDA29B;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }
    
    .input-wrap {
      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 16px;
        height: 16px;
        right: 14px;
        top: 14px;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5OTIgNS4zMzM1VjguMDAwMTZNNy45OTk5MiAxMC42NjY4SDguMDA2NTlNMTQuNjY2NiA4LjAwMDE2QzE0LjY2NjYgMTEuNjgyMSAxMS42ODE4IDE0LjY2NjggNy45OTk5MiAxNC42NjY4QzQuMzE4MDIgMTQuNjY2OCAxLjMzMzI1IDExLjY4MjEgMS4zMzMyNSA4LjAwMDE2QzEuMzMzMjUgNC4zMTgyNiA0LjMxODAyIDEuMzMzNSA3Ljk5OTkyIDEuMzMzNUMxMS42ODE4IDEuMzMzNSAxNC42NjY2IDQuMzE4MjYgMTQuNjY2NiA4LjAwMDE2WiIgc3Ryb2tlPSIjRjA0NDM4IiBzdHJva2Utd2lkdGg9IjEuMzMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K);
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    
    &.-label {
      .input-wrap {
        &:after {
          top: 40px;
        }
      }
    }

    p {
      animation: fadeIn 0.8s;
      display: block;
      color: var(--red);
    }
    
    &.-show {
      .input-wrap {
        &:after {
          right: 40px;
        }
      }
    }
  }

  &.-label {
    & .control-show {
      top: 42px;
    }
  }
`;

export const FormControlInputWrap: any = styled.div`
  position: relative;
`;

export const FormControlInputLabel: any = styled.label`
  display: block;
  color: var(--Dark-Gray, #3A3B3C);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 6px;
`;

export const FormControlInput: any = styled.input`
  position: relative;
  padding: 9px 14px;
  width: 100%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--gray-500, #6B7280);
  border-radius: 6px;
  background: var(--primary-5, #F1F1FA);
  border: 1px solid var(--primary-5, #F1F1FA);
  outline: none;
  transition: box-shadow 0.3s ease-in-out;
  cursor: text;

  &:focus {
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px #E0EAFF;
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    opacity: 1;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--gray-500, #6B7280);
    transition: opacity 0.3s ease-in-out;
  }

  &:disabled {
    color: var(--gray-500, #6B7280);
  }
  
  //&[type=url] {
  //  padding-left: 86px;
  //}
`;

export const FormControlShow: any = styled.button`
  position: absolute;
  right: 14px;
  top: 17px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  border: 0;
  width: 16px;
  height: 12px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNjY2OTkyIDYuMDAwMzNDMC42NjY5OTIgNi4wMDAzMyAzLjMzMzY2IDAuNjY2OTkyIDguMDAwMzMgMC42NjY5OTJDMTIuNjY3IDAuNjY2OTkyIDE1LjMzMzcgNi4wMDAzMyAxNS4zMzM3IDYuMDAwMzNDMTUuMzMzNyA2LjAwMDMzIDEyLjY2NyAxMS4zMzM3IDguMDAwMzMgMTEuMzMzN0MzLjMzMzY2IDExLjMzMzcgMC42NjY5OTIgNi4wMDAzMyAwLjY2Njk5MiA2LjAwMDMzWiIgc3Ryb2tlPSIjOThBMkIzIiBzdHJva2Utd2lkdGg9IjEuMzMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4wMDAzMyA4LjAwMDMzQzkuMTA0ODkgOC4wMDAzMyAxMC4wMDAzIDcuMTA0ODkgMTAuMDAwMyA2LjAwMDMzQzEwLjAwMDMgNC44OTU3NiA5LjEwNDg5IDQuMDAwMzMgOC4wMDAzMyA0LjAwMDMzQzYuODk1NzYgNC4wMDAzMyA2LjAwMDMzIDQuODk1NzYgNi4wMDAzMyA2LjAwMDMzQzYuMDAwMzMgNy4xMDQ4OSA2Ljg5NTc2IDguMDAwMzMgOC4wMDAzMyA4LjAwMDMzWiIgc3Ryb2tlPSIjOThBMkIzIiBzdHJva2Utd2lkdGg9IjEuMzMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormControlInputError: any = styled.p`
  margin: 6px 0;
  color: var(--red);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  display: block;
  white-space: pre-line;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;
