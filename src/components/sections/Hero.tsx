"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Code2, Cloud, Brain, Cpu, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { SITE } from "@/lib/constants";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-32 w-32 animate-pulse rounded-full bg-primary/20" />
      </div>
    ),
  }
);

const FLOATING_ICONS = [
  { icon: Code2, position: "top-[15%] left-[10%]", delay: 0 },
  { icon: Cloud, position: "top-[25%] right-[15%]", delay: 0.5 },
  { icon: Brain, position: "bottom-[30%] left-[8%]", delay: 1 },
  { icon: Cpu, position: "bottom-[20%] right-[10%]", delay: 1.5 },
  { icon: Database, position: "top-[45%] right-[5%]", delay: 2 },
  { icon: Globe, position: "bottom-[45%] left-[15%]", delay: 2.5 },
];

export function Hero() {
  const parallax = useMouseParallax(0.015);

  return (
    <section className="relative min-h-screen overflow-hidden pt-8">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="glow-orb top-1/4 -left-32 h-96 w-96 bg-primary/20" />
      <div className="glow-orb bottom-1/4 -right-32 h-96 w-96 bg-accent/15" />

      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0,123,255,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(0,217,255,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0,123,255,0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative flex min-h-[calc(100vh-6rem)] flex-col items-center gap-12 px-6 lg:flex-row lg:gap-8">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {SITE.slogan}
            </span>
          </motion.div>

          <h1 className="text-2xl font-bold leading-[1.1] tracking-tight md:text-3xl lg:text-3xl">
            <TextReveal
              text="Engineering the Future with"
              delay={2.5}
              className="text-foreground"
            />
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-text"
            >
              Software, Cloud & AI
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg lg:mx-0 mx-auto"
          >
            {SITE.brand} builds intelligent digital solutions that empower businesses
            to innovate, scale, and grow without limits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button href="#contact" variant="primary">
              Get Started
            </Button>
            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative flex-1 w-full max-w-lg lg:max-w-none mt-12 "
          style={{ x: parallax.x, y: parallax.y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-lg">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative h-full w-full">
              <HeroScene />
            </div>

            {FLOATING_ICONS.map(({ icon: Icon, position, delay }, i) => (
              <motion.div
                key={i}
                className={`absolute ${position} flex h-10 w-10 items-center justify-center rounded-xl glass border border-white/10`}
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
              >
                <Icon className="h-5 w-5 text-accent" />
              </motion.div>
            ))}

            <motion.div
              className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
