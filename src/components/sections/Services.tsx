"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ServiceIllustration } from "@/components/illustrations/ServiceIllustration";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Services() {
  return (
    <section id="services" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="glow-orb bottom-0 left-1/3 h-80 w-80 bg-accent/10" />

      <div className="container-custom relative">
        <SectionHeading
          label="Services"
          title="Solutions That Scale With You"
          subtitle="From concept to cloud, we deliver end-to-end technology services engineered for excellence."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <GlassCard className="group h-full">
                <div className="mb-5 transition-transform duration-500 group-hover:scale-110">
                  <ServiceIllustration type={service.illustration} />
                </div>
                <h3 className="text-lg font-bold transition-colors group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
