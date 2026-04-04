"use client";

import { useState } from "react";
import { GlowOrb } from "@/components/glow-orb";
import { SectionWrapper } from "@/components/section-wrapper";
import { CTA_COPY } from "@/lib/constants";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="cta" className="relative py-[var(--section-gap)]">
      <GlowOrb
        size="1000px"
        opacity={0.15}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
        <SectionWrapper>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.03em] text-text-primary">
            {CTA_COPY.headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            {CTA_COPY.subhead}
          </p>

          {submitted ? (
            <div className="mt-14">
              <p className="text-xl font-medium text-apex-bright">
                {CTA_COPY.successMessage}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 flex-1 rounded-xl border border-border-glass bg-bg-glass px-5 text-base text-text-primary backdrop-blur-xl transition-all duration-300 placeholder:text-text-tertiary focus:border-apex-accent/40 focus:shadow-[0_0_30px_oklch(70%_0.25_300_/_0.2)] focus:ring-2 focus:ring-apex-accent/30 focus:outline-none"
              />
              <button
                type="submit"
                className="animate-glow-pulse h-14 shrink-0 rounded-xl border border-apex-accent/30 bg-bg-glass px-10 text-base font-medium text-apex-bright backdrop-blur-xl transition-all duration-300 hover:border-apex-accent/50 hover:shadow-[0_0_60px_oklch(70%_0.25_300_/_0.4)]"
              >
                {CTA_COPY.button}
              </button>
            </form>
          )}
        </SectionWrapper>
      </div>
    </section>
  );
}
