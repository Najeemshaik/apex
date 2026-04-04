"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { TESTIMONIAL } from "@/lib/constants";

export function Testimonial() {
  const parts = TESTIMONIAL.quote.split(TESTIMONIAL.highlightedPhrase);

  return (
    <section className="relative py-[var(--section-gap)]">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <SectionWrapper>
          <blockquote className="relative border-l-2 border-apex-accent/30 pl-10 md:pl-16">
            <span
              className="pointer-events-none absolute -left-6 -top-10 font-display text-[10rem] leading-none text-apex-accent/8 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="font-display text-2xl font-medium leading-[1.5] tracking-[-0.02em] text-text-secondary md:text-4xl md:leading-[1.4]">
              {parts[0]}
              <span className="text-glow text-white">
                {TESTIMONIAL.highlightedPhrase}
              </span>
              {parts[1]}
            </p>
            <footer className="mt-10 font-mono text-sm uppercase tracking-wider text-text-tertiary">
              — {TESTIMONIAL.attribution}
            </footer>
          </blockquote>
        </SectionWrapper>
      </div>
    </section>
  );
}
