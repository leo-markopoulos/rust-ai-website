"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Server,
  Shield,
  Workflow,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { AreaChart } from "@/components/widgets/area-chart";
import { Sparkline } from "@/components/widgets/sparkline";

export function Platform() {
  return (
    <Section id="platform" className="relative">
      <SectionHeader
        eyebrow={
          <Badge variant="cyan" pulse>
            Platform · RustAI Intelligence Grid
          </Badge>
        }
        title={
          <>
            One operational surface for
            <br />
            <span className="text-gradient-cyan">every AI workload you ship.</span>
          </>
        }
        description="The RustAI command center unifies orchestration, observability, model governance, and decision systems into a single institutional-grade control plane — built for organizations operating AI at scale."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7 }}
        className="relative mt-14"
      >
        <div
          aria-hidden
          className="absolute -inset-x-16 -inset-y-8 -z-10 rounded-3xl bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent blur-2xl"
        />

        <TerminalWindow
          title="rustai://platform/orchestrator"
          status="live"
          ticker="ENV: prod · region: multi · obs.streaming"
        >
          <div className="grid grid-cols-12 gap-px bg-white/[0.05]">
            <SidebarNav />
            <MainCharts />
            <RightRail />
          </div>

          <div className="grid grid-cols-12 gap-px bg-white/[0.05]">
            <PipelinePanel />
            <RiskPanel />
            <AgentsPanel />
          </div>
        </TerminalWindow>
      </motion.div>
    </Section>
  );
}

