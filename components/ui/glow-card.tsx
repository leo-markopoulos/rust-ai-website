"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: "cyan" | "blue" | "green" | "orange";
  interactive?: boolean;
}

const accentRgb = {
  cyan: "34, 211, 238",
  blue: "59, 130, 246",
  green: "16, 185, 129",
  orange: "251, 146, 60",
};

export function GlowCard({
  className,
  accent = "cyan",
  interactive = true,
  children,
  ...props
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const card = ref.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-transparent transition-all duration-500",
        interactive && "hover:border-white/[0.14]",
        className,
      )}
      style={
        {
          "--accent-rgb": accentRgb[accent],
        } as React.CSSProperties
      }
      {...props}
    >
      {interactive && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx) var(--my), rgba(var(--accent-rgb), 0.12), transparent 40%)",
          }}
        />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(var(--accent-rgb), 0.3), transparent 40%, transparent 60%, rgba(var(--accent-rgb), 0.15))",
          maskImage:
            "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          WebkitMaskImage:
            "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
