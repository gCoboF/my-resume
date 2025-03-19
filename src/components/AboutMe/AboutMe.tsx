import React from 'react';
import './AboutMe.css';
import { useTranslation } from 'react-i18next';

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="about-me-page">
      <main className="about-me-content">
        <section className="about-me-section">
          <div className="container">
            <h1>{t('aboutMe.title')}</h1>
            <div className="about-me-grid">
              <div className="about-me-text">
                <p>{t('aboutMe.intro')}</p>
                <p>{t('aboutMe.experience')}</p>
                <p>{t('aboutMe.skills')}</p>
              </div>
              <div className="about-me-image">
                {/* You can add your profile image here */}
                <div className="profile-image-placeholder"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-me-details">
          <div className="container">
            <h2>{t('aboutMe.background.title')}</h2>
            <p>{t('aboutMe.background.content')}</p>
            
            <h2>{t('aboutMe.education.title')}</h2>
            <ul className="education-list">
              <li>
                <h3>{t('aboutMe.education.degree1.name')}</h3>
                <p>{t('aboutMe.education.degree1.institution')}</p>
                <p>{t('aboutMe.education.degree1.period')}</p>
              </li>
              <li>
                <h3>{t('aboutMe.education.degree2.name')}</h3>
                <p>{t('aboutMe.education.degree2.institution')}</p>
                <p>{t('aboutMe.education.degree2.period')}</p>
              </li>
            </ul>
            
            <h2>{t('aboutMe.interests.title')}</h2>
            <p>{t('aboutMe.interests.content')}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutMe;