"use client";

import { generateSeries } from "@/lib/utils";

interface SparklineProps {
  seed?: number;
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
  points?: number;
  className?: string;
}

export function Sparkline({
  seed = 7,
  width = 120,
  height = 36,
  color = "#22D3EE",
  fill = "rgba(34, 211, 238, 0.18)",
  points = 24,
  className,
}: SparklineProps) {
  const values = generateSeries(points, seed, { base: 50, amplitude: 14, trend: 0.6, noise: 3 });
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = width / (points - 1);
  const pts = values.map((v, i) => {
    const x = i * stepX;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return [x, y];
  });

  const linePath = pts
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(" ");

  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;

  const gradId = `spark-${seed}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={fill} />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradId})`} />
      <path d={linePath} fill="none" stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <circle
        cx={pts[pts.length - 1][0]}
        cy={pts[pts.length - 1][1]}
        r={2.4}
        fill={color}
      />
      <circle
        cx={pts[pts.length - 1][0]}
        cy={pts[pts.length - 1][1]}
        r={5}
        fill={color}
        opacity={0.2}
      />
    </svg>
  );
}
