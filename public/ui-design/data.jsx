// === Portfolio data — edit this when resume is pasted ===

const PROFILE = {
  name: "Max",
  surname: "Behzadi",
  title: "Creative Developer",
  tagline: "Full-stack developer crafting interactive web experiences with a focus on motion, 3D, and considered interaction design.",
  location: "Available worldwide",
  status: "Open to opportunities",
  email: "hello@maxbehzadi.online",
  site: "maxbehzadi.online",
  github: "@maxbehzadi",
  linkedin: "max-behzadi",
  yearsExp: 4,
  projectsShipped: 24,
  coffeeYear: 312
};

const NAV_NODES = [
  { id: "experience", label: "Experience", shape: "torus", orbit: 1, angle: 30 },
  { id: "projects",   label: "Projects",   shape: "cube",   orbit: 2, angle: 110 },
  { id: "skills",     label: "Skills",     shape: "sphere", orbit: 1, angle: 200 },
  { id: "education",  label: "Education",  shape: "diamond",orbit: 3, angle: 280 },
  { id: "learning",   label: "Learning",   shape: "prism",  orbit: 2, angle: 340 },
  { id: "contact",    label: "Contact",    shape: "sphere", orbit: 3, angle: 60  }
];

const EXPERIENCE = [
  {
    role: "Senior Frontend Developer",
    company: "Studio Placeholder",
    location: "Remote",
    from: "2024",
    to: "Present",
    blurb: "Leading interactive web projects with WebGL, React, and motion design. Building shipping-grade 3D experiences end-to-end.",
    tags: ["React", "Three.js", "GLSL", "GSAP", "TypeScript"]
  },
  {
    role: "Full-Stack Developer",
    company: "Tech Co.",
    location: "Hybrid",
    from: "2022",
    to: "2024",
    blurb: "Built data-heavy dashboards and customer-facing apps. Owned design system migration and shipped 12 production features.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"]
  },
  {
    role: "Frontend Developer",
    company: "Agency Name",
    location: "On-site",
    from: "2021",
    to: "2022",
    blurb: "Delivered marketing sites and product prototypes for clients in fintech and healthcare. Mentored two juniors.",
    tags: ["Vue", "Sass", "Webflow", "Figma"]
  },
  {
    role: "Junior Web Developer",
    company: "First Studio",
    location: "On-site",
    from: "2020",
    to: "2021",
    blurb: "Cut my teeth on WordPress, custom themes and performance work. First exposure to motion design and shaders.",
    tags: ["WordPress", "PHP", "JavaScript", "CSS"]
  }
];

const PROJECTS = [
  {
    name: "Aurora Dashboard",
    cat: "Web App · 2025",
    desc: "Real-time analytics dashboard with WebGL data visualizations and multi-tenant architecture. Replaced a legacy tool used by 8k operators.",
    tags: ["React", "Three.js", "Node.js"],
    accent: "cyan",
    role: "Lead Developer",
    timeline: "6 months",
    stack: ["React 18", "Three.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Live data streaming via WebSocket",
      "Custom GLSL heatmap shader",
      "Multi-tenant access control",
      "Sub-100ms render budget"
    ]
  },
  {
    name: "Flux Commerce",
    cat: "E-commerce · 2024",
    desc: "Headless storefront with custom checkout, motion-rich product pages, and a cart that defies physics in the most pleasing way.",
    tags: ["Next.js", "Stripe", "Sanity"],
    accent: "violet",
    role: "Full-Stack Developer",
    timeline: "4 months",
    stack: ["Next.js 14", "Sanity CMS", "Stripe", "Framer Motion", "Vercel"],
    features: [
      "Server-side rendered catalog",
      "One-page Stripe checkout",
      "Studio-grade motion language",
      "Lighthouse 98 across the board"
    ]
  },
  {
    name: "Orbital Portfolio",
    cat: "Personal · 2025",
    desc: "Personal site reimagined as a navigable 3D space. Click an orbiting object, teleport to a scene. The thing you're looking at, basically.",
    tags: ["Three.js", "GLSL", "GSAP"],
    accent: "pink",
    role: "Designer & Developer",
    timeline: "Ongoing",
    stack: ["Three.js", "React Three Fiber", "GSAP", "Custom shaders"],
    features: [
      "Click-to-teleport navigation",
      "Reactive starfield + grid",
      "Per-section 3D environment",
      "Tweakable 3D intensity"
    ]
  },
  {
    name: "Sonar API",
    cat: "Open Source · 2024",
    desc: "TypeScript SDK for streaming audio analysis. 3.2k stars, used by indie developers and a few studios with surprisingly large logos.",
    tags: ["TypeScript", "Web Audio", "WASM"],
    accent: "amber",
    role: "Maintainer",
    timeline: "Ongoing",
    stack: ["TypeScript", "Web Audio API", "Rust → WASM", "Vitest"],
    features: [
      "Zero-config TS types",
      "WASM hot path for FFT",
      "Streaming + batched modes",
      "Tree-shakeable exports"
    ]
  },
  {
    name: "Loom Studio",
    cat: "Tooling · 2023",
    desc: "Internal motion design tool that lets non-engineers compose CSS animations visually and export production-ready code.",
    tags: ["Vue", "GSAP", "Electron"],
    accent: "green",
    role: "Sole Developer",
    timeline: "3 months",
    stack: ["Vue 3", "Pinia", "GSAP", "Electron"],
    features: [
      "Visual timeline editor",
      "Keyframe export to CSS / GSAP",
      "Live device preview",
      "Adopted by 14 designers"
    ]
  },
  {
    name: "Beacon Health",
    cat: "Healthcare · 2023",
    desc: "Patient-facing intake flow that replaced a 12-page paper form. Bilingual, accessible, and quietly delightful where appropriate.",
    tags: ["React", "i18n", "WCAG"],
    accent: "cyan",
    role: "Frontend Lead",
    timeline: "5 months",
    stack: ["React", "react-hook-form", "i18next", "Tailwind"],
    features: [
      "WCAG 2.2 AA compliant",
      "Bilingual EN / FA flows",
      "Save-and-resume sessions",
      "+38% completion rate"
    ]
  }
];

