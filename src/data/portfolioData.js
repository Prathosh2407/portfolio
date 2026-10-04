/**
 * =========================================================================
 * 🌟 PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * You can edit all your personal info, projects, skills, and resume details
 * directly in this file. Everything in the portfolio updates automatically!
 */

export const PERSONAL_INFO = {
  // Your Name & Titles
  name: "Prathosh R P",
  githubUsername: "Prathosh2407",
  role: "Full Stack & Frontend Engineer",
  tagline: "Building high-performance web applications, intelligent systems, and data-driven user experiences.",
  bio: "Full Stack Developer passionate about crafting modern React applications, scalable Node.js architectures, and intelligent systems. Experienced in building decision-support platforms like GreenFleet Optimizer and full-stack solutions with JWT security and Supabase.",
  
  // Status Badge
  status: "Available for new projects & collaborations",
  availabilityBadge: "Available for work",
  location: "India / Remote",

  // -----------------------------------------------------------------------
  // 📄 RESUME SETTINGS
  // Put your real PDF file inside the "public" folder (e.g. public/resume.pdf).
  // If you name your file "my_resume.pdf", change resumeUrl to "/my_resume.pdf".
  // -----------------------------------------------------------------------
  resumeUrl: "/resume.pdf",
  resumeFileName: "Prathosh_Resume.pdf",

  // Contact & Social Links
  email: "myselfprathosh240907@gmail.com",
  github: "https://github.com/Prathosh2407",
  linkedin: "https://linkedin.com/in/prathosh-rp",
  twitter: "https://twitter.com/Prathosh2407",
  avatar: "https://avatars.githubusercontent.com/u/231250763?v=4",

  // Quick stats displayed in Hero
  stats: [
    { label: "Public Repositories", value: "5" },
    { label: "Core Stack", value: "React • Node" },
    { label: "Target Framerate", value: "60 FPS" },
    { label: "Cloud & Database", value: "Supabase • SQL" },
  ]
};

/**
 * =========================================================================
 * 🚀 PROJECTS SECTION
 * Add, remove, or modify your featured projects here.
 * =========================================================================
 */
export const PROJECTS = [
  {
    id: "greenfleet-optimizer",
    title: "GreenFleet • Maritime Fleet & Fuel Optimizer",
    category: "Fleet Optimization & Data Analytics",
    description: "Decision-support prototype engineered for maritime shipping companies and fleet managers. Computes dynamic route planning, vessel selection, speed optimization, and fuel efficiency based on ocean and weather telemetry.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Recharts", "Vite", "Lucide"],
    liveUrl: "https://github.com/Prathosh2407/sonic-forge-greenfleet",
    githubUrl: "https://github.com/Prathosh2407/sonic-forge-greenfleet",
    metrics: "Dynamic Route & Fuel Modeling • Supabase Cloud Telemetry",
    featured: true,
  },
  {
    id: "hacktrack-ai",
    title: "HackTrack AI • Full Stack Challenge Platform",
    category: "Full Stack Engineering & Auth Architecture",
    description: "End-to-end hackathon and project tracking system with secure JWT authentication, password hashing with bcryptjs, SQLite/SQL.js persistence, scheduled background cron tasks, and a reactive Vite UI.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "Express", "JWT", "Bcrypt", "SQL.js", "Node-Cron", "Vite"],
    liveUrl: "https://github.com/Prathosh2407/hacktrack-ai",
    githubUrl: "https://github.com/Prathosh2407/hacktrack-ai",
    metrics: "Secure Auth Pipeline • Dual Client-Server Architecture",
    featured: true,
  },
  {
    id: "smartqueue",
    title: "SmartQueue • Intelligent Queue Engine",
    category: "System Design & Operational Optimization",
    description: "Smart queue management platform addressing customer wait times and lost productivity through automated slotting, live status estimation, and resource allocation workflows.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    tags: ["System Design", "Queue Automation", "Real-Time Tracking", "Performance"],
    liveUrl: "https://github.com/Prathosh2407/Smartqueue",
    githubUrl: "https://github.com/Prathosh2407/Smartqueue",
    metrics: "Intelligent Queue Management • Wait-Time Reduction",
    featured: true,
  }
];

/**
 * =========================================================================
 * 🛠️ SKILLS SECTION
 * Edit skills, proficiency percentages, and categories.
 * =========================================================================
 */
