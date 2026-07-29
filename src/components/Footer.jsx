import styles from './Footer.module.css';
import { gmailComposeUrl } from '../data/portfolioData';

const Footer = () => {
  const handleContactClick = () => {
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h2 className={`text-gradient ${styles.heading}`}>Get In Touch</h2>
        <p className={styles.description}>
          Currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        <button type="button" onClick={handleContactClick} className={`btn-primary ${styles.ctaButton}`}>
          Say Hello
        </button>
        <p className={styles.copyright}>
          Designed &amp; Built by Tarun SINGH © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
