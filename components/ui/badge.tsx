import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "cyan" | "green" | "orange" | "outline";
  pulse?: boolean;
}

export function Badge({
  className,
  variant = "default",
  pulse = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-white/[0.04] text-[#94A3B8] border-white/[0.08]",
    cyan: "bg-cyan-400/[0.08] text-cyan-300 border-cyan-400/20",
    green: "bg-emerald-400/[0.08] text-emerald-300 border-emerald-400/20",
    orange: "bg-orange-400/[0.08] text-orange-300 border-orange-400/20",
    outline: "bg-transparent text-[#94A3B8] border-white/[0.12]",
  };

  const dotColor = {
    default: "bg-slate-400",
    cyan: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]",
    green: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]",
    orange: "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]",
    outline: "bg-slate-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-mono uppercase tracking-[0.16em]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", dotColor[variant])} />
          <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dotColor[variant])} />
        </span>
      )}
      {children}
    </div>
  );
}
