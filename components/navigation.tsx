"use client";

import { useEffect, useState } from "react";
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
          ? "border-b border-border-glass bg-bg-glass backdrop-blur-2xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-wide text-text-primary"
        >
          APEX
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-text-secondary transition-all duration-300 hover:bg-bg-glass hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="rounded-lg border border-border-glass bg-bg-glass px-4 py-2 text-sm font-medium text-apex-bright backdrop-blur-xl transition-all duration-300 hover:border-apex-accent/30 hover:shadow-[0_0_40px_oklch(70%_0.25_300_/_0.3)]"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
