"use client";

import { ArrowRight } from "lucide-react";
import { GlowOrb } from "@/components/glow-orb";
import { SectionWrapper } from "@/components/section-wrapper";
import { IntegrationHub } from "@/components/integration-hub";
import { SPLIT_SECTION } from "@/lib/constants";

export function Architecture() {
  return (
    <section id="architecture" className="relative py-[var(--section-gap)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.03) 45%, transparent 70%)",
        }}
      />
      <GlowOrb
        size="700px"
        opacity={0.07}
        className="right-0 top-1/4"
        color="#7C3AED"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 md:px-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
          {/* Left — text */}
          <SectionWrapper className="shrink-0 lg:max-w-[420px] lg:pt-16">
            <span className="inline-block rounded-full border border-apex-accent/20 bg-apex-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-apex-bright">
              Integrations
            </span>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
              {SPLIT_SECTION.headline}
              <br />
              <span className="text-apex-bright">
                {SPLIT_SECTION.headlineLine2}
              </span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-[1.8] text-text-secondary">
              {SPLIT_SECTION.description}
            </p>
            <a
              href="#"
              className="btn-secondary mt-8 inline-flex items-center gap-2"
            >
              View all integrations
              <ArrowRight className="size-4" />
            </a>
          </SectionWrapper>

          {/* Right — integration hub */}
          <SectionWrapper delay={0.2} className="flex-1 w-full min-w-0">
            <IntegrationHub />
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
