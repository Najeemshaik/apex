"use client";

import { GlassCard } from "@/components/glass-card";
import { SectionWrapper, SectionItem } from "@/components/section-wrapper";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section id="features" className="relative py-[var(--section-gap)]">
      <div className="mx-auto max-w-[var(--container-max)] px-6 md:px-10">
        <SectionWrapper>
          <h2 className="mb-6 text-center font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.03em] text-text-primary">
            Not another chatbot
          </h2>
          <p className="mx-auto mb-20 max-w-2xl text-center text-lg leading-relaxed text-text-secondary">
            Apex doesn&apos;t just respond. It reasons, remembers, and acts — across every tool you already use.
          </p>
        </SectionWrapper>

        <SectionWrapper stagger className="flex flex-col gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <SectionItem key={i}>
                <GlassCard
                  hover
                  className={`group flex flex-col gap-5 p-7 md:flex-row md:items-start md:gap-10 md:p-10 ${
                    i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  <div className="flex shrink-0 items-center justify-center">
                    <Icon className="size-6 text-text-tertiary transition-colors duration-300 group-hover:text-apex-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-text-primary md:text-2xl">
                      {feature.headline}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-text-secondary">
                      {feature.body}
                    </p>
                  </div>
                </GlassCard>
              </SectionItem>
            );
          })}
        </SectionWrapper>
      </div>
    </section>
  );
}
