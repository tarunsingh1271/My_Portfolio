import styles from './HeroIllustration.module.css';

/* Spread across a wide 1200×650 canvas — sits behind all text at low opacity */
const HeroIllustration = ({ isVisible }) => (
  <div
    className={`${styles.bgWrapper} ${isVisible ? styles.fadeIn : ''}`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1200 650"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.bgSvg}
    >
      <defs>
        <clipPath id="edClip">
          <rect x="764" y="64" width="272" height="188" />
        </clipPath>
      </defs>

      {/* ── Ambient glows ── */}
      <ellipse cx="900" cy="200" rx="220" ry="170" fill="rgba(79,70,229,0.06)" />
      <ellipse cx="150" cy="500" rx="160" ry="120" fill="rgba(6,182,212,0.05)"  />
      <ellipse cx="600" cy="320" rx="100" ry="80"  fill="rgba(236,72,153,0.04)" />

      {/* ════════════════════════════════
          CODE EDITOR  —  top-right
          x=730 y=30  w=310 h=250
          ════════════════════════════════ */}
      <g opacity="0.28" className={styles.floatSlow}>
        <rect x="734" y="35" width="310" height="248" rx="12" fill="rgba(0,0,0,0.5)" />
        <rect x="730" y="30" width="310" height="248" rx="12"
          fill="#12141c" stroke="rgba(79,70,229,0.6)" strokeWidth="1.5" />
        <rect x="730" y="30" width="310" height="34" rx="12" fill="#1a1d2e" />
        <rect x="730" y="50" width="310" height="14"         fill="#1a1d2e" />
        <circle cx="748" cy="47" r="5" fill="#ff5f57" />
        <circle cx="764" cy="47" r="5" fill="#ffbd2e" />
        <circle cx="780" cy="47" r="5" fill="#28ca41" />
        <rect x="798" y="36" width="120" height="18" rx="5"
          fill="rgba(79,70,229,0.2)" stroke="rgba(79,70,229,0.5)" strokeWidth="1" />
        <text x="804" y="48" fill="#a5b4fc" fontSize="8" fontFamily="monospace">user_controller.rb</text>
        <rect x="730" y="64" width="30" height="214" fill="rgba(0,0,0,0.2)" />
        <rect x="760" y="172" width="280" height="17" rx="2" fill="rgba(79,70,229,0.15)" />
        <g clipPath="url(#edClip)" fontFamily="monospace" fontSize="9">
          <text x="736" y="80"  fill="rgba(148,163,184,0.4)" fontSize="7.5">1</text>
          <text x="768" y="80"  fill="#ec4899">class</text>
          <text x="800" y="80"  fill="#a5b4fc">UserController</text>
          <text x="736" y="96"  fill="rgba(148,163,184,0.4)" fontSize="7.5">2</text>
          <text x="768" y="96"  fill="#ec4899">def</text>
          <text x="792" y="96"  fill="#67e8f9">create</text>
          <text x="736" y="112" fill="rgba(148,163,184,0.4)" fontSize="7.5">3</text>
          <text x="778" y="112" fill="#f9a8d4">@user</text>
          <text x="814" y="112" fill="#94a3b8">=</text>
          <text x="824" y="112" fill="#a5b4fc">User</text>
          <text x="848" y="112" fill="#94a3b8">.new(</text>
          <text x="878" y="112" fill="#67e8f9">params</text>
          <text x="736" y="128" fill="rgba(148,163,184,0.4)" fontSize="7.5">4</text>
          <text x="778" y="128" fill="#ec4899">if</text>
          <text x="795" y="128" fill="#f9a8d4">@user</text>
          <text x="828" y="128" fill="#94a3b8">.save</text>
          <text x="736" y="182" fill="rgba(148,163,184,0.4)" fontSize="7.5">5</text>
          <text x="778" y="182" fill="#67e8f9">render</text>
          <text x="818" y="182" fill="#86efac">json:</text>
          <text x="848" y="182" fill="#f9a8d4">@user</text>
          <text x="736" y="198" fill="rgba(148,163,184,0.4)" fontSize="7.5">6</text>
          <text x="778" y="198" fill="#ec4899">end</text>
          <text x="736" y="214" fill="rgba(148,163,184,0.4)" fontSize="7.5">7</text>
          <text x="768" y="214" fill="#ec4899">end</text>
          <rect x="800" y="172" width="2" height="13" rx="1" fill="#ec4899"
            className={styles.editorCursor} />
        </g>
        <rect x="730" y="266" width="310" height="12" rx="0 0 12 12" fill="rgba(79,70,229,0.15)" />
        <text x="738" y="275" fill="#818cf8" fontSize="7" fontFamily="monospace">Ruby · Rails 7 · Ln 5</text>
        <text x="984" y="275" fill="#22c55e" fontSize="7" fontFamily="monospace">⎇ main</text>
      </g>

      {/* ════════════════════════════════
          PERSON AT LAPTOP  —  far right
          translate(1010, 40)
          ════════════════════════════════ */}
      <g opacity="0.22" className={styles.floatMid} transform="translate(1010, 40)">
        <ellipse cx="60" cy="100" rx="52" ry="65" fill="rgba(79,70,229,0.08)" />
        <rect x="5"  y="170" width="112" height="4"  rx="2" fill="#1c1f2e" />
        <rect x="10" y="152" width="100" height="20" rx="4"
          fill="#1a1d24" stroke="rgba(79,70,229,0.5)" strokeWidth="1.5" />
        <rect x="10" y="86"  width="100" height="68" rx="5"
          fill="#0c0e14" stroke="#4f46e5" strokeWidth="1.5" />
        <rect x="14" y="90"  width="92"  height="60" rx="3" fill="#11131a" />
        <rect x="20" y="98"  width="36" height="3.5" rx="1.5" fill="#ec4899" opacity="0.85" />
        <rect x="26" y="107" width="52" height="3.5" rx="1.5" fill="#818cf8" opacity="0.75" />
        <rect x="26" y="116" width="28" height="3.5" rx="1.5" fill="#67e8f9" opacity="0.7"  />
        <rect x="26" y="125" width="44" height="3.5" rx="1.5" fill="#86efac" opacity="0.65" />
        <rect x="26" y="134" width="32" height="3.5" rx="1.5" fill="#fde68a" opacity="0.55" />
        <rect x="50" y="117" width="2"  height="9"   rx="1" fill="#ec4899" className={styles.termCursor} />
        <path d="M43 68 Q28 100 16 140" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M77 68 Q92 100 104 140" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="16"  cy="146" rx="6" ry="5" fill="#1c1f2e" stroke="rgba(129,140,248,0.5)" strokeWidth="1" />
        <ellipse cx="104" cy="146" rx="6" ry="5" fill="#1c1f2e" stroke="rgba(129,140,248,0.5)" strokeWidth="1" />
        <path d="M44 52 Q36 66 35 82 Q38 88 60 88 Q82 88 85 82 Q84 66 76 52 Q68 48 60 48 Q52 48 44 52Z"
          fill="#1c1f2e" stroke="rgba(129,140,248,0.35)" strokeWidth="1" />
        <circle cx="60" cy="28" r="20" fill="#1c1f2e" stroke="#818cf8" strokeWidth="1.5" />
        <circle cx="53" cy="26" r="2.5" fill="#67e8f9" opacity="0.85" />
        <circle cx="67" cy="26" r="2.5" fill="#67e8f9" opacity="0.85" />
        <path d="M53 36 Q60 41 67 36" fill="none" stroke="rgba(129,140,248,0.6)" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M40 27 Q40 5 60 4 Q80 5 80 27"
          fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="35" y="23" width="8" height="12" rx="4" fill="#4f46e5" />
        <rect x="77" y="23" width="8" height="12" rx="4" fill="#4f46e5" />
      </g>

      {/* ════════════════════════════════
          TERMINAL  —  bottom-left
          translate(40, 430)
          ════════════════════════════════ */}
      <g opacity="0.3" className={styles.floatFast} transform="translate(40, 430)">
        <rect x="3" y="4" width="230" height="105" rx="10" fill="rgba(0,0,0,0.5)" />
        <rect x="0" y="0" width="230" height="105" rx="10"
          fill="#0d0f16" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
        <rect x="0" y="0"  width="230" height="28" rx="10" fill="#151820" />
        <rect x="0" y="16" width="230" height="12"         fill="#151820" />
        <circle cx="16" cy="14" r="5" fill="#ff5f57" />
        <circle cx="31" cy="14" r="5" fill="#ffbd2e" />
        <circle cx="46" cy="14" r="5" fill="#28ca41" />
        <text x="60" y="18" fill="rgba(148,163,184,0.5)" fontSize="8" fontFamily="monospace">bash</text>
        <text x="12" y="46" fill="#06b6d4" fontSize="10" fontFamily="monospace">$</text>
        <text x="24" y="46" fill="#94a3b8"  fontSize="10" fontFamily="monospace">bundle exec rails s</text>
        <text x="12" y="62" fill="#22c55e"  fontSize="10" fontFamily="monospace">✓</text>
        <text x="26" y="62" fill="#86efac"  fontSize="10" fontFamily="monospace">Running on port 3000</text>
        <text x="12" y="78" fill="#06b6d4"  fontSize="10" fontFamily="monospace">$</text>
        <rect x="24" y="68" width="7" height="12" rx="1" fill="#06b6d4" className={styles.termCursor} />
        <text x="12" y="96" fill="rgba(148,163,184,0.35)" fontSize="8.5" fontFamily="monospace">
          docker ps  |  3 running
        </text>
      </g>

      {/* ════════════════════════════════
          CLOUD / AWS CARD  —  bottom-right
          translate(830, 440)
          ════════════════════════════════ */}
      <g opacity="0.3" className={styles.floatSlow} transform="translate(830, 440)">
        <rect x="3" y="4" width="238" height="105" rx="10" fill="rgba(0,0,0,0.5)" />
        <rect x="0" y="0" width="238" height="105" rx="10"
          fill="#0d0f16" stroke="rgba(79,70,229,0.5)" strokeWidth="1.5" />
        <path
          d="M20 42 Q18 30 28 28 Q32 18 46 19 Q55 11 68 16 Q77 14 80 24 Q89 23 91 33 Q93 44 83 46 L25 46 Q17 48 20 42Z"
          fill="rgba(79,70,229,0.2)" stroke="#818cf8" strokeWidth="1.3" />
        <text x="24" y="62" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">AWS EKS Cluster</text>
        <circle cx="20" cy="76" r="5" fill="#22c55e" />
        <text x="30" y="80" fill="#86efac" fontSize="10" fontFamily="sans-serif">3 / 3 nodes healthy</text>
        <text x="14" y="96" fill="rgba(148,163,184,0.4)" fontSize="8.5" fontFamily="sans-serif">
          ⟳  Last deploy: 2 hours ago
        </text>
      </g>

      {/* ════════════════════════════════
          TECH BADGES  —  scattered
          ════════════════════════════════ */}

      {/* </> — mid screen left */}
      <g opacity="0.25" className={styles.floatMid} transform="translate(60, 180)">
        <rect x="0" y="0" width="72" height="30" rx="9"
          fill="rgba(236,72,153,0.1)" stroke="rgba(236,72,153,0.4)" strokeWidth="1" />
        <text x="8" y="21" fill="#f9a8d4" fontSize="14" fontFamily="monospace" fontWeight="700">{'</>'}</text>
      </g>

      {/* { } — center top */}
      <g opacity="0.2" className={styles.floatSlow} transform="translate(560, 60)">
        <text x="0" y="26" fill="rgba(129,140,248,0.7)" fontSize="26" fontFamily="monospace" fontWeight="700">{'{ }'}</text>
      </g>

      {/* git commit badge — center */}
      <g opacity="0.22" className={styles.floatFast} transform="translate(490, 380)">
        <rect x="0" y="0" width="160" height="34" rx="9"
          fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.35)" strokeWidth="1" />
        <text x="10" y="22" fill="#06b6d4" fontSize="11" fontFamily="monospace">git commit -m "fix"</text>
      </g>

      {/* npm badge — far left center */}
      <g opacity="0.2" className={styles.floatMid} transform="translate(20, 310)">
        <rect x="0" y="0" width="120" height="30" rx="8"
          fill="rgba(236,72,153,0.07)" stroke="rgba(236,72,153,0.3)" strokeWidth="1" />
        <text x="10" y="20" fill="#f9a8d4" fontSize="10.5" fontFamily="monospace">npm run deploy</text>
      </g>

      {/* Decorative dots scattered */}
      <circle cx="700"  cy="50"  r="3.5" fill="rgba(6,182,212,0.4)"   className={styles.pulse} />
      <circle cx="420"  cy="130" r="2.5" fill="rgba(236,72,153,0.35)" />
      <circle cx="310"  cy="500" r="3"   fill="rgba(79,70,229,0.4)"   className={styles.pulse} />
      <circle cx="950"  cy="380" r="2.5" fill="rgba(6,182,212,0.3)"   />
      <circle cx="1150" cy="300" r="3"   fill="rgba(236,72,153,0.3)"  className={styles.pulse} />
      <circle cx="80"   cy="60"  r="2"   fill="rgba(79,70,229,0.35)"  />
      <circle cx="650"  cy="600" r="2.5" fill="rgba(6,182,212,0.3)"   />

      {/* Connector lines */}
      <line x1="272" y1="215" x2="730" y2="154"
        stroke="rgba(79,70,229,0.12)" strokeWidth="1" strokeDasharray="4,3" />
      <line x1="155" y1="430" x2="490" y2="397"
        stroke="rgba(6,182,212,0.12)" strokeWidth="1" strokeDasharray="4,3" />

    </svg>
  </div>
);

export default HeroIllustration;
