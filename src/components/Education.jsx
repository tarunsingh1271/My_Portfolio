import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">
            <span className="idx">05</span> education :: ACADEMIC CREDENTIALS
          </div>
          <h2>Verified degrees and academic specializations.</h2>
        </div>

        <div className="credgroup">
          {education.map((edu, idx) => (
            <div key={idx} className="edu has-spotlight" data-cursor="degree">
              <div className="spotlight" aria-hidden="true" />
              <div className="edu__ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              <div className="edu__info">
                <div className="edu__deg">{edu.degree}</div>
                <div className="edu__field">{edu.field}</div>
                <div className="edu__school">{edu.institution}</div>
                <div className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.3rem' }}>
                  {edu.focus}
                </div>
              </div>

              <div className="edu__years">{edu.years}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
