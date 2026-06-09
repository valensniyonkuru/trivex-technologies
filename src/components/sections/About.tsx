"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { PILLARS, TIMELINE, SITE } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const VALUES = [
  { icon: Target, title: "Mission", text: "Empower businesses with cutting-edge technology solutions that drive innovation and sustainable growth." },
  { icon: Eye, title: "Vision", text: "To be the global leader in intelligent digital transformation, setting new standards for excellence." },
  { icon: Heart, title: "Values", text: "Integrity, innovation, and impact — we deliver excellence in every line of code and every cloud deployment." },
];

export function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-30" />
      <div className="glow-orb top-0 right-0 h-96 w-96 bg-primary/10" />

      <div className="container-custom relative">
        <SectionHeading
          label="About Us"
          title="Building Tomorrow's Technology Today"
          subtitle={SITE.philosophy}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20 grid gap-6 md:grid-cols-3"
        >
          {PILLARS.map(({ title, description, icon: Icon }) => (
            <motion.div key={title} variants={fadeInUp}>
              <GlassCard className="h-full text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 grid gap-6 md:grid-cols-3"
        >
          {VALUES.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} variants={fadeInUp}>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-primary/20">
                <Icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                  <GlassCard hover={false} className="inline-block">
                    <span className="text-sm font-bold gradient-text">{item.year}</span>
                    <h4 className="mt-1 text-lg font-bold">{item.title}</h4>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </GlassCard>
                </div>

                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex h-4 w-4 items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30" />
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
