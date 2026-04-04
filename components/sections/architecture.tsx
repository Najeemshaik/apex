"use client";

import { motion } from "motion/react";
import { GlowOrb } from "@/components/glow-orb";
import { Orbit } from "@/components/orbit";
import { SectionWrapper } from "@/components/section-wrapper";
import { ARCHITECTURE_NODES, SPLIT_SECTION } from "@/lib/constants";
import { ArchitectureNode } from "@/components/architecture-node";

export function Architecture() {
  const centerNode = ARCHITECTURE_NODES.find((n) => n.isCenter)!;
  const orbitNodes = ARCHITECTURE_NODES.filter((n) => !n.isCenter);

  return (
    <section id="architecture" className="relative py-[var(--section-gap)]">
      {/* Bright accent gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(124,58,237,0.14) 0%, rgba(168,85,247,0.03) 45%, transparent 70%)",
        }}
      />
      <GlowOrb
        size="700px"
        opacity={0.07}
        className="right-0 top-1/4"
        color="#7C3AED"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 md:px-10">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-12">
          {/* Left: headline + description */}
          <SectionWrapper className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
              {SPLIT_SECTION.headline}
              <br />
              <span className="text-apex-bright">
                {SPLIT_SECTION.headlineLine2}
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-[1.7] text-text-secondary md:text-lg">
              {SPLIT_SECTION.description}
            </p>
          </SectionWrapper>

          {/* Right: Orbit visualization (desktop) / card list (mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden w-full flex-1 lg:block"
            style={{ height: 480 }}
          >
            <Orbit nodes={orbitNodes} centerNode={centerNode} />
          </motion.div>
        </div>

        {/* Mobile: vertical card list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          className="mt-12 flex flex-col gap-3 lg:hidden"
        >
          {/* Center node first */}
          <ArchitectureNode
            icon={centerNode.icon}
            label={centerNode.label}
            description={centerNode.description}
            isCenter
            className="w-full"
          />
          <div className="mx-auto h-6 w-px bg-gradient-to-b from-apex-glow/40 to-transparent" />
          {orbitNodes.map((node) => (
            <ArchitectureNode
              key={node.id}
              icon={node.icon}
              label={node.label}
              description={node.description}
              className="w-full"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
