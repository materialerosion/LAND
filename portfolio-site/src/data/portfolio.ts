// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

/** Rotating subtitles shown one at a time in the hero (cycle order) */
export const rotatingSubtitles = [
  "AI Product Builder",
  "Doctor of Pharmacy",
  "Project Management Professional",
  "Product Development Expert",
];

export const personalInfo = {
  name: "Leyu (Liam) Zhang",
  title: "AI Product Builder",
  tagline: "Shipping AI tools that actually do things.",
  description:
    "I build AI-powered web applications for research, healthcare, and innovation — turning complex problems into delightfully usable tools.",
  avatar: "",
  email: "liam.zhang@bayer.com",
  socials: {
    github: "https://github.com/materialerosion",
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
  status: "live" | "beta" | "in-progress" | "on-hold";
  url?: string;
  tech?: string[];
  icon: string; // emoji or icon char
}

export const apps: App[] = [
  // ---- Formula Research ----
  {
    id: "find",
    name: "FIND - Formula Ingredient Navigator and Database",
    tagline: "Search and navigate through thousands of formulas and ingredients.",
    description:
      "Formula Ingredient Navigator and Database is a tool that allows you to search and navigate through thousands of formulas and ingredients.",
    category: "formula-research",
    status: "live",
    url: "https://kind-tree-073adfd0f.1.azurestaticapps.net/",
    tech: ["TypeScript","Python"],
    icon: "⚗️",
  },
  {
    id: "find-mcp",
    name: "Ask J",
    tagline: "Integration of FIND database with MCP server to allow for natural language queries in myGenAssist.",
    description:
      "Formula Ingredient Navigator and Database is a tool that allows you to search and navigate through thousands of formulas and ingredients.",
    category: "formula-research",
    status: "in-progress",
    url: "https://chat.int.bayer.com/",
    tech: ["TypeScript","Python","myGenAssist"],
    icon: "⚗️",
  },
  {
    id: "formulation-agent",
    name: "Formulation Agent",
    tagline: "AI-assisted formulation and ingredient workflows.",
    description:
      "TypeScript application for formula research and formulation workflows. Supports structured data and agent-driven tasks for R&D and innovation.",
    category: "formula-research",
    status: "in-progress",
    url: "https://github.com/materialerosion/Formulation-Agent",
    tech: ["TypeScript","myGenAssist"],
    icon: "⚗️",
  },
  {
    id: "open-formula",
    name: "Open Formula",
    tagline: "Claude-style interface with Artifacts.",
    description:
      "Fork of open-formula: a Claude.ai-style clone that can generate Artifacts. Self-hosted AI chat and structured output for research and ideation.",
    category: "formula-research",
    status: "on-hold",
    url: "https://github.com/materialerosion/open-formula",
    tech: ["TypeScript","myGenAssist"],
    icon: "🔬",
  },
  // ---- Clinical Research ----
  {
    id: "document-qa",
    name: "Document QA",
    tagline: "Question-answering over your documents.",
    description:
      "Python-based document Q&A pipeline for research and clinical workflows. Query documents in natural language and get grounded, cited answers.",
    category: "clinical-research",
    status: "beta",
    url: "https://github.com/materialerosion/document-qa",
    tech: ["Python","myGenAssist"],
    icon: "📋",
  },
  // ---- Synthetic Personas ----
  {
    id: "pulse",
    name: "PULSE - Personas Used in Lifelike Synthetic Experiences",
    tagline: "Personas Used in Lifelike Synthetic Experiences.",
    description:
      "Framework and app for generating and using synthetic user personas in lifelike experiences. Test flows and copy with AI personas before real users.",
    category: "synthetic-personas",
    status: "live",
    url: "https://blue-wave-0e44e890f.3.azurestaticapps.net/",
    tech: ["TypeScript","myGenAssist"],
    icon: "🧪",
  },
  // ---- Innovation Assistants ----
  {
    id: "docmd",
    name: "DocMD",
    tagline: "Document to Markdown with linked highlighting.",
    description:
      "Document to Markdown with side-by-side linked highlighting for easy verification. Turn PDFs and docs into clean markdown and check fidelity visually.",
    category: "innovation-assistants",
    status: "on-hold",
    url: "https://github.com/materialerosion/DocMD",
    tech: ["Python"],
    icon: "📄",
  },
  {
    id: "convert",
    name: "Convert",
    tagline: "Any file format → Markdown for LLMs.",
    description:
      "Convert almost any file format into .md for easy ingestion with LLMs. Unblock RAG pipelines and AI tools that need clean text from PDFs, Office, and more.",
    category: "innovation-assistants",
    status: "beta",
    url: "https://github.com/materialerosion/convert",
    tech: ["JavaScript"],
    icon: "🔄",
  },
  {
    id: "gist-local",
    name: "GIST - Generative Insights Summarization Tool",
    tagline: "Get thorough insights from clinical trials with the help of AI.",
    description:
      "GIST is a tool that allows you to summarize insights from clinical trials with AI, extracting key medical insights into an organized excel report.",
    category: "clinical-research",
    status: "live",
    url: "https://gist-b-a9e0auayhrbda9dk.eastus2-01.azurewebsites.net/",
    tech: ["Python","myGenAssist"],
    icon: "📝",
  },
  {
    id: "open-webui",
    name: "Open WebUI",
    tagline: "User-friendly AI interface (Ollama, OpenAI, …).",
    description:
      "Fork of Open WebUI: a user-friendly AI interface supporting Ollama, OpenAI API, and other backends. Chat, plugins, and local-first deployment.",
    category: "innovation-assistants",
    status: "beta",
    url: "https://github.com/materialerosion/open-webui",
    tech: ["Python","Svelte","JavaScript","TypeScript","TailwindCSS"],
    icon: "💬",
  },
  {
    id: "pack2",
    name: "PACK2",
    tagline: "Full-stack packaging simulation tool.",
    description:
      "PACK2 is a tool that allows you to simulate the packaging of a product, including the physics simulation of the filling of containers and lineup generation.",
    category: "innovation-assistants",
    status: "live",
    url: "https://jolly-dune-0d988150f.6.azurestaticapps.net/",
    tech: ["TypeScript"],
    icon: "📦",
  },
  {
    id: "oad-sprint",
    name: "Ideation Sprint Assistant",
    tagline: "AI-assisted ideation sprint assistant.",
    description:
      "Assistant in myGenAssist with pre-loaded data for ideation sprint used in 2025 OAD sprint to fill 2027 pipeline.",
    category: "innovation-assistants",
    status: "live",
    url: "https://chat.int.bayer.com/conversations/new?assistant=0d19ed31-d335-47fe-9535-030f4b4f0279",
    tech: ["myGenAssist"],
    icon: "💬",
  },
];

export const categories: { id: AppCategory; label: string; icon: string }[] = [
  { id: "all", label: "All Apps", icon: "⚡" },
  { id: "formula-research", label: "Formula Research", icon: "⚗️" },
  { id: "clinical-research", label: "Clinical Research", icon: "🏥" },
  { id: "synthetic-personas", label: "Synthetic Personas", icon: "🧪" },
  { id: "innovation-assistants", label: "Innovation Assistants", icon: "💡" },
];

// Set this to your survey URL when ready; leave empty to hide the button
export const testimonialSurveyUrl = "https://forms.office.com/e/C3C0aRKCWm";

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
      "(Placeholder) The Formula Explorer cut our research cycle from 3 weeks to 2 days. It's genuinely transformative for our team.",
    author: "Dr Sarah K.",
    role: "Head of R&D, Beauty Co.",
  },
  {
    id: "t2",
    quote:
      "(Placeholder) Trial Navigator is what every clinical research associate wishes existed. The protocol summaries alone save us hours per week.",
    author: "James M.",
    role: "Clinical Operations Lead",
  },
  {
    id: "t3",
    quote:
      "(Placeholder) Persona Lab replaced an entire round of expensive user research. The synthetic personas were scarily accurate.",
    author: "Priya N.",
    role: "UX Research Director",
  },
  {
    id: "t4",
    quote:
      "(Placeholder) I used Idea Incubator to run a solo ideation session for a new product line. Walked in with a vague brief, walked out with 3 viable concepts.",
    author: "Marcus T.",
    role: "Innovation Strategist",
  },
  {
    id: "t5",
    quote:
      "(Placeholder) he AE Classifier is handling our pharmacovigilance triage now. Accuracy is remarkable and it frees our team for higher-value work.",
    author: "Dr. Liu W.",
    role: "VP Pharmacovigilance",
  },
  {
    id: "t6",
    quote:
      "(Placeholder) Focus Group Simulator gave us feedback on 5 prototypes in one afternoon. Would have taken months of recruitment otherwise.",
    author: "Tanya R.",
    role: "Product Manager",
  },
  {
    id: "t7",
    quote:
      "(Placeholder) Trends Radar is now the first thing I read on Monday mornings. It surfaces things I would never have found on my own.",
    author: "Carlos V.",
    role: "Chief Strategy Officer",
  },
  {
    id: "t8",
    quote:
      "(Placeholder) These tools are built by someone who understands research workflows deeply. Every detail is thought through.",
    author: "Dr. Aisha B.",
    role: "Senior Researcher",
  },
  {
    id: "t9",
    quote:
      "(Placeholder) Protocol Assistant drafts our study sections in minutes. Our regulatory submissions have never been faster.",
    author: "Helen S.",
    role: "Clinical Affairs Manager",
  },
  {
    id: "t10",
    quote:
      "(Placeholder) Innovation Coach runs better IDEO sessions than our external facilitators. Available 24/7 at a fraction of the cost.",
    author: "Dev P.",
    role: "Head of Innovation",
  },
  {
    id: "t11",
    quote:
      "(Placeholder) Story Generator cut our sprint planning prep time in half. User stories actually reflect how users think.",
    author: "Mia F.",
    role: "Product Owner",
  },
  {
    id: "t12",
    quote:
      "(Placeholder) Formula Validator caught a shelf-life conflict our team had missed for six months. It paid for itself in one catch.",
    author: "Thomas E.",
    role: "Chief Formulator",
  },
];
