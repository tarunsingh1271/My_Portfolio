// ─────────────────────────────────────────────
//  PORTFOLIO DATA — single source of truth
//  Used by: Experience, Skills, Projects, About,
//           Hero, and ResumeModal
// ─────────────────────────────────────────────

// ── Personal Info ────────────────────────────
export const personalInfo = {
  name: "Tarun SINGH",
  title: "Cloud & DevOps Engineer — SRE",
  email: "Tarunsingh1271@gmail.com",
  phone: "+33 7 45 69 21 71",
  location: "Paris, France",
  github: "https://github.com/tarunsingh1271",
  linkedin: "https://www.linkedin.com/in/tarunsingh1271/",
};

export const contactSubject = "we would like to get in touch";
export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(contactSubject)}`;

// ── Hero / Summary ───────────────────────────
export const heroPrefix = "I build ";

export const heroPhrases = [
  "scalable cloud infrastructure & highly reliable systems.",
  "scalable infrastructure and fault-tolerant systems.",
  "automated infrastructure for high-velocity engineering.",
  "highly available systems and resilient cloud architectures.",
  "secure, scalable, and fully automated cloud environments.",
  "unbreakable cloud platforms designed for maximum uptime.",
];

export const heroHeadline = `${heroPrefix}${heroPhrases[0]}`;

export const summary =
  "I am a Cloud and DevOps Engineer specializing in infrastructure automation, system reliability, and container orchestration. " +
  "Passionate about building resilient CI/CD pipelines, managing infrastructure as code (IaC), and bridging the gap between development and scalable cloud operations.";

// ── Work Experience ──────────────────────────
export const experiences =
  [
    {
      role: "Cloud and DevOps Engineer",
      company: "RGIS SPÉCIALISTES EN INVENTAIRE",
      location: "Paris, France",
      period: "12/2024 – Present",
      highlights: [
        "Infrastructure as Code: Engineered multi-tier AWS environments using Terraform to achieve 100% environment reproducibility.",
        "Container Orchestration: Managed EKS/Kubernetes clusters utilizing Helm and HPA to maintain high availability and seamless scaling.",
        "DevSecOps: Hardened cloud-native applications via GitLab CI/CD pipelines with integrated SAST scanning and AWS WAF.",
        "Access Management: Implemented secure RBAC systems and identity management protocols across cloud resources."
      ],
    },
    {
      role: "DevOps Engineer Intern",
      company: "Qubit Pharmaceuticals",
      location: "Paris, France",
      period: "04/2024 – 09/2024",
      highlights: [
        "CI/CD Automation: Maintained robust GitLab CI/CD pipelines, achieving 98% automated test coverage and cutting production deployment bugs by 30%.",
        "System Optimization: Tuned backend APIs and background job processing, boosting server response times by 25%.",
        "Monitoring & Analytics: Deployed automated data aggregation pipelines integrating external APIs to populate internal performance dashboards.",
        "Reliability Engineering: Led asynchronous infrastructure code reviews and enforced strict deployment standards across distributed engineering teams."
      ],
    },
    {
      role: "Backend & Infrastructure Intern",
      company: "Fluwid Technologies",
      location: "India",
      period: "03/2023 – 08/2023",
      highlights: [
        "Database Administration: Optimized PostgreSQL database indexing and queries, resulting in 40% faster read/write operations for high-traffic services.",
        "Security & Authentication: Engineered dual-layer JWT/OAuth authentication systems with strict role-based access controls.",
        "High Availability: Designed and deployed high-performance backend architecture ensuring low-latency request handling for over 10,000 active users."
      ],
    },
    {
      role: "Software Developer",
      company: "Brain Mentors Pvt. Ltd",
      location: "India",
      period: "01/2022 – 08/2022",
      highlights: [
        "Version Control & Agile: Integrated code utilizing Git workflows and collaborated seamlessly with QA teams to resolve structural issues.",
        "System Integration: Acted as a technical bridge translating complex application designs into deployable, maintainable code structures.",
        "Performance: Streamlined web asset delivery, reducing load times and driving a 20% increase in overall system engagement."
      ],
    },
  ];

// ── About Me ─────────────────────────────────
export const about = {
  bio: [
    `My engineering journey is driven by a deep fascination with how complex systems scale and operate under pressure. Today, my core focus is on <strong>cloud infrastructure, containerization, and automation technologies</strong>, specifically utilizing AWS, Docker, Kubernetes, and Terraform.`,
    `With a Master's degree in <strong>Cyber Security and Cloud Computing</strong> from École Supérieure d'Ingénieurs Léonard de Vinci in Paris, I bridge the gap between secure architectural design and continuous delivery. I am also continuously expanding my automation scripting capabilities, with a strong emphasis on Python and Linux administration.`,
    `I thrive in remote, asynchronous environments where scalable infrastructure as code (IaC), robust CI/CD pipelines, and system reliability are the foundational metrics of success.`,
  ],
  opportunities: {
    title: 'Open to Opportunities',
    text: "I'm always open to exciting infrastructure challenges. I welcome spontaneous applications and am actively exploring roles such as:",
    tags: ['Site Reliability Engineer (SRE)', 'DevOps Engineer', 'Cloud Engineer'],
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
    focus: "Focus: Cloud Orchestration, Network Architecture, Cyber Risk, Automation",
  },
  {
    degree: "Bachelor's Degree",
    degreeType: 'primary',
    field: "Computer Applications",
    institution: "Chandigarh University • India",
    focus: "Focus: System Architecture, Data Structures, OOP",
  },
];

// ── Skills ───────────────────────────────────
export const skillCategories = [
  {
    title: "Cloud & Containerization",
    skills: ["AWS", "Docker", "Kubernetes (EKS)", "Terraform", "Helm"],
  },
  {
    title: "CI/CD & Automation",
    skills: ["GitLab CI/CD", "GitHub Actions", "Linux Administration", "Infrastructure as Code (IaC)"],
  },
  {
    title: "Scripting & Languages",
    skills: ["Python", "Bash/Shell", "Ruby", "JavaScript/TypeScript", "Go"],
  },
  {
    title: "Databases & Storage",
    skills: ["PostgreSQL", "NoSQL", "CIFS/NFS", "Elasticsearch"],
  },
  {
    title: "Monitoring & Security",
    skills: ["AWS WAF", "SAST Tools", "JWT/OAuth", "RBAC"],
  },
  {
    title: "Tools & Methodologies",
    skills: ["Git", "Agile/Scrum", "Docker Compose", "Microservices Architecture"],
  },
];

// ── Projects ─────────────────────────────────
export const projects = [
  {
    title: "AWS EKS Infrastructure Migration",
    year: "2026",
    description:
      "Demonstrated practical enterprise DevOps skills by migrating a production portfolio web application from a managed PaaS (Vercel) to a fully self-managed Amazon EKS (Kubernetes) cluster.",
    tags: ["AWS EKS", "Kubernetes", "DevOps", "Infrastructure"],
    links: { github: "https://github.com/tarunsingh1271", live: "#" },
  },
  {
    title: "Self-Hosted Docker Homelab & NAS",
    year: "2026",
    description:
      "Engineered a local media automation environment on Ubuntu using Docker Compose. Successfully orchestrated containers (qBittorrent, Radarr, Prowlarr) and configured a permanent network-attached storage solution by mounting a shared external drive via CIFS.",
    tags: ["Docker Compose", "Ubuntu Linux", "Networking", "Automation"],
    links: { github: "https://github.com/tarunsingh1271", live: "#" },
  },
  {
    title: "AI ATS Resume Optimizer Pipeline",
    year: "2026",
    description:
      "Built an intelligent resume optimization platform utilizing Gemini and OpenAI models. Focused heavily on backend API integrations, data parsing architectures, and reliable, high-availability deployments.",
    tags: ["Python/Node", "AI API", "System Architecture"],
    links: {
      github: "https://github.com/tarunsingh1271/resume-ats-optimizer",
      live: "https://resume-ai-ats-optimizer.vercel.app/",
    },
  },
];

// ── Spoken Languages ─────────────────────────
export const spokenLanguages = [
  { language: "English", level: "Fluent" },
  { language: "French", level: "Intermediate" },
];