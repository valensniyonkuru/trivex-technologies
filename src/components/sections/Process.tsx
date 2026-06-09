"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GsapScrollLine } from "@/components/effects/GsapScrollLine";
import { PROCESS_STEPS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export function Process() {
  return (
    <section id="process" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-accent/[0.02]" />

      <div className="container-custom relative">
        <SectionHeading
          label="Process"
          title="From Vision to Scale"
          subtitle="Our proven methodology ensures every project delivers exceptional results on time and on budget."
        />

        <div className="relative mx-auto max-w-2xl">
          <GsapScrollLine className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center"
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="w-full rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition-all hover:border-accent/20 hover:bg-white/[0.05] md:p-8"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </motion.div>

              {i < PROCESS_STEPS.length - 1 && (
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="my-4 flex flex-col items-center"
                >
                  <div className="h-8 w-px bg-gradient-to-b from-accent/50 to-primary/20" />
                  <ChevronDown className="h-5 w-5 text-accent/50" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
