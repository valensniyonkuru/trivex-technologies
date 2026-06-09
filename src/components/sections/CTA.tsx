"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 p-12 text-center md:p-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
          <motion.div
            className="absolute inset-0 opacity-50"
            animate={{
              background: [
                "radial-gradient(circle at 30% 50%, rgba(0,123,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 50%, rgba(0,217,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 50%, rgba(0,123,255,0.2) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          <div className="relative">
            <motion.div
              className="mx-auto mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent"
              animate={{ width: ["4rem", "6rem", "4rem"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Ready to Build the{" "}
              <span className="gradient-text">Future?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted md:text-lg">
              Let&apos;s transform your vision into reality. Partner with TRIVEX
              and unlock unlimited growth potential.
            </p>
            <div className="mt-10">
              <Button href="#contact" variant="primary" className="text-base px-10 py-4">
                Start Your Project
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
