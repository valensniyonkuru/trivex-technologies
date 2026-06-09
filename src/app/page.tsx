import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { WhyTrivex } from "@/components/sections/WhyTrivex";
import { Process } from "@/components/sections/Process";
import { Showcase } from "@/components/sections/Showcase";
import { Statistics } from "@/components/sections/Statistics";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <WhyTrivex />
      <Process />
      <Showcase />
      <Statistics />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
