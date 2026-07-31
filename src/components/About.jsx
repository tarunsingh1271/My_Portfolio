import { useRef } from 'react';
import { personalInfo, principles, spokenLanguages, education, aboutBio } from '../data/portfolioData';

export default function About() {
  const cardRef = useRef(null);

  const handlePointerMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Tilt between -6deg and 6deg
    const ry = ((x - 0.5) * 8).toFixed(2);
    const rx = ((0.5 - y) * 8).toFixed(2);

    card.style.setProperty('--ry', `${ry}deg`);
    card.style.setProperty('--rx', `${rx}deg`);

    // Spotlight glow center
    card.style.setProperty('--px', `${(x * 100).toFixed(2)}%`);
    card.style.setProperty('--py', `${(y * 100).toFixed(2)}%`);
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  const primaryEdu = education && education.length > 0 ? education[0] : null;

  return (
    <section className="section" id="whoami">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">
            <span className="idx">01</span> whoami :: IDENTITY & MANIFESTO
          </div>
          <h2>Building automated, unbreakable cloud delivery systems.</h2>
        </div>

        <div className="about__grid">
          {/* 3D Tilt Identity Card */}
          <div
            ref={cardRef}
            className="idcard has-spotlight"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            data-cursor="idcard"
          >
            <div className="spotlight" aria-hidden="true" />
            <div className="idcard__head">
              <span>CARD :: {personalInfo.name.split(' ')[0].toUpperCase()}-2026</span>
              <span className="on">{personalInfo.status}</span>
            </div>

            <div className="idcard__photo">
              <div className="idcard__scan" />
              <img
                src={personalInfo.profilePhoto}
                alt={personalInfo.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            <div className="idcard__meta">
              <div className="idcard__row">
                <span className="k">engineer</span>
                <span className="v">{personalInfo.name}</span>
              </div>
              <div className="idcard__row">
                <span className="k">role</span>
                <span className="v acc">{personalInfo.role}</span>
              </div>
              <div className="idcard__row">
                <span className="k">base</span>
                <span className="v">{personalInfo.location}</span>
              </div>
              {primaryEdu && (
                <div className="idcard__row">
                  <span className="k">degree</span>
                  <span className="v">{primaryEdu.degree} in {primaryEdu.field}</span>
                </div>
              )}
              <div className="idcard__row">
                <span className="k">languages</span>
                <span className="v">
                  {spokenLanguages.map((l) => `${l.language} (${l.level})`).join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Manifesto & Operating Principles */}
          <div className="about__body">
            <div className="lead-big">
              {aboutBio.lead}
            </div>

            <p>{aboutBio.p1}</p>

            <p>{aboutBio.p2}</p>

            {/* Operating Principles */}
            <div className="ops-principles">
              {principles.map((pr) => (
                <div key={pr.num} className="principle has-spotlight">
                  <span className="principle__n">{pr.num}</span>
                  <h3>{pr.title}</h3>
                  <p>{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
