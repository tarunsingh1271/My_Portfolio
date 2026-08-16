// ─────────────────────────────────────────────
// PORTFOLIO DATA — Tarun Singh (Cloud & DevOps Engineer / SRE)
// ─────────────────────────────────────────────

export const personalInfo = {
  name: "Tarun SINGH",
  role: "Cloud & DevOps Engineer — SRE",
  handle: "tarunsingh1271",
  email: "Tarunsingh1271@gmail.com",
  phone: "+33 7 45 69 21 71",
  location: "Paris, France",
  timezone: "Europe/Paris",
  coords: { lat: 48.8566, lon: 2.3522 }, // Paris coordinates for night sky catalog
  github: "https://github.com/tarunsingh1271",
  linkedin: "https://www.linkedin.com/in/tarunsingh1271/",
  status: "Operational",
  uptime: "99.99%",
  latDeg: "48.8566° N",
  lonDeg: "2.3522° E",
  profilePhoto: "/req/img/profile.png",
  resumePdf: "/Tarun_Singh_CV.pdf"
};

export const contactSubject = "we would like to get in touch";
export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(contactSubject)}`;

// ── Dynamic Hero Phrases ─────────────────────
export const heroPrefix = "I build ";
export const heroPhrases = [
  "scalable cloud infrastructure & highly reliable systems.",
  "scalable infrastructure and fault-tolerant systems.",
  "automated infrastructure for high-velocity engineering.",
  "highly available systems and resilient cloud architectures.",
  "secure, scalable, and fully automated cloud environments.",
  "unbreakable cloud platforms designed for maximum uptime.",
];

export const summary =
  "I am a Cloud and DevOps Engineer specializing in infrastructure automation, system reliability, and container orchestration. " +
  "Passionate about building resilient CI/CD pipelines, managing infrastructure as code (IaC), and bridging the gap between development and scalable cloud operations.";

// ── About Bio & Manifesto ────────────────────
export const aboutBio = {
  lead: "My engineering journey is driven by a deep fascination with how complex systems scale under pressure.",
  p1: "I bridge the gap between secure architectural design and continuous delivery. My core focus centers on AWS cloud infrastructure, Kubernetes container orchestration (EKS), and Terraform IaC.",
  p2: "Holding a Master's degree in Cyber Security and Cloud Computing from École Supérieure d'Ingénieurs Léonard de Vinci (ESILV) in Paris, I specialize in building resilient GitLab CI/CD pipelines, enforcing zero-trust security controls, and eliminating manual toil."
};

// ── Operational Principles ───────────────────
export const principles = [
  {
    num: "01",
    title: "Infrastructure as Code First",
    desc: "If it isn't defined in code and versioned in Git, it doesn't exist in production."
  },
  {
    num: "02",
    title: "Automate Everything",
    desc: "Eliminate toil. Continuous Integration and Security scanning run on every single commit."
  },
  {
    num: "03",
    title: "Resilience & Security",
    desc: "Designing fault-tolerant EKS clusters with zero-trust RBAC and automated failover."
  }
];

// ── Work Experiences (`git log --career`) ────
export const experiences = [
  {
    tag: "release/2024.12 — HEAD",
    company: "RGIS SPÉCIALISTES EN INVENTAIRE",
    role: "Cloud and DevOps Engineer",
    period: "12/2024 – Present",
    location: "Paris, France",
    isCurrent: true,
    highlights: [
      "Engineered multi-tier AWS environments using Terraform achieving 100% environment reproducibility.",
      "Managed production EKS/Kubernetes clusters utilizing Helm & HPA for continuous scaling.",
      "Hardened cloud-native applications via GitLab CI/CD pipelines with integrated SAST scanning and AWS WAF.",
      "Implemented zero-trust RBAC systems and secure identity management across cloud resources."
    ],
    chips: ["AWS", "Terraform", "Kubernetes (EKS)", "Helm", "GitLab CI/CD", "AWS WAF"]
  },
  {
    tag: "release/2024.04",
    company: "Qubit Pharmaceuticals",
    role: "DevOps Engineer Intern",
    period: "04/2024 – 09/2024",
    location: "Paris, France",
    isCurrent: false,
    highlights: [
      "Maintained robust GitLab CI/CD pipelines achieving 98% automated test coverage and cutting deployment bugs by 30%.",
      "Tuned backend APIs and background job processing, boosting server response times by 25%.",
      "Deployed automated data aggregation pipelines integrating external APIs for internal dashboards.",
      "Enforced strict deployment standards and conducted asynchronous code reviews across distributed teams."
    ],
    chips: ["GitLab CI", "Python", "API Tuning", "System Reliability", "Linux"]
  },
  {
    tag: "release/2023.03",
    company: "Fluwid Technologies",
    role: "Backend & Infrastructure Intern",
    period: "03/2023 – 08/2023",
    location: "India",
    isCurrent: false,
    highlights: [
      "Optimized PostgreSQL database indexing & query execution, delivering 40% faster read/write operations.",
      "Engineered dual-layer JWT/OAuth authentication systems with granular role-based access control.",
      "Deployed high-performance backend architecture supporting low-latency handling for 10,000+ active users."
    ],
    chips: ["PostgreSQL", "OAuth/JWT", "Backend Scaling", "High Availability"]
  },
  {
    tag: "release/2022.01",
    company: "Brain Mentors Pvt. Ltd",
    role: "Software Developer",
    period: "01/2022 – 08/2022",
    location: "India",
    isCurrent: false,
    highlights: [
      "Integrated code using Git workflows and collaborated with QA teams to resolve structural issues.",
      "Translated complex application requirements into deployable, maintainable code structures.",
      "Streamlined web asset delivery, reducing load times and increasing system engagement by 20%."
    ],
    chips: ["Git", "Agile", "Web Assets", "System Integration"]
  }
];

// ── Metrics (`git diff --stat`) ───────────────
export const impactStats = [
  { val: "100%", unit: "", label: "IaC reproducibility with Terraform & AWS" },
  { val: "98%", unit: "", label: "Automated CI/CD test coverage achieved" },
  { val: "40%", unit: "↓", label: "Faster DB read/write operation latency" },
  { val: "10k+", unit: "", label: "Active users supported with low latency" }
];

// ── Stack YAML Specification ──────────────────
export const stackYamlCode = `# stack.yaml — Tarun Singh Engineering Ecosystem
version: "2026.1"
maintainer: "Tarun Singh <Tarunsingh1271@gmail.com>"
cluster: "AWS EKS (Paris / eu-west-3)"

