import React, { useEffect, useState, useMemo } from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';
// import explosao from '../assets/explosao.png';

const Hero: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  const colors = useMemo(() => [
    'var(--primary-orange)',  
    'var(--primary-green)',   
    'var(--primary-red)',  
    'var(--primary-pink)'   
  ], []);

  const roles = useMemo(() => [
    t('hero.role'),
    t('hero.ai'),
    t('hero.design'),
    t('hero.tech')
  ], [t]);

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting && currentIndex <= currentRole.length) {
        currentText = currentRole.substring(0, currentIndex);
        currentIndex++;
      } else if (isDeleting && currentIndex >= 0) {
        currentText = currentRole.substring(0, currentIndex);
        currentIndex--;
      }

      setText(currentText);

      if (currentIndex === currentRole.length + 1) {
        timeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
        return;
      }

      if (currentIndex === -1) {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        currentIndex = 0;
      }

      const speed = isDeleting ? 100 : 200;
      timeout = setTimeout(type, speed);
    };

    type();
    return () => clearTimeout(timeout);
  }, [roleIndex, roles]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="subtitle">{t('hero.hello')}</h2>
          <h1 className="title">Gabriel Cobo Figueiro</h1>
          <h3 className="role" style={{ color: colors[roleIndex] }}>
            {text}<span className="cursor" style={{ color: colors[roleIndex] }}>|</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;