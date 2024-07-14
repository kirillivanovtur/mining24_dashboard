import cloneDeep from 'lodash/cloneDeep';
import React, {useCallback, useState} from 'react';
import { connect } from 'react-redux';

import { validateEmail } from '../../../common/utils/validators';
import {
  AuthLanguages,
  Button,
  Input,
  Loader,
  Logo,
} from '../../../elements';
import { AuthStyles } from '../Auth.Styles.tsx';
import {RegistrationParams} from "../../../api";
import {PATHS} from "../../../const/paths.constants";
import {AppStateType} from '../../../store';
import types from '../../../store/actionTypes';
import {registration} from '../../../store/user/actions';
import {useTranslation} from "react-i18next";
import {selectErrorByKey, selectLoadingByKey} from "../../../store/app/selectors.ts";
import Checkbox from "../../../elements/Checkbox/Checkbox.tsx";

export interface RegistrationProps {
  registration: (payload: RegistrationParams) => void;
}

const Registration: React.FC<RegistrationProps> = (props: RegistrationProps) => {
  const { registration, loading } = props;
  const {t} = useTranslation();

  const [values, setValues] = useState<{ [key: string]: string }>({
    first_name: '',
    last_name: '',
    email: '',
    telegram: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [termsRegistration, setTermsRegistration] = useState<boolean>(false);

  let getFormErrors: (data: { [p: string]: string }) => RegistrationParams;
  // eslint-disable-next-line prefer-const
  getFormErrors = (data: { [key: string]: string }) => {
    const {first_name, last_name, email, telegram, terms} = data;
    const newErrors: RegistrationParams = {
      first_name: '',
      last_name: '',
      email: '',
      telegram: '',
      terms: '',
    };

    if (!first_name) newErrors.first_name = t('auth.form.first_name.errors.empty');
    if (!last_name) newErrors.last_name = t('auth.form.last_name.errors.empty');
    if (!email) newErrors.email = t('auth.form.email.errors.empty');
    if (email && !validateEmail(email)) newErrors.email = t('auth.form.email.errors.valid');
    if (!telegram) newErrors.telegram = t('auth.form.telegram.errors.empty');
    if (!terms) newErrors.terms = 'true';

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

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }

    if (!value && Object.prototype.hasOwnProperty.call(errors, field)) {
      const newValues = cloneDeep(values);
      newValues[field] = value;
      const newErrors: RegistrationParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onBlur = (field: string) => {
    if (Object.prototype.hasOwnProperty.call(errors, field)) {
      const newValues = cloneDeep(values);
      const newErrors: RegistrationParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onChangeTermsRegistration = (value: boolean) => {
    setTermsRegistration(value);
    if (Object.prototype.hasOwnProperty.call(errors, 'terms')) {
      const showError = !value;
      setErrors({
        ...errors,
        terms: showError ? 'true' : '',
      });
    }
  };

  const onSubmit = useCallback(
    (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      const newErrors: RegistrationParams = getFormErrors({...values, terms: termsRegistration});
      setErrors(newErrors);

      const data: RegistrationParams = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email.toLowerCase(),
        telegram: values.telegram
      };
      if (!checkErrors(newErrors)) {
        registration(data);
      }
    },
    [values, getFormErrors, registration]
  );

  return (
    <AuthStyles className='registration'>
      <div className="auth-container">
        <div className="grid-container auth-grid">
          <div className="auth-top">
            <Logo className="auth-top__logo" to={PATHS.DASHBOARD}>
              <img src="/img/main/logo.svg" alt="m24"/>
            </Logo>
            <span className="auth-top__title">{t('auth.registration')}</span>
          </div>
          <AuthLanguages/>
          <form onSubmit={onSubmit}>
            <Input
              className='auth-input'
              type="text"
              name="first_name"
              value={values.first_name}
              placeholder={`${t('auth.form.first_name.placeholder')}`}
              label={`${t('auth.form.first_name.label')}`}
              error={errors.first_name}
              onChange={onChange}
              onBlur={onBlur}
            />
            <Input
              className='auth-input'
              type="text"
              name="last_name"
              value={values.last_name}
              placeholder={`${t('auth.form.last_name.placeholder')}`}
              label={`${t('auth.form.last_name.label')}`}
              error={errors.last_name}
              onChange={onChange}
              onBlur={onBlur}
            />
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
              type="text"
              name="telegram"
              value={values.telegram}
              placeholder={`${t('auth.form.telegram.placeholder')}`}
              label={`${t('auth.form.telegram.label')}`}
              error={errors.telegram}
              onChange={onChange}
              onBlur={onBlur}
            />

            <div className="auth-above">
              <p
                className="auth-above__text">{t('auth.texts.registration_2')} </p>
            </div>

            <div className="auth-terms__wrap">
              <Checkbox
                className="auth-checkbox auth-terms"
                label={t('auth.texts.terms')}
                checked={termsRegistration}
                onChange={onChangeTermsRegistration}
                error={errors.terms}
              />
              <span
                className="auth-terms__link"
              > {t('auth.link.terms')}</span>
            </div>

            <div className="auth-button__wrap">
              <Button
                className='auth-button loading-btn'
                type="submit"
                disabled={loading}
              >
                {t('auth.btns.registration')}
                {loading ? <Loader/> : null}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AuthStyles>
  );
};

const mapState = (state: AppStateType) => {
  const {user} = state;
  return {
    user,
    loading: selectLoadingByKey(state, types.REGISTRATION_REQUEST),
    error: selectErrorByKey(state, types.REGISTRATION_REQUEST),
  };
};

export default connect(mapState, {registration})(Registration);