cloud_infrastructure:
  provider: "Amazon Web Services (AWS)"
  iac_tool: "Terraform"
  orchestration: "Kubernetes (EKS), Helm, HPA"
  containers: "Docker, Docker Compose"

automation_cicd:
  pipelines: "GitLab CI/CD, GitHub Actions"
  os_core: "Linux Administration (Ubuntu, RHEL)"
  security_scan: "SAST Tools, AWS WAF"

languages_scripting:
  primary: ["Python", "Bash / Shell"]
  secondary: ["Go", "JavaScript / TypeScript"]

storage_databases:
  relational: "PostgreSQL"
  caching_search: "Elasticsearch, CIFS / NFS"

identity_security:
  auth: "JWT / OAuth2"
  access: "Role-Based Access Control (RBAC)"
`;

export const stackCards = [
  {
    key: "cloud_infra",
    name: "AWS & Kubernetes",
    desc: "EKS clusters, Helm charts, Terraform IaC, HPA auto-scaling",
    hotLines: [6, 7, 8, 9]
  },
  {
    key: "cicd_automation",
    name: "GitLab CI & Automation",
    desc: "Multi-stage pipelines, SAST scanning, Linux administration",
    hotLines: [12, 13, 14]
  },
  {
    key: "scripting_storage",
    name: "Python, Bash & Postgres",
    desc: "Automation scripts, query optimization, high availability DBs",
    hotLines: [17, 21]
  }
];

// ── Projects ──────────────────────────────────
export const projects = [
  {
    title: "Multi-Region AWS IaC Architecture",
    tag: "cloud / iac-architecture",
    year: "2026",
    description:
      "Engineered a high-availability, multi-region AWS environment incorporating VPC Peering, Route 53 Latency Routing, and RDS Aurora Global Database using modular Terraform IaC.",
    chips: ["AWS", "Terraform", "Route 53", "RDS Aurora", "IaC"],
    links: { github: "https://github.com/tarunsingh1271", live: "#" }
  },
  {
    title: "DevSecOps Automated Security & SAST Pipeline",
    tag: "secops / pipeline-security",
    year: "2026",
    description:
      "Built an end-to-end security pipeline in GitLab CI/CD incorporating SAST scanning, dependency vulnerability auditing (Trivy), secrets detection (Gitleaks), and automated AWS WAF policy enforcement.",
    chips: ["GitLab CI", "DevSecOps", "Trivy", "Gitleaks", "AWS WAF"],
    links: { github: "https://github.com/tarunsingh1271", live: "#" }
  },
  {
    title: "GitOps & Observability Stack on EKS",
    tag: "k8s / gitops-observability",
    year: "2026",
    description:
      "Implemented GitOps deployment workflows using ArgoCD on Amazon EKS clusters. Configured full-stack observability with Prometheus, Grafana dashboards, and automated Slack notifications.",
    chips: ["AWS EKS", "Kubernetes", "ArgoCD", "Helm", "Prometheus", "Grafana"],
    links: { github: "https://github.com/tarunsingh1271", live: "#" }
  },
  {
    title: "AWS EKS Infrastructure Migration",
    tag: "prod / cluster-migration",
    year: "2026",
    description:
      "Migrated a production portfolio web application from a managed PaaS to a fully self-managed Amazon EKS (Kubernetes) cluster with Terraform IaC.",
    chips: ["AWS EKS", "Kubernetes", "Terraform", "Helm", "DevOps"],
    links: { github: "https://github.com/tarunsingh1271", live: "#" }
  },
  {
    title: "Self-Hosted Docker Homelab & NAS",
    tag: "homelab / storage-automation",
    year: "2026",
    description:
      "Engineered a local media automation environment on Ubuntu using Docker Compose. Orchestrated container workloads and configured permanent network-attached storage via CIFS.",
    chips: ["Docker Compose", "Ubuntu Linux", "Networking", "CIFS/NFS"],
    links: { github: "https://github.com/tarunsingh1271", live: "#" }
  },
  {
    title: "AI ATS Resume Optimizer Pipeline",
    tag: "app / ai-pipeline",
    year: "2026",
    description:
      "Built an intelligent resume optimization platform utilizing Gemini and OpenAI models. Focused on backend API architectures, automated parsing pipelines, and high-availability deployment.",
    chips: ["Python", "Node.js", "AI API Integration", "System Architecture"],
    links: {
      github: "https://github.com/tarunsingh1271/resume-ats-optimizer",
      live: "https://resume-ai-ats-optimizer.vercel.app/"
    }
  }
];

// ── Education ─────────────────────────────────
export const education = [
  {
    degree: "Master's Degree",
    field: "Cyber Security and Cloud Computing",
    institution: "École Supérieure d'Ingénieurs Léonard de Vinci (ESILV)",
    location: "Paris, France",
    years: "2023 – 2025",
    focus: "Focus: Cloud Orchestration, Network Architecture, Cyber Risk, Automation"
  },
  {
    degree: "Bachelor's Degree",
    field: "Computer Applications",
    institution: "Chandigarh University",
    location: "India",
    years: "2019 – 2022",
    focus: "Focus: System Architecture, Data Structures, Object-Oriented Programming"
  }
];

// ── Spoken Languages ──────────────────────────
export const spokenLanguages = [
  { language: "English", level: "Fluent" },
  { language: "French", level: "Intermediate" }
];