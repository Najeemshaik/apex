import { cn } from "@/lib/utils";

interface GlassCardProps {
  hover?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function GlassCard({
  hover = false,
  glow = false,
  className,
  children,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-glass bg-bg-glass backdrop-blur-xl",
        "border-t border-t-white/[0.08]",
        hover &&
          "transition-all duration-500 hover:border-apex-accent/20 hover:shadow-[0_0_60px_oklch(70%_0.25_300_/_0.15)]",
        glow && "glow-box-subtle",
        className
      )}
    >
      {children}
    </div>
  );
}
