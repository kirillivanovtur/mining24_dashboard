import styled from "styled-components";

export const ModalStyle: any = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--inter);
  
  .modal {
    &-text {
      color: var(--gray-500, #6B7280);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      margin: 0;
      
      &__wrap {
        text-align: center;
        margin-bottom: 3rem;
      }
    }
    &-form {
      &__btns {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
