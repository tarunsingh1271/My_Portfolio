import { experiences, impactStats } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">
            <span className="idx">02</span> git log :: CAREER RELEASES
          </div>
          <h2>Production releases and engineering history.</h2>
        </div>

        {/* Timeline */}
        <div className="timeline is-visible">
          {experiences.map((exp) => (
            <div
              key={exp.tag}
              className={`release ${exp.isCurrent ? '' : 'release--past'} is-visible`}
            >
              <div className="release__aside">
                <span className="release__tag">{exp.tag}</span>
                <div className="release__co">{exp.company}</div>
                <div className="release__period">{exp.period} • {exp.location}</div>
              </div>

              <div className="release__main">
                <div className="release__role">
                  {exp.role}
                  {exp.isCurrent && <span className="now">ACTIVE RELEASE</span>}
                </div>

                <ul className="release__sum">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem', listStyleType: 'none' }}>
                      <span className="text-accent" style={{ marginRight: '0.5rem' }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="release__chips">
                  {exp.chips.map((chip) => (
                    <span key={chip} className="kchip">
                      <span className="d" />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* git diff --stat Impact Grid */}
        <div className="impact-strip">
          <div className="eyebrow">
            <span className="idx">02a</span> git diff --stat :: QUANTITATIVE IMPACT
          </div>
          <h3 className="impact-title">Engineering metrics in numbers</h3>
          <p className="impact-sub">
            Measurable operational improvements across infrastructure automation, build speeds, and database performance.
          </p>

          <div className="impact-grid">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="impact-stat">
                <span className="impact-stat__n">
                  {stat.val}
                  {stat.unit && <span>{stat.unit}</span>}
                </span>
                <span className="impact-stat__l">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
