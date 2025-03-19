import React, { useState, useRef, useEffect } from 'react';
import './SkillCards.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const SkillCards: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skills = [
    { name: 'JavaScript', description: 'Web Development', icon: '🟨', link: '#javascript' },
    { name: 'React', description: 'Frontend Development', icon: '⚛️', link: '#react' },
    { name: 'n8n', description: 'Workflow Automation', icon: '🔄', link: '#n8n' },
    { name: 'Photoshop', description: 'Digital Design', icon: '🎨', link: '#photoshop' },
    { name: 'Python', description: 'AI & Data Science', icon: '🐍', link: '#python' },
    { name: 'SQL', description: 'Database Management', icon: '🗄️', link: '#sql' },
    { name: 'Prompt Engineering', description: 'AI Interaction & LLMs', icon: '🤖', link: '#prompt' },
    { name: t('skills.seeMore'), description: t('skills.seeMoreDesc'), icon: '+', link: '/skills' }
  ];

  const handleScroll = () => {
    if (gridRef.current && isMobile) {
      const scrollPosition = gridRef.current.scrollLeft;
      const cardWidth = 280;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const handleSeeMore = () => {
    navigate('/dev-projects');
    window.scrollTo(0, 0);
  };

  return (
    <section className="skills-section">
      <h2 className="skills-title">{t('skills.title')}</h2>
      <div 
        className="skills-grid" 
        ref={gridRef}
        onScroll={handleScroll}
      >
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`skill-card ${skill.name === t('skills.seeMore') ? 'see-more-card' : ''}`}
            onClick={skill.name === t('skills.seeMore') ? handleSeeMore : undefined}
          >
            <div className="skill-content">
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
      {isMobile && (
        <>
          <div className="carousel-dots">
            {skills.slice(0, -1).map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  gridRef.current?.scrollTo({
                    left: index * 280,
                    behavior: 'smooth'
                  });
                }}
              />
            ))}
          </div>
          <button onClick={handleSeeMore} className="see-more-button">
            {t('skills.seeMore')} +
          </button>
        </>
      )}
    </section>
  );
};

export default SkillCards;