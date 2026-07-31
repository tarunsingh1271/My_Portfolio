import { useState } from 'react';
import { personalInfo, gmailComposeUrl } from '../data/portfolioData';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <>
      <section className="section contact" id="contact">
        <div className="container">
          <div className="eyebrow">
            <span className="idx">06</span> ping tarun :: CONNECT & COLLABORATE
          </div>

          <h2 className="contact__title">
            READY TO <span className="grad">DEPLOY</span> NEXT-GEN INFRASTRUCTURE?
          </h2>

          <p className="contact__sub">
            Open to Site Reliability Engineering (SRE), DevOps Engineer, and Cloud Infrastructure roles in Paris or remote.
          </p>

          <div className="contact__actions">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg magnetic"
              data-cursor="email"
            >
              Send Email
              <svg className="btn__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </a>

            <button
              type="button"
              className={`copyline ${copied ? 'is-copied' : ''} magnetic`}
              onClick={handleCopyEmail}
              data-cursor="copy"
            >
              <span className="p">echo</span>
              <span className="addr">"{personalInfo.email}" | pbcopy</span>
              <span className="ok">✓ Copied to clipboard!</span>
            </button>
          </div>

          <div className="contact__meta">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="linkedin">
              LinkedIn
            </a>
            <span>•</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" data-cursor="github">
              GitHub
            </a>
            <span>•</span>
            <span>Phone: {personalInfo.phone}</span>
            <span>•</span>
            <span>Location: {personalInfo.location}</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer__row">
            <div className="footer__brand">
              <span className="brand__mark">
                {personalInfo.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()}
              </span>
              <span>{personalInfo.name}</span>
            </div>

            <div className="footer__mono">
              deployed from {personalInfo.location.split(',')[0]} • status: {personalInfo.status.toLowerCase()} • © {new Date().getFullYear()}
            </div>

            <div className="footer__links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${personalInfo.email}`}>Email</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
