"use client";

import { useMemo } from "react";
import { generateSeries, cn } from "@/lib/utils";

interface AreaChartProps {
  width?: number;
  height?: number;
  points?: number;
  seed?: number;
  color?: string;
  className?: string;
  showAxis?: boolean;
}

export function AreaChart({
  width = 600,
  height = 200,
  points = 80,
  seed = 21,
  color = "#22D3EE",
  className,
  showAxis = true,
}: AreaChartProps) {
  const data = useMemo(
    () => generateSeries(points, seed, { base: 60, amplitude: 18, trend: 0.7, noise: 5 }),
    [points, seed],
  );

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pad = showAxis ? { l: 32, r: 12, t: 14, b: 22 } : { l: 0, r: 0, t: 0, b: 0 };
  const innerW = width - pad.l - pad.r;
  const innerH = height - pad.t - pad.b;
  const stepX = innerW / (data.length - 1);

  const pts = data.map((v, i) => {
    const x = pad.l + i * stepX;
    const y = pad.t + innerH - ((v - min) / range) * innerH;
    return [x, y] as const;
  });

  const linePath = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L ${pts[pts.length - 1][0]} ${pad.t + innerH} L ${pts[0][0]} ${pad.t + innerH} Z`;

  const gradId = `area-${seed}`;
  const lineId = `line-${seed}`;

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("overflow-visible", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.35} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
        <linearGradient id={lineId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity={0.7} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>

      {showAxis && (
        <>
          {Array.from({ length: 5 }).map((_, i) => {
            const yy = pad.t + (innerH / 4) * i;
            const val = max - (range / 4) * i;
            return (
              <g key={i}>
                <line
                  x1={pad.l}
                  x2={width - pad.r}
                  y1={yy}
                  y2={yy}
                  stroke="rgba(148, 163, 184, 0.06)"
                  strokeDasharray="3 4"
                />
                <text
                  x={pad.l - 6}
                  y={yy + 3}
                  textAnchor="end"
                  fontSize="9"
                  fill="rgba(100, 116, 139, 0.7)"
                  fontFamily="var(--font-plex-mono), monospace"
                >
                  {val.toFixed(0)}
                </text>
              </g>
            );
          })}
        </>
      )}

      <path d={areaPath} fill={`url(#${gradId})`} />
      <path d={linePath} fill="none" stroke={`url(#${lineId})`} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />

      <circle
        cx={pts[pts.length - 1][0]}
        cy={pts[pts.length - 1][1]}
        r={3.5}
        fill={color}
      />
      <circle
        cx={pts[pts.length - 1][0]}
        cy={pts[pts.length - 1][1]}
        r={8}
        fill={color}
        opacity={0.18}
        className="animate-pulse-glow"
      />
    </svg>
  );
}
