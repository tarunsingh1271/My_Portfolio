import { useMemo } from 'react';
import {
  SiRuby,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiRubyonrails,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDotnet,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiGitlab,
  SiPostgresql,
  SiElasticsearch,
  SiGithub,
  SiSlack,
  SiFigma,
  SiHtml5,
  SiJsonwebtokens,
} from 'react-icons/si';
import { FaJava, FaVial, FaCss3Alt, FaAws, FaDatabase, FaKey, FaSync, FaCode } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';

import { skillCategories } from '../data/portfolioData';
import styles from './Skills.module.css';

const ICON_MAP = {
  Ruby: SiRuby,
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: FaJava,
  'C/C++': SiCplusplus,
  'Ruby on Rails': SiRubyonrails,
  RSpec: FaVial,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  '.NET': SiDotnet,
  GraphQL: SiGraphql,
  'REST APIs': TbApi,
  HTML: SiHtml5,
  CSS: FaCss3Alt,
  JWT: SiJsonwebtokens,
  OAuth: FaKey,
  AWS: FaAws,
  Azure: VscAzure,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  'GitLab CI/CD': SiGitlab,
  PostgreSQL: SiPostgresql,
  NoSQL: FaDatabase,
  Elasticsearch: SiElasticsearch,
  GitLab: SiGitlab,
  GitHub: SiGithub,
  Slack: SiSlack,
  Figma: SiFigma,
  'Agile/Scrum': FaSync,
};

const Skills = () => {
  const uniqueSkills = useMemo(() => {
    const rawSkills = skillCategories.flatMap((cat) => cat.skills);
    return Array.from(new Set(rawSkills));
  }, []);

  // Double the list for seamless infinite looping animation
  const marqueeItems = [...uniqueSkills, ...uniqueSkills];

  return (
    <div id="skills" className={styles.skillsMarqueeSection}>
      <div className={styles.headerLabel}>
        <span className={styles.promptSymbol}>&gt;</span> tech stack &amp; skills
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((skill, idx) => {
            const IconComponent = ICON_MAP[skill] || FaCode;
            return (
              <div key={`${skill}-${idx}`} className={styles.skillCard}>
                <IconComponent className={styles.skillIcon} aria-hidden="true" />
                <span className={styles.skillName}>{skill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

