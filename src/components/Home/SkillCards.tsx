import React, { useState, useRef, useEffect } from 'react';
import './SkillCards.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaPython, FaReact, FaDatabase} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { MdAutoFixHigh} from 'react-icons/md';


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
    { name: 'TypeScript', description: 'Web Development', icon: <SiTypescript />, link: '#javascript' },
    { name: 'React', description: 'Frontend Development', icon: <FaReact />, link: '#react' },
    { name: 'n8n', description: 'Workflow Automation', icon: <MdAutoFixHigh />, link: '#n8n' },
    { name: 'Photoshop', description: 'Digital Design', icon: '🎨', link: '#photoshop' },
    { name: 'Python', description: 'AI & Data Science', icon: <FaPython />, link: '#python' },
    { name: 'SQL', description: 'Database Management', icon: <FaDatabase />, link: '#sql' },
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
    navigate('/about#habilidades');  // Changed to match the skills section ID
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
        <button onClick={handleSeeMore} className="see-more-button">
          {t('skills.seeMore')} +
        </button>
      )}
    </section>
  );
};

export default SkillCards;