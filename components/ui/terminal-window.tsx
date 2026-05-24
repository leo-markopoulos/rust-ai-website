import { cn } from "@/lib/utils";

interface TerminalWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  status?: "live" | "idle" | "error";
  ticker?: string;
}

export function TerminalWindow({
  title = "rustai://terminal",
  status = "live",
  ticker,
  className,
  children,
  ...props
}: TerminalWindowProps) {
  const statusDot = {
    live: "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]",
    idle: "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]",
    error: "bg-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.7)]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0B1120]/80 backdrop-blur-xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748B]">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {ticker && (
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] hidden sm:inline">
              {ticker}
            </span>
          )}
          <span className={cn("inline-block h-1.5 w-1.5 rounded-full", statusDot[status])} />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8]">
            {status}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}
