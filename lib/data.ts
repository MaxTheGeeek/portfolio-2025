export const PROFILE = {
  name: "Max",
  surname: "Behzadi",
  title: "Full-Stack Engineer",
  tagline: "Full-Stack Engineer with 8+ years of professional experience delivering production-ready applications across B2B SaaS, IaaS infrastructure, and real-time systems.",
  location: "Vienna, Austria",
  status: "Open to opportunities",
  site: "maxbehzadi.online",
  github: "MaxTheGeeek",
  linkedin: "in/maxii",
  yearsExp: 8,
  projectsShipped: 12,
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
    role: "Full-Stack Developer",
    company: "RockLogic GmbH",
    location: "Vienna, Austria",
    from: "Oct 2025",
    to: "Mar 2026",
    blurb: "Built B2B Ethereum analytics platforms and NestJS backends. Extended private banking tools with WPF desktop modules.",
    bullets: [
      "Built a B2B analytics platform for Ethereum infrastructure monitoring using Next.js, NestJS, and PostgreSQL, serving 10+ enterprise clients.",
      "Designed scalable NestJS backend architectures integrating Grafana APIs for automated provisioning of 30+ dashboards, with TypeScript visualization.",
      "Refactored front-end data fetching with React Query, reducing boilerplate and stabilizing client-side caching.",
      "Optimized API performance, reducing response latency from 850ms to 120ms for back-office internal tooling.",
      "Developed a WPF Desktop Application extending private banking back-office tools; implemented Parallel UI Migration using WPF and Angular."
    ],
    tags: ["Next.js", "NestJS", "PostgreSQL", "React Query", "WPF", "TypeScript"]
  },
  {
    role: "Full-Stack Developer",
    company: "Stereum Services FlexCo",
    location: "Vienna, Austria",
    from: "Sep 2024",
    to: "Sep 2025",
    blurb: "Implemented server provisioning APIs and real-time VM dashboards. Built high-performance desktop modules for private banking clients.",
    bullets: [
      "Implemented server provisioning API pipeline using NestJS and RabbitMQ with RBAC across 5+ tenant organizations, cutting provisioning times.",
      "Led frontend development of an IaaS platform including a real-time server management dashboard reflecting live VM states.",
      "Developed WPF desktop tools for private banking, implementing UI Virtualization to handle 50k+ row datasets.",
      "Optimized concurrency reporting using Crystal Reports to analyze multi-threaded transaction states in real time.",
      "Resolved memory leaks and optimized local data structures to improve banking desktop app stability."
    ],
    tags: ["NestJS", "RabbitMQ", "PostgreSQL", "WPF", "Crystal Reports", "MVVM"]
  },
  {
    role: "Full-Stack Developer",
    company: "RockLogic GmbH",
    location: "Vienna, Austria",
    from: "Jan 2022",
    to: "Aug 2024",
    blurb: "Led Stereum Launcher development, reaching 50,000+ active users. Built real-time monitoring and node tracking dashboards.",
    bullets: [
      "Led development of Stereum Launcher, a cross-platform desktop application using Vue.js, Electron, and Node.js, reaching 50,000+ active users.",
      "Built real-time monitoring systems with WebSocket-based architecture, tracking 100+ distributed nodes.",
      "Implemented live telemetry dashboards for system metrics, improving incident response times."
    ],
    tags: ["Vue.js", "Electron", "Node.js", "WebSockets", "WebSocket"]
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance / Contract",
    location: "Vienna, Remote",
    from: "Mar 2019",
    to: "Dec 2021",
    blurb: "Designed shopping basket REST APIs and created internal Laravel administration boards with RBAC.",
    bullets: [
      "Designed and implemented a RESTful Product Catalog and Shopping Basket API using Node.js for IRMALL, an e-commerce platform.",
      "Built an internal back-office management tool using PHP and Laravel 8, implementing custom RBAC for staff administration."
    ],
    tags: ["Node.js", "PHP", "Laravel", "REST API", "MySQL"]
  },
  {
    role: "Junior Frontend Developer",
    company: "TastyDay",
    location: "Netherlands, Remote",
    from: "Jan 2018",
    to: "Mar 2019",
    blurb: "Built UI components and integrated REST endpoints for food-tech consumer solutions.",
    bullets: [
      "Built responsive UI components and contributed to MVP development using JavaScript, HTML5, and CSS3.",
      "Integrated backend REST APIs for a food-tech consumer platform in agile sprints."
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "REST APIs"]
  },
  {
    role: "Career Development & Relocation",
    company: "Language & Tech Courses",
    location: "Vienna, Austria",
    from: "2014",
    to: "2017",
    blurb: "Relocated to Austria; completed German B2 certification and preparatory courses at WIFI Vienna.",
    bullets: [
      "Completed intensive German language training achieving certified B2 level.",
      "Completed preparatory software development courses at WIFI Vienna prior to formal enrollment."
    ],
    tags: ["German B2", "WIFI Vienna", "Software Courses"]
  },
  {
    role: "Junior Software Developer (.NET)",
    company: "Aspira Co.",
    location: "Tehran, Iran",
    from: "Jan 2011",
    to: "Dec 2013",
    blurb: "Created transactional reporting modules and database applications using C#, ASP.NET, and SQL Server.",
    bullets: [
      "Developed internal financial software in C#, ASP.NET, and SQL Server for banking clients.",
      "Implemented transactional reporting modules using LINQ and stored procedures following OOP and SOLID patterns."
    ],
    tags: ["C#", "ASP.NET", "SQL Server", "LINQ", "OOP", "SOLID"]
  }
];

