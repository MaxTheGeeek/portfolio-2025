// === Portfolio data ===

export const PROFILE = {
  name: "Max",
  surname: "Behzadi",
  title: "Creative Developer",
  tagline: "Full-stack developer crafting interactive web experiences with a focus on motion, 3D, and considered interaction design.",
  location: "Available worldwide",
  status: "Open to opportunities",
  email: "maxbehzadi82@gmail.com",
  site: "maxbehzadi.online",
  github: "@maxbehzadi",
  linkedin: "max-behzadi",
  yearsExp: 4,
  projectsShipped: 24,
  coffeeYear: 312
};

export const NAV_NODES = [
  { id: "experience", label: "Experience", shape: "torus", orbit: 1, angle: 30 },
  { id: "projects",   label: "Projects",   shape: "cube",   orbit: 2, angle: 110 },
  { id: "skills",     label: "Skills",     shape: "sphere", orbit: 1, angle: 200 },
  { id: "education",  label: "Education",  shape: "diamond",orbit: 3, angle: 280 },
  { id: "learning",   label: "Learning",   shape: "prism",  orbit: 2, angle: 340 },
  { id: "contact",    label: "Contact",    shape: "sphere", orbit: 3, angle: 60  }
];

export const EXPERIENCE = [
  {
    role: "Learning Pause",
    company: "Self-Directed",
    location: "Global",
    from: "Mar 2026",
    to: "Present",
    blurb: "Dedicated time for intensive upskilling in Agentic workflows, System Design, and advanced cloud orchestrations.",
    tags: ["AWS", "Kubernetes", "Gen AI", "System Design"]
  },
  {
    role: "Full-Stack Engineer",
    company: "Rocklogic GmbH",
    location: "Vienna, Austria",
    from: "Oct 2025",
    to: "Mar 2026",
    blurb: "Led frontend development across multiple shipped products and contributed to event-driven backend microservices.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "Docker", "Event-Driven"]
  },
  {
    role: "Full-Stack Developer",
    company: "Stereum Services FlexCo",
    location: "Vienna, Austria",
    from: "Sep 2024",
    to: "Sep 2025",
    blurb: "Built B2B analytics platform for Ethereum infrastructure, implemented CI/CD pipelines, and developed scalable NestJS microservices.",
    tags: ["Next.js", "NestJS", "TypeScript", "CI/CD", ".NET"]
  },
  {
    role: "Software Developer",
    company: "Rocklogic GmbH",
    location: "Vienna, Austria",
    from: "Jan 2022",
    to: "Aug 2024",
    blurb: "Spearheaded frontend development of an IaaS platform with real-time server management. Contributed to backend microservices using NestJS and RabbitMQ.",
    tags: ["React", "NestJS", "RabbitMQ", "SQL", "JWT"]
  },
  {
    role: "Frontend Developer",
    company: "Freelance / Contract",
    location: "Vienna, Remote",
    from: "Mar 2019",
    to: "Dec 2022",
    blurb: "Delivered 10+ web applications and dashboards for clients across e-commerce and SaaS. Led development of cross-platform applications.",
    tags: ["Vue.js", "React", "Next.js", "Electron"]
  }
];

export const PROJECTS = [
  {
    name: "cover-letter.work",
    cat: "Web Platform · 2026",
    desc: "A platform for generating cover letters and merging PDFs. Driven by AI and robust components.",
    tags: ["React", "Next.js", "Supabase", "shadcn UI"],
    accent: "pink",
    role: "Full-Stack Developer",
    timeline: "Completed",
    stack: ["React", "Next.js", "TypeScript", "shadcn UI", "Supabase"],
    features: ["Cover letter AI generation", "PDF merging tools", "User Authentication via Supabase"],
    image: "/cover-1.png"
  },
  {
    name: "docshow.org",
    cat: "Web App · In Progress",
    desc: "A document sharing platform with secure view-only access modes and LLM-powered insights.",
    tags: [".NET 10", "Angular 20", "AWS"],
    accent: "cyan",
    role: "Full-Stack Developer",
    timeline: "Currently Building",
    stack: ["C#", ".NET 10", "Angular 20", "AWS", "Entity Framework Core", "Ollama", "LLM API"],
    features: ["AWS S3 / RDS deployments", "View-only document viewing", "Locally hosted LLM assistance"],
    image: "/placeholder.jpg"
  },
  {
    name: "TastyDay",
    cat: "Food Application",
    desc: "Comprehensive recipe sharing and food management platform.",
    tags: ["React", "Node.js"],
    accent: "amber",
    role: "Full-Stack Developer",
    timeline: "Completed",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    features: ["Recipe management dashboards", "Dynamic interactive UI", "Secure user profiles"],
    image: "/tastyday.png"
  },
  {
    name: "IRMall",
    cat: "E-Commerce",
    desc: "An advanced, interactive e-commerce mall platform spanning multiple storefront workflows.",
    tags: ["E-Commerce", "Web"],
    accent: "violet",
    role: "Developer",
    timeline: "Completed",
    stack: ["React", "Node.js", "Payment Gateways"],
    features: ["Global Shopping Cart", "Live Product Catalog", "Robust Checkout Engine"],
    image: "/irmall.png"
  }
];

