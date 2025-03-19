import React, { useState } from 'react';
import './Header.css';
// Import SVG using TypeScript declaration
import iconLeft from '../../assets/icon-left.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
  const { t, i18n }: { t: (key: string) => string, i18n: any } = useTranslation();
  
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="icon-left">
          <Link to="/">
            <img 
              src={iconLeft as unknown as string}
              alt="Ícone Esquerda"
            />
          </Link>
        </div>

        <button 
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="desktop-nav">
          <ul className="nav-list">
            <li><Link to="/about">{t('header.about')}</Link></li>
            <li 
              className="projects-menu-container"
              onMouseEnter={() => setIsProjectsMenuOpen(true)}
              onMouseLeave={() => setIsProjectsMenuOpen(false)}
            >
              <a href="#projetos">
                {t('header.projects')} <span className="arrow-icon">▾</span>
              </a>
              {isProjectsMenuOpen && (
                <div className="projects-dropdown active">
                  <Link to="/dev-projects">{t('header.dev_projects')}</Link>
                  <Link to="/design-projects">{t('header.design_projects')}</Link>
                </div>
              )}
            </li>
            <li><Link to="/resume">{t('header.resume')}</Link></li>
          </ul>
        </nav>

        <div className="language-menu">
          <button 
            className="language-button"
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
          >
            {i18n.language === 'en' ? 'en-us' : 'pt-br'}
          </button>
          
          {isLanguageMenuOpen && (
            <div className="language-dropdown">
              <button onClick={() => handleLanguageChange('pt')}>PT-BR</button>
              <button onClick={() => handleLanguageChange('en')}>EN-US</button>
            </div>
          )}
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <nav>
            <ul className="nav-list">
              <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>{t('header.about')}</Link></li>
              <li className="projects-menu-container">
                <button 
                  className={`mobile-submenu-trigger ${isProjectsMenuOpen ? 'active' : ''}`}
                  onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)}
                >
                  {t('header.projects')} <span className={`arrow-icon ${isProjectsMenuOpen ? 'active' : ''}`}>▾</span>
                </button>
                <div className={`projects-dropdown ${isProjectsMenuOpen ? 'active' : ''}`}>
                  <Link to="/dev-projects" onClick={() => setIsMobileMenuOpen(false)}>{t('header.dev_projects')}</Link>
                  <Link to="/design-projects" onClick={() => setIsMobileMenuOpen(false)}>{t('header.design_projects')}</Link>
                </div>
              </li>
              <li><Link to="/resume" onClick={() => setIsMobileMenuOpen(false)}>{t('header.resume')}</Link></li>
            </ul>
          </nav>

          <div className="language-menu">
            <button 
              className="language-button"
              onClick={() => handleLanguageChange(i18n.language === 'en' ? 'pt' : 'en')}
            >
              {i18n.language === 'en' ? 'en-us' : 'pt-br'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;