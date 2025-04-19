import React from 'react';
import './DevProjects.css';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import cobo from '../../assets/DevProjects/Cobo.jpg';
import agent from '../../assets/DevProjects/ufabara.png';
import site from '../../assets/DevProjects/Esse site.png';
import secretNumber from '../../assets/DevProjects/JSecret.png';
import servidor from '../../assets/DevProjects/servidor.png';
import discoteca from '../../assets/DevProjects/discoteca.png';


const DevProjects: React.FC = () => {
  const { t } = useTranslation();

  // Projects data from translations
  const projects = [
    {
      id: 1,
      title: t('devProjects.projects.ufabcAgent.title'),
      description: t('devProjects.projects.ufabcAgent.description'),
      technologies: ['Python', 'LangChain', 'FAISS', 'FastAPI', 'BeautifulSoup'],
      image: agent,
      github: 'https://github.com/gCoboF/Agente-Inteligente',
      live: ''
    },
    {
      id: 2,
      title: t('devProjects.projects.portfolio.title'),
      description: t('devProjects.projects.portfolio.description'),
      technologies: ['React', 'TypeScript', 'i18n', 'CSS'],
      image: site,
      github: 'https://github.com/gCoboF/my-resume',
      live: 'https://gcobof.github.io/my-resume/'
    },
    {
      id: 3,
      title: t('devProjects.projects.discoteca.title'),
      description: t('devProjects.projects.discoteca.description'),
      technologies: ['HTML', 'CSS', 'JavaScript', 'Swiper.js'],
      image: discoteca,
      github: 'https://github.com/gCoboF/HTML-CSS---Responsivo',
      live: 'https://gcobof.github.io/HTML-CSS---Responsivo/'
    },
    {
      id: 4,
      title: t('devProjects.projects.cg.title'),
      description: t('devProjects.projects.cg.description'),
      technologies: ['C++', 'OpenGL', 'FreeGLUT', 'STB Image'],
      image: cobo,
      github: 'https://github.com/gCoboF/Projeto-CG-OpenGL',
      live: ''
    },
    {
      id: 5,
      title: t('devProjects.projects.httpServer.title'),
      description: t('devProjects.projects.httpServer.description'),
      technologies: ['Python', 'HTML', 'CSS'],
      image: servidor,
      github: 'https://github.com/gCoboF/ServidorHTTP-python',
      live: ''
    },
    {
      id: 6,
      title: t('devProjects.projects.secretNumber.title'),
      description: t('devProjects.projects.secretNumber.description'),
      technologies: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation'],
      image: secretNumber,
      github: 'https://github.com/gCoboF/JS---SecretNumber',
      live: 'https://gcobof.github.io/JS---SecretNumber/'
    },
    {
      id: 7,
      title: t('devProjects.projects.coboCubo.title'),
      description: t('devProjects.projects.coboCubo.description'),
      technologies: ['Unity', 'C#', '3D Game Development'],
      image: cobo,
      github: 'https://github.com/gCoboF/Jogo-Unity-C---Cubo',
      live: ''
    },
    {
      id: 8,
      title: t('devProjects.projects.crisAdventures.title'),
      description: t('devProjects.projects.crisAdventures.description'),
      technologies: ['Godot', 'GDScript', 'Pixel Art', 'Game Design'],
      image: "https://img.itch.zone/aW1nLzE0MzQxMzEwLnBuZw==/original/pYmXqP.png",
      github: 'https://github.com/Lucack/Cris-s-Adventure',
      live: 'https://lucack.itch.io/cris-adventures'
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