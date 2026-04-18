import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={`section-container ${styles.section}`}>
      <h2 className="section-title text-gradient">Work Experience</h2>

      {/* Timeline wrapper */}
      <div className={styles.timelineWrapper}>

        {/* Central vertical spine */}
        <div className={styles.verticalSpine} />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`${styles.timelineItem} ${isLeft ? styles.timelineItemLeft : styles.timelineItemRight}`}
            >
              {/* Card */}
              <div
                className={`glass-panel hover-scale ${styles.card}`}
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Connector arrow */}
                <div className={`${styles.connector} ${isLeft ? styles.connectorLeft : styles.connectorRight}`} />

                {/* Role & Company */}
                <div style={{ marginBottom: '1rem' }}>
                  <h3 className={styles.role}>
                    {exp.role}
                  </h3>
                  <h4 className={styles.company}>
                    {exp.company}
                  </h4>
                </div>

                {/* Meta: location */}
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>

                {/* Highlights */}
                <ul className={styles.highlights}>
                  {exp.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className={styles.highlightItem}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Year on the opposite side */}
              <div
                className={`${styles.yearContainer} ${isLeft ? styles.yearContainerLeft : styles.yearContainerRight}`}
              >
                <div className={styles.yearPill}>
                  <Calendar size={16} color="#ec4899" /> {exp.period}
                </div>
              </div>

              {/* Centre dot */}
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
