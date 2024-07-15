import React, { useRef } from 'react';
import {
  Icon
} from '../Icon/Icon';

import { ModalStyles } from './Modal.Styles';

interface Props {
  opened?: boolean;
  closeModal?: () => void;
  className?: string;
  hasCloseBtn?: boolean;
  title?: string;
  children?: any;
}

export const Modal: React.FC<Props> = (props: Props) => {
  const { title, opened, closeModal, hasCloseBtn, className, children } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const closeClickBackdrop = (e: any) => {
    e.stopPropagation();
    // if (!closeModal) return false;
    // if (e.target === modalRef.current) return closeModal();
  };

  const closeClick = (e: any) => {
    e.stopPropagation();
    if (!closeModal) return false;
    return closeModal();
  };

  if (!opened) {
    return null;
  }

  return (
    <ModalStyles
      ref={modalRef}
      className={className}
      onClick={closeClickBackdrop}
    >
      <div className={`modal-dialog ${opened ? 'active' : ''}`}>
        <div className="modal-header">
          {title ? (<span className="modal-header__title">
            {title}
          </span>) : null}
          {
            hasCloseBtn ? (
              <button className="modal-close__btn" onClick={closeClick}>
                <Icon className="modal-close" name="close" size="20" />
              </button>
            ) : null
          }
        </div>
        {children}
      </div>
    </ModalStyles>
  );
};
