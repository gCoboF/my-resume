import React from 'react';
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
import explosao from '../../assets/explosao.png';

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
                <img src={explosao} alt={t('aboutMe.images.profile1')} />
              </div>
              <div>
                <img src={explosao} alt={t('aboutMe.images.profile2')} />
              </div>
              <div>
                <img src={explosao} alt={t('aboutMe.images.profile3')} />
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