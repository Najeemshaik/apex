"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchitectureNodeProps {
  icon: LucideIcon;
  label: string;
  description: string;
  isCenter?: boolean;
  className?: string;
}

export function ArchitectureNode({
  icon: Icon,
  label,
  description,
  isCenter = false,
  className,
}: ArchitectureNodeProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className={cn(
        "glass-card flex flex-col items-center gap-2 p-4",
        isCenter
          ? "animate-glow-pulse z-10 border-apex-accent/30 p-6"
          : "transition-all duration-500 hover:border-apex-accent/20",
        className
      )}
    >
      <Icon
        className={cn(
          "shrink-0",
          isCenter
            ? "size-8 text-apex-bright"
            : "size-5 text-text-tertiary"
        )}
      />
      <span
        className={cn(
          "font-display font-semibold tracking-tight",
          isCenter ? "text-lg text-white" : "text-sm text-white"
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "text-center leading-relaxed text-text-secondary",
          isCenter ? "text-sm" : "text-xs"
        )}
      >
        {description}
      </span>
    </motion.div>
  );
}
