import { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ResumeModal from './ResumeModal';
import { heroHeadline, summary, personalInfo } from '../data/portfolioData';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className={`section-container ${styles.section}`}>
      <div className={`hero-content ${isVisible ? 'animate-fade-in-up' : ''} ${styles.heroContent}`}>
        <h2 className={`text-gradient ${styles.greeting}`}>
          Hi, my name is
        </h2>
        
        <h1 className={styles.name}>
          Tarun SINGH.
        </h1>
        
        <h3 className={styles.headline}>
          {heroHeadline}
        </h3>
        
        <p className={styles.description}>
          I am a Software Engineer specializing in <span className={`text-gradient ${styles.highlight}`}>backend architecture</span>, <span className={`text-gradient ${styles.highlight}`}>system reliability</span>, and <span className={`text-gradient ${styles.highlight}`}>cloud orchestration</span>. Passionate about automation, building resilient infrastructure, and bridging the gap between development and operations.
        </p>
        
        <div className={styles.buttonContainer}>
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight size={20} />
          </a>
          
          <button onClick={() => setIsModalOpen(true)} className="btn-secondary">
            <FileText size={20} /> View Resume
          </button>
        </div>
        
        <div className={styles.socialContainer}>
          <a href="https://github.com/tarunsingh1271" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/tarunsingh1271/" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:Tarunsingh1271@gmail.com" className={styles.socialLink}>
            <Mail size={28} />
          </a>
        </div>
      </div>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
