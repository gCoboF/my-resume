import React from 'react';
import './Resume.css';
import { useTranslation } from 'react-i18next';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import curriculoPdf from '../../assets/Curriculo - Gabriel Cobo Figueiro.pdf';

const Resume: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();

  const socialLinks = [
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
    }
  ];

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-title">{t('resume.title')}</h1>
        
        <div className="resume-social-links">
          {socialLinks.map((link, index) => (
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
          ))}
        </div>
      </div>
      
      <div className="resume-content">
        <object
          data={curriculoPdf}
          type="application/pdf"
          className="resume-pdf"
          aria-label="Curriculum PDF"
        >
          <p>
            {t('resume.pdfError') || 'Your browser does not support PDFs. Please download the PDF to view it:'}
            <a href={curriculoPdf} download>
              {t('resume.downloadPdf') || 'Download PDF'}
            </a>
          </p>
        </object>
      </div>
    </div>
  );
};

export default Resume;