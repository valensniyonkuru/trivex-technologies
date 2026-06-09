"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SHOWCASE_PROJECTS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const DEVICE_ICONS = [Monitor, Tablet, Smartphone, Monitor];

export function Showcase() {
  return (
    <section id="showcase" className="relative section-padding overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-20" />
      <div className="glow-orb top-0 right-1/4 h-96 w-96 bg-accent/8" />

      <div className="container-custom relative">
        <SectionHeading
          label="Showcase"
          title="Projects That Define Excellence"
          subtitle="Explore our portfolio of transformative digital solutions across industries."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {SHOWCASE_PROJECTS.map((project, i) => {
            const DeviceIcon = DEVICE_ICONS[i % DEVICE_ICONS.length];
            return (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-accent/20 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className={`relative h-52 bg-gradient-to-br ${project.gradient} p-6`}>
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="relative flex h-full items-center justify-center">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="rounded-xl border border-white/10 bg-background/80 p-4 shadow-2xl backdrop-blur-sm">
                        <DeviceIcon className="h-16 w-16 text-accent/60" />
                        <div className="mt-3 space-y-2">
                          <div className="h-2 w-32 rounded bg-primary/30" />
                          <div className="h-2 w-24 rounded bg-accent/20" />
                          <div className="h-2 w-28 rounded bg-primary/15" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
