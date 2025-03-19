import React from 'react';
import './Resume.css';
import { useTranslation } from 'react-i18next';
//import { FaDownload } from 'react-icons/fa';

const Resume: React.FC = () => {
  const { t } = useTranslation();

  // Sample resume data - replace with your actual information
  const experiences = [
    {
      id: 1,
      title: 'Junior Developer',
      company: 'Startup Inc.',
      period: '2016 - 2018',
      description: 'Assisted in developing web applications and maintained existing codebases. Worked with HTML, CSS, and JavaScript.'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Master of Computer Science',
      institution: 'UFAC',
      period: '2014 - 2016',
      description: 'Specialized in Web'
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Science',
      institution: 'UFABC',
      period: '2010 - 2014',
      description: 'Focused on Programming'
    }
  ];

  const skills = [
    { id: 1, name: 'React', level: 90 },
    { id: 2, name: 'TypeScript', level: 85 },
    { id: 3, name: 'JavaScript', level: 95 },
    { id: 4, name: 'HTML/CSS', level: 90 },
    { id: 5, name: 'Node.js', level: 80 },
    { id: 6, name: 'UI/UX Design', level: 75 }
  ];

  return (
    <div className="resume-page">
      <main className="resume-content">
        <section className="resume-hero">
          <div className="container">
            <h1 className="resume-title">{t('resume.title')}</h1>
            <p className="resume-intro">{t('resume.intro')}</p>
          </div>
        </section>

        <section className="resume-section">
          <div className="container">
            <h2 className="section-title">{t('resume.experience.title')}</h2>
            <div className="timeline">
              {experiences.map(exp => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="item-title">{exp.title}</h3>
                    <div className="item-meta">
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                    <p className="item-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="resume-section education-section">
          <div className="container">
            <h2 className="section-title">{t('resume.education.title')}</h2>
            <div className="timeline">
              {education.map(edu => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="item-title">{edu.degree}</h3>
                    <div className="item-meta">
                      <span className="institution">{edu.institution}</span>
                      <span className="period">{edu.period}</span>
                    </div>
                    <p className="item-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="resume-section skills-section">
          <div className="container">
            <h2 className="section-title">{t('resume.skills.title')}</h2>
            <div className="skills-grid">
              {skills.map(skill => (
                <div key={skill.id} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-level" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;