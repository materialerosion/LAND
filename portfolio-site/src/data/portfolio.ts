// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const personalInfo = {
  name: "Leyu (Liam) Zhang",
  title: "AI Product Builder",
  tagline: "Shipping AI tools that actually do things.",
  description:
    "I build AI-powered web applications for research, healthcare, and innovation — turning complex problems into delightfully usable tools.",
  avatar: "/avatar.png", // Place your photo in /public/avatar.png
  email: "hello@yourname.com",
  socials: {
    github: "https://github.com/CarbonMon",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://www.linkedin.com/in/liam-zhang-pharmd/",
  },
};

export type AppCategory =
  | "all"
  | "formula-research"
  | "clinical-research"
  | "synthetic-personas"
  | "innovation-assistants";

export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: Exclude<AppCategory, "all">;
  status: "live" | "beta" | "in-progress";
  url?: string;
  tech?: string[];
  icon: string; // emoji or icon char
}

export const apps: App[] = [
  // ---- Formula Research ----
  {
    id: "formula-explorer",
    name: "Formula Explorer",
    tagline: "Decode internal formulas at the speed of thought.",
    description:
      "An AI-powered tool that ingests proprietary formula data and lets researchers query, compare, and visualize ingredient interactions in natural language.",
    category: "formula-research",
    status: "live",
    url: "https://formula-explorer.example.com",
    tech: ["Next.js", "OpenAI", "PostgreSQL"],
    icon: "⚗️",
  },
  {
    id: "formula-validator",
    name: "Formula Validator",
    tagline: "Catch formula conflicts before they ship.",
    description:
      "Automated cross-reference engine that flags incompatible compounds, regulatory conflicts, and concentration issues across your formula database.",
    category: "formula-research",
    status: "beta",
    url: "https://formula-validator.example.com",
    tech: ["Python", "FastAPI", "React"],
    icon: "🔬",
  },
  // ---- Clinical Research ----
  {
    id: "trial-navigator",
    name: "Trial Navigator",
    tagline: "Make clinical data speak plain English.",
    description:
      "AI assistant trained on clinical trial protocols, adverse event reports, and outcome data. Ask questions, surface insights, and generate summaries in seconds.",
    category: "clinical-research",
    status: "live",
    url: "https://trial-navigator.example.com",
    tech: ["Next.js", "Claude API", "Pinecone"],
    icon: "🏥",
  },
  {
    id: "adverse-events",
    name: "AE Classifier",
    tagline: "Auto-classify adverse events with AI precision.",
    description:
      "Intelligently classifies and prioritizes adverse event reports using MedDRA ontology, saving hours of manual triage for your pharmacovigilance team.",
    category: "clinical-research",
    status: "live",
    tech: ["Python", "spaCy", "React"],
    icon: "📋",
  },
  {
    id: "protocol-assistant",
    name: "Protocol Assistant",
    tagline: "Draft clinical protocols in minutes, not weeks.",
    description:
      "Guided AI workflow that generates ICH-compliant clinical trial protocol sections, cross-checks regulatory requirements, and tracks version history.",
    category: "clinical-research",
    status: "beta",
    tech: ["Next.js", "GPT-4", "MongoDB"],
    icon: "📄",
  },
  // ---- Synthetic Personas ----
  {
    id: "persona-lab",
    name: "Persona Lab",
    tagline: "Test with thousands of users — before you have any.",
    description:
      "Generate rich synthetic user personas from your target demographics, then run qualitative user testing sessions with AI agents that think, respond, and object like real people.",
    category: "synthetic-personas",
    status: "live",
    url: "https://persona-lab.example.com",
    tech: ["Next.js", "Claude API", "TypeScript"],
    icon: "🧪",
  },
  {
    id: "focus-group-sim",
    name: "Focus Group Simulator",
    tagline: "Instant focus groups, on demand.",
    description:
      "Spin up a virtual focus group of 8–12 synthetic participants, feed them your prototype, and watch them debate, praise, and critique — complete with facilitator AI.",
    category: "synthetic-personas",
    status: "beta",
    url: "https://focusgroup-sim.example.com",
    tech: ["Next.js", "OpenAI", "Zustand"],
    icon: "👥",
  },
  {
    id: "user-story-gen",
    name: "Story Generator",
    tagline: "User stories grounded in real human behavior.",
    description:
      "Combine persona data with behavioral patterns to auto-generate user stories, acceptance criteria, and edge cases — ready for your sprint backlog.",
    category: "synthetic-personas",
    status: "in-progress",
    tech: ["Next.js", "LangChain"],
    icon: "📝",
  },
  // ---- Innovation Assistants ----
  {
    id: "idea-incubator",
    name: "Idea Incubator",
    tagline: "From brief to concept in one conversation.",
    description:
      "Structured AI ideation assistant that walks teams through problem framing, analogical reasoning, and concept generation — then scores ideas against your innovation criteria.",
    category: "innovation-assistants",
    status: "live",
    url: "https://idea-incubator.example.com",
    tech: ["Next.js", "Claude API", "Tailwind"],
    icon: "💡",
  },
  {
    id: "trends-radar",
    name: "Trends Radar",
    tagline: "Spot weak signals before they become mega-trends.",
    description:
      "AI-powered trend intelligence that monitors web, academic, and patent sources, clusters signals into themes, and delivers weekly briefings tailored to your industry.",
    category: "innovation-assistants",
    status: "live",
    tech: ["Python", "Next.js", "Redis"],
    icon: "📡",
  },
  {
    id: "innovation-coach",
    name: "Innovation Coach",
    tagline: "Your always-on design thinking facilitator.",
    description:
      "AI assistant configured with IDEO design thinking methodology, SCAMPER, and Jobs-to-be-Done frameworks — guides workshops, challenges assumptions, and captures output.",
    category: "innovation-assistants",
    status: "beta",
    tech: ["Next.js", "GPT-4o", "Firebase"],
    icon: "🚀",
  },
];

