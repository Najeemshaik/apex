"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
      {/* Bright accent gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)",
        }}
      />
      <GlowOrb
        size="1000px"
        opacity={0.15}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
        <SectionWrapper>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-white">
            {CTA_COPY.headline}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
            {CTA_COPY.subhead}
          </p>

          {submitted ? (
            <div className="mt-12">
              <p className="text-xl font-medium text-apex-bright">
                {CTA_COPY.successMessage}
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
              >
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 flex-1 rounded-full border border-white/[0.1] bg-white/[0.04] px-6 text-sm text-white backdrop-blur-xl transition-all duration-300 placeholder:text-text-tertiary focus:border-apex-accent/40 focus:shadow-[0_0_30px_rgba(124,58,237,0.15)] focus:ring-2 focus:ring-apex-accent/20 focus:outline-none sm:max-w-sm"
                />
                <button type="submit" className="btn-primary group">
                  {CTA_COPY.primaryCta}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-4">
                <a href="#" className="btn-secondary group text-sm">
                  {CTA_COPY.secondaryCta}
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </>
          )}
        </SectionWrapper>
      </div>
    </section>
  );
}
