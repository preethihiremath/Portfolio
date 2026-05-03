export const person = {
  name: "Preethi Vijaykumar Hiremath",
  shortName: "Preethi",
  title: "Backend Engineer | ML Systems Engineer",
  tagline:
    "Backend engineer with 2+ years at Deutsche Bank, promoted to Senior Analyst in 15 months, specializing in high-performance distributed systems and machine learning applications.",
  email: "preethivhiremath.vh@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/preethivhirematha04a071b5/",
  githubUrl: "https://github.com/preethihiremath",
  location: "Kaiserslautern, Germany",
  workAuthorization: "Authorized to work in Germany (Student Visa)",
  profileImagePath: "/preethi_pfp.jpg",
  resumePath: "/resume.pdf",
};

export const summary =
  "Backend engineer with 2+ years at Deutsche Bank, promoted to Senior Analyst in 15 months, reducing memory usage by 95% via microservices migration. Experience in building distributed financial systems across APAC, US, and EMEA. Applied machine learning experience including neural network training, dataset preparation, and LLM integration (Gemini 2.5 Flash). Open-source contributor with production tools including SnitchLint (VS Code OWASP scanner, 500+ installs) and BrainSurf (PyPI EEG processing library). Seeking Werkstudent role in Java, Spring Boot, Python, or Machine Learning systems.";

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const skillLevels = [
  { name: "Java", level: 5, label: "Expert" },
  { name: "React.js", level: 5, label: "Expert" },
  { name: "Python", level: 4, label: "Strong" },
  { name: "SQL", level: 4, label: "Strong" },
  { name: "Spring Boot", level: 5, label: "Expert" },
  { name: "Node.js", level: 3, label: "Intermediate" },
  { name: "Docker", level: 2, label: "Beginner" },
  { name: "K8", level: 2, label: "Beginner" },
  { name: "GCP", level: 2, label: "Intermediate" },
  { name: "ML / AI", level: 4, label: "Intermediate" },
] as const;

export const experienceTimeline = [
  {
    role: "Senior Analyst",
    company: "Deutsche India Pvt Ltd, Bangalore",
    period: "Oct 2024 - Mar 2025",
    points: [
      "Migrated legacy Java/C++ systems to Spring Boot microservices, reducing memory usage by 95%.",
      "Built real-time Oracle AQ messaging system enabling sub-second UI updates across APAC, US, and EMEA.",
      "Designed REST + SOAP APIs with TDD/BDD, reducing defects by 30%.",
      "Led SUSE Linux -> RHEL 9 migration resolving toolchain issues across 8 production pipelines.",
      "SME for mission-critical systems maintaining 99.9%+ SLA.",
    ],
  },
  {
    role: "Graduate Analyst",
    company: "Deutsche India Pvt Ltd, Bangalore",
    period: "Jul 2023 - Oct 2024",
    points: [
      "Optimized Oracle SQL using GTT, stored procedures, and UDTs improving performance by 20%+.",
      "Built ETL pipelines connecting 6 financial systems with thread-safe reconciliation logic.",
      "Contributed to Oracle Exadata (ExaCC) migration reducing query latency by 15%.",
    ],
  },
  {
    role: "Web Intern",
    company: "Luxeveda Brand Services",
    period: "Apr 2023 - Jun 2023",
    points: [
      "Built Node.js MQTT backend enabling real-time IoT communication across 50+ devices.",
      "Achieved sub-100ms latency for air-quality monitoring system (Praan hardware).",
    ],

  },
  {
    role: "React Developer Intern",
    company: "Inovact Pvt Ltd",
    period: "August 2021 - November 2021",
    points: [
      "Built 15+ responsive {React.js} components using hooks and state management for a component-driven production UI reduced page load time by 20\% and improved backend API integration",
      "Collaborated with designers and backend developers to translate {UI/UX} wireframes into functional, scalable interface features.",
    ],

  },
] as const;

export const projects = [
  {
    id: "brainsurf",
    title: "BrainSurf",
    impact: "Open-source cognitive neuroscience toolkit for practical EEG workflows.",
    bullets: [
      "PyPI EEG signal processing library.",
      "Bandpass filtering, epoch extraction, and feature engineering.",
      "no-code app for cognitive neuroscience experiments",
    ],
    links: [{ label: "GitHub", href: "https://github.com/preethihiremath" }],
    tags: ["Python", "PyPI", "EEG", "Signal Processing"],
  },
  {
    id: "snitchlint",
    title: "SnitchLint",
    impact: "Security-first developer tooling.",
    bullets: [
      "A developer first static security analysis engine for JS/TS using the TypeScript AST",
      "Implemented a taint/dataflow analysis system that Tracks propagation across assignments, expressions, and function calls and Supports parameter seeding to detect vulnerabilities across helper functions",
      "Detects OWASP Top 10-inspired vulnerabilities (XSS, SQLi, SSRF, secrets, command injection, weak crypto)",
      "Integrated directly into VS Code Problems panel with stable rule codes and remediation hints",
      "Designed extensible rule engine architecture with typed models and test coverage"
    ],
    links: [{ label: "GitHub", href: "https://github.com/preethihiremath" }],
    tags: ["TypeScript", "OWASP", "VS Code", "ESLint"],
  },
] as const;
