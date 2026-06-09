"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { WHY_TRIVEX } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function WhyTrivex() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="glow-orb top-1/2 left-0 h-96 w-96 -translate-y-1/2 bg-primary/8" />

      <div className="container-custom relative">
        <SectionHeading
          label="Why TRIVEX"
          title="The Competitive Edge You Need"
          subtitle="We combine deep technical expertise with strategic vision to deliver outcomes that matter."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_TRIVEX.map(({ title, description, icon: Icon }) => (
            <motion.div key={title} variants={fadeInUp}>
              <GlassCard className="group h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-transparent transition-all group-hover:from-primary/30 group-hover:to-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
