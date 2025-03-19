import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';

const Contact: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();

  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: <img src={linkedinIcon as unknown as string} alt="LinkedIn" className="contact-img" />,
      url: 'https://www.linkedin.com/in/gabriel-cobo-figueiro-9815402a5/',
      label: '/in/gabriel-cobo-figueiro',
      isExternal: true
    },
    {
      name: 'GitHub',
      icon: <img src={githubIcon as unknown as string} alt="GitHub" className="contact-img" />,
      url: 'https://github.com/gcobof',
      label: '@gcobof',
      isExternal: true
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:gabrielcobof@gmail.com',
      label: 'gabrielcobof@gmail.com',
      isExternal: true
    },
    {
      name: t('contact.resume'),
      icon: '📄',
      url: '/resume',
      label: t('contact.seeResume'),
      isExternal: false
    }
  ];

  return (
    <footer className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="contact-description">{t('contact.description')}</p>
        </div>
        
        <div className="contact-grid">
          {contactLinks.map((link, index) => (
            link.isExternal ? (
              <a 
                key={index}
                href={link.url}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">{link.icon}</span>
                <span className="contact-name">{link.label}</span>
              </a>
            ) : (
              <Link 
                key={index}
                to={link.url}
                className="contact-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="contact-icon">{link.icon}</span>
                <span className="contact-name">{link.label}</span>
              </Link>
            )
          ))}
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">© {new Date().getFullYear()} Gabriel Cobo</p>
      </div>
    </footer>
  );
};

export default Contact;
