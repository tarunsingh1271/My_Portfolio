import { skillCategories } from '../data/portfolioData';
import styles from './Skills.module.css';


const Skills = () => {
  return (
    <section id="skills" className={`section-container ${styles.section}`}>
      <h2 className="section-title text-gradient">Technical Skills</h2>
      
      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={`glass-panel ${styles.categoryPanel}`}>
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
