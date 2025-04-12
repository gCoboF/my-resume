import React from 'react';
import { useTranslation } from 'react-i18next';
import './Languages.css';

const Languages: React.FC = () => {
  const { t } = useTranslation();

  const languages = [
    {
      name: t('aboutMe.languages.portuguese.name'),
      level: t('aboutMe.languages.portuguese.level'),
      skills: t('aboutMe.languages.portuguese.skills', { returnObjects: true }) || []
    },
    {
      name: t('aboutMe.languages.english.name'),
      level: t('aboutMe.languages.english.level'),
      skills: t('aboutMe.languages.english.skills', { returnObjects: true }) || [
        { name: 'Leitura avançada', level: 'advanced' },
        { name: 'Fala Intermediária', level: 'intermediate' }
      ]
    },
    {
      name: t('aboutMe.languages.italian.name'),
      level: t('aboutMe.languages.italian.level'),
      skills: t('aboutMe.languages.italian.skills', { returnObjects: true }) || []
    }
  ];

  return (
    <section className="languages-section">
      <h2 className="languages-title">
        {t('aboutMe.languages.title')}
        <span className="languages-icon">🌐</span>
      </h2>
      
      <div className="languages-container">
        {languages.map((language, index) => (
          <div key={index} className="language-card">
            <div className="language-header">
              <h3 className="language-name">{language.name}</h3>
              <span className="language-level">{language.level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;