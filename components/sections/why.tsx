"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  Lock,
  Network,
  Server,
  Sparkles,
  GitBranch,
  ScanLine,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    icon: Layers,
    title: "Scalable Architecture",
    body: "Horizontally scalable data and model planes engineered to absorb event volumes ranging from millions to billions per day without degradation.",
  },
  {
    icon: Zap,
    title: "Low-Latency Systems",
    body: "Sub-10ms p99 inference paths with co-located feature stores, batched scheduling, and adaptive routing for time-critical decisioning.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    body: "Hardened deployments with isolation boundaries, encryption-in-transit and at-rest, signed model artifacts, and tamper-evident audit trails.",
  },
  {
    icon: Network,
    title: "AI Orchestration",
    body: "A unified control plane for agents, models, and workflows — with policy guardrails, evaluation harnesses, and human-in-the-loop checkpoints.",
  },
  {
    icon: Server,
    title: "Resilient Infrastructure",
    body: "Multi-region active-active topologies with automatic failover, drift detection, and self-healing pipelines tested against chaos scenarios.",
  },
  {
    icon: Sparkles,
    title: "Intelligent Automation",
    body: "Long-running autonomous workflows that reason, act, and report — closing the loop between perception, decision, and execution end-to-end.",
  },
  {
    icon: GitBranch,
    title: "Deployment Pipelines",
    body: "Declarative deployment surfaces with canary releases, shadow models, automated rollback, and continuous evaluation against production traffic.",
  },
  {
    icon: ScanLine,
    title: "Observability by Default",
    body: "First-class instrumentation across inference, agents, and data — exposing token-level traces, drift indicators, and cost telemetry in real time.",
  },
];

export function Why() {
  return (
    <Section id="infrastructure" className="relative">
      <SectionHeader
        eyebrow={<Badge variant="cyan">Why RustAI · Infrastructure Principles</Badge>}
        title={
          <>
            Long-term systems thinking
            <br />
            <span className="text-gradient-cyan">over short-term shortcuts.</span>
          </>
        }
        description="RustAI is operated as a founder-led engineering organization. Every system we ship is designed to be observable, recoverable, and accountable — the way production infrastructure is supposed to be."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl border border-white/[0.06] bg-white/[0.05] overflow-hidden">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            className="group relative bg-[#0B1120] p-6 hover:bg-[#0F172A] transition-colors duration-300"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/[0.06] bg-white/[0.03] text-cyan-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.06] transition-all">
              <p.icon className="h-4 w-4" />
            </div>
            <h3 className="mt-4 font-display text-[15px] font-medium tracking-tight text-[#E2E8F0]">
              {p.title}
            </h3>
            <p className="mt-2 text-[12.5px] leading-relaxed text-[#94A3B8]">
              {p.body}
            </p>
            <div
              aria-hidden
              className="absolute inset-x-6 -bottom-px h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-cyan-400/60 to-transparent"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
