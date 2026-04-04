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
} from "lucide-react";

export interface ArchitectureNodeData {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  isCenter?: boolean;
}

export interface Feature {
  icon: LucideIcon;
  headline: string;
  body: string;
}

export interface WhatIfItem {
  number: string;
  headline: string;
  description?: string;
}

export const NAV_LINKS = [
  { label: "How it works", href: "#architecture" },
  { label: "Features", href: "#features" },
  { label: "Manifesto", href: "#what-if" },
];

export const HERO_COPY = {
  headline: "Your work,",
  highlightedWord: "without you.",
  subhead:
    "Apex connects to your tools, learns how you work, and executes — email, Slack, follow-ups, decisions — 24/7.",
  cta: "Join Waitlist",
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

export const TESTIMONIAL = {
  quote:
    "We didn't build another AI assistant. We built the agent that replaces the work you shouldn't be doing in the first place.",
  highlightedPhrase: "replaces the work",
  attribution: "Apex Team",
};

export const CTA_COPY = {
  headline: "Ready to meet your digital twin?",
  subhead:
    "Join the waitlist. Be first to experience what work looks like when it's handled for you.",
  button: "Join Waitlist",
  successMessage: "You're on the list. We'll be in touch.",
};

export const FOOTER_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Twitter", href: "#" },
];
