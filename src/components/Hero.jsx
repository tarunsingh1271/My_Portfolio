import { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ResumeModal from './ResumeModal';
import { heroHeadline, personalInfo } from '../data/portfolioData';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < heroHeadline.length) {
        setTypedText(heroHeadline.slice(0, i + 1));
        i++;
      } else {
        setTypingDone(true);
        clearInterval(interval);
      }
    }, 38);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="home" className={`section-container ${styles.section}`}>
      <div className={styles.heroContent}>
        <h2 className={`text-gradient ${styles.greeting} ${isVisible ? styles.fadeIn : ''}`}>
          Hi, my name is
        </h2>

        <h1 className={`${styles.name} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.15s' }}>
          Tarun SINGH.
        </h1>

        <h3 className={`${styles.headline} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.3s' }}>
          {typedText}
          {!typingDone && <span className={styles.cursor} aria-hidden="true">|</span>}
        </h3>

        <p className={`${styles.description} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.45s' }}>
          I am a Software Engineer specializing in{' '}
          <span className={`text-gradient ${styles.highlight}`}>backend architecture</span>,{' '}
          <span className={`text-gradient ${styles.highlight}`}>system reliability</span>, and{' '}
          <span className={`text-gradient ${styles.highlight}`}>cloud orchestration</span>.{' '}
          Passionate about automation, building resilient infrastructure, and bridging the gap between development and operations.
        </p>

        <div className={`${styles.buttonContainer} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.6s' }}>
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight size={20} />
          </a>
          <button onClick={() => setIsModalOpen(true)} className="btn-secondary">
            <FileText size={20} /> View Resume
          </button>
        </div>

        <div className={`${styles.socialContainer} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.75s' }}>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className={`${styles.socialLink} ${styles.socialGithub}`}>
            <FaGithub size={26} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={`${styles.socialLink} ${styles.socialLinkedin}`}>
            <FaLinkedin size={26} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className={`${styles.socialLink} ${styles.socialEmail}`}>
            <Mail size={26} />
          </a>
        </div>
      </div>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
