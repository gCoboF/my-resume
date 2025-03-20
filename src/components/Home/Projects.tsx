import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">{t('projects.title')}</h2>
      <p className="projects-intro">{t('projects.intro')}</p>
      
      <div className="cards-container">
        <Link to="/dev-projects" className="card dev-card" onClick={handleClick}>
          <div className="card-icon">💻</div>
          <h3>{t('projects.dev.title')}</h3>
          <p>{t('projects.dev.description')}</p>
          <span className="view-more-text">{t('projects.seeProjects')}</span>
        </Link>
        
        <Link to="/design-projects" className="card design-card" onClick={handleClick}>
          <div className="card-icon">🎨</div>
          <h3>{t('projects.design.title')}</h3>
          <p>{t('projects.design.description')}</p>
          <span className="view-more-text">{t('projects.seeProjects')}</span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
