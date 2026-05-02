import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './About.module.css';

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
          <p className={styles.bioText}>
            My journey as a software engineer began with a deep fascination for how complex systems operate behind the scenes.
            Today, I specialize in <strong>Ruby on Rails</strong>, building secure, performant web services, and designing scalable cloud architectures.
          </p>
          <p className={styles.bioText}>
            With a Master's degree in <strong>Cyber Security and Cloud Computing</strong> from École Supérieure d'Ingénieurs Léonard de Vinci in Paris,
            I bridge the gap between secure architectural design and rapid feature development.
          </p>
          <p className={styles.bioTextLast}>
            I thrive in remote, asynchronous engineering environments where clean code, comprehensive testing (RSpec), and system reliability are paramount.
          </p>

          <div className={styles.opportunitiesSection}>
            <h3 className={styles.opportunitiesTitle}>Open to Opportunities</h3>
            <p className={styles.opportunitiesText}>
              I'm always open to exciting challenges. I welcome spontaneous applications and am actively exploring roles such as:
            </p>
            <div className={styles.tagRow}>
              <span className={styles.tagIndigo}>Site Reliability Engineer (SRE)</span>
              <span className={styles.tagPink}>DevOps Engineer</span>
              <span className={styles.tagGreen}>Software Developer</span>
            </div>
          </div>
        </div>

        <div
          ref={eduRef}
          className={`${styles.sideColumn} reveal-right ${eduVisible ? 'visible' : ''}`}
        >
          <div className={`glass-panel ${styles.eduPanel}`}>
            <h3 className={styles.eduPanelTitle}>Education</h3>

            <div className={styles.eduEntry}>
              <h4 className={styles.eduDegreeHighlight}>Master's Degree</h4>
              <p className={styles.eduName}>Cyber Security and Cloud Computing</p>
              <p className={styles.eduMeta}>École Supérieure d'Ingénieurs Léonard de Vinci • Paris, France</p>
              <p className={styles.eduFocus}>Focus: Cyber Risk, Network Arch, Cloud Orchestration, AI</p>
            </div>

            <div>
              <h4 className={styles.eduDegreePrimary}>Bachelor's Degree</h4>
              <p className={styles.eduName}>Computer Applications</p>
              <p className={styles.eduMeta}>Chandigarh University • India</p>
              <p className={styles.eduFocus}>Focus: Data Structures, Web Design, OOP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
