import React from 'react';
import { useTranslation } from 'react-i18next';
import './ComplementaryCourses.css';

const ComplementaryCourses: React.FC = () => {
  const { t } = useTranslation();

  // Complementary courses data with translation keys
  const complementaryCourses = [
    {
      titleKey: 'aboutMe.complementaryCourses.javascript.title',
      provider: t('aboutMe.complementaryCourses.javascript.provider') || 'Alura',
      year: t('aboutMe.complementaryCourses.javascript.year') || '2024',
      descriptionKey: 'aboutMe.complementaryCourses.javascript.description',
      certificate: true
    },
    {
      titleKey: 'aboutMe.complementaryCourses.htmlcss.title',
      provider: t('aboutMe.complementaryCourses.htmlcss.provider') || 'Alura',
      year: t('aboutMe.complementaryCourses.htmlcss.year') || '2024',
      descriptionKey: 'aboutMe.complementaryCourses.htmlcss.description',
    },
    {
      titleKey: 'aboutMe.complementaryCourses.aws.title',
      provider: t('aboutMe.complementaryCourses.aws.provider') || 'AWS Skill Builder',
      year: t('aboutMe.complementaryCourses.aws.year') || '2024',
      descriptionKey: 'aboutMe.complementaryCourses.aws.description',
    },
    {
      titleKey: 'aboutMe.complementaryCourses.git.title',
      provider: t('aboutMe.complementaryCourses.git.provider') || 'Ada',
      year: t('aboutMe.complementaryCourses.git.year') || '2024',
      descriptionKey: 'aboutMe.complementaryCourses.git.description',
    },
    {
      titleKey: 'aboutMe.complementaryCourses.apirest.title',
      provider: t('aboutMe.complementaryCourses.apirest.provider') || 'Ada',
      year: t('aboutMe.complementaryCourses.apirest.year') || '2024',
      descriptionKey: 'aboutMe.complementaryCourses.apirest.description',
    }
  ];

  return (
    <section className="complementary-courses-section">
      <h2 className="complementary-courses-title">
        {t('aboutMe.complementaryCourses.title')}
        <span className="book-icon">📚</span>
      </h2>
      
      <div className="courses-grid">
        {complementaryCourses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-header">
              <h3 className="course-title">{t(course.titleKey)}</h3>
              <span className="course-year">{course.year}</span>
            </div>
            <div className="course-provider">{course.provider}</div>
            <p className="course-description">{t(course.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComplementaryCourses;