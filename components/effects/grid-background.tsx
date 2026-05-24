import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  variant?: "default" | "fine" | "dots";
  fade?: "radial" | "vertical" | "horizontal" | "none";
}

export function GridBackground({
  className,
  variant = "default",
  fade = "radial",
}: GridBackgroundProps) {
  const variants = {
    default: "grid-bg",
    fine: "grid-bg-fine",
    dots: "dot-bg",
  };

  const fades = {
    radial: "mask-radial",
    vertical: "mask-fade-vertical",
    horizontal: "mask-fade-horizontal",
    none: "",
  };

  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 pointer-events-none",
        variants[variant],
        fades[fade],
        className,
      )}
    />
  );
}
