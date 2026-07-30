import { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ResumeModal from './ResumeModal';
import HeroIllustration from './HeroIllustration';
import Skills from './Skills';
import { gmailComposeUrl, heroPrefix, heroPhrases, personalInfo } from '../data/portfolioData';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedSuffix, setTypedSuffix] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const currentPhrase = heroPhrases[phraseIndex];
    let timer;

    if (!isDeleting) {
      if (typedSuffix.length < currentPhrase.length) {
        // Typing forward
        timer = setTimeout(() => {
          setTypedSuffix(currentPhrase.slice(0, typedSuffix.length + 1));
        }, 35);
      } else {
        // Finished typing phrase: pause for 2 seconds (2000ms) before erasing
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (typedSuffix.length > 0) {
        // Backspacing
        timer = setTimeout(() => {
          setTypedSuffix(currentPhrase.slice(0, typedSuffix.length - 1));
        }, 20);
      } else {
        // Finished backspacing: switch to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [isVisible, typedSuffix, isDeleting, phraseIndex]);

  const handleEmailClick = (event) => {
    event.preventDefault();
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className={`section-container ${styles.section}`}>
      {/* ── Full-screen background illustration ── */}
      <HeroIllustration isVisible={isVisible} />

      <div className={styles.inner}>
        <div className={styles.heroContent}>
          <div className={`${styles.eyebrow} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.05s' }}>
            Production-grade engineering for ambitious teams
          </div>

          <h2 className={`text-gradient ${styles.greeting} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.1s' }}>
            I build software that ships
          </h2>

          <h1 className={`${styles.name} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.15s' }}>
            Tarun SINGH.
          </h1>

          <h3 className={`${styles.headline} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.3s' }}>
            {heroPrefix}
            {typedSuffix}
            <span className={styles.cursor} aria-hidden="true">|</span>
          </h3>

          <p className={`${styles.description} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.45s' }}>
            I create{' '}
            <span className={`text-gradient ${styles.highlight}`}>resilient backends</span>,{' '}
            <span className={`text-gradient ${styles.highlight}`}>cloud-native systems</span>, and{' '}
            <span className={`text-gradient ${styles.highlight}`}>automation pipelines</span> that give teams confidence in production.
          </p>

          <div className={`${styles.metaRow} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.53s' }}>
            <span className={styles.metaPill}>AWS • Kubernetes</span>
            <span className={styles.metaPill}>Ruby on Rails</span>
            <span className={styles.metaPill}>CI/CD • SRE</span>
          </div>

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
            <a
              href={gmailComposeUrl}
              className={`${styles.socialLink} ${styles.socialEmail}`}
              target="_blank"
              rel="noreferrer"
              onClick={handleEmailClick}
            >
              <Mail size={26} />
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.skillsMarqueeWrapper} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.85s' }}>
        <Skills />
      </div>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
