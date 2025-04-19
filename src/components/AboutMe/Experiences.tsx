import React, { useState, useEffect, useRef } from 'react';
import './Experiences.css';
import { useTranslation } from 'react-i18next';
import fintalkLogo from '../../assets/Logos/fintalk-logo.png';
import etecLogo from '../../assets/Logos/etec-logo.jpg';
import uniLogo from '../../assets/Logos/Ufabc_logo.png';

const Experiences = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const experiences = [
    {
      id: "etec-experience",
      logo: etecLogo,
      logoAlt: t('experiences.etec.logoAlt'),
      title: t('experiences.etec.title'),
      subtitle: t('experiences.etec.subtitle'),
      paragraphs: [
        t('experiences.etec.paragraph1'),
        t('experiences.etec.paragraph2')
      ],
      techTitle: t('experiences.technologiesLearned'),
      techs: [
        { name: t('technologies.html'), className: "html" },
        { name: t('technologies.css'), className: "css" },
        { name: t('technologies.java'), className: "java" },
        { name: t('technologies.androidStudio'), className: "android" },
        { name: t('technologies.php'), className: "php" },
        { name: t('technologies.sql'), className: "sql" }
      ]
    },
    {
      id: "scitech-experience",
      logo: uniLogo,
      logoAlt: "University Logo",
      title: t('experiences.sciTech.title'),
      subtitle: t('experiences.sciTech.subtitle'),
      paragraphs: [
        t('experiences.sciTech.paragraph1'),
        t('experiences.sciTech.paragraph2')
      ],
      techTitle: t('experiences.areasOfStudy'),
      techs: [
        { name: t('experiences.subjects.physics'), className: "physics" },
        { name: t('experiences.subjects.calculus'), className: "calculus" },
        { name: t('experiences.subjects.chemistry'), className: "chemistry" },
        { name: t('experiences.subjects.mechanics'), className: "mechanics" },
        { name: t('experiences.subjects.thermodynamics'), className: "thermodynamics" },
        { name: t('experiences.subjects.statistics'), className: "statistics" }
      ]
    },
    {
      id: "compsci-experience",
      logo: uniLogo,
      logoAlt: "Computer Science Logo",
      title: t('experiences.compSci.title'),
      subtitle: t('experiences.compSci.subtitle'),
      paragraphs: [
        t('experiences.compSci.paragraph1'),
        t('experiences.compSci.paragraph2')
      ],
      techTitle: t('experiences.technologiesAndConcepts'),
      techs: [
        { name: t('experiences.technologies.java'), className: "java" },
        { name: t('experiences.technologies.oop'), className: "oop" },
        { name: t('experiences.technologies.python'), className: "python" },
        { name: t('experiences.technologies.sql'), className: "sql" },
        { name: t('experiences.technologies.llm'), className: "llm" }
      ]
    },
    {
      id: "monitoria-experience",
      logo: uniLogo,
      logoAlt: t('experiences.monitoriaExperience.logoAlt'),
      title: t('experiences.monitoriaExperience.title'),
      subtitle: t('experiences.monitoriaExperience.subtitle'),
      paragraphs: [
        t('experiences.monitoriaExperience.paragraph1'),
        t('experiences.monitoriaExperience.paragraph2')
      ],
      techTitle: t('experiences.techTitles.developedSkills'),
      techs: [
        { name: t('experiences.technologies.teaching'), className: "teaching" },
        { name: t('experiences.technologies.accessibility'), className: "accessibility" },
        { name: t('experiences.technologies.communication'), className: "communication" },
        { name: t('experiences.technologies.patience'), className: "patience" },
        { name: t('experiences.technologies.empathy'), className: "empathy" }
      ]
    },
    {
      id: "ieee-experience",
      logo: uniLogo,
      logoAlt: t('experiences.ieeeExperience.logoAlt'),
      title: t('experiences.ieeeExperience.title'),
      subtitle: t('experiences.ieeeExperience.subtitle'),
      paragraphs: [
        t('experiences.ieeeExperience.paragraph1'),
        t('experiences.ieeeExperience.paragraph2')
      ],
      techTitle: t('experiences.techTitles.toolsAndSkills'),
      techs: [
        { name: t('experiences.technologies.photoshop'), className: "photoshop" },
        { name: t('experiences.technologies.illustrator'), className: "illustrator" },
        { name: t('experiences.technologies.uiux'), className: "uiux" },
        { name: t('experiences.technologies.graphicDesign'), className: "graphic" },
        { name: t('experiences.technologies.visualCommunication'), className: "visual" }
      ]
    },
    {
      id: "fintalk-experience",
      logo: fintalkLogo,
      logoAlt: "Fintalk Logo",
      title: t('experiences.fintalk.title'),
      subtitle: t('experiences.fintalk.subtitle'),
      paragraphs: [
        t('experiences.fintalk.paragraph1'),
        t('experiences.fintalk.paragraph2'),
        t('experiences.fintalk.paragraph3')
      ],
      techTitle: t('experiences.technologiesUsed'),
      techs: [
        { name: t('experiences.technologies.javascript'), className: "javascript" },
        { name: t('experiences.technologies.n8n'), className: "n8n" },
        { name: t('experiences.technologies.python'), className: "python" },
        { name: t('experiences.technologies.datadog'), className: "datadog" },
        { name: t('experiences.technologies.dataAnalysis'), className: "analysis" },
        { name: t('experiences.technologies.logMonitoring'), className: "monitoring" },
        { name: t('experiences.technologies.alertConfig'), className: "alerts" },
        { name: t('experiences.technologies.api'), className: "api" }
      ]
    }
];

  // Function to navigate to a specific experience
  const goToExperience = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const play = () => {
      autoPlayRef.current = setTimeout(() => {
        const nextIndex = (activeIndex + 1) % experiences.length;
        goToExperience(nextIndex);
      }, 8000); // Change slide every 8 seconds
    };

    play();

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [activeIndex, experiences.length]);

  // Method to find experience index by ID
  const findExperienceIndexById = (id: string) => {
    return experiences.findIndex(exp => exp.id === id);
  };

  // Expose method to navigate to experience by ID (for Timeline component)
  React.useEffect(() => {
    // @ts-ignore
    window.goToExperienceById = (id: string) => {
      const index = findExperienceIndexById(id);
      if (index !== -1) {
        goToExperience(index);
      }
    };

    return () => {
      // @ts-ignore
      delete window.goToExperienceById;
    };
  }, []);

  // Update the return section of your component
  return (
    <section className="experiences-container">
      <div className="carousel-wrapper">
        {/* Place carousel dots outside the carousel but inside the wrapper */}
        <div className="carousel-dots">
          {experiences.map((_, dotIndex) => (
            <button 
              key={dotIndex} 
              className={`carousel-dot ${dotIndex === activeIndex ? 'active' : ''}`}
              onClick={() => goToExperience(dotIndex)}
              aria-label={`Go to experience ${dotIndex + 1}`}
            />
          ))}
        </div>
        
        <div className="carousel" ref={carouselRef}>
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              id={experience.id} 
              className="experience-section"
            >
              <div className="experience-container">
                <div className="experience-header">
                  <img src={experience.logo} alt={experience.logoAlt} className="experience-logo" />
                  <div className="experience-title">
                    <h2>{experience.title}</h2>
                    <h3>{experience.subtitle}</h3>
                  </div>
                </div>

                <div className="experience-description">
                  {experience.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>

                <div className="tech-stack">
                  <h3>{experience.techTitle}</h3>
                  <div className="tech-list">
                    {experience.techs.map((tech, tIndex) => (
                      <span key={tIndex} className={`tech-tag ${tech.className}`}>{tech.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;