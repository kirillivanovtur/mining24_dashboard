import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import moment from 'moment-timezone';
import { initReactI18next } from 'react-i18next';
import en from '../../assets/locales/en/translation.json';
import es from '../../assets/locales/es/translation.json';

export const LANGUAGES = new Map([
  ['en', 'English'],
  ['es', 'Español'],
]);

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false, // process.env.NODE_ENV !== 'production',
    fallbackLng: 'en',
    supportedLngs: Array.from(LANGUAGES.keys()),
    resources: resources,
  });

const selfMoment = (date?: string | number) => {
  // const timezoneOffset = new Date().getTimezoneOffset();

  i18n.on('languageChanged', (lng: string) => {
    return moment(date).lang(lng);
  });

  return moment(date).lang(i18n.language);
};

export { selfMoment };

export default i18n;
