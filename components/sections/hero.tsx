"use client";

import { motion } from "motion/react";
import { GlowOrb } from "@/components/glow-orb";
import { Orbit } from "@/components/orbit";
import { HERO_COPY, ARCHITECTURE_NODES } from "@/lib/constants";

export function Hero() {
  const centerNode = ARCHITECTURE_NODES.find((n) => n.isCenter)!;
  const orbitNodes = ARCHITECTURE_NODES.filter((n) => !n.isCenter);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background glows */}
      <GlowOrb
        size="1400px"
        opacity={0.14}
        className="-top-[500px] -left-[300px]"
        color="#7C3AED"
      />
      <GlowOrb
        size="1000px"
        opacity={0.08}
        className="-right-[200px] -top-[100px]"
        color="#A855F7"
      />

      {/*
        ORBIT — massive, positioned absolutely to fill the right 70%
        of the hero. It bleeds behind the text for depth.
        Hidden on mobile, shown from md up.
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        {/* Position the orbit to the right and slightly down */}
        <div
          className="absolute"
          style={{
            top: "10%",
            right: "2%",
            width: "45%",
            height: "80%",
          }}
        >
          {/* re-enable pointer events on the orbit itself */}
          <div className="pointer-events-auto h-full w-full">
            <Orbit nodes={orbitNodes} centerNode={centerNode} />
          </div>
        </div>
      </motion.div>

      {/* Text content — sits on top of the orbit */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-40 pb-32 md:px-12 md:pt-52 md:pb-44 lg:pt-56 lg:pb-48">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(3.2rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white"
          >
            {HERO_COPY.headline}
            <br />
            <span className="text-glow text-apex-bright">
              {HERO_COPY.highlightedWord}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="mt-8 max-w-lg text-lg leading-[1.7] text-[#a0a0b8] md:text-xl"
          >
            {HERO_COPY.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mt-14"
          >
            <a
              href="#cta"
              className="inline-flex items-center rounded-2xl border border-apex-accent/30 px-10 py-4 text-base font-semibold text-apex-bright backdrop-blur-xl transition-all duration-400 hover:border-apex-accent/50 hover:shadow-[0_0_80px_rgba(124,58,237,0.35)]"
              style={{
                background: "rgba(124,58,237,0.08)",
                boxShadow:
                  "0 0 30px rgba(124,58,237,0.25), 0 0 60px rgba(124,58,237,0.1)",
              }}
            >
              {HERO_COPY.cta}
            </a>
          </motion.div>
        </div>

        {/* Mobile: card list (orbit hidden) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.4 },
            },
            hidden: {},
          }}
          className="mt-16 flex flex-col gap-3 md:hidden"
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
                className="flex items-center gap-4 rounded-2xl border border-white/[0.08] px-5 py-4 backdrop-blur-xl"
                style={{ background: "rgba(10,10,20,0.8)" }}
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/[0.06]">
                  <Icon className="size-5 text-[#8888a0]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {node.label}
                  </p>
                  <p className="text-xs text-[#8888a0]">{node.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
