"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface Candle {
  o: number;
  h: number;
  l: number;
  c: number;
}

interface CandleChartProps {
  width?: number;
  height?: number;
  candles?: number;
  seed?: number;
  className?: string;
}

function generateCandles(count: number, seed: number): Candle[] {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const candles: Candle[] = [];
  let price = 100;
  for (let i = 0; i < count; i++) {
    const drift = (rand() - 0.45) * 4;
    const o = price;
    const c = +(price + drift).toFixed(2);
    const h = +(Math.max(o, c) + rand() * 2.4).toFixed(2);
    const l = +(Math.min(o, c) - rand() * 2.4).toFixed(2);
    candles.push({ o, h, l, c });
    price = c;
  }
  return candles;
}

export function CandleChart({
  width = 760,
  height = 220,
  candles = 60,
  seed = 13,
  className,
}: CandleChartProps) {
  const data = useMemo(() => generateCandles(candles, seed), [candles, seed]);
  const allLows = data.map((d) => d.l);
  const allHighs = data.map((d) => d.h);
  const min = Math.min(...allLows);
  const max = Math.max(...allHighs);
  const range = max - min || 1;

  const pad = 8;
  const innerW = width - pad * 2;
  const innerH = height - pad * 2;
  const cw = innerW / data.length;
  const bodyW = Math.max(2, cw * 0.6);

  const y = (v: number) => pad + innerH - ((v - min) / range) * innerH;

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("overflow-visible", className)}
      aria-hidden
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const yy = pad + (innerH / 4) * i;
        return (
          <line
            key={i}
            x1={pad}
            x2={width - pad}
            y1={yy}
            y2={yy}
            stroke="rgba(148, 163, 184, 0.06)"
            strokeDasharray="2 4"
          />
        );
      })}

      {data.map((c, i) => {
        const cx = pad + cw * i + cw / 2;
        const up = c.c >= c.o;
        const color = up ? "#10B981" : "#EF4444";
        const bodyY = y(Math.max(c.o, c.c));
        const bodyH = Math.max(1.4, Math.abs(y(c.c) - y(c.o)));
        return (
          <g key={i} opacity={0.95}>
            <line
              x1={cx}
              x2={cx}
              y1={y(c.h)}
              y2={y(c.l)}
              stroke={color}
              strokeWidth={1}
              opacity={0.7}
            />
            <rect
              x={cx - bodyW / 2}
              y={bodyY}
              width={bodyW}
              height={bodyH}
              fill={color}
              opacity={up ? 0.9 : 0.85}
            />
          </g>
        );
      })}
    </svg>
  );
}
