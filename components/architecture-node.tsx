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
        "flex flex-col items-center gap-2 rounded-2xl border border-border-glass bg-bg-glass p-4 backdrop-blur-xl",
        "border-t border-t-white/[0.08]",
        isCenter
          ? "animate-glow-pulse z-10 border-apex-accent/30 p-6"
          : "transition-all duration-500 hover:border-apex-accent/20 hover:shadow-[0_0_40px_oklch(70%_0.25_300_/_0.12)]",
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
          isCenter ? "text-lg text-text-primary" : "text-sm text-text-primary"
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
