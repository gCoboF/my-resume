import React from 'react';
import './DevProjects.css';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const DevProjects: React.FC = () => {
  const { t } = useTranslation();

  // Projects data from translations
  const projects = [
    {
      id: 1,
      title: t('devProjects.projects.ufabcAgent.title'),
      description: t('devProjects.projects.ufabcAgent.description'),
      technologies: ['Python', 'LangChain', 'FAISS', 'FastAPI', 'BeautifulSoup'],
      image: "https://private-user-images.githubusercontent.com/120748418/432985889-20a6c82a-967d-47de-9274-4f6fec4d84cb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ0MTYxMzMsIm5iZiI6MTc0NDQxNTgzMywicGF0aCI6Ii8xMjA3NDg0MTgvNDMyOTg1ODg5LTIwYTZjODJhLTk2N2QtNDdkZS05Mjc0LTRmNmZlYzRkODRjYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxMVQyMzU3MTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZjJkYzIyZjc3MGYwMjM4NTk2MDAxZjA1OGE5YzM3ZDM2MjNkMGVlYTkyZTAzMmU5OTdjZmE0NjU3N2MyNmU2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.kFqJ3SdQNpu4u3wGjZbYmwxif9ikUd5IhWl2-sz4NHg",
      github: 'https://github.com/gCoboF/Agente-Inteligente',
      live: ''
    },
    {
      id: 2,
      title: t('devProjects.projects.portfolio.title'),
      description: t('devProjects.projects.portfolio.description'),
      technologies: ['React', 'TypeScript', 'i18n', 'CSS'],
      image: "https://private-user-images.githubusercontent.com/120748418/424770544-72784e3b-241c-45ca-8e79-0d0c38942278.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ0MTcyMzksIm5iZiI6MTc0NDQxNjkzOSwicGF0aCI6Ii8xMjA3NDg0MTgvNDI0NzcwNTQ0LTcyNzg0ZTNiLTI0MWMtNDVjYS04ZTc5LTBkMGMzODk0MjI3OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxMlQwMDE1MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NjQ5M2EwODNhYTYyM2YwODJlMjVjMTg3MzcxM2VkZjQ2ZDJjOTZlMzQ3MWY2OTI1NTg5OWFiMjI3MjY2YzAyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.V7jy1S5zedh_YwYEvxebx4NfN4Vlvt8m9yUqBMyO3QA",
      github: 'https://github.com/gCoboF/my-resume',
      live: 'https://gcobof.github.io/my-resume/'
    },
    {
      id: 3,
      title: t('devProjects.projects.discoteca.title'),
      description: t('devProjects.projects.discoteca.description'),
      technologies: ['HTML', 'CSS', 'JavaScript', 'Swiper.js'],
      image: "https://private-user-images.githubusercontent.com/120748418/424955894-0260952a-2665-4c05-bb93-d206df71c038.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ0MTU3MzIsIm5iZiI6MTc0NDQxNTQzMiwicGF0aCI6Ii8xMjA3NDg0MTgvNDI0OTU1ODk0LTAyNjA5NTJhLTI2NjUtNGMwNS1iYjkzLWQyMDZkZjcxYzAzOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxMVQyMzUwMzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YjFhODkzYTA1MDhlZGFhNzhhMGViOGQ3NDExMDNhYzBkZmY5ODRmMWIxOGZlYjNhNTUwMzlhNjIyOGYxMDRjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.mt7zHaZnLswnC8RQ8mTB-GH54W-nJKarpP2h1Kg9bpA",
      github: 'https://github.com/gCoboF/HTML-CSS---Responsivo',
      live: 'https://gcobof.github.io/HTML-CSS---Responsivo/'
    },
    {
      id: 4,
      title: t('devProjects.projects.cg.title'),
      description: t('devProjects.projects.cg.description'),
      technologies: ['C++', 'OpenGL', 'FreeGLUT', 'STB Image'],
      image: "https://private-user-images.githubusercontent.com/120748418/424968499-16c44217-fab8-4b54-a728-a99f51b9621f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQyNDE3MTEsIm5iZiI6MTc0NDI0MTQxMSwicGF0aCI6Ii8xMjA3NDg0MTgvNDI0OTY4NDk5LTE2YzQ0MjE3LWZhYjgtNGI1NC1hNzI4LWE5OWY1MWI5NjIxZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwOVQyMzMwMTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYWM2OGQ1NjYyN2I2N2Q1NjE1ZGE0OWRlYTk0ZmFkOGVhMDgzNTY0ODg2YWQ3Y2UzZWEyMjgwY2M3MTYyM2FjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.sJHYJa7ph3ILCxkW88Zn7SJqZu0s8it5ZXLoQ1vUN9Q",
      github: 'https://github.com/gCoboF/Projeto-CG-OpenGL',
      live: ''
    },
    {
      id: 5,
      title: t('devProjects.projects.httpServer.title'),
      description: t('devProjects.projects.httpServer.description'),
      technologies: ['Python', 'HTML', 'CSS'],
      image: "https://private-user-images.githubusercontent.com/120748418/424962580-68437ab1-76cf-4986-a6fc-a7a1c20463ee.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ0MTU2NjUsIm5iZiI6MTc0NDQxNTM2NSwicGF0aCI6Ii8xMjA3NDg0MTgvNDI0OTYyNTgwLTY4NDM3YWIxLTc2Y2YtNDk4Ni1hNmZjLWE3YTFjMjA0NjNlZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxMVQyMzQ5MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iODkwNjVjZTNlMzc5OWZiZDRhMWRmNmU0NTU0OTE5N2U0ZjExMjBjNjRkOTExOWI3YmFhMjM1YmM1NThiNjlkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ov3nWeKDEedmquFcWHmtUl-VkPUihgv7BCvKnCYvkWA",
      github: 'https://github.com/gCoboF/ServidorHTTP-python',
      live: ''
    },
    {
      id: 6,
      title: t('devProjects.projects.secretNumber.title'),
      description: t('devProjects.projects.secretNumber.description'),
      technologies: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation'],
      image: "https://private-user-images.githubusercontent.com/120748418/424968499-16c44217-fab8-4b54-a728-a99f51b9621f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ0MTcxNzIsIm5iZiI6MTc0NDQxNjg3MiwicGF0aCI6Ii8xMjA3NDg0MTgvNDI0OTY4NDk5LTE2YzQ0MjE3LWZhYjgtNGI1NC1hNzI4LWE5OWY1MWI5NjIxZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxMlQwMDE0MzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMDlhZGZkMDNkY2YxN2RjZmIzNzlkNzY3YzI3NGMxY2ZhYjc1YWI2NDkyNTE1N2NiOTBlZTViODRhMzhjNDBkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.1yjb6B_SavicATl8Yqae72IJNfMrRJzyK_li0G4t0Sk",
      github: 'https://github.com/gCoboF/JS---SecretNumber',
      live: 'https://gcobof.github.io/JS---SecretNumber/'
    },
    {
      id: 7,
      title: t('devProjects.projects.coboCubo.title'),
      description: t('devProjects.projects.coboCubo.description'),
      technologies: ['Unity', 'C#', '3D Game Development'],
      image: "https://private-user-images.githubusercontent.com/120748418/425025085-d7ba650b-35cb-43fe-87a6-a51e8fb80b9f.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ0MTU4MzQsIm5iZiI6MTc0NDQxNTUzNCwicGF0aCI6Ii8xMjA3NDg0MTgvNDI1MDI1MDg1LWQ3YmE2NTBiLTM1Y2ItNDNmZS04N2E2LWE1MWU4ZmI4MGI5Zi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxMVQyMzUyMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZmQxMjM0NThhNGNiZTI5M2RjZWEzMGYyNWNlYTRkN2NmODk0NzJlMjQwY2QyNDlmNWQ1Y2UxNDA1ZTkwMjk0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.TFq8fQD-Jr4B7EQCsoSv6GaoKX77rKgBjXe7BAKQ_s4",
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