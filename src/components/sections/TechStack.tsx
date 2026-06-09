"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechLogo } from "@/components/ui/TechLogo";
import { TECH_STACK } from "@/lib/constants";
import { staggerFast, fadeInUp } from "@/lib/animations";

export function TechStack() {
  return (
    <section id="technology" className="relative section-padding overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-20" />

      <div className="container-custom relative">
        <SectionHeading
          label="Technology"
          title="Powered by Modern Stack"
          subtitle="We leverage industry-leading technologies to build robust, scalable, and future-proof solutions."
        />

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        >
          {TECH_STACK.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                style={{ background: `${tech.color}12` }}
              >
                <TechLogo slug={tech.slug} color={tech.color} className="h-9 w-9" />
              </div>
              <span className="text-xs font-medium text-muted transition-colors group-hover:text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
