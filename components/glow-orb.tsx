import { cn } from "@/lib/utils";

interface GlowOrbProps {
  size?: string;
  color?: string;
  opacity?: number;
  className?: string;
  animate?: boolean;
}

export function GlowOrb({
  size = "800px",
  color = "#7C3AED",
  opacity = 0.12,
  className,
  animate = false,
}: GlowOrbProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        animate && "animate-slow-drift",
        className
      )}
      style={{
        width: size,
        height: size,
        opacity,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}
