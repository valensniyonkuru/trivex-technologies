import { cn } from "@/lib/utils";
import { DARK_THEME_COLOR_OVERRIDES, TECH_ICONS } from "@/lib/tech-logos";

interface TechLogoProps {
  slug: string;
  color?: string;
  className?: string;
}

export function TechLogo({ slug, color, className }: TechLogoProps) {
  const icon = TECH_ICONS[slug];
  if (!icon) return null;

  const fill =
    color ??
    DARK_THEME_COLOR_OVERRIDES[slug] ??
    `#${icon.hex}`;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={icon.title}
      className={cn("h-8 w-8", className)}
      fill={fill}
    >
      <path d={icon.path} />
    </svg>
  );
}
