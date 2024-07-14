import styled from 'styled-components';

export const ButtonContainer: any = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  border-radius: 6px;
  background: var(--primary, #3742FA);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  color: var(--white, #ffffff);
  border: none;
  padding: 18px 20px;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  cursor: pointer;
  outline: none;
  text-decoration: none;

  &:focus {
  }

  &:hover {
  }

  &:active {
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
  }

  &.loading-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 10px;
      width: 16px;
      height: 16px;
      stroke: var(--white, #ffffff);
    }
  }
`;
