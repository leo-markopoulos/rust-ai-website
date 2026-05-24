"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TickerItem {
  symbol: string;
  value: string;
  change: number;
}

const items: TickerItem[] = [
  { symbol: "MODEL-LAT", value: "8.4ms", change: -2.1 },
  { symbol: "INFER/s", value: "412K", change: +5.8 },
  { symbol: "GPU-UTIL", value: "78.4%", change: +1.2 },
  { symbol: "EVENT-Q", value: "12.8M", change: +8.4 },
  { symbol: "ACC-7D", value: "94.21%", change: +0.34 },
  { symbol: "TPS-PEAK", value: "1.2M", change: +12.6 },
  { symbol: "ORCH-NODES", value: "248", change: 0 },
  { symbol: "AGENT-RUN", value: "8,412", change: +3.4 },
  { symbol: "SLA-99.99", value: "OK", change: 0 },
  { symbol: "REGION-US", value: "OPER", change: 0 },
  { symbol: "REGION-EU", value: "OPER", change: 0 },
  { symbol: "REGION-APAC", value: "OPER", change: 0 },
  { symbol: "PIPE-DAILY", value: "118M", change: +6.2 },
  { symbol: "MODEL-VER", value: "v4.7.1", change: 0 },
];

export function Ticker({ className }: { className?: string }) {
  const loop = [...items, ...items];
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-white/[0.06] bg-[#0B1120]/60 backdrop-blur",
        "mask-fade-horizontal",
        className,
      )}
    >
      <div className="flex w-max ticker-track py-2.5">
        {loop.map((item, i) => (
          <TickerCell key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

function TickerCell({ symbol, value, change }: TickerItem) {
  const positive = change > 0;
  const negative = change < 0;
  const neutral = change === 0;

  return (
    <div className="flex items-center gap-3 px-5 border-r border-white/[0.04]">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B]">
        {symbol}
      </span>
      <span className="font-mono text-[11px] text-[#E2E8F0] tabular-nums">
        {value}
      </span>
      {!neutral && (
        <span
          className={cn(
            "inline-flex items-center gap-1 font-mono text-[10px] tabular-nums",
            positive && "text-emerald-300",
            negative && "text-rose-300",
          )}
        >
          {positive ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {positive ? "+" : ""}
          {change.toFixed(1)}%
        </span>
      )}
      {neutral && (
        <span className="font-mono text-[10px] text-[#64748B]">—</span>
      )}
    </div>
  );
}
