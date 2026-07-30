import { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ResumeModal from './ResumeModal';
import HeroIllustration from './HeroIllustration';
import Skills from './Skills';
import { gmailComposeUrl, heroHeadline, personalInfo } from '../data/portfolioData';
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

  const handleEmailClick = (event) => {
    event.preventDefault();
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className={`section-container ${styles.section}`}>
      {/* ── Full-screen background illustration ── */}
      <HeroIllustration isVisible={isVisible} />

      <div className={styles.inner}>
        <div className={styles.heroGrid}>
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
              {typedText}
              {!typingDone && <span className={styles.cursor} aria-hidden="true">|</span>}
            </h3>

            <p className={`${styles.description} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.45s' }}>
              I create{' '}
              <span className={`text-gradient ${styles.highlight}`}>resilient backends</span>,{' '}
              <span className={`text-gradient ${styles.highlight}`}>cloud-native systems</span>, and{' '}
              <span className={`text-gradient ${styles.highlight}`}>automation pipelines</span> that give teams confidence in production.
            </p>

            <Skills />

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

          <div className={`${styles.panel} ${isVisible ? styles.panelReveal : ''}`}>
            <div className={styles.panelHeader}>
              <span className={styles.panelDot} />
              <span className={styles.panelDot} />
              <span className={styles.panelDot} />
            </div>
            <div className={styles.panelBody}>
              <p className={styles.panelLabel}>How I create impact</p>
              <div className={styles.panelList}>
                <div className={styles.panelItem}>
                  <span className={styles.panelItemLabel}>Reliability</span>
                  <span className={styles.panelItemValue}>Systems designed for uptime, observability, and calm incident response</span>
                </div>
                <div className={styles.panelItem}>
                  <span className={styles.panelItemLabel}>Delivery</span>
                  <span className={styles.panelItemValue}>Automation and CI/CD that shorten the path from commit to production</span>
                </div>
                <div className={styles.panelItem}>
                  <span className={styles.panelItemLabel}>Scale</span>
                  <span className={styles.panelItemValue}>Cloud-native architecture built for growth without unnecessary complexity</span>
                </div>
              </div>
              <div className={styles.statusRow}>
                <span className={styles.statusPill}>Status: online</span>
                <span className={styles.statusPill}>Cloud-native</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
