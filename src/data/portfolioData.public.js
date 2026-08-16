export const personalInfo = {
  name: "Your Name",
  title: "Cloud & DevOps Engineer",
  role: "Cloud & DevOps Engineer",
  handle: "yourhandle",
  email: "your.email@example.com",
  phone: "+00 000 000 0000",
  location: "Your City, Country",
  timezone: "Europe/Paris",
  coords: { lat: 48.8566, lon: 2.3522 },
  github: "https://github.com/yourhandle",
  linkedin: "https://www.linkedin.com/in/yourhandle/",
  status: "Operational",
  uptime: "99.99%",
  latDeg: "48.8566 N",
  lonDeg: "2.3522 E",
  profilePhoto: "/req/img/profile.png",
  resumePdf: "/resume.pdf"
};

export const contactSubject = "we would like to get in touch";
export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(contactSubject)}`;

export const heroPrefix = "I build ";
export const heroPhrases = [
  "scalable cloud infrastructure and reliable systems.",
  "automated delivery pipelines and resilient platforms.",
  "secure infrastructure with high availability."
];

export const summary =
  "Cloud and DevOps engineer focused on automation, reliability, and scalable infrastructure.";

export const aboutBio = {
  lead: "I focus on building scalable and reliable engineering systems.",
  p1: "My work combines cloud architecture, automation, and delivery excellence.",
  p2: "I enjoy solving operational complexity with practical, secure solutions."
};

export const principles = [
  {
    num: "01",
    title: "Infrastructure as Code",
    desc: "Version every infrastructure change and automate provisioning."
  },
  {
    num: "02",
    title: "Automate Repetitive Work",
    desc: "Reduce manual operations and increase delivery confidence."
  },
  {
    num: "03",
    title: "Reliability and Security",
    desc: "Design systems that are fault-tolerant and secure by default."
  }
];

export const experiences = [
  {
    tag: "release/current",
    company: "Your Company",
    role: "Cloud and DevOps Engineer",
    period: "2024 - Present",
    location: "Your Location",
    isCurrent: true,
    highlights: [
      "Automated infrastructure provisioning with reusable IaC modules.",
      "Improved deployment reliability through CI/CD best practices.",
      "Implemented observability dashboards and actionable alerts."
    ],
    chips: ["AWS", "Terraform", "Kubernetes", "CI/CD"]
  }
];

export const impactStats = [
  { val: "99.9", unit: "%", label: "Service availability" },
  { val: "40", unit: "%", label: "Deployment time reduction" },
  { val: "30", unit: "%", label: "Operational toil reduced" }
];

export const stackYamlCode = `# stack.yaml - engineering ecosystem
version: 1.0
owner: yourhandle
role: cloud-devops

platform:
  cloud: AWS
  orchestration: Kubernetes
  iac: Terraform
  ci_cd: GitHub Actions
  observability: Prometheus + Grafana
  security: IAM + RBAC + SAST
`;

export const stackCards = [
  {
    key: "cloud",
    name: "Cloud Platform",
    desc: "Scalable cloud foundations for production workloads.",
    hotLines: [7]
  },
  {
    key: "orchestration",
    name: "Kubernetes",
    desc: "Container orchestration for resilient services.",
    hotLines: [8]
  },
  {
    key: "iac",
    name: "Terraform",
    desc: "Reusable infrastructure definitions and workflows.",
    hotLines: [9]
  },
  {
    key: "ci_cd",
    name: "CI/CD",
    desc: "Automated testing, scanning, and deployments.",
    hotLines: [10]
  },
  {
    key: "observability",
    name: "Observability",
    desc: "Monitoring and alerting for reliability.",
    hotLines: [11]
  },
  {
    key: "security",
    name: "Security",
    desc: "Policy and identity controls integrated in pipelines.",
    hotLines: [12]
  }
];

export const projects = [
  {
    year: "2026",
    tag: "cloud-platform",
    title: "Cloud Platform Automation",
    description: "Automated deployment platform with observability and security guardrails.",
    chips: ["Cloud", "IaC", "CI/CD"],
    tags: ["cloud", "automation", "devops"],
    links: {
      github: "#",
      live: "#"
    }
  }
];

export const education = [
  {
    degree: "Master's",
    field: "Cyber Security & Cloud Computing",
    institution: "Your University",
    location: "Your City",
    years: "2022 - 2024",
    focus: "Cloud, Security, and Distributed Systems"
  }
];

export const spokenLanguages = [
  { language: "English", level: "Professional" }
];

export const skillCategories = [
  { title: "Cloud", skills: ["AWS", "Terraform", "Kubernetes"] },
  { title: "Automation", skills: ["CI/CD", "Scripting", "Monitoring"] }
];
