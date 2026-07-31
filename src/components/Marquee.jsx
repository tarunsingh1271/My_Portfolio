const SKILLS = [
  "AWS Cloud",
  "Kubernetes (EKS)",
  "Terraform IaC",
  "GitLab CI/CD",
  "GitHub Actions",
  "Linux Administration",
  "Helm Charts",
  "Python Automation",
  "DevSecOps",
  "SAST Security Scan",
  "AWS WAF",
  "PostgreSQL",
  "Docker Compose",
  "HPA Auto-Scaling",
  "Microservices",
  "Zero-Trust RBAC",
  "Site Reliability Engineering (SRE)"
];

export default function Marquee() {
  // Duplicate array to ensure seamless infinite looping marquee
  const trackItems = [...SKILLS, ...SKILLS];

  return (
    <div className="marquee" aria-label="Ecosystem skills marquee">
      <div className="marquee__track">
        {trackItems.map((item, idx) => (
          <span key={idx} className="marquee__item">
            <span className="d" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
