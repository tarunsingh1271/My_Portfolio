import { useState, useEffect } from 'react';

const STAGES = [
  { id: 'build', label: 'BUILD' },
  { id: 'test', label: 'TEST' },
  { id: 'sec', label: 'SECURITY' },
  { id: 'deploy', label: 'DEPLOY' }
];

export default function Preloader({ onComplete }) {
  const [stageIdx, setStageIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [statusLog, setStatusLog] = useState('Initializing CI/CD runner...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Stage progression timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        const next = prev + 2;
        if (next < 25) {
          setStageIdx(0);
          setStatusLog('Compiling infrastructure & Terraform modules...');
        } else if (next < 50) {
          setStageIdx(1);
          setStatusLog('Running automated test suite [98% coverage]...');
        } else if (next < 75) {
          setStageIdx(2);
          setStatusLog('Executing DevSecOps SAST & WAF policy scan...');
        } else {
          setStageIdx(3);
          setStatusLog('Deploying cluster release to EKS [Paris / eu-west-3]...');
        }
        return next;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div className={`preloader ${progress === 100 ? 'is-done' : ''}`} aria-hidden={progress === 100}>
      <div className="preloader__scan" />
      <div className="preloader__glow" />
      <div className="boot">
        <div className="boot__cmd">
          <span className="prompt">tarun@paris-ops:~$</span> pipeline run --release v2026.1
          <span className="caret" />
        </div>

        <div className="pipeline">
          <div className="pipeline__track">
            <div className="pipeline__fill" style={{ width: `${progress}%` }} />
          </div>
          {STAGES.map((st, i) => {
            const isActive = stageIdx === i && progress < 100;
            const isFinished = stageIdx > i || progress === 100;
            return (
              <div
                key={st.id}
                className={`stage ${isActive ? 'is-active' : ''} ${isFinished ? 'is-done' : ''}`}
              >
                <div className="stage__dot">
                  <span className="default">{i + 1}</span>
                  <span className="spin" />
                  <svg className="stage__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="stage__label">{st.label}</span>
              </div>
            );
          })}
        </div>

        <div className="boot__foot">
          <div className="boot__status">
            {progress === 100 ? (
              <span className="ok">✓ Pipeline operational. Welcome to Tarun's Portfolio.</span>
            ) : (
              <span>{statusLog}</span>
            )}
          </div>
          <div className="boot__pct">
            {progress}<span className="s">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
