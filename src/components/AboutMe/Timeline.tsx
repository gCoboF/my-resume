import React from 'react';
import { useTranslation } from 'react-i18next';
import './Timeline.css';

const Timeline: React.FC = () => {
  const { t } = useTranslation();

  // Get timeline events from translation file
  const timelineEvents = t('timeline.events', { returnObjects: true }) || [
    {
      year: '2019 - 2020',
      title: 'Desenvolvimento de Sistemas',
      description: 'ETEC de Mauá',
      targetId: 'etec-experience'
    },
    {
      year: '2021 - 2026',
      title: 'Bacharelados UFABC',
      description: 'Ciência e Tecnologia / Computação',
      targetId: 'compsci-experience',
      secondaryTargetId: 'scitech-experience'
    },
    {
      year: '2023 - 2024',
      title: 'Monitoria Inclusiva',
      description: 'Universidade Federal do ABC (UFABC)',
      targetId: 'monitoria-experience'
    },
    {
      year: '2024 - 2025',
      title: 'Designer IEEE',
      description: 'IEEE UFABC',
      targetId: 'ieee-experience'
    },
    {
      year: '2024 - Present',
      title: 'Fintalk',
      description: 'Estágio em Desenvolvimento',
      targetId: 'fintalk-experience'
    }
  ];

  const scrollToExperience = (targetId: string, secondaryTargetId?: string) => {
    // Use the global method exposed by Experiences component
    // @ts-ignore
    if (window.goToExperienceById) {
      // @ts-ignore
      window.goToExperienceById(targetId);
    }
    
    // Also scroll to the experiences section
    const experiencesSection = document.querySelector('.experiences-container');
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="timeline-section">
      <div className="timeline-horizontal">
        {timelineEvents.map((event, index) => (
          <div 
            key={index} 
            className="timeline-event-horizontal"
            onClick={() => scrollToExperience(event.targetId, event.secondaryTargetId)}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;