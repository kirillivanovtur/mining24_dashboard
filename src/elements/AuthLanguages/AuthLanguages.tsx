import {FC} from 'react';
import { useTranslation } from 'react-i18next';

import {LANGUAGES} from '../../common/utils/i18n';

import { AuthLanguagesStyles } from './AuthLanguages.Styles.tsx';

const LANGUAGE_LIST = Array.from(LANGUAGES.entries());
const LANGUAGE_CODES_LIST = LANGUAGE_LIST.map(l => l[0]);

interface Props {
  className?: string;
}

export const AuthLanguages: FC<Props> = (props: Props) => {
  const { className } = props;
  const { i18n } = useTranslation();

  const changeLanguage = ((languageCode: string) => {
      if (!languageCode || LANGUAGE_CODES_LIST.indexOf(languageCode) < 0) return;
      i18n.changeLanguage(languageCode);
    }
  );

  return (
    <AuthLanguagesStyles
      className={`${className ? className : ''}`}
    >
      {LANGUAGE_LIST.map((l, index) => (
        <div key={`authLang-${index}`}>
          <span
            className={`authLang-name ${i18n.language === l[0] ? '-active' : ''}`}
            onClick={() => changeLanguage(l[0])}
          >
            {l[1]}
          </span>
          {
            (index + 1) < LANGUAGE_LIST.length ? (
              <span className="authLang-sep">/</span>
            ) : null
          }
        </div>
      ))}
    </AuthLanguagesStyles>
  );
};
