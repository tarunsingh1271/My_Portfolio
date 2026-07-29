// ─────────────────────────────────────────────
//  PORTFOLIO DATA — single source of truth
//  Used by: Experience, Skills, Projects, About,
//           Hero, and ResumeModal
// ─────────────────────────────────────────────

// ── Personal Info ────────────────────────────
export const personalInfo = {
  name: "Tarun SINGH",
  title: "Full Stack Engineer — SRE · DevOps",
  email: "Tarunsingh1271@gmail.com",
  phone: "+33 7 45 69 21 71",
  location: "Paris, France",
  github: "https://github.com/tarunsingh1271",
  linkedin: "https://www.linkedin.com/in/tarunsingh1271/",
};

export const contactSubject = "we would like to get in touch";
export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(contactSubject)}`;

// ── Hero / Summary ───────────────────────────
export const heroHeadline = "I build scalable systems & robust architectures.";

export const summary =
  "I am a Software Engineer specializing in backend architecture, system reliability, and cloud orchestration. " +
  "Passionate about automation, building resilient infrastructure, and bridging the gap between development and operations.";

// ── Work Experience ──────────────────────────
export const experiences =
  [
    {
      role: "Cloud and DevOpsEngineer",
      company: "RGIS SPÉCIALISTES EN INVENTAIRE",
      location: "Paris, France",
      period: "12/2024 – Present",
      highlights: [
        "Deployment: Engineered multi-tier AWS apps using Terraform (IaC) to achieve 100% environment reproducibility.",
        "Scalability: Managed EKS/Kubernetes clusters with Helm and HPA to maintain high availability.",
        "Security: Hardened cloud-native apps via GitLab CI/CD with integrated SAST and AWS WAF.",
        "Auth: Implemented secure JWT/OAuth and RBAC systems for cross-functional identity management."
      ],
    },
    {
      role: "DevOps Engineer Intern",
      company: "Qubit Pharmaceuticals",
      location: "Paris, France",
      period: "04/2024 – 09/2024",
      highlights: [
        "Dashboard: Built a Rails KPI dashboard with external APIs, reducing manual data entry by 30%.",
        "Optimization: Boosted server response time by 25% through Rails API and background job tuning.",
        "Testing: Achieved 98% test coverage via GitLab CI/CD and RSpec, cutting production bugs by 30%.",
        "Teamwork: Led async code reviews and enforced Ruby standards across distributed engineering teams."
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Fluwid Technologies",
      location: "India",
      period: "03/2023 – 08/2023",
      highlights: [
        "Backend: Architected RESTful APIs for 10k+ users, optimizing PostgreSQL for 40% faster queries 30].",
        "Security: Engineered dual-layer JWT/OAuth authentication with strict RBAC.",
        "Reliability: Designed high-performance backend services ensuring low-latency for mobile/web platforms."
      ],
    },
    {
      role: "Front-end Developer",
      company: "Brain Mentors Pvt. Ltd",
      location: "India",
      period: "01/2022 – 08/2022",
      highlights: [
        "Frontend: Created responsive UI with JS frameworks, driving a 20% increase in user engagement.",
        "Quality: Partnered with QA to resolve issues, resulting in a 30% reduction in user-reported bugs.",
        "Translation: Converted complex UI designs into clean, maintainable code as a technical bridge."
      ],
    },
  ];

// ── About Me ─────────────────────────────────
export const about = {
  bio: [
    `My journey as a software engineer began with a deep fascination for how complex systems operate behind the scenes. Today, I specialize in <strong>Ruby on Rails</strong>, building secure, performant web services, and designing scalable cloud architectures.`,
    `With a Master's degree in <strong>Cyber Security and Cloud Computing</strong> from École Supérieure d'Ingénieurs Léonard de Vinci in Paris, I bridge the gap between secure architectural design and rapid feature development.`,
    `I thrive in remote, asynchronous engineering environments where clean code, comprehensive testing (RSpec), and system reliability are paramount.`,
  ],
  opportunities: {
    title: 'Open to Opportunities',
    text: "I'm always open to exciting challenges. I welcome spontaneous applications and am actively exploring roles such as:",
    tags: ['Site Reliability Engineer (SRE)', 'DevOps Engineer', 'Software Developer'],
    tagColors: ['tagIndigo', 'tagPink', 'tagGreen'],
  },
};

// ── Education ────────────────────────────────
export const education = [
  {
    degree: "Master's Degree",
    degreeType: 'highlight',
    field: "Cyber Security and Cloud Computing",
    institution: "École Supérieure d'Ingénieurs Léonard de Vinci • Paris, France",
    focus: "Focus: Cyber Risk, Network Arch, Cloud Orchestration, AI",
  },
  {
    degree: "Bachelor's Degree",
    degreeType: 'primary',
    field: "Computer Applications",
    institution: "Chandigarh University • India",
    focus: "Focus: Data Structures, Web Design, OOP",
  },
];

// ── Skills ───────────────────────────────────
export const skillCategories = [
  {
    title: "Languages",
    skills: ["Ruby", "Python", "JavaScript", "TypeScript", "Java", "C/C++"],
  },
  {
    title: "Frameworks",
    skills: ["Ruby on Rails", "RSpec", "React.js", "Next.js", "Node.js", ".NET"],
  },
  {
    title: "Web Technologies",
    skills: ["GraphQL", "REST APIs", "HTML", "CSS", "JWT", "OAuth"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "GitLab CI/CD"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "NoSQL", "Elasticsearch"],
  },
  {
    title: "Tools & Methodologies",
    skills: ["GitLab", "GitHub", "Slack", "Figma", "Agile/Scrum"],
  },
];

// ── Projects ─────────────────────────────────
export const projects = [
  {
    title: "Defence Mandate Recruiting",
    year: "2026",
    description:
      "A modern, responsive web platform for a specialized defense recruiting agency, designed to connect top-tier talent with exclusive industry opportunities.",
    tags: ["React", "Web Design", "UI/UX"],
    links: {
      github: "https://github.com/tarunsingh1271/my-defence_mandate-app",
      live: "https://defence-mandate-app.vercel.app/",
    },
  },
  {
    title: "AI ATS Resume Optimizer",
    year: "2026",
    description:
      "An intelligent resume optimization platform utilizing Gemini and OpenAI models to dynamically align user resumes with ATS requirements, featuring real-time document rendering.",
    tags: ["React", "AI Integration", "Glassmorphism"],
    links: {
      github: "https://github.com/tarunsingh1271/resume-ats-optimizer",
      live: "https://resume-ai-ats-optimizer.vercel.app/",
    },
  },
  {
    title: "MapAI",
    year: "2024",
    description:
      "An AI-driven travel planner that generates optimal multi-stop itineraries based on time efficiency and user preferences.",
    tags: ["React", "Node.js", "AI API", "Maps API"],
    links: { github: "#", live: "#" },
  },
];

// ── Spoken Languages ─────────────────────────
export const spokenLanguages = [
  { language: "English", level: "Fluent" },
  { language: "French", level: "Intermediate" },
];
