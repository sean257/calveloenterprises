import {
  TrendingUp,
  Workflow,
  Cpu,
  Bot,
  Truck,
  ShieldCheck,
  Globe,
  BarChart3,
  Cloud,
  CheckCircle2,
  Sparkles,
  Award,
  Users,
  RefreshCw,
  Handshake,
  Search,
  Target,
  PenTool,
  Rocket,
  LifeBuoy,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Landmark,
  Sprout,
  Building2,
  HandHeart,
  Briefcase,
  Store,
  HardHat,
  Cog,
  Factory,
  Mountain,
  Car,
} from "lucide-react";

export const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const SERVICES = [
  {
    icon: TrendingUp,
    title: "Business Development & Consulting",
    items: [
      "Business Strategy",
      "Business Development",
      "Business Process Improvement",
      "Market Research",
      "Sales Process Optimization",
      "Partnership Development",
      "Tender & Proposal Development",
      "Business Growth Consulting",
      "Feasibility Studies",
    ],
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    items: [
      "Business Process Automation",
      "Workflow Optimization",
      "Digital Transformation Consulting",
      "Business Systems Implementation",
      "AI Integration",
      "Cloud Migration",
    ],
  },
  {
    icon: Cpu,
    title: "Technology Solutions",
    items: [
      "Custom Software Development",
      "Web Applications",
      "Mobile Applications",
      "CRM Implementation",
      "ERP Solutions",
      "Database Development",
      "IT Consulting",
      "API Integrations",
      "System Integrations",
    ],
  },
  {
    icon: GraduationCap,
    title: "AI & Applied Training",
    items: [
      "AI Fundamentals & Strategy",
      "Practical Hands-On AI Training",
      "Prompt Engineering & Tool Mastery",
      "AI for Business Process Automation",
      "Organizational AI Adoption",
      "AI Governance & Responsible AI",
    ],
  },
  {
    icon: Truck,
    title: "Fleet & Smart Technology",
    items: [
      "Advanced Vehicle Tracking",
      "GPS Tracking Systems",
      "Fleet Management Solutions",
      "Asset Tracking",
      "IoT Solutions",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    items: [
      "Security Assessments",
      "Cybersecurity Consulting",
      "Access Control",
      "Backup Solutions",
      "Security Awareness",
      "Network Security",
    ],
  },
  {
    icon: Globe,
    title: "Digital Solutions",
    items: [
      "Website Development",
      "E-commerce Development",
      "Website Maintenance",
      "Search Engine Optimization (SEO)",
      "Branding",
      "Digital Marketing",
      "Social Media Strategy",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Business Intelligence",
    items: [
      "Business Dashboards",
      "KPI Reporting",
      "Power BI Dashboards",
      "Data Analytics",
      "Business Intelligence Solutions",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    items: [
      "Cloud Infrastructure",
      "Cloud Migration",
      "Backup & Disaster Recovery",
      "Microsoft 365 Solutions",
      "Google Workspace",
      "Secure Cloud Storage",
    ],
  },
];

export const INDUSTRIES = [
  {
    icon: Truck,
    label: "Logistics & Transport",
    blurb:
      "From route planning to fleet visibility, we support operations that need reliable, real-time coordination.",
  },
  {
    icon: HeartPulse,
    label: "Healthcare",
    blurb:
      "We help care teams improve patient workflows, service delivery, and operational visibility across complex environments.",
  },
  {
    icon: GraduationCap,
    label: "Education",
    blurb:
      "Our work supports student services, administration, and digital systems that need to scale with growing demand.",
  },
  {
    icon: ShoppingBag,
    label: "Retail",
    blurb:
      "We improve customer-facing systems, internal processes, and data flows to support smarter growth and better service.",
  },
  {
    icon: Landmark,
    label: "Financial Services",
    blurb:
      "We build secure, efficient systems that help teams manage operations, risk, and customer experience with confidence.",
  },
  {
    icon: Sprout,
    label: "Agriculture",
    blurb:
      "We help producers and suppliers modernize field operations, reporting, and supply chain coordination.",
  },
  {
    icon: Building2,
    label: "Government",
    blurb:
      "We design practical digital tools that improve service delivery, accountability, and internal operational efficiency.",
  },
  {
    icon: HandHeart,
    label: "NGOs",
    blurb:
      "We support mission-driven organizations with systems that improve program delivery, reporting, and stakeholder visibility.",
  },
  {
    icon: Briefcase,
    label: "Professional Services",
    blurb:
      "We streamline client delivery, internal workflows, and reporting so firms can work more efficiently and grow faster.",
  },
  {
    icon: Store,
    label: "Small & Medium Enterprises",
    blurb:
      "We help growing businesses uncover operational bottlenecks and turn them into scalable, practical solutions.",
  },
  {
    icon: HardHat,
    label: "Construction",
    blurb:
      "We support project teams with better planning, coordination, and operational visibility across site and office workflows.",
  },
  {
    icon: Cog,
    label: "Engineering",
    blurb:
      "We connect technical teams, systems, and processes so engineering work moves more smoothly from concept to delivery.",
  },
  {
    icon: Factory,
    label: "Manufacturing",
    blurb:
      "We improve production visibility, process efficiency, and quality workflows that affect throughput and performance.",
  },
  {
    icon: Mountain,
    label: "Mining",
    blurb:
      "We help resource operations improve safety, coordination, and reporting with technology built for tough environments.",
  },
  {
    icon: Car,
    label: "Automotive",
    blurb:
      "We support teams with smarter systems for operations, service delivery, and customer experience across the value chain.",
  },
];

export const VALUES = [
  { icon: Award, label: "Excellence" },
  { icon: Sparkles, label: "Innovation" },
  { icon: ShieldCheck, label: "Integrity" },
  { icon: CheckCircle2, label: "Accountability" },
  { icon: Users, label: "Customer Focus" },
  { icon: RefreshCw, label: "Continuous Improvement" },
  { icon: Handshake, label: "Collaboration" },
];

export const WHY = [
  "Tailored business solutions",
  "Experienced technology consultants",
  "End-to-end project delivery",
  "Innovative and scalable solutions",
  "Customer-focused approach",
  "Business-driven technology",
  "Reliable long-term support",
  "Cost-effective implementation",
  "Modern and future-ready systems",
];

export const PROCESS = [
  {
    n: "01",
    icon: Search,
    title: "Discover",
    desc: "We understand your business, challenges, and goals.",
  },
  {
    n: "02",
    icon: Target,
    title: "Strategize",
    desc: "We develop practical strategies and identify opportunities for growth.",
  },
  {
    n: "03",
    icon: PenTool,
    title: "Design",
    desc: "We create tailored business and technology solutions.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Implement",
    desc: "We deploy solutions efficiently with minimal disruption.",
  },
  {
    n: "05",
    icon: LifeBuoy,
    title: "Support",
    desc: "We provide continuous support, optimization, and improvement.",
  },
];

export const CONTACT = {
  phone: "+263 780 800 757",
  email: "calveloenterprises@gmail.com",
  address: "41 Leopold Takawira Avenue",
};
