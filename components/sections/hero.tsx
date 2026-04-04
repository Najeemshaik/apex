"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlowOrb } from "@/components/glow-orb";
import { Orbit } from "@/components/orbit";
import { HERO_COPY, ARCHITECTURE_NODES } from "@/lib/constants";

export function Hero() {
  const centerNode = ARCHITECTURE_NODES.find((n) => n.isCenter)!;
  const orbitNodes = ARCHITECTURE_NODES.filter((n) => !n.isCenter);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Bright accent gradients */}
      <div
        className="pointer-events-none absolute -top-[300px] left-1/2 h-[800px] w-[1200px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.06) 40%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-[200px] top-[10%] h-[600px] w-[600px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28 lg:min-h-screen lg:flex-row lg:items-center lg:gap-8 lg:pt-32 lg:pb-20">
        {/* Left: text content */}
        <div className="flex-1 lg:max-w-xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 backdrop-blur-xl"
          >
            <Sparkles className="size-4 text-apex-bright" />
            <span className="text-sm text-text-secondary">
              {HERO_COPY.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
          >
            {HERO_COPY.headline}
            <br />
            <span className="text-glow text-apex-bright">
              {HERO_COPY.headlineLine2}
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-[1.7] text-text-secondary md:text-lg"
          >
            {HERO_COPY.subhead}
          </motion.p>

          {/* Two CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#cta" className="btn-primary group">
              {HERO_COPY.primaryCta}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a href="#cta" className="btn-secondary group">
              {HERO_COPY.secondaryCta}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Right: Orbit — desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="pointer-events-none relative hidden flex-1 lg:block"
          style={{ height: 560 }}
        >
          <div className="pointer-events-auto h-full w-full">
            <Orbit nodes={orbitNodes} centerNode={centerNode} />
          </div>
        </motion.div>
      </div>

      {/* Mobile: card list (orbit hidden) */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 md:px-10 lg:hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.4 },
            },
            hidden: {},
          }}
          className="flex flex-col gap-3"
        >
          {orbitNodes.map((node) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.id}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                className="glass-card flex items-center gap-4 px-5 py-4"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-apex-accent/10">
                  <Icon className="size-5 text-apex-bright/60" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {node.label}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {node.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
