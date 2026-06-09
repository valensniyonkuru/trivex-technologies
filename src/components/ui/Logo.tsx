import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/trivex-logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}

const sizeClasses = {
  sm: "h-8 w-8 sm:h-9 sm:w-9",
  md: "h-10 w-10",
  lg: "h-20 w-20 sm:h-24 sm:w-24",
};

const sizePixels = {
  sm: { width: 36, height: 36 },
  md: { width: 40, height: 40 },
  lg: { width: 96, height: 96 },
};

export function Logo({ size = "md", className, priority = false }: LogoProps) {
  const { width, height } = sizePixels[size];

  return (
    <Image
      src={LOGO_SRC}
      alt="TRIVEX Technologies logo"
      width={width}
      height={height}
      priority={priority}
      className={cn(
        "shrink-0 rounded-full object-cover transition-transform",
        sizeClasses[size],
        className
      )}
    />
  );
}
