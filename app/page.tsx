import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { WhatIf } from "@/components/sections/what-if";
import { Testimonial } from "@/components/sections/testimonial";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <WhatIf />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
