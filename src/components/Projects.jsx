import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import styles from './Projects.module.css';

const Projects = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section id="projects" className={`section-container ${styles.section}`}>
      <h2
        ref={titleRef}
        className={`section-title text-gradient reveal ${titleVisible ? 'visible' : ''}`}
      >
        Featured Projects
      </h2>

      <div ref={gridRef} className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`glass-panel ${styles.card} reveal stagger-${index + 1} ${gridVisible ? 'visible' : ''}`}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <div className={styles.cardLinks}>
                {project.links.github && project.links.github !== '#' && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className={styles.cardLink} title="GitHub">
                    <FaGithub size={20} />
                  </a>
                )}
                {project.links.live && project.links.live !== '#' && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className={styles.cardLink} title="Live demo">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <p className={styles.cardDescription}>
              {project.description}
            </p>

            <div className={styles.tagRow}>
              {project.tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