export const PROJECTS = [
  {
    name: "MaxerZ Desktop",
    cat: "Desktop App · 2026",
    desc: "A desktop application that optimizes career search workflows with advanced agentic LLM orchestration. Built with C#, .NET, MAUI, OpenRouter, and Python.",
    tags: ["C#", ".NET", "MAUI", "LLM", "OpenRouter", "Python"],
    accent: "violet",
    role: "Lead Developer",
    timeline: "Completed",
    stack: ["C#", ".NET", "MAUI", "LLM", "OpenRouter", "Python"],
    features: ["Agentic LLM orchestration", "Cover letter writing system", "Resume optimizer"],
    image: "/projects/maxerz-1.png",
    images: ["/projects/maxerz-1.png", "/projects/maxerz-2.png"],
    url: ""
  },
  {
    name: "Stereum Launcher",
    cat: "Desktop App",
    desc: "Cross-platform desktop application reaching 50,000+ active users. Manages Ethereum nodes and cross-OS execution. Built with Electron, Vue.js, and Node.js.",
    tags: ["Electron", "Vue.js", "Node.js"],
    accent: "pink",
    role: "Frontend Lead",
    timeline: "Shipped",
    stack: ["Vue.js", "Electron", "Node.js", "Ethereum"],
    features: ["Ethereum Node Management", "Cross-OS Execution", "50,000+ Active Users"],
    image: "/projects/launcher-1.png",
    images: ["/projects/launcher-1.png", "/projects/launcher-2.png"],
    url: "https://stereum.net"
  },
  {
    name: "rocklogic.at",
    cat: "B2B Analytics Platform",
    desc: "B2B analytics platform and enterprise portal for Ethereum infrastructure monitoring, serving 10+ clients with automated provisioning.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    accent: "cyan",
    role: "Full-Stack Developer",
    timeline: "Shipped",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Grafana API", "React Query"],
    features: ["Automated Grafana dashboards", "React Query caching", "End-to-end telemetry metrics"],
    image: "/projects/rocklogic.png",
    url: "https://rocklogic.at"
  },
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
    image: "/cover-1.png",
    images: ["/cover-1.png", "/cover-2.png"],
    url: "https://cover-letter.work"
  },
  {
    name: "StereumPlus",
    cat: "IaaS Provisioning",
    desc: "A high-performance IaaS provisioning platform orchestrating real-time VM server deployments with NestJS, RabbitMQ, and RBAC.",
    tags: ["NestJS", "RabbitMQ", "PostgreSQL"],
    accent: "amber",
    role: "Full-Stack Developer",
    timeline: "Shipped",
    stack: ["NestJS", "RabbitMQ", "PostgreSQL", "TypeScript"],
    features: ["Server provisioning pipeline", "Real-time VM metrics", "Multi-tenant user management"],
    image: "/projects/stereum-plus.png",
    url: "https://stereumplus.com"
  },
  {
    name: "Private Banking WPF Tool",
    cat: "Desktop App / FinTech",
    desc: "High-performance WPF desktop application extending a private banking back-office tool with MVVM architecture, handling 50k+ row datasets.",
    tags: ["WPF", "C#", ".NET"],
    accent: "violet",
    role: "Desktop Developer",
    timeline: "Shipped",
    stack: ["WPF", "C#", ".NET Core", "Crystal Reports", "MVVM"],
    features: ["VirtualizingStackPanel for 50k+ rows", "Crystal Reports concurrency engine", "Memory-leak optimizations"],
    image: "/projects/banking-table.png"
  },
  {
    name: "IRMall E-Commerce API",
    cat: "E-Commerce / Backend",
    desc: "RESTful Product Catalog and Shopping Basket API for an e-commerce platform handling listing, cart management, and order flow.",
    tags: ["Node.js", "REST API", "Database"],
    accent: "violet",
    role: "Backend Engineer",
    timeline: "Completed",
    stack: ["Node.js", "Express", "RESTful API", "MySQL"],
    features: ["Scalable shopping cart engine", "Order flow state machine", "Product catalog index"],
    image: "/projects/irmall.png"
  },
  {
    name: "StereumLabs",
    cat: "Web Application",
    desc: "Internal management tool and IaaS platform built using NestJS, RabbitMQ, and PostgreSQL with role-based access control.",
    tags: ["NestJS", "RabbitMQ", "PostgreSQL"],
    accent: "green",
    role: "Full-Stack Developer",
    timeline: "Completed",
    stack: ["NestJS", "RabbitMQ", "PostgreSQL", "TypeScript"],
    features: ["Role-based access control", "Internal staff reporting", "Audit logs tracking"],
    image: "/projects/stereum-labs.png",
    url: "https://stereumlabs.com"
  },
  {
    name: "TastyDay Platform",
    cat: "Food-Tech MVP",
    desc: "Responsive food-tech consumer platform building UI components and integrating REST APIs for consumer food booking.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    accent: "amber",
    role: "Junior Frontend Developer",
    timeline: "Completed",
    stack: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
    features: ["Responsive consumer UI", "REST API integration", "Agile sprint delivery"],
    image: "/projects/tastyday.png"
  },
  {
    name: "Aspira Accounting App",
    cat: "Persian Desktop App",
    desc: "Persian desktop accounting application built in C# and ASP.NET using SQL Server stored procedures, double-entry ledgers, and reporting.",
    tags: ["C#", "ASP.NET", "SQL Server"],
    accent: "cyan",
    role: "Junior Software Developer (.NET)",
    timeline: "Completed",
    stack: ["C#", "ASP.NET", "SQL Server", "LINQ", "SOLID"],
    features: ["Transactional reporting with LINQ", "OOP design patterns", "Financial data models design"],
    image: "/projects/aspira-persian.png"
  },
  {
    name: "fungl.com",
    cat: "Single Page Application (SPA)",
    desc: "A premium, high-performance Single Page Application (SPA) designed with polished transitions and responsive data visualizations.",
    tags: ["React", "TypeScript", "Framer Motion"],
    accent: "pink",
    role: "Frontend Developer",
    timeline: "Completed",
    stack: ["React", "TypeScript", "CSS Modules", "Framer Motion"],
    features: ["Highly responsive user interfaces", "Optimized component state management", "Premium interactive animations"],
    image: "/projects/fungl.png",
    url: "https://fungl.com"
  }
];

