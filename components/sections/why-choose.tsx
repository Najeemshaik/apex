"use client";

import { SectionWrapper, SectionItem } from "@/components/section-wrapper";
import { GlowOrb } from "@/components/glow-orb";
import { WHY_CHOOSE_CARDS } from "@/lib/constants";

export function WhyChoose() {
  return (
    <section id="about" className="relative py-[var(--section-gap)]">
      <GlowOrb
        size="600px"
        opacity={0.05}
        className="left-1/4 top-1/2 -translate-y-1/2"
        color="#7C3AED"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 md:px-10">
        <SectionWrapper>
          <h2 className="mb-16 text-center font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white">
            Why Choose Apex
          </h2>
        </SectionWrapper>

        <SectionWrapper stagger className="grid gap-6 md:grid-cols-2">
          {WHY_CHOOSE_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <SectionItem key={i}>
                <div className="glass-card group relative flex h-full flex-col overflow-hidden p-8 transition-all duration-500 md:p-10">
                  {/* Decorative gradient blob inside card */}
                  <div
                    className="pointer-events-none absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full opacity-[0.08]"
                    style={{
                      background:
                        "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
                    }}
                  />

                  <h3 className="relative font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-2xl">
                    {card.headline}
                  </h3>
                  <p className="relative mt-4 text-base leading-relaxed text-text-secondary">
                    {card.body}
                  </p>

                  {/* Decorative icon area */}
                  <div className="relative mt-8 flex flex-1 items-end gap-4">
                    <div className="flex size-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                      <Icon className="size-7 text-apex-bright/70" />
                    </div>
                    <div className="flex size-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                      <Icon className="size-7 text-apex-bright/40" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {card.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-text-secondary"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionItem>
            );
          })}
        </SectionWrapper>
      </div>
    </section>
  );
}
