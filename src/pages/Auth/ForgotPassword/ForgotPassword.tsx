import React, {FC, useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import cloneDeep from 'lodash/cloneDeep';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {AuthStyles} from "../Auth.Styles.tsx";
import {PATHS} from "../../../const/paths.constants.ts";
import {
  Logo,
  Input,
  Loader,
  Button,
  AuthLanguages
} from '../../../elements';
import { validateEmail } from '../../../common/utils/validators';
import {ForgotPasswordParams} from "../../../api";
import { AppStateType } from '../../../store';
import types from '../../../store/actionTypes';
import { forgotPassword } from '../../../store/user/actions';
import { selectLoadingByKey } from '../../../store/app/selectors';

export enum FORGOT_PASSWORD_STAGES {
  FIRST = 'FIRST',
  SECOND = 'SECOND'
}
export interface Props {
  forgotPassword: (payload: any) => void;
  loading: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
const ForgotPassword: FC<Props> = (props: Props) => {
  const {loading, forgotPassword} = props;
  const {t} = useTranslation();

  const [values, setValues] = useState<{ [key: string]: string }>({
    email: '',
  });
  const [stage, setStage] = useState<FORGOT_PASSWORD_STAGES>(FORGOT_PASSWORD_STAGES.FIRST);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  let getFormErrors: (data: { [p: string]: string }) => ForgotPasswordParams;
  // eslint-disable-next-line prefer-const
  getFormErrors = (data: { [key: string]: string }) => {
    const {email} = data;
    const newErrors: ForgotPasswordParams = {
      email: '',
    };

    if (!email) newErrors.email = t('auth.form.email.errors.empty');
    if (email && !validateEmail(email)) newErrors.email = t('auth.form.email.errors.valid');

    return newErrors;
  };

  const checkErrors = (data: { [key: string]: string }) => {
    for (const error in data) {
      if (data[error]) return true;
    }
    return false;
  };

  const onChange = (field: string, value: string) => {
    setValues(prev => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }

    if (!value && Object.prototype.hasOwnProperty.call(errors, field)) {
      const newValues = cloneDeep(values);
      newValues[field] = value;
      const newErrors: ForgotPasswordParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onBlur = (field: string) => {
    if (Object.prototype.hasOwnProperty.call(errors, field)) {
      const newValues = cloneDeep(values);
      const newErrors: ForgotPasswordParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onSubmit = useCallback(
    (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      const newErrors: ForgotPasswordParams = getFormErrors(values);
      setErrors(newErrors);

      const data: ForgotPasswordParams = {
        email: values.email.toLowerCase(),
      };

      if (!checkErrors(newErrors)) {
        // forgotPassword(data);
        setStage(FORGOT_PASSWORD_STAGES.SECOND);
      }
    },
    [forgotPassword, values, getFormErrors]
  );

  return (
    <AuthStyles className='forgotPassword'>
      <div className="auth-container">
        <div className="grid-container auth-grid">
          <div className="auth-top">
            <Logo className="auth-top__logo" to={PATHS.DASHBOARD}>
              <img src="/img/main/logo.svg" alt="m24"/>
            </Logo>
            <span className="auth-top__title">{t('auth.forgot_password')} {stage === FORGOT_PASSWORD_STAGES.FIRST ? '1' : '2'}/2</span>
          </div>
          <AuthLanguages/>

          <form
            className="auth-form"
            onSubmit={onSubmit}
          >

            {stage === FORGOT_PASSWORD_STAGES.FIRST ? (
              <Input
                className="auth-input"
                type="email"
                name="email"
                value={values.email}
                placeholder={`${t('auth.form.email.placeholder')}`}
                label={`${t('auth.form.email.label')}`}
                error={errors.email}
                onChange={onChange}
                onBlur={onBlur}
              />
            ) : null}

            <div className="auth-description">
              <span className="auth-links__text">{stage === FORGOT_PASSWORD_STAGES.FIRST ? t('auth.texts.forgot_password') : t('auth.texts.forgot_password_2')} </span>
            </div>

            <div className="auth-button__wrap">
              {stage === FORGOT_PASSWORD_STAGES.FIRST ? (
                <Button
                  className='auth-button loading-btn'
                  type="submit"
                  disabled={loading}
                >
                  {t('auth.btns.forgot_password')}
                  {loading ? <Loader/> : null}
                </Button>
              ) : (
                <Button
                  className='auth-button'
                  as={Link}
                  to={PATHS.LOGIN}
                >
                  {t('auth.btns.forgot_password_2')}
                </Button>
              )}
            </div>

          </form>

          <div className="auth-links">
            <span className="auth-links__text">{t('auth.texts.registration')} </span>
            <Link className="auth-links__link" to={PATHS.ASK_PARTNER}>{t('auth.link.registration')}</Link>
          </div>

        </div>
      </div>
    </AuthStyles>
  );
};

const mapState = (state: AppStateType) => {
  return {
    loading: selectLoadingByKey(state, types.FORGOT_PASSWORD_REQUEST),
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapState, { forgotPassword })(ForgotPassword);
