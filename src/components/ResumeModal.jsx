import { X, Download, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import html2pdf from 'html2pdf.js';
import {
  personalInfo,
  summary,
  experiences,
  education,
  skillCategories,
  projects,
  spokenLanguages,
} from '../data/portfolioData';
import styles from './ResumeModal.module.css';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const element = document.getElementById('resume-content');
    const opt = {
      margin: 0,
      filename: 'Tarun_Singh_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, backgroundColor: '#0f1115' },
      jsPDF: {
        unit: 'px',
        format: [element.scrollWidth, element.scrollHeight],
        orientation: 'portrait',
      },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`glass-panel ${styles.modal}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Action Buttons ── */}
        <div className={styles.actionButtons}>
          <button onClick={handleDownload} title="Download Resume" className={styles.iconButton}>
            <Download size={20} />
          </button>
          <button onClick={onClose} title="Close" className={styles.iconButton}>
            <X size={20} />
          </button>
        </div>

        {/* ── Resume Content ── */}
        <div id="resume-content" className={styles.resumeContent}>

          {/* Header */}
          <div className={styles.resumeHeader}>
            <h1 className={styles.resumeName}>{personalInfo.name}</h1>
            <h2 className={styles.resumeTitle}>{personalInfo.title}</h2>
            <p className={styles.resumeContact}>
              {personalInfo.email} &nbsp;|&nbsp; {personalInfo.phone} &nbsp;|&nbsp; {personalInfo.location}
              &nbsp;|&nbsp; <a href={personalInfo.github} className={styles.resumeContactLink}>{personalInfo.github.replace('https://', '')}</a>
              &nbsp;|&nbsp; <a href={personalInfo.linkedin} className={styles.resumeContactLink}>{personalInfo.linkedin.replace('https://', '')}</a>
            </p>
          </div>

          {/* Summary */}
          <section className={styles.resumeSection}>
            <h3 className={styles.sectionHeading}>Summary</h3>
            <p className={styles.bodyText}>{summary}</p>
          </section>

          {/* Work Experience */}
          <section className={styles.resumeSection}>
            <h3 className={styles.sectionHeading}>Work Experience</h3>
            {experiences.map((exp, i) => (
              <div key={i} className={styles.expEntry}>
                <div className={styles.expHeader}>
                  <h4 className={styles.expTitle}>{exp.role} — {exp.company}</h4>
                  <span className={styles.expMeta}>{exp.period} &nbsp;·&nbsp; {exp.location}</span>
                </div>
                <ul className={styles.expList}>
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className={styles.expListItem}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className={styles.resumeSection}>
            <h3 className={styles.sectionHeading}>Education</h3>
            {education.map((edu, i) => (
              <div key={i} className={styles.eduEntry}>
                <div className={styles.eduHeader}>
                  <h4 className={styles.eduTitle}>{edu.degree} — {edu.field}</h4>
                  <span className={styles.mutedText}>{edu.location}</span>
                </div>
                <p className={styles.eduInstitution}>{edu.institution}</p>
                <p className={styles.eduFocus}>Focus: {edu.focus}</p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className={styles.resumeSection}>
            <h3 className={styles.sectionHeading}>Technical Skills</h3>
            {skillCategories.map((cat, i) => (
              <p key={i} className={styles.skillEntry}>
                <strong className={styles.skillStrong}>{cat.title}:</strong> {cat.skills.join(', ')}
              </p>
            ))}
          </section>

          {/* Projects */}
          <section className={styles.resumeSection}>
            <h3 className={styles.sectionHeading}>Projects</h3>
            {projects.map((proj, i) => (
              <div key={i} className={styles.projEntry}>
                <div className={styles.projHeader}>
                  <h4 className={styles.projTitle}>{proj.title}</h4>
                  <span className={styles.projYear}>({proj.year})</span>
                  {proj.links.github !== '#' && (
                    <a href={proj.links.github} target="_blank" rel="noreferrer" title="GitHub" className={styles.projLink}>
                      <FaGithub size={14} /> <span className={styles.projLinkText}>Code</span>
                    </a>
                  )}
                  {proj.links.live !== '#' && (
                    <a href={proj.links.live} target="_blank" rel="noreferrer" title="Live" className={styles.projLink}>
                      <ExternalLink size={14} /> <span className={styles.projLinkText}>Live</span>
                    </a>
                  )}
                </div>
                <p className={styles.projDescription}>{proj.description}</p>
                <p className={styles.projTags}>{proj.tags.map(t => `#${t}`).join(' ')}</p>
              </div>
            ))}
          </section>

          {/* Spoken Languages */}
          <section className={styles.resumeSectionLast}>
            <h3 className={styles.sectionHeading}>Languages</h3>
            <div className={styles.languagesRow}>
              {spokenLanguages.map((l, i) => (
                <span key={i} className={styles.languageItem}>
                  <strong className={styles.languageStrong}>{l.language}</strong> — {l.level}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
