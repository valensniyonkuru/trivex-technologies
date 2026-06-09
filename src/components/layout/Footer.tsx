"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Share2, Globe, MessageCircle, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const SOCIALS = [
  { icon: Share2, href: "#", label: "Social" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Community" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background">
      <div className="glow-orb -top-40 left-1/4 h-80 w-80 bg-primary/10" />
      <div className="section-padding pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container-custom grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Logo size="md" />
              <span className="text-lg font-bold tracking-wider">{SITE.brand}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {SITE.philosophy}
            </p>
            <p className="mt-3 text-sm font-medium gradient-text">{SITE.slogan}</p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Connect
            </h4>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-muted transition-all hover:border-accent/40 hover:text-accent hover:bg-white/5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">
                {SITE.email}
              </a>
            </p>
          </motion.div>
        </motion.div>

        <div className="container-custom mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-muted">
            &copy; 2026 {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm font-medium gradient-text">{SITE.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
