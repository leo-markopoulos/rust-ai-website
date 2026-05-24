import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
    ...options,
  }).format(value);
}

export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}

export function generateSeries(length: number, seed: number, options?: {
  base?: number;
  amplitude?: number;
  trend?: number;
  noise?: number;
}): number[] {
  const { base = 100, amplitude = 20, trend = 0.2, noise = 4 } = options ?? {};
  const values: number[] = [];
  let s = seed;
  const random = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 0; i < length; i++) {
    const wave = Math.sin(i / 6 + seed) * amplitude;
    const drift = i * trend;
    const jitter = (random() - 0.5) * noise * 2;
    values.push(+(base + wave + drift + jitter).toFixed(2));
  }
  return values;
}