const SKILLS = [
  // Frontend (cyan)
  { name: "React",      cat: "frontend", level: 95, x: 18, y: 22, size: 96 },
  { name: "TypeScript", cat: "frontend", level: 90, x: 38, y: 14, size: 84 },
  { name: "Next.js",    cat: "frontend", level: 88, x: 60, y: 22, size: 80 },
  { name: "Vue",        cat: "frontend", level: 70, x: 80, y: 16, size: 70 },

  // 3D / Motion (violet)
  { name: "Three.js",   cat: "threed",   level: 85, x: 28, y: 50, size: 92 },
  { name: "GLSL",       cat: "threed",   level: 70, x: 14, y: 64, size: 72 },
  { name: "GSAP",       cat: "threed",   level: 88, x: 50, y: 60, size: 84 },
  { name: "Framer",     cat: "threed",   level: 82, x: 70, y: 52, size: 76 },

  // Backend (pink)
  { name: "Node.js",    cat: "backend",  level: 80, x: 88, y: 42, size: 80 },
  { name: "PostgreSQL", cat: "backend",  level: 72, x: 92, y: 70, size: 68 },
  { name: "Python",     cat: "backend",  level: 65, x: 6,  y: 42, size: 64 },

  // Design (amber)
  { name: "Figma",      cat: "design",   level: 90, x: 32, y: 84, size: 80 },
  { name: "Blender",    cat: "design",   level: 60, x: 56, y: 88, size: 64 },

  // Tooling (green)
  { name: "Git",        cat: "tooling",  level: 92, x: 76, y: 80, size: 72 }
];

const SKILL_CATS = [
  { id: "frontend", label: "Frontend", color: "var(--cyan)" },
  { id: "threed",   label: "3D / Motion", color: "var(--violet)" },
  { id: "backend",  label: "Backend",  color: "var(--pink)" },
  { id: "design",   label: "Design",   color: "var(--amber)" },
  { id: "tooling",  label: "Tooling",  color: "oklch(0.78 0.16 145)" }
];

// Lines connecting orbs (constellation)
const SKILL_LINES = [
  [0, 1], [1, 2], [2, 3],
  [0, 4], [2, 4], [4, 6], [6, 3],
  [4, 5], [5, 10], [10, 0],
  [6, 7], [7, 8], [8, 9],
  [11, 12], [11, 5], [12, 7],
  [13, 8], [13, 6]
];

const EDUCATION = [
  {
    school: "University of Placeholder",
    degree: "B.Sc. Computer Science",
    date: "2017 — 2021",
    desc: "Focus on graphics, HCI and software engineering. Thesis on real-time procedural texturing."
  },
  {
    school: "Online — Coursera & EdX",
    degree: "Continuing Education",
    date: "2021 — Present",
    desc: "Specializations in WebGL, advanced React patterns, and computer graphics fundamentals."
  },
  {
    school: "Bruno Simon — Three.js Journey",
    degree: "Certification",
    date: "2023",
    desc: "Comprehensive deep-dive into Three.js, GLSL shaders, and React Three Fiber."
  }
];

const LEARNING = [
  { name: "WebGPU + WGSL", progress: 45, meta: "Compute shaders · 6 weeks in" },
  { name: "Rust for Web", progress: 30, meta: "WASM modules · just started" },
  { name: "Generative AI in Creative Tools", progress: 60, meta: "Coursework + side projects" },
  { name: "Houdini Procedural", progress: 20, meta: "Weekends · for fun" }
];

const CONTACT = [
  { label: "Email", val: "hello@maxbehzadi.online", href: "mailto:hello@maxbehzadi.online", icon: "mail" },
  { label: "Site",  val: "maxbehzadi.online", href: "https://maxbehzadi.online", icon: "globe" },
  { label: "GitHub", val: "@maxbehzadi", href: "#", icon: "github" },
  { label: "LinkedIn", val: "max-behzadi", href: "#", icon: "linkedin" }
];

window.PORTFOLIO = { PROFILE, NAV_NODES, EXPERIENCE, PROJECTS, SKILLS, SKILL_CATS, SKILL_LINES, EDUCATION, LEARNING, CONTACT };
