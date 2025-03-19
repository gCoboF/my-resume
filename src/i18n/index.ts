import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'about': 'About me',
      'projects': 'Projects',
      'experience': 'Experience',
      'resume': 'Resume'
    }
  },
  pt: {
    translation: {
      'about': 'Sobre mim',
      'projects': 'Projetos',
      'experience': 'Experiência',
      'resume': 'Currículo'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;