export const categories: { id: AppCategory; label: string; icon: string }[] = [
  { id: "all", label: "All Apps", icon: "⚡" },
  { id: "formula-research", label: "Formula Research", icon: "⚗️" },
  { id: "clinical-research", label: "Clinical Research", icon: "🏥" },
  { id: "synthetic-personas", label: "Synthetic Personas", icon: "🧪" },
  { id: "innovation-assistants", label: "Innovation Assistants", icon: "💡" },
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The Formula Explorer cut our research cycle from 3 weeks to 2 days. It's genuinely transformative for our team.",
    author: "Sarah K.",
    role: "Head of R&D, Beauty Co.",
  },
  {
    id: "t2",
    quote:
      "Trial Navigator is what every clinical research associate wishes existed. The protocol summaries alone save us hours per week.",
    author: "Dr. James M.",
    role: "Clinical Operations Lead",
  },
  {
    id: "t3",
    quote:
      "Persona Lab replaced an entire round of expensive user research. The synthetic personas were scarily accurate.",
    author: "Priya N.",
    role: "UX Research Director",
  },
  {
    id: "t4",
    quote:
      "I used Idea Incubator to run a solo ideation session for a new product line. Walked in with a vague brief, walked out with 3 viable concepts.",
    author: "Marcus T.",
    role: "Innovation Strategist",
  },
  {
    id: "t5",
    quote:
      "The AE Classifier is handling our pharmacovigilance triage now. Accuracy is remarkable and it frees our team for higher-value work.",
    author: "Dr. Liu W.",
    role: "VP Pharmacovigilance",
  },
  {
    id: "t6",
    quote:
      "Focus Group Simulator gave us feedback on 5 prototypes in one afternoon. Would have taken months of recruitment otherwise.",
    author: "Tanya R.",
    role: "Product Manager",
  },
  {
    id: "t7",
    quote:
      "Trends Radar is now the first thing I read on Monday mornings. It surfaces things I would never have found on my own.",
    author: "Carlos V.",
    role: "Chief Strategy Officer",
  },
  {
    id: "t8",
    quote:
      "These tools are built by someone who understands research workflows deeply. Every detail is thought through.",
    author: "Dr. Aisha B.",
    role: "Senior Researcher",
  },
  {
    id: "t9",
    quote:
      "Protocol Assistant drafts our study sections in minutes. Our regulatory submissions have never been faster.",
    author: "Helen S.",
    role: "Clinical Affairs Manager",
  },
  {
    id: "t10",
    quote:
      "Innovation Coach runs better IDEO sessions than our external facilitators. Available 24/7 at a fraction of the cost.",
    author: "Dev P.",
    role: "Head of Innovation",
  },
  {
    id: "t11",
    quote:
      "Story Generator cut our sprint planning prep time in half. User stories actually reflect how users think.",
    author: "Mia F.",
    role: "Product Owner",
  },
  {
    id: "t12",
    quote:
      "Formula Validator caught a shelf-life conflict our team had missed for six months. It paid for itself in one catch.",
    author: "Thomas E.",
    role: "Chief Formulator",
  },
];
