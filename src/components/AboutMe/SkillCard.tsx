import React from 'react';
import './SkillCard.css';
import { useTranslation } from 'react-i18next';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiDatadog, SiTypescript, SiFlutter, SiFirebase } from 'react-icons/si';
import { MdMonitorHeart, MdApi, MdAutoFixHigh, MdGroups, MdLightbulb } from 'react-icons/md';
import { BsCodeSquare,  BsKanban } from 'react-icons/bs';

const SkillCard = () => {
  const { t } = useTranslation();

  // Technical skills
  const technicalSkills = [
    { 
      name: "TypeScript / JavaScript", 
      className: "javascript", 
      icon: <SiTypescript />,
      context: t('skills.context.javascript')
    },
    { 
      name: t('experiences.technologies.java'), 
      className: "java", 
      icon: <FaJava />,
      context: t('skills.context.java')
    },
    { 
      name: t('experiences.technologies.python'), 
      className: "python", 
      icon: <FaPython />,
      context: t('skills.context.python')
    },
    { 
      name: "Flutter", 
      className: "flutter", 
      icon: <SiFlutter />,
      context: t('skills.context.flutter')
    },
    { 
      name: "React", 
      className: "react", 
      icon: <FaReact />,
      context: t('skills.context.react')
    },
    { 
      name: t('experiences.technologies.sql'), 
      className: "sql", 
      icon: <FaDatabase />,
      context: t('skills.context.sql')
    },
    { 
      name: "Firebase", 
      className: "firebase", 
      icon: <SiFirebase />,
      context: t('skills.context.firebase')
    },
    { 
      name: "Git", 
      className: "git", 
      icon: <FaGitAlt />,
      context: t('skills.context.git')
    }
  ];

  // Platform and tools skills
  const platformSkills = [
    { 
      name: t('experiences.technologies.html'), 
      className: "html", 
      icon: <FaHtml5 />,
      context: t('skills.context.html')
    },
    { 
      name: t('experiences.technologies.css'), 
      className: "css", 
      icon: <FaCss3Alt />,
      context: t('skills.context.css')
    },
    { 
      name: t('experiences.technologies.oop'), 
      className: "oop", 
      icon: <BsCodeSquare />,
      context: t('skills.context.oop')
    },
    { 
      name: t('experiences.technologies.datadog'), 
      className: "datadog", 
      icon: <SiDatadog />,
      context: t('skills.context.datadog')
    },
    { 
      name: t('experiences.technologies.n8n'), 
      className: "n8n", 
      icon: <MdAutoFixHigh />,
      context: t('skills.context.n8n')
    },
    { 
      name: t('experiences.technologies.api'), 
      className: "api", 
      icon: <MdApi />,
      context: t('skills.context.api')
    }
  ];

  // Soft skills
  const softSkills = [
    { 
      name: t('skills.soft.agile'), 
      className: "agile", 
      icon: <BsKanban />,
      context: t('skills.context.agile')
    },
    { 
      name: t('skills.soft.creativity'), 
      className: "creativity", 
      icon: <MdLightbulb />,
      context: t('skills.context.creativity')
    },
    { 
      name: t('skills.soft.teamwork'), 
      className: "teamwork", 
      icon: <MdGroups />,
      context: t('skills.context.teamwork')
    },
    { 
      name: t('experiences.technologies.dataAnalysis'), 
      className: "analysis", 
      icon: <MdMonitorHeart />,
      context: t('skills.context.dataAnalysis')
    },
  ];

  // Helper function to split skills into two columns
  const splitIntoColumns = (skills) => {
    const halfwayIndex = Math.ceil(skills.length / 2);
    return [
      skills.slice(0, halfwayIndex),
      skills.slice(halfwayIndex)
    ];
  };

  const [techCol1, techCol2] = splitIntoColumns(technicalSkills);
  const [platformCol1, platformCol2] = splitIntoColumns(platformSkills);
  const [softCol1, softCol2] = splitIntoColumns(softSkills);

  return (
    <section className="skills-container" id="habilidades">
      <h2 className="skills-title">
        {t('skills.mainTitle')}
        <span className="skills-icon">🛠️</span>
      </h2>
      
      {/* Technical Skills */}
      <h3 className="skills-subheading">{t('skills.technicalTitle')}</h3>
      <div className="skills-columns">
        <div className="skills-column">
          {techCol1.map((skill, index) => (
            <div key={index} className={`skill-card ${skill.className}`}>
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
              </div>
              <p className="skill-context">{skill.context}</p>
            </div>
          ))}
        </div>
        <div className="skills-column">
          {techCol2.map((skill, index) => (
            <div key={index} className={`skill-card ${skill.className}`}>
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
              </div>
              <p className="skill-context">{skill.context}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Platform Skills */}
      <h3 className="skills-subheading">{t('skills.platformsTitle')}</h3>
      <div className="skills-columns">
        <div className="skills-column">
          {platformCol1.map((skill, index) => (
            <div key={index} className={`skill-card ${skill.className}`}>
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
              </div>
              <p className="skill-context">{skill.context}</p>
            </div>
          ))}
        </div>
        <div className="skills-column">
          {platformCol2.map((skill, index) => (
            <div key={index} className={`skill-card ${skill.className}`}>
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
              </div>
              <p className="skill-context">{skill.context}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Soft Skills */}
      <h3 className="skills-subheading">{t('skills.softTitle')}</h3>
      <div className="skills-columns">
        <div className="skills-column">
          {softCol1.map((skill, index) => (
            <div key={index} className={`skill-card ${skill.className}`}>
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
              </div>
              <p className="skill-context">{skill.context}</p>
            </div>
          ))}
        </div>
        <div className="skills-column">
          {softCol2.map((skill, index) => (
            <div key={index} className={`skill-card ${skill.className}`}>
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
              </div>
              <p className="skill-context">{skill.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCard;