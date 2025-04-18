import React, { useState, useEffect, useRef } from 'react';
import './Education.css';
import { useTranslation } from 'react-i18next';
import etecLogo from '../../assets/Logos/etec-logo.jpg';
import uniLogo from '../../assets/Logos/Ufabc_logo.png';

const Education = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const educations = [
    {
      id: "etec-experience",
      logo: etecLogo,
      logoAlt: "ETEC Logo",
      title: t('experiences.etec.title'),
      subtitle: t('experiences.etec.subtitle'),
      paragraphs: [
        t('experiences.etec.paragraph1'),
        t('experiences.etec.paragraph2')
      ],
      techTitle: t('experiences.technologiesLearned'),
      techs: [
        { name: t('experiences.technologies.html'), className: "html" },
        { name: t('experiences.technologies.css'), className: "css" },
        { name: t('experiences.technologies.java'), className: "java" },
        { name: t('experiences.technologies.androidStudio'), className: "android" },
        { name: t('experiences.technologies.php'), className: "php" },
        { name: t('experiences.technologies.sql'), className: "sql" }
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
    }
  ];

  useEffect(() => {
    // Start autoplay when component mounts
    play();
    
    // Clean up autoplay when component unmounts
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [activeIndex]);

  const play = () => {
    autoPlayRef.current = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % educations.length;
      goToEducation(nextIndex);
    }, 8000); // Change slide every 8 seconds
  };

  const goToEducation = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  const findEducationIndexById = (id: string) => {
    return educations.findIndex(edu => edu.id === id);
  };

  useEffect(() => {
    // @ts-ignore
    window.goToEducationById = (id: string) => {
      const index = findEducationIndexById(id);
      if (index !== -1) {
        goToEducation(index);
      }
    };

    return () => {
      // @ts-ignore
      delete window.goToEducationById;
    };
  }, []);

  return (
    <div className="education-section">
      <h2 className="education-main-title">{t('education.title') || 'Education'}</h2>
      
      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselRef}>
          {educations.map((education, index) => (
            <div key={index} className="education-item">
              <div className="education-container">
                <div className="education-header">
                  <img 
                    src={education.logo} 
                    alt={education.logoAlt} 
                    className="education-logo"
                  />
                  <div className="education-title">
                    <h2>{education.title}</h2>
                    <h3>{education.subtitle}</h3>
                  </div>
                </div>
                
                <div className="education-description">
                  {education.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
                
                <div className="tech-stack">
                  <h3>{education.techTitle}</h3>
                  <div className="tech-list">
                    {education.techs.map((tech, tIndex) => (
                      <span 
                        key={tIndex} 
                        className={`tech-tag ${tech.className}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="carousel-dots">
          {educations.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToEducation(index)}
              aria-label={`Go to education ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;