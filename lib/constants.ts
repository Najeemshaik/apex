import type { LucideIcon } from "lucide-react";
import {
  Shield,
  DoorOpen,
  Bot,
  HeartPulse,
  Brain,
  BookOpen,
  Database,
  Zap,
  Plug,
  Clock,
  Lock,
  MessageSquare,
  ArrowRight,
  Star,
  Users,
  Mic,
  Globe,
  CheckCircle,
} from "lucide-react";

export interface ArchitectureNodeData {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  isCenter?: boolean;
}

export interface NumberedFeature {
  number: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: LucideIcon;
  headline: string;
  body: string;
}

export interface WhyChooseCard {
  icon: LucideIcon;
  headline: string;
  body: string;
  badges: string[];
}

export interface TestimonialCard {
  name: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface WhatIfItem {
  number: string;
  headline: string;
  description?: string;
}

export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#architecture" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#cta" },
];

export const HERO_COPY = {
  badge: "Manage Tasks Effortlessly with AI",
  headline: "Simplify Your Workflow",
  headlineLine2: "with Apex",
  subhead:
    "Empower your organization with Apex's seamless AI workforce, intelligent task automation, and advanced omnichannel communication — so your team can focus on what truly matters.",
  primaryCta: "Get Started",
  secondaryCta: "Request a Demo",
};

export const ARCHITECTURE_NODES: ArchitectureNodeData[] = [
  {
    id: "brain",
    label: "Apex Brain",
    description: "Central intelligence coordinating everything",
    icon: Brain,
    isCenter: true,
  },
  {
    id: "security",
    label: "Security",
    description: "Self-hosted. You own your data.",
    icon: Shield,
  },
  {
    id: "gateway",
    label: "Gateway",
    description: "Connects to Slack, email, WhatsApp",
    icon: DoorOpen,
  },
  {
    id: "agent",
    label: "PI Agent",
    description: "Writes code, triages email, executes tasks",
    icon: Bot,
  },
  {
    id: "heartbeat",
    label: "Heartbeat",
    description: "Proactive briefings and follow-ups",
    icon: HeartPulse,
  },
  {
    id: "skills",
    label: "Skills",
    description: "Pre-built playbooks for any domain",
    icon: BookOpen,
  },
  {
    id: "memory",
    label: "Memory",
    description: "Persistent context from all your data",
    icon: Database,
  },
];

export const NUMBERED_FEATURES: NumberedFeature[] = [
  {
    number: "01/",
    title: "Autonomous Task Execution",
    description:
      "Let Apex handle your repetitive tasks end-to-end. From email triage to follow-ups, it acts autonomously so you can focus on strategy.",
  },
  {
    number: "02/",
    title: "Effortless Conversation Automation",
    description:
      "Stay engaged 24/7 with customers through AI-driven auto-responses and smart inquiry labeling across every channel.",
  },
  {
    number: "03/",
    title: "Shape Your AI to Reflect How You Work",
    description:
      "With Apex, each team member can build a virtual assistant that mirrors their style and voice — a true digital twin.",
  },
  {
    number: "04/",
    title: "Set a New Standard in Service Excellence",
    description:
      "Apex ensures fast, high-quality responses for consistently exceptional service across all your tools.",
  },
];

export const FEATURES: Feature[] = [
  {
    icon: Zap,
    headline: "Acts, doesn't just answer",
    body: "ChatGPT tells you what to do. Apex does it. Email triage, Slack replies, follow-ups, purchases — executed autonomously while you focus on what matters.",
  },
  {
    icon: Brain,
    headline: "Thinks, doesn't just automate",
    body: "Zapier runs if/then workflows. Apex reasons about context, makes judgment calls, and adapts to changing conditions in real time.",
  },
  {
    icon: Database,
    headline: "Remembers everything",
    body: "Not a stateless chatbot. Apex has persistent memory from your Notion, CRM, conversations, and documents — building a deeper understanding over time.",
  },
  {
    icon: Plug,
    headline: "Connects to your existing tools",
    body: "No new apps to learn. Apex integrates with Slack, email, WhatsApp, calendar, Notion, and your CRM. It meets you where you already work.",
  },
  {
    icon: Clock,
    headline: "Works while you sleep",
    body: "Proactive daily priorities, morning briefings, automatic follow-ups. Apex doesn't wait to be asked — it anticipates what needs to happen next.",
  },
  {
    icon: Lock,
    headline: "Self-hosted and secure",
    body: "Your data never leaves your infrastructure. 1Password integration, end-to-end encryption, and full audit trails. You own everything.",
  },
];

