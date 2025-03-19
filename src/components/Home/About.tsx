//import React, { useEffect } from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';
import SkillCards from './SkillCards.tsx';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  return (
    <section className="about">
      <div className="about-intro">
        <h2 className="about-title">{t('about.title')}</h2>
        <p className="about-brief">{t('about.brief')}</p>
        <button className="know-more-btn" onClick={handleKnowMore}>
          {t('about.knowMore')}
        </button>
      </div>
      
      <SkillCards />
    </section>
  );
};

export default About;
