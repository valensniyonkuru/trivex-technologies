"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Statistics() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.05] via-transparent to-accent/[0.05]" />

      <div className="container-custom relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-8 rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm md:grid-cols-4 md:p-12"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp}>
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                decimals={"decimals" in stat ? stat.decimals : 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
