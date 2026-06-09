import {
  Brain,
  Cloud,
  Code2,
  Server,
  Eye,
  Lightbulb,
  TrendingUp,
  Shield,
  CloudCog,
  Sparkles,
} from "lucide-react";

export const SITE = {
  name: "TRIVEX Technologies",
  brand: "TRIVEX",
  slogan: "No Limits. Only Growth.",
  email: "hello@trivex.tech",
  philosophy:
    "Start with vision, build with excellence, grow through expansion.",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Process", href: "#process" },
  { label: "Showcase", href: "#showcase" },
  { label: "Contact", href: "#contact" },
] as const;

export const PILLARS = [
  {
    title: "Software",
    description:
      "Custom-built applications engineered for performance, reliability, and scale.",
    icon: Code2,
  },
  {
    title: "Cloud",
    description:
      "Cloud-native architectures that adapt, optimize, and grow with your business.",
    icon: Cloud,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Intelligent systems that transform data into actionable insights and automation.",
    icon: Brain,
  },
] as const;

export const SERVICES = [
  {
    title: "Software Development",
    description:
      "Enterprise-grade software tailored to your unique business requirements.",
    illustration: "software",
  },
  {
    title: "Web Development",
    description:
      "Blazing-fast, responsive web applications with exceptional user experiences.",
    illustration: "web",
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile solutions for iOS and Android.",
    illustration: "mobile",
  },
  {
    title: "Cloud Architecture",
    description:
      "Scalable cloud infrastructure designed for resilience and performance.",
    illustration: "cloud",
  },
  {
    title: "DevOps",
    description:
      "Streamlined CI/CD pipelines and infrastructure automation at scale.",
    illustration: "devops",
  },
  {
    title: "AI Solutions",
    description:
      "Machine learning, NLP, and intelligent automation for modern businesses.",
    illustration: "ai",
  },
  {
    title: "API Development",
    description:
      "Robust, secure APIs that connect systems and enable seamless integration.",
    illustration: "api",
  },
  {
    title: "Infrastructure Automation",
    description:
      "Infrastructure as code for consistent, repeatable deployments.",
    illustration: "infra",
  },
  {
    title: "Technical Consulting",
    description:
      "Strategic technology guidance to accelerate your digital transformation.",
    illustration: "consulting",
  },
] as const;

export const TECH_STACK = [
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "#FFFFFF" },
  { name: "Node.js", slug: "nodedotjs", color: "#68A063" },
  { name: "Spring Boot", slug: "springboot", color: "#6DB33F" },
  { name: "Python", slug: "python", color: "#3776AB" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "Kubernetes", slug: "kubernetes", color: "#326CE5" },
  { name: "AWS", slug: "amazonwebservices", color: "#FF9900" },
  { name: "Terraform", slug: "terraform", color: "#844FBA" },
  { name: "GitHub Actions", slug: "githubactions", color: "#2088FF" },
  { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  { name: "Redis", slug: "redis", color: "#DC382D" },
  { name: "OpenAI", slug: "openai", color: "#412991" },
] as const;

export const WHY_TRIVEX = [
  {
    title: "Vision",
    description:
      "We see beyond today — architecting solutions for tomorrow's challenges.",
    icon: Eye,
  },
  {
    title: "Innovation",
    description:
      "Cutting-edge technologies and creative approaches drive every project.",
    icon: Lightbulb,
  },
  {
    title: "Scalability",
    description:
      "Built to grow — from startup MVP to enterprise-scale platforms.",
    icon: TrendingUp,
  },
  {
    title: "Security",
    description:
      "Security-first design with industry best practices at every layer.",
    icon: Shield,
  },
  {
    title: "Cloud Native",
    description:
      "Modern cloud architectures optimized for performance and cost efficiency.",
    icon: CloudCog,
  },
  {
    title: "AI Ready",
    description:
      "Future-proof systems designed to integrate intelligent capabilities.",
    icon: Sparkles,
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Discover",
    description: "Deep dive into your vision, goals, and technical landscape.",
    icon: Eye,
  },
  {
    title: "Design",
    description: "Craft elegant architectures and intuitive user experiences.",
    icon: Lightbulb,
  },
  {
    title: "Develop",
    description: "Build with precision using agile methodologies and best practices.",
    icon: Code2,
  },
  {
    title: "Deploy",
    description: "Launch with confidence through rigorous testing and automation.",
    icon: Server,
  },
  {
    title: "Scale",
    description: "Optimize, expand, and evolve as your business grows.",
    icon: TrendingUp,
  },
] as const;

export const SHOWCASE_PROJECTS = [
  {
    title: "NovaCloud Platform",
    category: "Cloud Infrastructure",
    description: "Multi-region cloud platform serving 2M+ users globally.",
    gradient: "from-blue-600/20 to-cyan-500/20",
  },
  {
    title: "IntelliFlow AI",
    category: "AI Solutions",
    description: "Intelligent workflow automation reducing manual tasks by 80%.",
    gradient: "from-purple-600/20 to-blue-500/20",
  },
  {
    title: "DevSync Pro",
    category: "Software Development",
    description: "Real-time collaboration platform for distributed engineering teams.",
    gradient: "from-emerald-600/20 to-teal-500/20",
  },
  {
    title: "SecureVault API",
    category: "API Development",
    description: "Enterprise-grade API gateway with 99.99% uptime SLA.",
    gradient: "from-orange-600/20 to-red-500/20",
  },
] as const;

export const STATS = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 99.9, suffix: "%", label: "Reliability", decimals: 1 },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "TRIVEX transformed our legacy systems into a modern, cloud-native platform. Their expertise in AI integration gave us a competitive edge we never thought possible.",
    author: "Sarah Chen",
    role: "CTO, Nexus Dynamics",
    avatar: "SC",
  },
  {
    quote:
      "The team's attention to detail and commitment to excellence is unmatched. They delivered our mobile app ahead of schedule with features that exceeded our expectations.",
    author: "Marcus Williams",
    role: "Founder, Pulse Health",
    avatar: "MW",
  },
  {
    quote:
      "Working with TRIVEX felt like having an elite engineering team in-house. Their DevOps practices reduced our deployment time from days to minutes.",
    author: "Elena Rodriguez",
    role: "VP Engineering, Quantum Labs",
    avatar: "ER",
  },
] as const;

export const TIMELINE = [
  {
    year: "2020",
    title: "Foundation",
    description: "TRIVEX was founded with a vision to democratize enterprise technology.",
  },
  {
    year: "2022",
    title: "Cloud Expansion",
    description: "Launched cloud-native services, serving 50+ enterprise clients.",
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Pioneered AI-first solutions across software and cloud offerings.",
  },
  {
    year: "2026",
    title: "Global Scale",
    description: "100+ projects delivered with 99.9% reliability across continents.",
  },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Showcase", href: "#showcase" },
  ],
  services: [
    { label: "Software Development", href: "#services" },
    { label: "Cloud Architecture", href: "#services" },
    { label: "AI Solutions", href: "#services" },
    { label: "Consulting", href: "#services" },
  ],
} as const;

export const SERVICE_OPTIONS = [
  "Software Development",
  "Web Development",
  "Mobile Apps",
  "Cloud Architecture",
  "DevOps",
  "AI Solutions",
  "API Development",
  "Technical Consulting",
] as const;
