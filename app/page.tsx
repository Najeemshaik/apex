import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Architecture } from "@/components/sections/architecture";
import { WhyChoose } from "@/components/sections/why-choose";

import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <WhyChoose />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
