import React, {FC, useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import cloneDeep from 'lodash/cloneDeep';
import {connect} from 'react-redux';
import {FormControlLabel, Checkbox} from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
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

  const CheckBoxIcon = () => {
    return (
      <SvgIcon>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Property 1=Default">
            <rect id="Rectangle 103" x="0.5" y="0.5" width="13" height="13" rx="3.5" stroke="#3A3B3C"/>
          </g>
        </svg>
      </SvgIcon>
    );
  };

  const CheckBoxCheckedIcon = () => {
    return (
      <SvgIcon>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Property 1=checked">
            <rect id="Rectangle 103" x="0.5" y="0.5" width="13" height="13" rx="3.5" stroke="#3A3B3C"/>
            <circle id="Ellipse 11" cx="7" cy="7" r="4" fill="#3A3B3C"/>
          </g>
        </svg>
      </SvgIcon>
    );
  };

  let getFormErrors: (data: { [p: string]: string }) => LogInParams;
  // eslint-disable-next-line prefer-const
  getFormErrors = (data: { [key: string]: string }) => {
    const {email, password} = data;
    const newErrors: LogInParams = {
      email: '',
      password: '',
    };

    if (!password) newErrors.password = 'registration.page.form.password.errors.empty';
    if (password && !validatePassword(password)) newErrors.password = 'registration.page.form.password.errors.valid';

    if (!email) newErrors.email = 'registration.page.form.email.errors.empty';
    if (email && !validateEmail(email)) newErrors.email = 'login.page.form.email.errors.valid';

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

          <form onSubmit={onSubmit}>
            <Input
              className='registration-input'
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
              className='registration-input'
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
              <FormControlLabel
                className="auth-checkbox"
                control={
                  <Checkbox
                    checked={rememberPassword}
                    icon={<CheckBoxIcon />}
                    checkedIcon={<CheckBoxCheckedIcon />}
                    aria-describedby="termsRegistration-text"
                    onChange={(e: React.ChangeEvent<any>) =>
                      setRememberPassword(e.target.checked)}
                  />
                }
                label={t('auth.texts.remember')}
              />
              <Link className="login__links-link" to={PATHS.FORGOT_PASSWORD}>{t('auth.link.forgot_password')}</Link>
            </div>
            <div className="login__button-wrap">
              <Button
                className='login__button loading-btn'
                type="submit"
                disabled={loading}
              >
                {t('auth.btns.login')}
                {loading ? <Loader/> : null}
              </Button>
            </div>

          </form>

          <div className="login__links">
            <span className="login__links-text">{t('auth.texts.registration')} </span>
            <Link className="login__links-link" to={PATHS.REGISTRATION}>{t('auth.link.registration')}</Link>
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
