import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark';
    } catch {
      return 'dark';
    }
  });
  const [parisTime, setParisTime] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(Math.min(1, window.scrollY / maxScroll));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      try {
        const fmt = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Paris',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setParisTime(fmt.format(new Date()));
      } catch {
        setParisTime(new Date().toTimeString().slice(0, 8));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-anim');
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    setTimeout(() => {
      document.documentElement.classList.remove('theme-anim');
    }, 420);
  };

  const navLinks = [
    { href: '#whoami', label: 'whoami' },
    { href: '#experience', label: 'git log' },
    { href: '#skills', label: 'stack.yaml' },
    { href: '#projects', label: 'proof' },
    { href: '#education', label: 'education' },
    { href: '#contact', label: 'ping' }
  ];

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="siteHeader">
      <nav
        className={`nav ${mobileOpen ? 'is-open' : ''}`}
        id="nav"
        style={{ '--scroll': scrollProgress.toFixed(4) }}
      >
        <a href="#" className="brand" data-cursor="home">
          <span className="brand__mark">
            {personalInfo.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()}
          </span>
          <span className="brand__name">
            {personalInfo.name} <span className="role">— {personalInfo.role}</span>
          </span>
        </a>

        <div className="nav__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav__right">
          <div className="nav__status" title="Current Location & Status">
            <span className="live" />
            <span>{personalInfo.location}</span>
            <span className="clock">{parisTime || '00:00:00'}</span>
          </div>

          <a
            href={personalInfo.resumePdf}
            download="Tarun_Singh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary nav__cta magnetic"
            data-cursor="download cv"
          >
            Download CV
            <svg className="btn__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            data-cursor="theme"
          >
            {/* Sun Icon */}
            <svg className="tt-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            {/* Moon Icon */}
            <svg className="tt-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <button
            type="button"
            className="nav__toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
