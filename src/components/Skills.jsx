import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillCategories } from '../data/portfolioData';
import styles from './Skills.module.css';

const Skills = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section id="skills" className={`section-container ${styles.section}`}>
      <h2
        ref={titleRef}
        className={`section-title text-gradient reveal ${titleVisible ? 'visible' : ''}`}
      >
        Technical Skills
      </h2>

      <div ref={gridRef} className={styles.grid}>
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`glass-panel ${styles.categoryPanel} reveal stagger-${index + 1} ${gridVisible ? 'visible' : ''}`}
          >
            <h3 className={styles.categoryTitle}>
              {category.title}
            </h3>
            <div className={styles.skillsRow}>
              {category.skills.map((skill, idx) => (
                <span key={idx} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
