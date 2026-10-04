export const PERSONAL_INFO = {
  name: "Alex Rivera",
  role: "Senior Creative Developer & UI Architect",
  tagline: "Bridging the chasm between avant-garde design and bulletproof engineering.",
  bio: "Senior Creative Developer with 7+ years crafting immersive, high-framerate web applications. Specializing in interactive 3D experiences, fluid micro-interactions with Framer Motion, and high-performance frontend architectures.",
  status: "Available for new projects & contracts",
  availabilityBadge: "Available for work",
  location: "San Francisco, CA / Remote",
  email: "alex.rivera.dev@gmail.com",
  github: "https://github.com/alexrivera-dev",
  linkedin: "https://linkedin.com/in/alexrivera-creative",
  twitter: "https://twitter.com/alexrivera_ui",
  stats: [
    { label: "Years Experience", value: "7+" },
    { label: "Production Deploys", value: "48+" },
    { label: "Target Framerate", value: "60 FPS" },
    { label: "Awwwards / FWA", value: "6x" },
  ]
};

export const PROJECTS = [
  {
    id: "aether-os",
    title: "AetherOS • 3D Spatial Canvas",
    category: "Creative Development / WebGL",
    description: "An experimental web-based spatial operating system built with React, WebGL shaders, and physics-driven gesture interactions. Features real-time audio reactivity and volumetric lighting.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Three.js", "GLSL Shaders", "Tailwind CSS", "Framer Motion", "Web Audio"],
    liveUrl: "https://example.com/aether-os",
    githubUrl: "https://github.com/alexrivera-dev/aether-spatial-os",
    metrics: "60 FPS steady on mobile • 120Hz canvas rendering",
    featured: true,
  },
  {
    id: "nexus-dex",
    title: "Nexus Protocol • DeFi Terminal",
    category: "Fintech & Real-time Systems",
    description: "High-frequency decentralized exchange interface equipped with sub-50ms WebSocket telemetry, depth charts, algorithmic order routing, and a customizable cyberpunk HUD.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "WebSockets", "Chart.js", "Framer Motion"],
    liveUrl: "https://example.com/nexus-protocol",
    githubUrl: "https://github.com/alexrivera-dev/nexus-protocol-terminal",
    metrics: "< 50ms latency • $140M+ simulated volume",
    featured: true,
  },
  {
    id: "synthetix-studio",
    title: "Synthetix • Node-Based AI Studio",
    category: "AI & Multimodal Workflows",
    description: "Infinite canvas node editor orchestrating multi-modal generative AI pipelines. Enables creators to visually connect audio synthesis, vector embeddings, and real-time diffusion models.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Web Workers", "Canvas API", "REST/SSE"],
    liveUrl: "https://example.com/synthetix-ai",
    githubUrl: "https://github.com/alexrivera-dev/synthetix-creative-studio",
    metrics: "1,000+ interactive nodes with zero stutter",
    featured: true,
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Creative Frontend & UI",
    description: "Crafting silky-smooth, fluid interfaces that delight users.",
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.2)",
    skills: [
      { name: "React / Next.js", level: "98%", experience: "6 yrs", highlight: true },
      { name: "Tailwind CSS", level: "96%", experience: "5 yrs", highlight: true },
      { name: "Framer Motion", level: "94%", experience: "4 yrs", highlight: true },
      { name: "TypeScript", level: "92%", experience: "5 yrs", highlight: false },
      { name: "Three.js / WebGL", level: "85%", experience: "3 yrs", highlight: true },
      { name: "HTML5 Canvas API", level: "88%", experience: "4 yrs", highlight: false },
      { name: "GSAP Animation", level: "86%", experience: "4 yrs", highlight: false },
      { name: "Design Systems", level: "95%", experience: "6 yrs", highlight: false }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Scalable APIs, real-time sync, and rock-solid architectures.",
    color: "from-violet-500 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.2)",
    skills: [
      { name: "Node.js & Express", level: "90%", experience: "6 yrs", highlight: true },
      { name: "GraphQL & REST", level: "92%", experience: "5 yrs", highlight: false },
      { name: "WebSockets & SSE", level: "88%", experience: "4 yrs", highlight: true },
      { name: "PostgreSQL & Prisma", level: "84%", experience: "4 yrs", highlight: false },
      { name: "Redis Caching", level: "82%", experience: "3 yrs", highlight: false },
      { name: "Golang Basics", level: "70%", experience: "2 yrs", highlight: false }
    ]
  },
  {
    title: "Tooling, 3D & Performance",
    description: "Optimization, creative modeling, and high-velocity workflows.",
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.2)",
    skills: [
      { name: "Vite & Webpack", level: "95%", experience: "5 yrs", highlight: true },
      { name: "Blender 3D", level: "78%", experience: "3 yrs", highlight: false },
      { name: "Docker & CI/CD", level: "85%", experience: "4 yrs", highlight: false },
      { name: "Performance Profiling", level: "94%", experience: "5 yrs", highlight: true },
      { name: "Figma to Code", level: "98%", experience: "6 yrs", highlight: true },
      { name: "Git & Monorepos", level: "92%", experience: "6 yrs", highlight: false }
    ]
  }
];

