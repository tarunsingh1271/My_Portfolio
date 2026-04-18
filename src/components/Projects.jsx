import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import styles from './Projects.module.css';


const Projects = () => {
  return (
    <section id="projects" className={`section-container ${styles.section}`}>
      <h2 className="section-title text-gradient">Featured Projects</h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`glass-panel ${styles.card}`}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <div className={styles.cardLinks}>
                <a href={project.links.github} target="_blank" rel="noreferrer" className={styles.cardLink}>
                  <FaGithub size={20} />
                </a>
                <a href={project.links.live} target="_blank" rel="noreferrer" className={styles.cardLink}>
                  <ExternalLink size={20} />
                </a>
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