export const SKILLS = [
  // Frontend & Web (cyan)
  { name: "React",      cat: "frontend", level: 95, x: 18, y: 22, size: 90 },
  { name: "TypeScript", cat: "frontend", level: 92, x: 38, y: 14, size: 90 },
  { name: "Next.js",    cat: "frontend", level: 90, x: 60, y: 22, size: 85 },
  { name: "Vue.js",     cat: "frontend", level: 85, x: 80, y: 16, size: 75 },
  { name: "Angular",    cat: "frontend", level: 80, x: 80, y: 32, size: 75 },

  // Desktop UI (violet)
  { name: "WPF",        cat: "desktop",  level: 85, x: 28, y: 50, size: 85 },
  { name: "Electron",   cat: "desktop",  level: 88, x: 50, y: 60, size: 80 },

  // Backend & DB (pink)
  { name: "C# / .NET",  cat: "backend",  level: 90, x: 70, y: 52, size: 90 },
  { name: "NestJS",     cat: "backend",  level: 92, x: 88, y: 45, size: 90 },
  { name: "Node.js",    cat: "backend",  level: 88, x: 92, y: 60, size: 85 },
  { name: "ASP.NET Core",cat: "backend", level: 85, x: 6,  y: 42, size: 80 },
  { name: "PostgreSQL", cat: "backend",  level: 85, x: 60, y: 70, size: 80 },

  // Tooling & AI (green)
  { name: "RabbitMQ",   cat: "tooling",  level: 80, x: 40, y: 75, size: 75 },
  { name: "Agentic AI", cat: "tooling",  level: 80, x: 85, y: 80, size: 80 },

  // Cloud & Infra (amber)
  { name: "Azure",      cat: "cloud",    level: 82, x: 32, y: 84, size: 85 },
  { name: "Docker",     cat: "cloud",    level: 85, x: 80, y: 88, size: 85 }
];

