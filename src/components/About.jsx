import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './About.module.css';
import { about, education } from '../data/portfolioData';

const About = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [bioRef, bioVisible] = useScrollReveal();
  const [eduRef, eduVisible] = useScrollReveal();

  return (
    <section id="about" className={`section-container ${styles.section}`}>
      <h2
        ref={titleRef}
        className={`section-title text-gradient reveal ${titleVisible ? 'visible' : ''}`}
      >
        About Me
      </h2>

      <div className={styles.grid}>
        <div
          ref={bioRef}
          className={`glass-panel ${styles.bioPanel} reveal-left ${bioVisible ? 'visible' : ''}`}
        >
          {about.bio.map((paragraph, index) => (
            <p
              key={index}
              className={index === about.bio.length - 1 ? styles.bioTextLast : styles.bioText}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          <div className={styles.opportunitiesSection}>
            <h3 className={styles.opportunitiesTitle}>{about.opportunities.title}</h3>
            <p className={styles.opportunitiesText}>
              {about.opportunities.text}
            </p>
            <div className={styles.tagRow}>
              {about.opportunities.tags.map((tag, index) => (
                <span key={index} className={styles[about.opportunities.tagColors[index]]}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={eduRef}
          className={`${styles.sideColumn} reveal-right ${eduVisible ? 'visible' : ''}`}
        >
          <div className={`glass-panel ${styles.eduPanel}`}>
            <h3 className={styles.eduPanelTitle}>Education</h3>

            {education.map((edu, index) => (
              <div key={index} className={index === 0 ? styles.eduEntry : ''}>
                <h4 className={edu.degreeType === 'highlight' ? styles.eduDegreeHighlight : styles.eduDegreePrimary}>
                  {edu.degree}
                </h4>
                <p className={styles.eduName}>{edu.field}</p>
                <p className={styles.eduMeta}>{edu.institution}</p>
                <p className={styles.eduFocus}>{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
