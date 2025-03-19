import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './translations/locales/en.ts';
import { pt } from './translations/locales/pt.ts';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en.translation
      },
      pt: {
        translation: pt.translation
      }
    },
    lng: 'pt', // idioma padrão
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;