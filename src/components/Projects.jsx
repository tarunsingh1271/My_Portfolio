import { projects } from '../data/portfolioData';

export default function Projects() {
  const handlePointerMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--px', `${x.toFixed(2)}%`);
    el.style.setProperty('--py', `${y.toFixed(2)}%`);
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">
            <span className="idx">04</span> proof :: PROVEN ARCHITECTURES & PROJECTS
          </div>
          <h2>Featured engineering projects and system implementations.</h2>
        </div>

        <div className="awards3">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="aw has-spotlight"
              onPointerMove={(e) => handlePointerMove(e, e.currentTarget)}
              data-cursor="view project"
            >
              <div className="spotlight" aria-hidden="true" />
              <div className="aw__year">{proj.year}</div>
              <div className="aw__tag">{proj.tag}</div>
              <h3 className="aw__t">{proj.title}</h3>
              <p className="aw__d">{proj.description}</p>

              <div className="release__chips" style={{ marginTop: '1.2rem' }}>
                {proj.chips.map((chip) => (
                  <span key={chip} className="kchip">
                    <span className="d" />
                    {chip}
                  </span>
                ))}
              </div>

              {proj.links && (
                <div style={{ marginTop: '1.4rem', display: 'flex', gap: '1rem' }}>
                  {proj.links.github && (
                    <a
                      href={proj.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="crow__go"
                      data-cursor="github"
                    >
                      Repository
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  )}
                  {proj.links.live && proj.links.live !== '#' && (
                    <a
                      href={proj.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="crow__go"
                      data-cursor="live app"
                    >
                      Live Demo
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
