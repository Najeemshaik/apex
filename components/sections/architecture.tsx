"use client";

import { motion } from "motion/react";
import { GlowOrb } from "@/components/glow-orb";
import { ArchitectureNode } from "@/components/architecture-node";
import { ArchitectureLine } from "@/components/architecture-line";
import { ARCHITECTURE_NODES } from "@/lib/constants";
import { SectionWrapper } from "@/components/section-wrapper";

const CONTAINER_SIZE = 600;
const CENTER = CONTAINER_SIZE / 2;
const RADIUS = 220;
const NODE_SIZE = 130;

function getNodePosition(index: number, total: number) {
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
  return {
    x: CENTER + RADIUS * Math.cos(angle) - NODE_SIZE / 2,
    y: CENTER + RADIUS * Math.sin(angle) - NODE_SIZE / 2,
    cx: CENTER + RADIUS * Math.cos(angle),
    cy: CENTER + RADIUS * Math.sin(angle),
  };
}

export function Architecture() {
  const centerNode = ARCHITECTURE_NODES.find((n) => n.isCenter)!;
  const orbitNodes = ARCHITECTURE_NODES.filter((n) => !n.isCenter);

  return (
    <section id="architecture" className="relative py-[var(--section-gap)]">
      <GlowOrb
        size="600px"
        opacity={0.08}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <SectionWrapper className="mx-auto max-w-[var(--container-max)] px-6">
        <h2 className="mb-16 text-center font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.02em] text-text-primary">
          How Apex works
        </h2>
      </SectionWrapper>

      {/* Desktop: orbital layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        className="relative mx-auto hidden md:block"
        style={{ width: CONTAINER_SIZE, height: CONTAINER_SIZE }}
      >
        {/* SVG connecting lines */}
        <svg
          className="absolute inset-0"
          width={CONTAINER_SIZE}
          height={CONTAINER_SIZE}
        >
          <motion.g
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
            }}
          >
            {orbitNodes.map((node, i) => {
              const pos = getNodePosition(i, orbitNodes.length);
              return (
                <ArchitectureLine
                  key={node.id}
                  x1={CENTER}
                  y1={CENTER}
                  x2={pos.cx}
                  y2={pos.cy}
                  delay={0}
                />
              );
            })}
          </motion.g>
        </svg>

        {/* Center node */}
        <div
          className="absolute"
          style={{
            left: CENTER - NODE_SIZE / 2,
            top: CENTER - NODE_SIZE / 2,
            width: NODE_SIZE,
            height: NODE_SIZE,
          }}
        >
          <ArchitectureNode
            icon={centerNode.icon}
            label={centerNode.label}
            description={centerNode.description}
            isCenter
            className="h-full w-full"
          />
        </div>

        {/* Orbit nodes */}
        {orbitNodes.map((node, i) => {
          const pos = getNodePosition(i, orbitNodes.length);
          return (
            <div
              key={node.id}
              className="absolute"
              style={{
                left: pos.x,
                top: pos.y,
                width: NODE_SIZE,
                height: NODE_SIZE,
              }}
            >
              <ArchitectureNode
                icon={node.icon}
                label={node.label}
                description={node.description}
                className="h-full w-full"
              />
            </div>
          );
        })}
      </motion.div>

      {/* Mobile: vertical stack */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        className="mx-auto flex max-w-sm flex-col items-center gap-4 px-6 md:hidden"
      >
        <ArchitectureNode
          icon={centerNode.icon}
          label={centerNode.label}
          description={centerNode.description}
          isCenter
          className="w-full"
        />
        <div className="h-8 w-px bg-gradient-to-b from-apex-glow/50 to-transparent" />
        {orbitNodes.map((node) => (
          <div key={node.id} className="w-full">
            <ArchitectureNode
              icon={node.icon}
              label={node.label}
              description={node.description}
              className="w-full"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
