"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Zap, Activity, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Metric } from "@/components/ui/metric";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { Ticker } from "@/components/widgets/ticker";
import { CandleChart } from "@/components/widgets/candle-chart";
import { AreaChart } from "@/components/widgets/area-chart";
import { Sparkline } from "@/components/widgets/sparkline";
import { GridBackground } from "@/components/effects/grid-background";
import { AmbientOrbs } from "@/components/effects/ambient-orbs";
import { NeuralNetwork } from "@/components/effects/neural-network";
import { Scanline } from "@/components/effects/scanline";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden pt-36 md:pt-44 pb-16">
      <div className="absolute inset-0 -z-10">
        <AmbientOrbs />
        <GridBackground variant="default" fade="radial" />
        <div className="absolute inset-0 opacity-40">
          <NeuralNetwork density={50} speed={0.18} />
        </div>
      </div>

      <Scanline />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex justify-center"
        >
          <Badge variant="cyan" pulse>
            v4.7 · Quant-Grade AI Infrastructure
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
          className="mx-auto mt-7 max-w-5xl text-center font-display text-[40px] sm:text-6xl md:text-[78px] leading-[0.98] tracking-[-0.02em]"
        >
          <span className="block text-gradient">Enterprise AI Infrastructure</span>
          <span className="block mt-2">
            <span className="text-gradient-cyan">for Intelligent</span>{" "}
            <span className="text-gradient">Automation</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-center text-base md:text-lg text-[#94A3B8] leading-relaxed"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mx-auto mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button variant="primary" size="lg">
            Schedule Consultation
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="lg">
            Explore Solutions
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
          className="mx-auto mt-7 flex flex-col items-center gap-1.5"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
              Founded by
            </span>
            <span className="font-display text-[11px] font-medium tracking-tight text-cyan-300">
              {site.founder.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
              · {site.legalName}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          className="relative mt-16 md:mt-20"
        >
          <HeroDashboard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
          className="mt-12"
        >
          <Ticker />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.55 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <MetricCard
            value={99.99}
            suffix="%"
            decimals={2}
            label="Platform Uptime"
            sublabel="Rolling 365d"
            accent="green"
            icon={<ShieldCheck className="h-4 w-4" />}
          />
          <MetricCard
            value={120}
            suffix="M+"
            label="Events / day"
            sublabel="Production pipelines"
            accent="cyan"
            icon={<Activity className="h-4 w-4" />}
          />
          <MetricCard
            value={41}
            suffix="%"
            label="Predictive Lift"
            sublabel="vs. baseline models"
            accent="orange"
            icon={<Sparkles className="h-4 w-4" />}
          />
          <MetricCard
            value={10}
            prefix="<"
            suffix="ms"
            label="Edge Latency"
            sublabel="p99 inference"
            accent="blue"
            icon={<Zap className="h-4 w-4" />}
          />
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({
  value,
  prefix,
  suffix,
  label,
  sublabel,
  decimals,
  accent,
  icon,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
  accent: "cyan" | "green" | "blue" | "orange";
  icon: React.ReactNode;
}) {
  const colorMap = {
    cyan: "text-cyan-300",
    green: "text-emerald-300",
    blue: "text-blue-300",
    orange: "text-orange-300",
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-transparent p-5 backdrop-blur-sm">
      <div
        aria-hidden
        className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-30 blur-2xl"
        style={{
          background:
            accent === "cyan"
              ? "radial-gradient(circle, rgba(34,211,238,0.5), transparent 70%)"
              : accent === "green"
                ? "radial-gradient(circle, rgba(16,185,129,0.5), transparent 70%)"
                : accent === "blue"
                  ? "radial-gradient(circle, rgba(59,130,246,0.5), transparent 70%)"
                  : "radial-gradient(circle, rgba(251,146,60,0.5), transparent 70%)",
        }}
      />
      <div className="relative flex items-start justify-between">
        <div className={`flex h-7 w-7 items-center justify-center rounded-md bg-white/[0.04] border border-white/[0.06] ${colorMap[accent]}`}>
          {icon}
        </div>
        <Sparkline seed={value} width={70} height={28} />
      </div>
      <div className="mt-4">
        <Metric
          value={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          label={label}
          sublabel={sublabel}
          accent={accent}
        />
      </div>
    </div>
  );
}

function HeroDashboard() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-x-10 -inset-y-6 -z-10 rounded-3xl bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-2xl"
      />
      <TerminalWindow title="rustai://core/intelligence-grid" status="live" ticker="LIVE · IAD-1 · v4.7.1">
        <div className="grid grid-cols-12 gap-px bg-white/[0.05]">
          <div className="col-span-12 lg:col-span-8 bg-[#0B1120] p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                  Predictive Signal · RST.AI-INDEX
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-display text-3xl md:text-4xl font-medium text-[#E2E8F0] tabular-nums">
                    1,284.39
                  </span>
                  <span className="font-mono text-[12px] text-emerald-300 tabular-nums">
                    +24.18 · +1.92%
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                  Confidence
                </div>
                <div className="mt-1 font-mono text-[13px] text-cyan-300">94.21%</div>
              </div>
            </div>
            <div className="mt-4">
              <CandleChart width={760} height={200} candles={70} seed={42} />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B]">
              <span>1H</span>
              <span className="text-cyan-300">4H</span>
              <span>1D</span>
              <span>1W</span>
              <span>1M</span>
              <span className="ml-auto">orch.region: us-east-1 · iad-1</span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 grid grid-rows-3 gap-px bg-white/[0.05]">
            <PanelStat
              label="Inference Throughput"
              value="412,084"
              unit="req/s"
              series={9}
              positive
              delta="+5.8%"
            />
            <PanelStat
              label="Model Latency · p99"
              value="8.42"
              unit="ms"
              series={17}
              positive
              delta="-2.1ms"
            />
            <PanelStat
              label="Agent Orchestrations"
              value="8,412"
              unit="active"
              series={23}
              positive
              delta="+3.4%"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 bg-[#0B1120]">
          <div className="col-span-12 md:col-span-5 border-r border-white/[0.05] p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                System Health · Orchestrator
              </div>
              <Badge variant="green" pulse>Healthy</Badge>
            </div>
            <div className="space-y-1.5">
              {[
                { label: "ingestion.svc", val: 99.99 },
                { label: "model.runtime", val: 99.98 },
                { label: "vector.index", val: 99.94 },
                { label: "agent.scheduler", val: 99.99 },
                { label: "feature.store", val: 99.91 },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-[#94A3B8]">{row.label}</span>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-24 rounded-full bg-white/[0.04] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                        style={{ width: `${row.val}%` }}
                      />
                    </div>
                    <span className="tabular-nums text-emerald-300">{row.val}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                Pipeline Throughput · Last 24h
              </div>
              <div className="flex items-center gap-3 font-mono text-[10px] text-[#64748B]">
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />inference</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />training</span>
              </div>
            </div>
            <AreaChart width={620} height={140} points={64} seed={91} color="#22D3EE" showAxis={false} />
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}

function PanelStat({
  label,
  value,
  unit,
  series,
  positive,
  delta,
}: {
  label: string;
  value: string;
  unit: string;
  series: number;
  positive: boolean;
  delta: string;
}) {
  return (
    <div className="bg-[#0B1120] p-4 flex flex-col justify-between">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
        {label}
      </div>
      <div className="mt-2 flex items-end justify-between">
        <div>
          <div className="font-display text-xl md:text-2xl font-medium text-[#E2E8F0] tabular-nums">
            {value}
            <span className="ml-1 font-mono text-[11px] text-[#64748B]">{unit}</span>
          </div>
          <div className={`mt-1 font-mono text-[10px] tabular-nums ${positive ? "text-emerald-300" : "text-rose-300"}`}>
            {delta}
          </div>
        </div>
        <Sparkline seed={series} width={80} height={32} />
      </div>
    </div>
  );
}