export const SKILLS = [
  // Frontend (cyan)
  { name: "React",      cat: "frontend", level: 95, x: 18, y: 22, size: 96 },
  { name: "TypeScript", cat: "frontend", level: 90, x: 38, y: 14, size: 90 },
  { name: "Next.js",    cat: "frontend", level: 88, x: 60, y: 22, size: 80 },
  { name: "Vue",        cat: "frontend", level: 70, x: 80, y: 16, size: 70 },
  { name: "Angular",    cat: "frontend", level: 85, x: 80, y: 30, size: 78 },

  // 3D / Motion (violet)
  { name: "Three.js",   cat: "threed",   level: 85, x: 28, y: 50, size: 92 },
  { name: "GSAP",       cat: "threed",   level: 88, x: 50, y: 60, size: 84 },
  { name: "Framer",     cat: "threed",   level: 82, x: 70, y: 52, size: 76 },

  // Backend (pink)
  { name: "Node.js",    cat: "backend",  level: 80, x: 88, y: 45, size: 80 },
  { name: "PostgreSQL", cat: "backend",  level: 72, x: 92, y: 60, size: 90 },
  { name: "Python",     cat: "backend",  level: 65, x: 6,  y: 42, size: 64 },
  { name: ".NET",       cat: "backend",  level: 85, x: 60, y: 70, size: 78 },
  { name: "Go",         cat: "backend",  level: 75, x: 40, y: 75, size: 72 },

  // Cloud (amber)
  { name: "AWS",             cat: "cloud", level: 90, x: 32, y: 84, size: 85 },
  { name: "Microsoft Azure", cat: "cloud", level: 80, x: 80, y: 88, size: 100 },

  // Tooling (green)
  { name: "Git",        cat: "tooling",  level: 92, x: 85, y: 80, size: 72 }
];

export const SKILL_CATS = [
  { id: "frontend", label: "Frontend", color: "var(--cyan)" },
  { id: "threed",   label: "3D / Motion", color: "var(--violet)" },
  { id: "backend",  label: "Backend",  color: "var(--pink)" },
  { id: "cloud",    label: "Cloud",    color: "var(--amber)" },
  { id: "tooling",  label: "Tooling",  color: "oklch(0.78 0.16 145)" }
];

export const SKILL_LINES = [
  [0, 1], [1, 2], [2, 3],
  [0, 4], [2, 4], [4, 6], [6, 3],
  [4, 5], [5, 10], [10, 0],
  [6, 7], [7, 8], [8, 9], [9, 11], [11, 12],
  [13, 8], [13, 6]
];

export const EDUCATION = [
  {
    school: "University of Tehran",
    degree: "B.Sc. Accounting",
    date: "Sep 2000 — Feb 2005",
    desc: "Built a solid analytical foundation before pivoting entirely into software engineering and technology."
  },
  {
    school: "WIFI Vienna",
    degree: "Diploma in Software Development (JavaScript)",
    date: "Sep 2020 — Feb 2021",
    desc: "Rigorous bootcamp focused on modern frontend paradigms, JavaScript ecosystem, and scalable application architectures."
  },
  {
    school: "WIFI Vienna",
    degree: "Diploma in Web Application Development (PHP)",
    date: "Jun 2021 — Dec 2021",
    desc: "Comprehensive study covering backend principles, server-side logic, and robust database management systems."
  }
];

export const LEARNING = [
  { name: "AWS", progress: 65, meta: "Cloud architectures · Deep dive" },
  { name: "Kubernetes", progress: 40, meta: "Orchestration · Self hosting" },
  { name: "Gen AI", progress: 80, meta: "LLM Integrations · Agentic workflows" },
  { name: "System Design", progress: 75, meta: "Scalability · Multi-tenant apps" }
];

export const CONTACT = [
  { label: "Email", val: "maxbehzadi82@gmail.com", href: "mailto:maxbehzadi82@gmail.com", icon: "mail" },
  { label: "Email Alternate", val: "max.behzadi@outlook.com", href: "mailto:max.behzadi@outlook.com", icon: "mail" },
  { label: "GitHub", val: "@maxbehzadi", href: "https://github.com/MaxTheGeeek", icon: "github" },
  { label: "LinkedIn", val: "max-behzadi", href: "https://www.linkedin.com/in/max-behzadi-1857b7193", icon: "linkedin" }
];
