import styled from 'styled-components';

export const ModalStyles: any = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(155, 156, 157, 0.4);
  backdrop-filter: blur(20px);
  z-index: 9999;

  .modal {
    &-dialog {
      position: relative;
      border-radius: var(--rounded-lg, 8px);
      background: var(--background, #F9FAFB);
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.04);
      background: var(--white);
      padding: 1.25rem 1.5rem;
      display: none;
      animation: fadeIn 0.5s cubic-bezier(0.65, 0, 0.35, 1);
      overflow: hidden;
      max-width: 85vw;

      &.active {
        display: block;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
    
    &-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &__title {
        color: var(--Dark-Gray, #3A3B3C);
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    
    &-close {
      &__btn {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        cursor: pointer;
        transition: opacity 0.5s ease-in-out;
        outline: none;
        border: 0;
        background: none;
      }

      &:hover {
        opacity: 0.8;
      }
    }

    &-terms {
      margin-top: 3rem;
    }
  }
`;
