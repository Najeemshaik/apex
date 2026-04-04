"use client";

import { ArrowRight } from "lucide-react";
import { GlowOrb } from "@/components/glow-orb";
import { SectionWrapper, SectionItem } from "@/components/section-wrapper";
import { NUMBERED_FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section id="features" className="relative py-[var(--section-gap)]">
      {/* Bright accent gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.03) 40%, transparent 65%)",
        }}
      />
      <GlowOrb
        size="800px"
        opacity={0.06}
        className="left-1/2 top-0 -translate-x-1/2"
        color="#7C3AED"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 md:px-10">
        <SectionWrapper>
          <h2 className="mb-4 text-center font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white">
            Next-Level Performance
            <br />
            <span className="text-text-secondary">Driven by Apex</span>
          </h2>
        </SectionWrapper>

        {/* Numbered cards grid */}
        <SectionWrapper stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERED_FEATURES.map((feature) => (
            <SectionItem key={feature.number}>
              <div className="glass-card group h-full p-6 transition-all duration-500">
                <span className="font-mono text-sm font-semibold tracking-wider text-apex-bright/60">
                  {feature.number}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold leading-tight tracking-[-0.01em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </SectionItem>
          ))}
        </SectionWrapper>

        {/* Two CTAs below */}
        <SectionWrapper delay={0.3} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#cta" className="btn-primary group">
            Get Started
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a href="#cta" className="btn-secondary group">
            Request a Demo
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </SectionWrapper>
      </div>
    </section>
  );
}
