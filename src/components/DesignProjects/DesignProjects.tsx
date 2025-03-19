import React from 'react';
import './DesignProjects.css';
import { useTranslation } from 'react-i18next';

const DesignProjects: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();

  // Sample design projects data - replace with your actual projects
  const designProjects = [
    {
      id: 1,
      title: 'UI/UX Design Project',
      description: 'A complete redesign of a mobile application interface with focus on user experience',
      tools: ['Figma', 'Adobe XD', 'Photoshop'],
      image: 'https://via.placeholder.com/600x400',
      behance: 'https://behance.net/yourusername/project1',
      live: 'https://project1-demo.com'
    },
    {
      id: 2,
      title: 'Brand Identity',
      description: 'Complete brand identity design including logo, color palette, and brand guidelines',
      tools: ['Illustrator', 'InDesign', 'Photoshop'],
      image: 'https://via.placeholder.com/600x400',
      behance: 'https://behance.net/yourusername/project2'
    },
    {
      id: 3,
      title: 'Web Design Concept',
      description: 'Modern web design concept for an e-commerce platform',
      tools: ['Figma', 'Sketch', 'Illustrator'],
      image: 'https://via.placeholder.com/600x400',
      behance: 'https://behance.net/yourusername/project3',
      live: 'https://project3-demo.com'
    }
  ];

  return (
    <div className="design-projects-page">
      <main className="design-projects-content">
        <section className="design-projects-hero">
          <div className="container">
            <h1 className="design-projects-title">{t('designProjects.title')}</h1>
            <p className="design-projects-intro">{t('designProjects.description')}</p>
          </div>
        </section>

        <section className="design-projects-grid">
          <div className="container">
            <div className="projects-list">
              {designProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h2>{project.title}</h2>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.tools.map((tool, index) => (
                        <span key={index} className="tech-tag">{tool}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.behance} target="_blank" rel="noopener noreferrer" className="project-link">
                        🎨 Behance
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                          🌐 Live Preview
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

export default DesignProjects;