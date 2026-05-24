import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#050816",
          subtle: "#0B1120",
          panel: "#0F172A",
          elevated: "#111827",
        },
        border: {
          DEFAULT: "rgba(148, 163, 184, 0.08)",
          strong: "rgba(148, 163, 184, 0.18)",
        },
        foreground: {
          DEFAULT: "#E2E8F0",
          muted: "#94A3B8",
          subtle: "#64748B",
        },
        accent: {
          cyan: "#22D3EE",
          blue: "#3B82F6",
          green: "#10B981",
          orange: "#FB923C",
          red: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        ticker: "ticker 60s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "grid-flow": "gridFlow 20s linear infinite",
        scan: "scan 4s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" },
          "50%": { opacity: "1", boxShadow: "0 0 40px rgba(34, 211, 238, 0.6)" },
        },
        gridFlow: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
