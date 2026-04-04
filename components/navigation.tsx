"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-black/80 backdrop-blur-2xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-wide text-white"
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-apex-accent/20">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-apex-bright">
              <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" stroke="currentColor" strokeWidth="1.5" fill="rgba(168,85,247,0.2)" />
              <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
          APEX
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-text-secondary transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="group inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-apex-accent/40 hover:bg-apex-accent/10 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
        >
          Log in
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </nav>
  );
}
