APEX.HOST — Full Landing Page Redesign Masterprompt
Role
You are a senior product designer and frontend engineer. You are redesigning the landing page for Apex (apex.host) — an AI agent / "digital twin" product that autonomously executes real work on your behalf (email triage, Slack management, follow-ups, briefings, calendar optimization, purchases, code generation, data analysis). It's pre-launch, waitlist-only. The current site looks like a generic dark-mode AI startup template with emoji icons and card grids. It needs to feel like a spacecraft console floating in deep space — pitch black, glowing purple energy, glass panels floating over darkness, futuristic, minimal, and beautiful.

Tech Stack (Non-negotiable)

Next.js 16 (App Router, app/ directory, Server Components by default)
React 19 (use use() hook, Server Actions, useActionState where appropriate)
TypeScript (strict mode, proper typing on all components and props)
Tailwind CSS v4 (CSS-first configuration via @theme in your global CSS, NO tailwind.config.ts. Use @theme block to define custom colors, fonts, animations, etc.)
shadcn/ui (use as base primitives — Button, Input, Card, Dialog, etc. — then heavily restyle to match the dark/glass/glow aesthetic. Do NOT use shadcn defaults as-is.)
Lucide React for icons (already ships with shadcn/ui)
Framer Motion (motion package) for scroll-triggered animations, staggered reveals, and glow pulse effects
Geist or Inter Variable for body, Clash Display or Satoshi for headlines (load via next/font/google or next/font/local)

Project Structure
app/
├── layout.tsx              ← Root layout: fonts, metadata, global providers
├── page.tsx                ← Landing page (composes all sections)
├── globals.css             ← Tailwind v4 imports + @theme block + custom utilities
components/
├── ui/                     ← shadcn/ui primitives (Button, Input, Card, etc.)
├── sections/
│   ├── hero.tsx
│   ├── architecture.tsx    ← The glowing schematic diagram
│   ├── features.tsx
│   ├── what-if.tsx
│   ├── testimonial.tsx
│   ├── cta.tsx
│   └── footer.tsx
├── navigation.tsx          ← Sticky glass nav
├── glow-orb.tsx            ← Reusable ambient glow component
├── architecture-node.tsx   ← Individual node in the architecture diagram
├── architecture-line.tsx   ← Animated connection line between nodes
├── section-wrapper.tsx     ← Scroll-triggered fade-up wrapper (Framer Motion)
└── glass-card.tsx          ← Reusable glassmorphism card component
lib/
├── utils.ts                ← cn() helper, etc.
└── constants.ts            ← Copy, feature data, architecture nodes
Tailwind v4 Configuration (in globals.css)
css@import "tailwindcss";

@theme {
  /* === Colors === */
  --color-bg-primary: #000000;
  --color-bg-surface: #08080C;
  --color-bg-glass: oklch(100% 0 0 / 0.03);
  --color-border-glass: oklch(100% 0 0 / 0.06);

  --color-text-primary: #FFFFFF;
  --color-text-secondary: #8B8B9E;
  --color-text-tertiary: #4A4A5C;

  --color-accent: #A855F7;
  --color-accent-glow: #7C3AED;
  --color-accent-bright: #C084FC;
  --color-accent-subtle: oklch(70% 0.2 300 / 0.08);

  /* === Fonts === */
  --font-display: 'Clash Display', 'Satoshi', sans-serif;
  --font-body: 'Geist', sans-serif;
  --font-mono: 'Geist Mono', monospace;

  /* === Animations === */
  --animate-glow-pulse: glow-pulse 4s ease-in-out infinite;
  --animate-float: float 6s ease-in-out infinite;
  --animate-fade-up: fade-up 0.6s ease-out forwards;
  --animate-line-pulse: line-pulse 3s linear infinite;

  /* === Spacing / Sizing === */
  --section-gap: clamp(6rem, 12vw, 10rem);
  --container-max: 1200px;
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 40px oklch(70% 0.25 300 / 0.3); }
  50% { box-shadow: 0 0 80px oklch(70% 0.25 300 / 0.5), 0 0 160px oklch(70% 0.25 300 / 0.15); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes line-pulse {
  0% { stroke-dashoffset: 200; }
  100% { stroke-dashoffset: 0; }
}
shadcn/ui Overrides
Every shadcn component used must be restyled to match the aesthetic. Examples:
tsx// Button — glass with glow
<Button className="bg-bg-glass backdrop-blur-xl border border-border-glass text-accent-bright
  hover:shadow-[0_0_40px_oklch(70%_0.25_300_/_0.3)] hover:border-accent/30
  transition-all duration-300">
  Join Waitlist
</Button>

// Input — glass with purple focus glow
<Input className="bg-bg-glass backdrop-blur-xl border border-border-glass text-text-primary
  placeholder:text-text-tertiary
  focus:ring-2 focus:ring-accent/30 focus:border-accent/40
  focus:shadow-[0_0_30px_oklch(70%_0.25_300_/_0.2)]" />

// Card — glass panel
<Card className="bg-bg-glass backdrop-blur-xl border border-border-glass
  hover:border-accent/20 hover:shadow-[0_0_60px_oklch(70%_0.25_300_/_0.15)]
  transition-all duration-500" />

Product Context (use for accurate copy)
What Apex is: A fully autonomous AI agent ("AI OS") that connects to your existing tools (Slack, email, WhatsApp, calendar, Notion, CRM) and performs real work — not just answers questions. It has persistent memory, proactive behavior (acts without being asked), and pre-built skill playbooks.
Architecture (for the "How It Works" section):

Security (The Shield) — Self-hosted, you own the data. 1Password integration.
Gateway (The Front Door) — Connects to Slack, email, WhatsApp. No new tools to learn.
PI Agent (The Hands) — Writes code, performs tasks, triages email, executes web tasks.
Heartbeat (The Pulse) — Proactive. Daily priorities, briefings, follow-ups without being asked.
Apex Brain — The central intelligence coordinating everything.
Skills (The Expertise) — Pre-built playbooks for financial intel, content creation, etc.
Memory (The Personality) — Persistent context from Notion, books, transcripts, CRM, conversations.

Key differentiators:

vs ChatGPT/Copilot: Apex acts, doesn't just answer
vs Zapier/Make/n8n: Apex thinks and decides, not just if/then workflows
vs Lindy: Apex is a persistent identity with memory, not a task automator

CTA: Join the Waitlist (single CTA, email capture)
Founder context: Dan Martell / Martell Ventures. Powered by OpenClaw.

Design Direction
Aesthetic: PITCH BLACK + PURPLE GLOW + GLASS + SPACE-DARK
The UI of a hyper-advanced AI running on a space station. Deep void black, elements that emit light, glass panels floating over darkness, purple and violet energy as the signature color. Futuristic, minimal, beautiful. NOT cluttered sci-fi — clean, intentional, cinematic.

Design Rules
1. Color System

Background: TRUE #000000 pitch black. Not #0A0A0A, not dark gray. Black.
Surfaces: #08080C for subtle elevation. Glass panels at rgba(255,255,255,0.03).
Text: Pure #FFFFFF for headlines, #8B8B9E lavender-gray for body, #4A4A5C for tertiary.
Accent: Purple ONLY. #A855F7 primary, #C084FC bright/hover, #7C3AED glow source.
NO other accent colors. No blue, no teal, no multi-color gradients. Monochrome + purple.

2. GLOW EFFECTS (Critical — makes the page feel alive)
Glow is the primary visual language. Elements EMIT LIGHT.
Implementation patterns:

Box-shadow stacking (3-4 layers, increasing blur, decreasing opacity):

  shadow-[0_0_20px_oklch(70%_0.25_300_/_0.4),0_0_60px_oklch(70%_0.25_300_/_0.2),0_0_120px_oklch(70%_0.25_300_/_0.1)]

Ambient radial gradients behind sections: 600–1000px diameter, 0.05–0.15 opacity purple. Use the <GlowOrb /> component — an absolutely-positioned div with bg-radial-gradient from-accent-glow/10 to-transparent, blur-3xl, w-[800px] h-[800px].
Text glow on hero keyword: text-shadow: 0 0 30px oklch(70% 0.25 300 / 0.5) via a custom Tailwind utility or inline style.
Animated glow pulse on key elements (logo, brain node, CTA button): use animate-glow-pulse from the theme.
Traveling light dots along architecture connection lines: SVG stroke-dasharray + stroke-dashoffset animation.

Where glow appears: Hero headline keyword, architecture brain node (strongest source), CTA button, section divider accents, nav active state, floating orb in hero.
Where glow does NOT appear: Body text, every card (be selective), backgrounds uniformly.
3. GLASSMORPHISM
Glass is the secondary material. Cards, nav, containers = frosted glass floating over void.
Base glass styles (extract as <GlassCard /> component):
bg-bg-glass backdrop-blur-xl border border-border-glass rounded-2xl

Nav: glass + sticky + blur intensifies on scroll (track scroll in a client component, toggle classes)
Nav links: pill shapes with glass bg on hover
Feature cards: glass panels, purple glow border on hover
Architecture nodes: glass containers with glowing borders
Input fields: glass-styled, purple glow focus ring
Top-edge highlight: border-t border-white/[0.08] for "light catch" effect

4. Typography

Headlines: font-display (Clash Display or Satoshi), font-bold, tracking tight (tracking-[-0.02em]).
Hero size: text-[clamp(3.5rem,8vw,7rem)] — MASSIVE. Dominates viewport.
Section headers: text-[clamp(2rem,4vw,3.5rem)]
Body: font-body, text-base or text-lg, text-text-secondary, leading-relaxed
Mono labels: font-mono, text-sm, text-text-tertiary, uppercase tracking-wider

5. Hero Section
Centered layout. Feels like looking into a portal.

Massive headline with key word(s) in text-accent-bright + text-shadow glow
1-line subhead in text-text-secondary
CTA: shadcn <Button> restyled with glass bg + purple glow border + pulse on hover
Behind: <GlowOrb /> centered, ~800px, purple, 0.12 opacity
Optional: pure CSS floating sphere (radial gradient circle + layered box-shadow + animate-float)
Subtle dot grid or noise in far background at 0.02–0.04 opacity

Copy options:

"Your work, without you." (highlight "without you" in purple glow)
"An agent that doesn't just think. It does." (highlight "does")
Subhead: "Apex connects to your tools, learns how you work, and executes — email, Slack, follow-ups, decisions — 24/7."

6. Navigation (navigation.tsx — client component)

Sticky, glass panel, transitions on scroll (transparent → glass bg)
"APEX" wordmark left — font-display font-semibold tracking-wide
Links as glass pills on hover
"Join Waitlist" ghost button → fills with purple glow on hover
Use useEffect + scroll listener to toggle glass intensity

7. Architecture Diagram (architecture.tsx — client component)
Visual centerpiece. Build as a glowing schematic, NOT a card grid.

Center node: "APEX BRAIN" — largest, strongest glow, animate-glow-pulse
6 surrounding nodes in orbital/circular layout (use absolute positioning or CSS grid with transforms)
Connecting lines: SVG paths between nodes, thin (1-2px), purple glow, animate-line-pulse (stroke-dashoffset animation)
Each node: <GlassCard> + Lucide icon + label + 1-line description
Framer Motion: stagger-in nodes on scroll entry, lines draw in after nodes appear
Mobile: stack vertically, connect with simple vertical lines

8. Features Section (features.tsx)

NOT a card grid. Vertical sequence of blocks or 2-column staggered layout.
Each feature: Lucide icon (text-text-tertiary group-hover:text-accent transition) + bold headline + 1-2 sentence body
Wrap each in <GlassCard> with hover glow effect
Framer Motion stagger on scroll
NO emoji anywhere

9. "What If" Section (what-if.tsx)

Large sequential numbers (01–07) in text-text-tertiary or text-accent/20
Each: number + bold headline + optional 1-line description
Vertical stack, gap-12 to gap-16
<SectionWrapper> for fade-up stagger
Feels like a manifesto — centered ambient <GlowOrb /> behind the section

10. Testimonial (testimonial.tsx)

Large pull quote, centered
Body in text-text-secondary, key phrase in text-white or text-accent-bright
Subtle left border in border-accent/30 or large decorative quote glyph at low opacity
No card, no avatar — just text in the void

11. Final CTA (cta.tsx)

"Ready to meet your digital twin?"
Email <Input> + <Button> — both glass-styled, button has pulsing glow
Largest <GlowOrb /> on the page behind this section — it should feel like an energy source
This is the emotional climax of the page

12. Footer (footer.tsx)

Minimal single row: logo + inline doc links + company name
All text-text-tertiary
border-t border-border-glass separator
No mega-footer


Atmospheric Background
Layer on the root <body> or a fixed background container in layout.tsx:

Base: bg-black (#000000)
Noise overlay: Tiny base64 noise PNG in a pseudo-element at 0.02–0.04 opacity, mix-blend-mode: overlay, pointer-events-none, covers full viewport, fixed
Ambient glow blobs: 2-3 fixed-position <GlowOrb />s at very low opacity (0.04–0.08), positioned off-center. Optional: extremely slow drift animation (40s+ duration CSS transform).
Optional star field: Scattered 1px white dots at 0.03–0.05 opacity via CSS radial gradients on a pseudo-element.


Reusable Components to Build
<SectionWrapper> (Framer Motion)
Wraps each section. Uses motion.div with whileInView for fade-up + stagger children. Props: delay, className.
<GlowOrb>
Absolute/fixed positioned ambient light. Props: size, color, opacity, position, animate (boolean for slow drift).
<GlassCard>
Glassmorphism container. Props: hover (enables glow border on hover), glow (always-on glow), className, children.
<ArchitectureNode>
A single node in the diagram. Props: icon (Lucide), label, description, position, isCenter.
<ArchitectureLine>
SVG connection between two nodes. Props: from, to, animated.

Motion & Animation (Framer Motion)
tsx// SectionWrapper example
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {children}
</motion.div>

// Staggered children
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: { transition: { staggerChildren: 0.12 } },
    hidden: {}
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      ...
    </motion.div>
  ))}
