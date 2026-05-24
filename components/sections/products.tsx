"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LineChart, TrendingUp, Gamepad2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { CandleChart } from "@/components/widgets/candle-chart";

const products = [
  {
    title: "Stock Simulator Game",
    tag: "Live · Free to play",
    description:
      "A browser-based trading simulator that lets you practice buying and selling against realistic price action — no real money, no signup, just the mechanics of the market.",
    highlights: [
      "Realistic candlestick price action",
      "Portfolio tracking and P&L",
      "Runs entirely in the browser",
    ],
    href: "https://leo-markopoulos.github.io/stock-simulator-game/",
    accent: "cyan" as const,
  },
];

export function Products() {
  return (
    <Section id="products" className="relative">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <SectionHeader
        eyebrow={<Badge variant="cyan">Products</Badge>}
        title={
          <>
            Things we&apos;ve built,
            <br />
            <span className="text-gradient-cyan">free for you to try.</span>
          </>
        }
        description="Alongside client work, we ship small standalone products. They're a way to share what we're learning — and for you to get a feel for what we make."
        align="left"
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-4">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="lg:col-span-5"
          >
            <GlowCard accent={p.accent}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-7 p-6 md:p-10 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                      <LineChart className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300/90 inline-flex items-center gap-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl md:text-3xl font-medium tracking-tight text-[#E2E8F0] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-[#94A3B8] max-w-xl">
                    {p.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {p.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                        <span className="text-[13.5px] text-[#94A3B8]">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary" size="md">
                        <Gamepad2 className="h-3.5 w-3.5" />
                        Play the simulator
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" size="md">
                        <TrendingUp className="h-3.5 w-3.5" />
                        View live demo
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="md:col-span-5 relative border-t md:border-t-0 md:border-l border-white/[0.06] p-6 md:p-8 bg-gradient-to-br from-cyan-400/[0.03] to-transparent">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                    Preview
                  </div>
                  <div className="mt-3 rounded-lg border border-white/[0.06] bg-[#070B14] p-4">
                    <CandleChart
                      width={360}
                      height={180}
                      candles={28}
                      seed={42}
                      className="w-full h-auto"
                    />
                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#64748B] uppercase tracking-[0.18em]">
                        RUST/USD
                      </span>
                      <span className="text-emerald-300 tabular-nums">
                        +2.41%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
