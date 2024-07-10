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
  }
`;