export const EXPERIENCES = [
  {
    id: "lead-creative-2024",
    role: "Lead Creative Technologist",
    company: "Studio Kinetic",
    location: "San Francisco, CA (Hybrid)",
    period: "2024 - PRESENT",
    type: "Full-Time",
    badge: "Current Role",
    description: "Leading frontend engineering and creative R&D for top-tier digital products, brand launches, and experimental interactive WebGL installations.",
    achievements: [
      "Architected real-time canvas animation pipeline achieving 60fps across mobile and low-power devices.",
      "Spearheaded design system overhaul used by 20+ cross-functional engineers and 15 designers.",
      "Mentored 6 junior/mid-level engineers in Framer Motion choreography and WebGL shaders."
    ],
    tech: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion", "Vite"]
  },
  {
    id: "sr-frontend-2022",
    role: "Senior Frontend Engineer",
    company: "Luminary Interactive",
    location: "New York, NY (Remote)",
    period: "2022 - 2024",
    type: "Full-Time",
    badge: "Promotion",
    description: "Engineered high-profile marketing experiences and interactive product showrooms for Fortune 500 tech clients.",
    achievements: [
      "Delivered 12 award-winning digital experiences with 99.8% Lighthouse performance ratings.",
      "Reduced bundle sizes by 42% through aggressive code-splitting and dynamic asset loading.",
      "Built custom physics-based scroll interaction system adopted by key corporate clients."
    ],
    tech: ["React", "Next.js", "Framer Motion", "Tailwind CSS", "GLSL", "Node.js"]
  },
  {
    id: "creative-dev-2020",
    role: "Creative Developer & UI Specialist",
    company: "Hyperion Labs",
    location: "Austin, TX (Remote)",
    period: "2020 - 2022",
    type: "Full-Time",
    badge: "Growth",
    description: "Developed reactive web applications, interactive dashboards, and rapid micro-prototypes for early-stage fintech startups.",
    achievements: [
      "Engineered real-time WebSockets charting interface for 100k+ active daily traders.",
      "Pioneered automated visual regression testing with Playwright, decreasing UI bugs by 65%.",
      "Crafted micro-interaction library that improved user session duration by 28%."
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "WebSockets", "Jest", "CSS Shaders"]
  },
  {
    id: "frontend-dev-2018",
    role: "Frontend Developer",
    company: "Nexus Digital Agency",
    location: "Seattle, WA",
    period: "2018 - 2020",
    type: "Full-Time",
    badge: "Foundation",
    description: "Built responsive web applications, animated campaign landing pages, and custom headless CMS integrations.",
    achievements: [
      "Shipped 30+ client web applications with zero critical launch blockers.",
      "Integrated modular headless architectures with Next.js and RESTful endpoints."
    ],
    tech: ["JavaScript (ES6+)", "React", "CSS Modules", "HTML5", "Webpack"]
  }
];
