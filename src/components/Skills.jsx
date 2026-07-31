import { useState } from 'react';
import { stackYamlCode, stackCards } from '../data/portfolioData';

export default function Skills() {
  const [activeCardKey, setActiveCardKey] = useState(null);
  const [hoveredLineNo, setHoveredLineNo] = useState(null);

  const lines = stackYamlCode.split('\n');

  const getHotCardKeyForLine = (lineNo) => {
    const card = stackCards.find((c) => c.hotLines.includes(lineNo));
    return card ? card.key : null;
  };

  const isLineHot = (lineNo) => {
    if (activeCardKey) {
      const card = stackCards.find((c) => c.key === activeCardKey);
      return card ? card.hotLines.includes(lineNo) : false;
    }
    return hoveredLineNo === lineNo;
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">
            <span className="idx">03</span> cat stack.yaml :: TOOLCHAIN & SPECIFICATION
          </div>
          <h2>Ecosystem specification and infrastructure stack.</h2>
        </div>

        <div className="stack-stage">
          <div className="stack-stage__copy">
            <span className="stack-stage__label">SPECIFICATION :: ACTIVE</span>
            <p>
              Hover over a stack component below to highlight its corresponding infrastructure definition in the YAML file, or hover lines in the code view.
            </p>
          </div>

          <div className="stack-stage__surface">
            <figure className={`spec spec--peek ${activeCardKey ? 'is-linking' : ''}`}>
              <div className="spec__scan" />
              <figcaption>
                <span className="d" />
                <span className="path">/etc/tarun/stack.yaml</span>
                <span className="spec__hint">hover component to inspect spec</span>
              </figcaption>

              <div className="spec__mask">
                <pre>
                  <code>
                    {lines.map((lineText, idx) => {
                      const lineNo = idx + 1;
                      const hot = isLineHot(lineNo);
                      return (
                        <div
                          key={lineNo}
                          className={`ln ${hot ? 'is-hot' : ''}`}
                          onMouseEnter={() => {
                            setHoveredLineNo(lineNo);
                            const cardKey = getHotCardKeyForLine(lineNo);
                            if (cardKey) setActiveCardKey(cardKey);
                          }}
                          onMouseLeave={() => {
                            setHoveredLineNo(null);
                            setActiveCardKey(null);
                          }}
                        >
                          <span className="no">{lineNo}</span>
                          <span>
                            {lineText.startsWith('#') ? (
                              <span className="c">{lineText}</span>
                            ) : lineText.includes(':') ? (
                              <>
                                <span className="k">{lineText.split(':')[0]}:</span>
                                <span className="v">{lineText.substring(lineText.indexOf(':') + 1)}</span>
                              </>
                            ) : (
                              <span className="p">{lineText}</span>
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </code>
                </pre>
              </div>
            </figure>

            {/* Interactive Stack Cards */}
            <div className="stack-cards">
              {stackCards.map((card) => {
                const isHot = activeCardKey === card.key;
                return (
                  <div
                    key={card.key}
                    className={`stack-card ${isHot ? 'is-hot' : ''}`}
                    onMouseEnter={() => setActiveCardKey(card.key)}
                    onMouseLeave={() => setActiveCardKey(null)}
                    data-cursor="inspect card"
                  >
                    <div className="stack-card__k">{card.key}</div>
                    <strong>{card.name}</strong>
                    <p>{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
