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
import { validateEmail, validatePassword } from '../../../common/utils/validators';
import { LogInParams } from "../../../api";
import { AppStateType } from '../../../store';
import types from '../../../store/actionTypes';
import { login } from '../../../store/user/actions';
import { selectErrorByKey, selectLoadingByKey } from '../../../store/app/selectors';
import Checkbox from "../../../elements/Checkbox/Checkbox.tsx";

export interface Props {
}

// eslint-disable-next-line react-refresh/only-export-components
const Login: FC<Props> = (props: Props) => {
  const {loading, login, error} = props;
  const {t} = useTranslation();

  const [values, setValues] = useState<{ [key: string]: string }>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);


  let getFormErrors: (data: { [p: string]: string }) => LogInParams;
  // eslint-disable-next-line prefer-const
  getFormErrors = (data: { [key: string]: string }) => {
    const {email, password} = data;
    const newErrors: LogInParams = {
      email: '',
      password: '',
    };

    if (!password) newErrors.password = 'auth.page.form.password.errors.empty';
    if (password && !validatePassword(password)) newErrors.password = 'auth.page.form.password.errors.valid';

    if (!email) newErrors.email = 'auth.page.form.email.errors.empty';
    if (email && !validateEmail(email)) newErrors.email = 'auth.page.form.email.errors.valid';

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
      const newErrors: LogInParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onBlur = (field: string) => {
    if (Object.prototype.hasOwnProperty.call(errors, field)) {
      const newValues = cloneDeep(values);
      const newErrors: LogInParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onSubmit = useCallback(
    (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      const newErrors: LogInParams = getFormErrors(values);
      setErrors(newErrors);

      const data: LogInParams = {
        email: values.email.toLowerCase(),
        password: values.password,
      };

      if (!checkErrors(newErrors)) {
        login(data);
      }
    },
    [login, values, getFormErrors]
  );

  return (
    <AuthStyles className='login'>
      <div className="auth-container">
        <div className="grid-container auth-grid">
          <div className="auth-top">
            <Logo className="auth-top__logo" to={PATHS.DASHBOARD}>
              <img src="/img/main/logo.svg" alt="m24"/>
            </Logo>
            <span className="auth-top__title">Login</span>
          </div>
          <AuthLanguages/>

          <form
            className="auth-form"
            onSubmit={onSubmit}
          >
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
            <Input
              className="auth-input"
              type="password"
              name="password"
              value={values.password}
              placeholder={`${t('auth.form.password.placeholder')}`}
              label={`${t('auth.form.password.label')}`}
              error={errors.password}
              onChange={onChange}
              onBlur={onBlur}
            />
            <div className="auth-checkbox__wrap">
              <Checkbox
                className="auth-checkbox"
                label={t('auth.texts.remember')}
                checked={rememberPassword}
                onChange={setRememberPassword}
              />
              <Link className="auth-links__link" to={PATHS.FORGOT_PASSWORD}>{t('auth.link.forgot_password')}</Link>
            </div>
            <div className="auth-button__wrap">
              <Button
                className='auth-button loading-btn'
                type="submit"
                disabled={loading}
              >
                {t('auth.btns.login')}
                {loading ? <Loader/> : null}
              </Button>
            </div>

          </form>

          <div className="auth-links">
            <span className="auth-links__text">{t('auth.texts.registration')} </span>
            <Link className="auth-links__link" to={PATHS.REGISTRATION}>{t('auth.link.registration')}</Link>
          </div>

        </div>
      </div>
    </AuthStyles>
  );
};

const mapState = (state: AppStateType) => {
  return {
    loading: selectLoadingByKey(state, types.LOGIN_REQUEST),
    error: selectErrorByKey(state, types.LOGIN_REQUEST),
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapState, { login })(Login);
