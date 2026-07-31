import { useEffect, useRef, useState } from 'react';
import { personalInfo, heroPrefix, heroPhrases } from '../data/portfolioData';

// J2000 Star Catalog (~70 bright stars + constellation lines)
const STARS = [
  { name: 'Polaris', ra: 2.53, dec: 89.26, mag: 2.0 },
  { name: 'Vega', ra: 18.62, dec: 38.78, mag: 0.03 },
  { name: 'Deneb', ra: 20.69, dec: 45.28, mag: 1.25 },
  { name: 'Altair', ra: 19.84, dec: 8.87, mag: 0.77 },
  { name: 'Betelgeuse', ra: 5.92, dec: 7.41, mag: 0.5 },
  { name: 'Rigel', ra: 5.24, dec: -8.2, mag: 0.18 },
  { name: 'Sirius', ra: 6.75, dec: -16.72, mag: -1.46 },
  { name: 'Capella', ra: 5.28, dec: 46.0, mag: 0.08 },
  { name: 'Aldebaran', ra: 4.6, dec: 16.51, mag: 0.85 },
  { name: 'Arcturus', ra: 14.26, dec: 19.18, mag: -0.05 },
  { name: 'Antares', ra: 16.49, dec: -26.43, mag: 1.06 },
  { name: 'Spica', ra: 13.42, dec: -11.16, mag: 0.98 },
  { name: 'Pollux', ra: 7.76, dec: 28.03, mag: 1.14 },
  { name: 'Castor', ra: 7.58, dec: 31.89, mag: 1.58 },
  { name: 'Procyon', ra: 7.65, dec: 5.22, mag: 0.34 },
  { name: 'Regulus', ra: 10.14, dec: 11.97, mag: 1.36 }
];

export default function Hero() {
  const canvasRef = useRef(null);
  const [, setPhraseIdx] = useState(0);
  const [displayPhrase, setDisplayPhrase] = useState(heroPhrases[0]);

  // Decode scramble effect for rotating phrases
  useEffect(() => {
    const GLYPHS = '#</>{}[]=+*^:~10';
    const interval = setInterval(() => {
      setPhraseIdx((prev) => {
        const nextIdx = (prev + 1) % heroPhrases.length;
        const targetText = heroPhrases[nextIdx];
        
        let frame = 0;
        const maxFrames = 20;
        const decodeInterval = setInterval(() => {
          frame++;
          const progress = frame / maxFrames;
          const scrambled = targetText
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' ';
              if (i / targetText.length < progress) return char;
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join('');

          setDisplayPhrase(scrambled);

          if (frame >= maxFrames) {
            clearInterval(decodeInterval);
            setDisplayPhrase(targetText);
          }
        }, 30);

        return nextIdx;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Live Paris Star-Map Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
    };
    resize();
    window.addEventListener('resize', resize);

    // Meteors list
    const meteors = [];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Calculate Sidereal Time for Paris (48.8566° N, 2.3522° E)
      const now = new Date();
      const d = (now.getTime() - new Date('2000-01-01T12:00:00Z').getTime()) / 86400000;
      const lst = (280.46061837 + 360.98564736629 * d + personalInfo.coords.lon) % 360;
      const latRad = (personalInfo.coords.lat * Math.PI) / 180;

      // Draw Stars
      STARS.forEach((star) => {
        const haDeg = (lst - star.ra * 15 + 360) % 360;
        const haRad = (haDeg * Math.PI) / 180;
        const decRad = (star.dec * Math.PI) / 180;

        // Altitude
        const sinAlt =
          Math.sin(decRad) * Math.sin(latRad) +
          Math.cos(decRad) * Math.cos(latRad) * Math.cos(haRad);
        const altRad = Math.asin(sinAlt);
        const altDeg = (altRad * 180) / Math.PI;

        if (altDeg > 0) {
          // Azimuth
          const cosAz =
            (Math.sin(decRad) - Math.sin(latRad) * sinAlt) / (Math.cos(latRad) * Math.cos(altRad));
          let azRad = Math.acos(Math.max(-1, Math.min(1, cosAz)));
          if (Math.sin(haRad) > 0) azRad = 2 * Math.PI - azRad;

          // Projection to Canvas
          const r = (1 - altDeg / 90) * (Math.min(w, h) * 0.45);
          const x = w / 2 + r * Math.sin(azRad);
          const y = h / 2 - r * Math.cos(azRad);

          const starSize = Math.max(1, (3 - star.mag) * window.devicePixelRatio);
          const starAlpha = Math.min(1, Math.max(0.2, (3.5 - star.mag) / 3));

          ctx.fillStyle = `rgba(95, 240, 171, ${starAlpha})`;
          ctx.beginPath();
          ctx.arc(x, y, starSize, 0, Math.PI * 2);
          ctx.fill();

          // Subtle glow around brighter stars
          if (star.mag < 1) {
            ctx.fillStyle = `rgba(62, 207, 142, 0.15)`;
            ctx.beginPath();
            ctx.arc(x, y, starSize * 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Spawn meteors occasionally
      if (Math.random() < 0.015 && meteors.length < 3) {
        meteors.push({
          x: Math.random() * w,
          y: Math.random() * (h * 0.5),
          len: 40 + Math.random() * 80,
          speed: 8 + Math.random() * 12,
          angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
          life: 1.0
        });
      }

      // Draw Meteors
      meteors.forEach((m, idx) => {
        ctx.strokeStyle = `rgba(95, 240, 171, ${m.life})`;
        ctx.lineWidth = 1.5 * window.devicePixelRatio;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.len * Math.cos(m.angle), m.y - m.len * Math.sin(m.angle));
        ctx.stroke();

        m.x += m.speed * Math.cos(m.angle);
        m.y += m.speed * Math.sin(m.angle);
        m.life -= 0.025;

        if (m.life <= 0) meteors.splice(idx, 1);
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero section" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="container">
        <div className="hero__grid">
          <div className="hero__intro">
            <div className="eyebrow hero__eyebrow">
              <span className="idx">SYSTEM :: OPERATIONAL</span>
              <span className="reg">PARIS REGION</span>
            </div>

            <h1 className="hero__title">
              <span className="line line--grad">
                {personalInfo.name}
                <span className="blink" />
              </span>
            </h1>

            <p className="hero__lead">
              {heroPrefix}
              <span className="em">{displayPhrase}</span>
            </p>

            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary btn--lg magnetic" data-cursor="explore">
                Explore Work
                <svg className="btn__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#contact" className="btn btn--ghost btn--lg magnetic" data-cursor="ping">
                ping tarun
              </a>
            </div>

            <div className="status-strip">
              <div className="stat">
                <span className="stat__k">Status</span>
                <span className="stat__v live">
                  <span className="dot" />
                  {personalInfo.status}
                </span>
              </div>
              <div className="stat">
                <span className="stat__k">Location</span>
                <span className="stat__v">{personalInfo.location}</span>
              </div>
              <div className="stat">
                <span className="stat__k">Coords</span>
                <span className="stat__v">{personalInfo.latDeg}, {personalInfo.lonDeg}</span>
              </div>
            </div>
          </div>

          {/* Interactive SVG Git Release Graph */}
          <div className="hero__graph" data-cursor="git tree">
            <svg className="git" viewBox="0 0 380 400" fill="none">
              {/* Main release branch line */}
              <path d="M 90,40 L 90,360" className="g-line g-main" />

              {/* Feature branch line */}
              <path
                d="M 90,100 C 90,140 190,130 190,180 L 190,260 C 190,300 90,290 90,330"
                className="g-line g-branch"
              />

              {/* Animated pulse flow riding the branch */}
              <path
                d="M 90,100 C 90,140 190,130 190,180 L 190,260 C 190,300 90,290 90,330"
                className="g-flow"
              />

              {/* Commit 1: Initial init */}
              <g className="g-commit" data-cursor="commit: c0e1a9">
                <circle cx="90" cy="80" r="7" className="g-c g-c--main" />
                <text x="112" y="84" className="g-t g-t--dim">
                  c0e1a9 init: terraform-aws-eks
                </text>
              </g>

              {/* Commit 2: Checkout branch */}
              <g className="g-commit" data-cursor="commit: f83b1d">
                <circle cx="90" cy="115" r="7" className="g-c g-c--acc" />
                <text x="112" y="119" className="g-t g-t--acc">
                  f83b1d feat: gitlab-sast-pipeline
                </text>
              </g>

              {/* Commit 3: Work on branch */}
              <g className="g-commit" data-cursor="commit: e294b0">
                <circle cx="190" cy="190" r="7" className="g-c g-c--acc" />
                <text x="212" y="194" className="g-t g-t--acc">
                  e294b0 harden: aws-waf-rbac
                </text>
              </g>

              {/* Commit 4: Merge commit */}
              <g className="g-commit" data-cursor="commit: 91a4c8">
                <circle cx="90" cy="310" r="7" className="g-c g-c--main" />
                <text x="112" y="314" className="g-t">
                  91a4c8 merge: pr#42 production
                </text>
              </g>

              {/* Deployed release tag HEAD */}
              <g className="g-head" data-cursor="release tag">
                <circle cx="90" cy="360" r="9.5" className="g-c g-c--acc" />
                <circle cx="90" cy="360" r="16" className="g-ring" />
                <g className="g-tag g-tag__in">
                  <rect x="112" y="346" width="156" height="28" rx="14" />
                  <text x="124" y="365">
                    v2026.1 · DEPLOYED
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span className="txt">SCROLL TO DEPLOY</span>
        <div className="rail" />
      </div>
    </section>
  );
}
