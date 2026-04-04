"use client";

import { motion } from "motion/react";

interface ArchitectureLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
}

export function ArchitectureLine({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
}: ArchitectureLineProps) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#7C3AED"
      strokeWidth={1.5}
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { duration: 0.8, ease: "easeInOut", delay },
            opacity: { duration: 0.3, delay },
          },
        },
      }}
      style={{
        filter: "drop-shadow(0 0 6px oklch(70% 0.25 300 / 0.5))",
      }}
    />
  );
}
