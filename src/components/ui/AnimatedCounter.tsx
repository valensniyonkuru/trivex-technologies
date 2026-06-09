"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  label,
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const { ref, formatted } = useCountUp({ end, decimals });

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        <span className="gradient-text">
          {formatted}
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-widest text-muted">
        {label}
      </p>
    </div>
  );
}
