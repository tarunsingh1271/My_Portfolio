import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Skills.module.css';

const Skills = () => {
  const [trackRef, trackVisible] = useScrollReveal();

  const steps = ['code', 'build', 'test', 'deploy', 'production'];

  return (
    <div id="skills" className={styles.inlineStrip}>
      <div ref={trackRef} className={`${styles.pipelineShell} reveal reveal-right ${trackVisible ? 'visible' : ''}`}>
        <div className={styles.pipelineTrack} aria-label="Code to production pipeline">
          <div className={styles.pipelineRail} aria-hidden="true">
            <span className={styles.pipelineGlow} />
          </div>

          <div className={styles.stepRow}>
            {steps.map((step, index) => (
              <div key={step} className={styles.step} style={{ '--step-index': index }}>
                <span className={styles.stepDot} aria-hidden="true" />
                <span className={styles.stepLabel}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
