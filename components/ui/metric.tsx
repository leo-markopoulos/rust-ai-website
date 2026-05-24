"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MetricProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  decimals?: number;
  accent?: "cyan" | "green" | "orange" | "blue";
  className?: string;
}

const accentColor = {
  cyan: "text-cyan-300",
  green: "text-emerald-300",
  orange: "text-orange-300",
  blue: "text-blue-300",
};

export function Metric({
  value,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  decimals = 0,
  accent = "cyan",
  className,
}: MetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    v.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }),
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, value, mv]);

  return (
    <div ref={ref} className={cn("group relative", className)}>
      <div className="flex items-baseline gap-1 font-display tracking-tight">
        <span className={cn("text-3xl md:text-5xl font-medium", accentColor[accent])}>
          {prefix}
          <motion.span>{rounded}</motion.span>
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-xs font-mono uppercase tracking-[0.18em] text-[#94A3B8]">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 text-xs text-[#64748B]">{sublabel}</div>
      )}
    </div>
  );
}
