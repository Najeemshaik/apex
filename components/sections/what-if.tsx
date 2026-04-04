"use client";

import { GlowOrb } from "@/components/glow-orb";
import { SectionWrapper, SectionItem } from "@/components/section-wrapper";
import { WHAT_IF_ITEMS } from "@/lib/constants";

export function WhatIf() {
  return (
    <section id="what-if" className="relative py-[var(--section-gap)]">
      <GlowOrb
        size="700px"
        opacity={0.08}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 md:px-10">
        <SectionWrapper>
          <h2 className="mb-8 text-center font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.03em] text-text-primary">
            Imagine a world where
          </h2>
          <p className="mx-auto mb-24 max-w-xl text-center text-lg leading-relaxed text-text-secondary">
            Everything you do today that&apos;s repetitive, forgettable, or just grunt work — handled.
          </p>
        </SectionWrapper>

        <SectionWrapper stagger className="flex flex-col gap-20">
          {WHAT_IF_ITEMS.map((item) => (
            <SectionItem key={item.number} className="flex items-start gap-8 md:gap-12">
              <span className="shrink-0 font-display text-[3.5rem] font-bold leading-none tracking-tight text-apex-accent/15 md:text-[5rem]">
                {item.number}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-text-primary md:text-2xl">
                  {item.headline}
                </h3>
                {item.description && (
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                )}
              </div>
            </SectionItem>
          ))}
        </SectionWrapper>
      </div>
    </section>
  );
}
