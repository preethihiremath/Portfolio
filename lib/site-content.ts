/**
 * Central place to edit portfolio copy, links, and project details.
 * Use `extended` on projects for extra bullets—they appear behind “More detail”.
 */

export const person = {
  name: "Preethi Vijaykumar Hiremath",
  title: "Software Engineer | Backend & Machine Learning",
  tagline:
    "Built high-performance financial systems at Deutsche Bank, now focused on ML and distributed systems",
  email: "preethivhiremath.vh@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/preethivhirematha04a071b5/",
  githubUrl: "https://github.com/preethihiremath",
  resumePath: "/resume.pdf",
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  /** Stable key for lists */
  id: string;
  title: string;
  /** Shown next to title, e.g. “Python · Library” */
  kind?: string;
  summary: string[];
  /** Optional longer bullets—revealed behind an expand control */
  extended?: string[];
  links: ProjectLink[];
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "brainsurf",
    title: "BrainSurf",
    kind: "Python library",
    summary: [
      "EEG signal processing toolkit for research workflows.",
      "Filtering, epoch extraction, and ERP computation out of the box.",
    ],
    extended: [
      "Replace this bullet with datasets you validated against, benchmarks, or paper links.",
      "Add citation text or PyPI badge once published.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/preethihiremath",
      },
    ],
    tags: ["Python", "Signal processing", "Research"],
  },
  {
    id: "snitchlint",
    title: "SnitchLint",
    kind: "VS Code extension",
    summary: [
      "Static security analysis inside the editor.",
      "AST-based checks aligned with OWASP categories.",
    ],
    extended: [
      "List rules covered (e.g. injection sinks, secrets in code).",
      "Note marketplace slug or VSIX download once live.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/preethihiremath",
      },
    ],
    tags: ["TypeScript", "Security", "AST"],
  },
  {
    id: "ml-breast-cancer",
    title: "Breast cancer classification",
    kind: "ML · Classification",
    summary: [
      "End-to-end model for tumour classification.",
      "Emphasis on preprocessing, evaluation metrics, and interpretability.",
    ],
    extended: [
      "Describe dataset source, validation strategy, and best test scores here.",
      "Link a notebook repository or Hugging Face space if applicable.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/preethihiremath",
      },
    ],
    tags: ["Python", "TensorFlow", "Healthcare ML"],
  },
  {
    id: "ml-translator",
    title: "English–French translator",
    kind: "LSTM · Flask",
    summary: [
      "Sequence model for neural machine translation.",
      "Served behind a lightweight Flask web app.",
    ],
    extended: [
      "Mention corpus size, BLEU scores, deployment URL, or demo GIF.",
      "Add training hardware and training time if useful for recruiters.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/preethihiremath",
      },
    ],
    tags: ["LSTM", "Flask", "NLP"],
  },
];

export const skillGroups = [
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "Node.js"],
  },
  {
    label: "Frontend",
    items: ["React"],
  },
  {
    label: "ML",
    items: ["Python", "TensorFlow", "Keras"],
  },
  {
    label: "Tools",
    items: ["Docker", "CI/CD", "Git", "Geneos"],
  },
];

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
