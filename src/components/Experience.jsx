import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../data/portfolioData';
import styles from './Experience.module.css';

const Experience = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [timelineRef, timelineVisible] = useScrollReveal();

  return (
    <section id="experience" className={`section-container ${styles.section}`}>
      <h2
        ref={titleRef}
        className={`section-title text-gradient reveal ${titleVisible ? 'visible' : ''}`}
      >
        Work Experience
      </h2>

      <div ref={timelineRef} className={styles.timelineWrapper}>
        <div className={styles.verticalSpine} />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`${styles.timelineItem} ${isLeft ? styles.timelineItemLeft : styles.timelineItemRight} reveal stagger-${index + 1} ${timelineVisible ? 'visible' : ''}`}
            >
              <div className={`glass-panel ${styles.card}`}>
                <div className={`${styles.connector} ${isLeft ? styles.connectorLeft : styles.connectorRight}`} />

                <div style={{ marginBottom: '1rem' }}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                </div>

                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>

                <ul className={styles.highlights}>
                  {exp.highlights.map((point, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.yearContainer} ${isLeft ? styles.yearContainerLeft : styles.yearContainerRight}`}>
                <div className={styles.yearPill}>
                  <Calendar size={16} color="#ec4899" /> {exp.period}
                </div>
              </div>

              <div className={styles.centreDot}>
                <Briefcase size={18} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
