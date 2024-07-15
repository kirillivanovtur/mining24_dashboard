import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";
import {AuthStyles} from "../Auth.Styles.tsx";
import {PATHS} from "../../../const/paths.constants.ts";
import {
  Logo,
  Button,
  AuthLanguages
} from '../../../elements';


// eslint-disable-next-line react-refresh/only-export-components
const AskPartner: FC = () => {
  const {t} = useTranslation();

  return (
    <AuthStyles className='askPartner'>
      <div className="auth-container">
        <div className="grid-container auth-grid">
          <div className="auth-top">
            <Logo className="auth-top__logo" to={PATHS.DASHBOARD}>
              <img src="/img/main/logo.svg" alt="m24"/>
            </Logo>
            <span className="auth-top__title">{t('auth.ask_partner')}</span>
          </div>
          <AuthLanguages/>

          <div
            className="auth-form"
          >
            <div className="auth-description">
              <span className="auth-links__text">{t('auth.texts.ask_partner')} </span>
            </div>

            <div className="auth-button__wrap">
              <Button
                className='auth-button loading-btn'
                type="submit"
                as={Link}
                to={PATHS.REGISTRATION}
              >
                {t('auth.btns.ask_partner')}
              </Button>
            </div>

          </div>
        </div>
      </div>
    </AuthStyles>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AskPartner;
