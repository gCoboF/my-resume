import React, { useEffect } from 'react';  // Add useEffect import
import { useTranslation } from 'react-i18next';
import './AboutMe.css';
import Timeline from './Timeline.tsx';
import FintalkExpirience from './Experiences.tsx';
import SkillCard from './SkillCard.tsx';
import Languages from './Languages.tsx';
import ComplementaryCourses from './ComplementaryCourses.tsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import primeira from '../../assets/Me/1.jpeg';
import segunda from '../../assets/Me/2.jpeg';
import terceira from '../../assets/Me/3.jpeg';
import quarta from '../../assets/Me/4.jpeg';


const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#habilidades') {
      const element = document.getElementById('habilidades');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="about-me-container">
      <section className="about-me-hero">
        <div className="about-me-content">
          <div className="about-me-text">
            <h1 className="about-me-title">
              {t('aboutMe.title')}
              <span className="star-icon">✨</span>
            </h1>
            <p className="about-me-description">{t('aboutMe.description')}</p>
          </div>
          
          <div className="about-me-carousel">
            <Slider {...sliderSettings}>
              <div>
                <img src={primeira} alt={t('aboutMe.images.profile1')} />
              </div>
              <div>
                <img src={segunda} alt={t('aboutMe.images.profile2')} />
              </div>
              <div>
                <img src={terceira} alt={t('aboutMe.images.profile3')} />
              </div>
              <div>
                <img src={quarta} alt={t('aboutMe.images.profile4')} />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <Timeline />
      <FintalkExpirience />
      <SkillCard />
      <Languages />
      <ComplementaryCourses />
    </div>
  );
};

export default AboutMe;