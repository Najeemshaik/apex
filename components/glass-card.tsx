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
        "glass-card",
        hover &&
          "transition-all duration-500 hover:border-apex-accent/20 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]",
        glow && "glow-box-subtle",
        className
      )}
    >
      {children}
    </div>
  );
}
