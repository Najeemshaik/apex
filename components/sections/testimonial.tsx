"use client";

import { Star } from "lucide-react";
import { GlowOrb } from "@/components/glow-orb";
import { SectionWrapper, SectionItem } from "@/components/section-wrapper";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonial() {
  return (
    <section className="relative py-[var(--section-gap)]">
      {/* Bright accent gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 30%, rgba(168,85,247,0.1) 0%, transparent 55%)",
        }}
      />
      <GlowOrb
        size="600px"
        opacity={0.05}
        className="right-1/4 top-0"
        color="#A855F7"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 md:px-10">
        <SectionWrapper>
          <h2 className="mb-16 text-center font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white">
            See How Our Clients Are Living
            <br />
            <span className="text-text-secondary">the Future of Work</span>
          </h2>
        </SectionWrapper>

        {/* Two-column testimonial grid */}
        <SectionWrapper stagger className="grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <SectionItem key={i}>
              <div className="glass-card p-6 transition-all duration-500">
                {/* Header: avatar + name + company */}
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-apex-accent/30 to-apex-glow/10 text-sm font-semibold text-apex-bright">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-tertiary">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="size-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {testimonial.quote}
                </p>
              </div>
            </SectionItem>
          ))}
        </SectionWrapper>

        {/* View All link */}
        <SectionWrapper delay={0.4} className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-white"
          >
            View All
            <span className="text-apex-bright">&rarr;</span>
          </a>
        </SectionWrapper>
      </div>
    </section>
  );
}
