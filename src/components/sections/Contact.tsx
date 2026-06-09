"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SITE, SERVICE_OPTIONS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="glow-orb top-1/4 right-0 h-96 w-96 bg-accent/8" />

      <div className="container-custom relative">
        <SectionHeading
          label="Contact"
          title="Let's Start a Conversation"
          subtitle="Tell us about your project and we'll get back to you within 24 hours."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <Mail className="mb-3 h-6 w-6 text-accent" />
              <h4 className="font-semibold">Email Us</h4>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1 text-sm text-muted transition-colors hover:text-accent"
              >
                {SITE.email}
              </a>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <MapPin className="mb-3 h-6 w-6 text-accent" />
              <h4 className="font-semibold">Global Reach</h4>
              <p className="mt-1 text-sm text-muted">
                Serving clients worldwide with 24/7 support and dedicated teams.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-6">
              <p className="text-sm font-medium gradient-text">{SITE.slogan}</p>
              <p className="mt-2 text-sm text-muted">
                Start with vision, build with excellence, grow through expansion.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-muted">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-muted">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="mt-6">
              <Button type="submit" variant="primary" showArrow={false} className="w-full sm:w-auto">
                {submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
