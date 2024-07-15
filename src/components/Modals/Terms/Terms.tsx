import React, {useCallback} from "react";
import {Button} from "../../../elements";
import {ModalStyle} from "../Modals.styles.tsx"
import {useTranslation} from "react-i18next";

interface ModalKeyProps {
  closeModal: () => void;
  action: (val: boolean) => void;
  value: boolean;
}

const Terms: React.FC<ModalKeyProps> = (props: ModalKeyProps) => {
  const { closeModal, action, value } = props;
  const {t} = useTranslation();

  const onSubmit = useCallback(
    (e: React.ChangeEvent<any>) => {
      e.preventDefault();

      if (action) {
        action(!value);
        closeModal();
      }

    },
    [action, closeModal, value]
  );

  return (
    <ModalStyle>
      <form className="modal-form" onSubmit={onSubmit}>
        <div className="modal-text__wrap">
          <p className="modal-text">{t('modals.terms.text')}</p>
        </div>
        <div className="modal-form__btns">
          <Button
            className="modal-form__btn"
            type="submit"
            disabled={value}
          >
            {t('modals.terms.btn')}
          </Button>
        </div>
      </form>
    </ModalStyle>
  );
};

export default Terms;