function SidebarNav() {
  const items = [
    { icon: Workflow, label: "Orchestrator", active: true, count: "412" },
    { icon: Cpu, label: "Model Runtime", count: "94" },
    { icon: Database, label: "Feature Store", count: "1.2k" },
    { icon: Activity, label: "Observability", count: "live" },
    { icon: Layers, label: "Agents", count: "8,412" },
    { icon: GitBranch, label: "Workflows", count: "284" },
    { icon: Server, label: "Infrastructure", count: "248" },
    { icon: Shield, label: "Governance", count: "OK" },
  ];

  return (
    <div className="col-span-12 lg:col-span-2 bg-[#0B1120] p-4">
      <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#64748B] mb-3">
        Control Plane
      </div>
      <ul className="space-y-0.5">
        {items.map((item, i) => (
          <li key={item.label}>
            <button
              className={`group relative flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left transition-colors ${
                item.active
                  ? "bg-cyan-400/[0.06] text-cyan-300"
                  : "text-[#94A3B8] hover:bg-white/[0.03] hover:text-[#E2E8F0]"
              }`}
            >
              {item.active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-0.5 rounded-r bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
              )}
              <span className="flex items-center gap-2">
                <item.icon className="h-3.5 w-3.5" />
                <span className="text-[12px]">{item.label}</span>
              </span>
              <span className="font-mono text-[10px] text-[#64748B]">{item.count}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MainCharts() {
  return (
    <div className="col-span-12 lg:col-span-7 bg-[#0B1120] p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
            Cluster Inference Throughput
          </div>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-display text-2xl md:text-3xl font-medium text-[#E2E8F0] tabular-nums">
              412,084
            </span>
            <span className="font-mono text-[11px] text-[#64748B]">req/s</span>
            <span className="font-mono text-[11px] text-emerald-300">+5.8% / 1h</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {["1H", "4H", "1D", "1W", "1M"].map((t, i) => (
            <span
              key={t}
              className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
                i === 2 ? "text-cyan-300" : "text-[#64748B]"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <AreaChart width={640} height={180} points={70} seed={71} color="#22D3EE" />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { l: "Tokens/s", v: "1.42M", d: "+12.4%", c: "emerald" },
          { l: "Active Models", v: "94", d: "+3", c: "emerald" },
          { l: "Error Rate", v: "0.014%", d: "-0.4%", c: "emerald" },
        ].map((m) => (
          <div
            key={m.l}
            className="rounded-md border border-white/[0.05] bg-white/[0.02] p-3"
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#64748B]">
              {m.l}
            </div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="font-display text-base font-medium text-[#E2E8F0] tabular-nums">
                {m.v}
              </span>
              <span className="font-mono text-[10px] text-emerald-300 tabular-nums">
                {m.d}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RightRail() {
  return (
    <div className="col-span-12 lg:col-span-3 grid grid-rows-3 gap-px bg-white/[0.05]">
      <RailStat label="GPU Utilization" v="78.4%" series={5} positive />
      <RailStat label="Memory Pressure" v="42.1%" series={11} positive />
      <RailStat label="Queue Depth" v="312" series={29} positive />
    </div>
  );
}

function RailStat({
  label,
  v,
  series,
  positive,
}: {
  label: string;
  v: string;
  series: number;
  positive: boolean;
}) {
  return (
    <div className="bg-[#0B1120] p-4">
      <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#64748B]">
        {label}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-display text-lg font-medium text-[#E2E8F0] tabular-nums">
          {v}
        </span>
        <Sparkline seed={series} width={70} height={28} />
      </div>
      <div className="mt-1 font-mono text-[10px] text-emerald-300">healthy</div>
    </div>
  );
}

function PipelinePanel() {
  const pipelines = [
    { name: "ingest.market-data", status: "running", progress: 84, latency: "2.1ms" },
    { name: "feature.realtime-build", status: "running", progress: 67, latency: "4.8ms" },
    { name: "model.alpha-signal-v7", status: "running", progress: 92, latency: "8.4ms" },
    { name: "agent.workflow-orchestrate", status: "running", progress: 41, latency: "12ms" },
    { name: "decision.execution-router", status: "running", progress: 78, latency: "1.2ms" },
  ];

  return (
    <div className="col-span-12 md:col-span-7 bg-[#0B1120] p-5 border-r border-white/[0.05]">
      <div className="flex items-center justify-between mb-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
          Active Pipelines · live execution
        </div>
        <Badge variant="green" pulse>
          5 / 5 Running
        </Badge>
      </div>

      <div className="space-y-2.5">
        {pipelines.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-md border border-white/[0.04] bg-white/[0.015] px-3 py-2.5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[11px] text-[#E2E8F0]">{p.name}</span>
              </div>
              <span className="font-mono text-[10px] text-[#64748B] tabular-nums">
                {p.latency}
              </span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-white/[0.04] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${p.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.05 }}
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RiskPanel() {
  const rows = [
    { l: "Drift · 7d", v: 0.012, color: "emerald" },
    { l: "Anomaly Score", v: 0.043, color: "emerald" },
    { l: "Policy Violations", v: 0, color: "emerald" },
    { l: "Data Quality", v: 99.84, color: "emerald", suffix: "%" },
  ];

  return (
    <div className="col-span-12 md:col-span-3 bg-[#0B1120] p-5 border-r border-white/[0.05]">
      <div className="flex items-center justify-between mb-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
          Risk &amp; Governance
        </div>
        <Badge variant="green">All Clear</Badge>
      </div>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.l}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#94A3B8]">
                {r.l}
              </span>
              <span className="font-mono text-[11px] text-emerald-300 tabular-nums">
                {r.v}
                {r.suffix ?? ""}
              </span>
            </div>
            <div className="mt-1.5 h-0.5 w-full rounded-full bg-white/[0.04] overflow-hidden">
              <div
                className="h-full bg-emerald-400/70"
                style={{ width: `${Math.min(100, r.v + 12)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgentsPanel() {
  return (
    <div className="col-span-12 md:col-span-2 bg-[#0B1120] p-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B] mb-3">
        Agent Fleet
      </div>
      <div className="space-y-2">
        <div>
          <div className="font-display text-3xl font-medium text-cyan-300 tabular-nums">
            8,412
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B] mt-1">
            Active sessions
          </div>
        </div>
        <Sparkline seed={47} width={140} height={36} />
        <div className="font-mono text-[10px] text-emerald-300 tabular-nums">
          +3.4% · 24h
        </div>
      </div>
    </div>
  );
}