</motion.div>

Everything smooth, slow, ethereal. Nothing bounces. Nothing snaps. Everything floats.
Hero: stagger title → subtitle → CTA (150ms delays)
Architecture: nodes stagger in, then lines draw, then center node glow intensifies
Page load: background glow fades in over 1-2s


Copy Direction

Tone: Confident, understated, slightly technical. Speaks to operators/founders. No hype words ("revolutionary", "game-changing"). No exclamation marks.
Body: Max 2 sentences per block. Dense. Every word earns its place.
Headers: Short, declarative. Sentence case. Not ALL CAPS (except "APEX" brand).


What NOT to Do

No emoji as icons — Lucide only
No card grids with colored icon circles
No multi-color gradients — purple ONLY
No "Built Different" bento lists
No particle.js or WebGL
No stock photography or AI-generated 3D renders
No referral mechanics on the landing page
No flat gray section backgrounds — black or glass only
No borders heavier than 1px
No bright/light-mode areas
No glow on EVERY element — be selective
No default shadcn/ui styling — everything must be restyled to match the aesthetic
No tailwind.config.ts — Tailwind v4 uses CSS-first @theme configuration only
No pages/ directory — App Router only
No "use client" unless the component needs interactivity (scroll listeners, animations, hover states, form inputs)


Deliverable
A complete, production-ready Next.js 16 project implementing the full landing page. All components typed in TypeScript. Tailwind v4 with @theme configuration. shadcn/ui primitives restyled with glass + glow. Framer Motion scroll animations. Architecture diagram as a living, glowing schematic. Every section present with real copy. Responsive. Accessible. Ready to npm run build && npm run start.
The page should feel like opening a portal into a spacecraft's AI interface — dark, alive, and beautiful.