export const SKILL_CATS = [
  { id: "frontend", label: "Frontend / Web", color: "var(--cyan)" },
  { id: "desktop",  label: "Desktop UI",     color: "var(--violet)" },
  { id: "backend",  label: "Backend / DB",   color: "var(--pink)" },
  { id: "cloud",    label: "Cloud / Infra",  color: "var(--amber)" },
  { id: "tooling",  label: "Tooling / AI",   color: "oklch(0.78 0.16 145)" }
];

export const SKILL_LINES = [
  [0, 1], [0, 2], [0, 5], [1, 2], [1, 7], [2, 3], [2, 4], [3, 9], [4, 8], [5, 6], [5, 10], [6, 7], [6, 12], [7, 8], [7, 10], [8, 9], [8, 11], [9, 14], [10, 13], [11, 14], [11, 15], [12, 13], [13, 14], [14, 15]
];

export const EDUCATION = [
  {
    school: "University of Tehran",
    degree: "B.Sc. Accounting",
    date: "Sep 2000 — Feb 2005",
    desc: "Domain expertise in financial data models and transactional systems; bridged business analysis and backend structure."
  },
  {
    school: "WIFI Vienna",
    degree: "Diploma in Software Development (JavaScript)",
    date: "Sep 2020 — Feb 2021",
    desc: "Rigorous bootcamp focused on modern frontend paradigms, JavaScript ecosystem, and scalable application architectures."
  },
  {
    school: "WIFI Vienna",
    degree: "Diploma in Web Application Development & OOP (PHP)",
    date: "Jun 2021 — Dec 2021",
    desc: "Comprehensive study covering backend principles, server-side logic, and robust database management systems."
  }
];

export const LEARNING = [
  { name: ".NET / C# Deepening", progress: 95, meta: "Advanced memory management · Concurrency" },
  { name: "Blazor WebAssembly", progress: 85, meta: "Interactive SPA components · WebAssembly" },
  { name: "LLM Orchestration", progress: 85, meta: "Agentic Workflows · Semantic Kernel" },
  { name: "Azure AI & DevOps", progress: 75, meta: "CI/CD Pipelines · Cognitive Services" }
];

export const CONTACT = [
  { label: "Email", val: "maxbehzadi82@gmail.com", href: "mailto:maxbehzadi82@gmail.com", icon: "mail" },
  { label: "GitHub", val: "github.com/MaxTheGeeek", href: "https://github.com/MaxTheGeeek", icon: "github" },
  { label: "LinkedIn", val: "linkedin.com/in/maxii", href: "https://linkedin.com/in/maxii", icon: "linkedin" }
];