export const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    description: "Crafting reactive, component-driven user interfaces and dashboards.",
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.2)",
    skills: [
      { name: "React 18 & Hooks", level: "92%", experience: "GitHub Repos", highlight: true },
      { name: "TypeScript", level: "85%", experience: "GreenFleet", highlight: true },
      { name: "Tailwind CSS", level: "94%", experience: "Multi-Project", highlight: true },
      { name: "JavaScript (ES6+)", level: "90%", experience: "Core", highlight: true },
      { name: "Vite Tooling", level: "92%", experience: "Fast HMR", highlight: true },
      { name: "Recharts & Analytics", level: "82%", experience: "GreenFleet", highlight: false },
      { name: "React Router DOM", level: "88%", experience: "HackTrack", highlight: false },
      { name: "Lucide Icons & UI", level: "95%", experience: "Design Systems", highlight: false }
    ]
  },
  {
    title: "Backend & Database",
    description: "Developing authenticated APIs, scheduled tasks, and database integrations.",
    color: "from-violet-500 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.2)",
    skills: [
      { name: "Node.js", level: "88%", experience: "HackTrack Backend", highlight: true },
      { name: "Express.js", level: "90%", experience: "REST APIs", highlight: true },
      { name: "Supabase Cloud", level: "84%", experience: "GreenFleet", highlight: true },
      { name: "JWT Authentication", level: "88%", experience: "HackTrack Auth", highlight: true },
      { name: "Bcrypt Security", level: "85%", experience: "Credential Hashing", highlight: false },
      { name: "SQLite / SQL.js", level: "82%", experience: "Relational DB", highlight: false },
      { name: "Node-Cron Automation", level: "80%", experience: "Scheduled Jobs", highlight: false },
      { name: "CORS & REST Design", level: "92%", experience: "Client-Server Sync", highlight: false }
    ]
  },
  {
    title: "Engineering & Workflows",
    description: "Code quality, version control, security, and build pipelines.",
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.2)",
    skills: [
      { name: "Git & GitHub", level: "90%", experience: "Daily Workflow", highlight: true },
      { name: "PostCSS & Autoprefixer", level: "88%", experience: "Styling Pipeline", highlight: false },
      { name: "ESLint & Code Standards", level: "85%", experience: "Code Quality", highlight: false },
      { name: "Environment Security (.env)", level: "92%", experience: "API Keys", highlight: true },
      { name: "Responsive UI Architecture", level: "95%", experience: "Mobile & Desktop", highlight: true },
      { name: "Decision Support Systems", level: "84%", experience: "GreenFleet", highlight: false }
    ]
  }
];

/**
 * =========================================================================
 * 💼 EXPERIENCE & TIMELINE
 * Update your work history, projects, and achievements.
 * =========================================================================
 */
export const EXPERIENCES = [
  {
    id: "fullstack-greenfleet-2026",
    role: "Full Stack Engineer & Lead Creator",
    company: "GreenFleet Optimizer Project",
    location: "GitHub Open Source",
    period: "2026 - PRESENT",
    type: "Personal Project",
    badge: "Active Development",
    description: "Architected a maritime decision-support prototype calculating optimal speed, routing, and fuel consumption for shipping operations.",
    achievements: [
      "Engineered responsive dashboard using React, TypeScript, and Tailwind CSS with real-time chart analytics.",
      "Integrated Supabase cloud backend for seamless data management and operational telemetry.",
      "Implemented modular UI components with Lucide Icons and clean Vite build configuration."
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Recharts", "Vite"]
  },
  {
    id: "hacktrack-ai-2026",
    role: "Full Stack Developer",
    company: "HackTrack AI Platform",
    location: "GitHub Open Source",
    period: "2026",
    type: "Full Stack Project",
    badge: "Dual Architecture",
    description: "Designed and implemented an AI challenge and hackathon tracking system separated into decoupled frontend and backend services.",
    achievements: [
      "Built authenticated Express REST API secured with JSON Web Tokens (JWT) and Bcrypt encryption.",
      "Configured automated background task processing using node-cron for challenge reminders.",
      "Created dynamic frontend routing with React Router and Vite."
    ],
    tech: ["Node.js", "Express", "React", "JWT", "Bcrypt", "SQL.js", "Node-Cron"]
  },
  {
    id: "smartqueue-project",
    role: "Software Developer & Designer",
    company: "SmartQueue Initiative",
    location: "GitHub Open Source",
    period: "2025 - 2026",
    type: "Systems Design",
    badge: "Innovation",
    description: "Conceived an intelligent queue management platform to reduce customer wait time and improve service staff productivity.",
    achievements: [
      "Identified critical pain points in conventional line-waiting systems and designed architectural mitigations.",
      "Drafted comprehensive system specifications for real-time wait estimation and throughput optimization."
    ],
    tech: ["System Design", "Queue Logic", "Workflow Optimization", "Git"]
  }
];
