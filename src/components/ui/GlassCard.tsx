"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 md:p-8",
        hover ? "glass-card gradient-border" : "glass",
        className
      )}
    >
      {children}
    </div>
  );
}
