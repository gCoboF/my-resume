import React from 'react';
import './DevProjects.css';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const DevProjects: React.FC = () => {
  const { t } = useTranslation();

  // Sample projects data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A web application built with React and TypeScript',
      technologies: ['React', 'TypeScript', 'CSS'],
      image: 'https://via.placeholder.com/600x400',
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1-demo.com'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Mobile app developed with React Native',
      technologies: ['React Native', 'JavaScript', 'Firebase'],
      image: 'https://via.placeholder.com/600x400',
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2-demo.com'
    }
  ];

  return (
    <div className="dev-projects-page">
      <main className="dev-projects-content">
        <section className="dev-projects-hero">
          <div className="container">
            <h1 className="dev-projects-title">{t('devProjects.title')}</h1>
            <p className="dev-projects-intro">{t('devProjects.intro')}</p>
          </div>
        </section>

        <section className="dev-projects-grid">
          <div className="container">
            <div className="projects-list">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h2>{project.title}</h2>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub /> GitHub
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
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

export default DevProjects;