export const WHY_CHOOSE_CARDS: WhyChooseCard[] = [
  {
    icon: MessageSquare,
    headline: "Apex Enables Human-Like Conversations Across All Channels",
    body: "With Apex, effortlessly connect customers and teams through intelligent voice and messaging on web, mobile, and beyond.",
    badges: ["Teams & Customer Connect", "Voice & Message"],
  },
  {
    icon: Zap,
    headline: "Apex Task Automation Powered by AI",
    body: "End-to-end task automation powered by Apex for greater accuracy, speed, and control.",
    badges: ["Started", "Completed"],
  },
];

export const SPLIT_SECTION = {
  headline: "Power Your Next Move",
  headlineLine2: "with Apex",
  description:
    "Apex connects to your tools, learns how you work, and executes — email, Slack, follow-ups, decisions — 24/7.",
};

export const TESTIMONIALS: TestimonialCard[] = [
  {
    name: "Jacob Jones",
    company: "Adabia Inc.",
    avatar: "JJ",
    rating: 5,
    quote:
      "I couldn't be more impressed with the service I received. From start to finish, the Apex team went above and beyond to ensure everything was perfect. They were professional, prompt, and genuinely attentive to my needs.",
  },
  {
    name: "Leslie Alexander",
    company: "Monwell",
    avatar: "LA",
    rating: 5,
    quote:
      "I've been using Apex for a few weeks now, and I'm blown away by the results. It's well-designed, incredibly easy to use, and delivers exactly what it promises. Absolutely worth every penny.",
  },
  {
    name: "Dianne Russell",
    company: "AI Exactly",
    avatar: "DR",
    rating: 5,
    quote:
      "It truly changed the game for us! Their approach to tackling our challenges was unlike anything we'd seen before. I'm so grateful for their expertise and support.",
  },
  {
    name: "Jenny Wilson",
    company: "MON Committees",
    avatar: "JW",
    rating: 5,
    quote:
      "This design system has been incredibly helpful for developing high-quality websites. We truly appreciate having access to such a powerful tool.",
  },
  {
    name: "Darrell Steward",
    company: "Juliar Inc.",
    avatar: "DS",
    rating: 5,
    quote:
      "I've worked with several professionals before, but none have been as thorough and supportive. They truly listened to my needs, offered insightful strategies, and helped me see immediate improvements.",
  },
  {
    name: "Nate Warren",
    company: "Stackflow",
    avatar: "NW",
    rating: 5,
    quote:
      "Be more impressed from start to finish, my AI team went above and beyond to ensure everything was perfect. Their attention to detail, quality of work, and clear communication were exceptional.",
  },
];

export const WHAT_IF_ITEMS: WhatIfItem[] = [
  {
    number: "01",
    headline: "What if your email triaged itself",
    description:
      "Important threads surfaced, spam archived, drafts waiting for your review.",
  },
  {
    number: "02",
    headline: "What if follow-ups never fell through the cracks",
    description:
      "Every promise tracked, every deadline watched, every nudge sent on time.",
  },
  {
    number: "03",
    headline: "What if your calendar optimized itself",
    description:
      "Meetings rescheduled, buffers added, prep materials delivered before you ask.",
  },
  {
    number: "04",
    headline: "What if you had a briefing every morning",
    description:
      "A concise summary of what happened overnight and what needs your attention today.",
  },
  {
    number: "05",
    headline: "What if Slack didn't require constant monitoring",
    description:
      "Key messages flagged, noise filtered, responses drafted in your voice.",
  },
  {
    number: "06",
    headline: "What if your CRM updated itself",
    description:
      "Notes logged, deals moved, contacts enriched — all from your natural conversations.",
  },
  {
    number: "07",
    headline: "What if you had a digital twin",
    description:
      "An agent that knows how you think, communicates like you, and executes on your behalf.",
  },
];

export const CTA_COPY = {
  headline: "Ready to meet your digital twin?",
  subhead:
    "Join the waitlist. Be first to experience what work looks like when it's handled for you.",
  primaryCta: "Get Started",
  secondaryCta: "Request a Demo",
  successMessage: "You're on the list. We'll be in touch.",
};

export const FOOTER_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Twitter", href: "#" },
];
