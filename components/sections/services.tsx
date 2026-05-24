"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Workflow,
  LineChart,
  Network,
  Sparkles,
  Layers,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/glow-card";

const services = [
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "End-to-end intelligent automation pipelines that orchestrate workflows across enterprise systems with deterministic execution and observability.",
    accent: "cyan" as const,
    tag: "Operations",
  },
  {
    icon: Brain,
    title: "Custom LLM Systems",
    description:
      "Privately-tuned language models with retrieval, tool-use, and evaluation harnesses purpose-built for your domain and compliance posture.",
    accent: "blue" as const,
    tag: "Models",
  },
  {
    icon: Bot,
    title: "Enterprise AI Agents",
    description:
      "Long-running autonomous agents with policy guardrails, tool integrations, and human-in-the-loop checkpoints designed for production workloads.",
    accent: "cyan" as const,
    tag: "Agents",
  },
  {
    icon: LineChart,
    title: "Quantitative Analytics",
    description:
      "Time-series modeling, statistical signal generation, and risk analytics frameworks engineered to institutional-grade reliability standards.",
    accent: "green" as const,
    tag: "Analytics",
  },
  {
    icon: Cpu,
    title: "Trading Infrastructure",
    description:
      "Low-latency execution pipelines, market data ingestion, and signal-to-order systems engineered for microsecond-grade responsiveness.",
    accent: "orange" as const,
    tag: "Markets",
  },
  {
    icon: Sparkles,
    title: "Predictive Intelligence",
    description:
      "Forecasting and classification systems leveraging multi-modal feature stores, calibrated ensembles, and continuous re-training loops.",
    accent: "blue" as const,
    tag: "Forecasting",
  },
  {
    icon: Network,
    title: "Workflow Orchestration",
    description:
      "Resilient orchestration of AI workloads across multi-region environments with adaptive scheduling, retries, and SLA enforcement.",
    accent: "cyan" as const,
    tag: "Orchestration",
  },
  {
    icon: Layers,
    title: "AI Infrastructure Consulting",
    description:
      "Founder-led engagements that architect, deploy, and operate enterprise AI platforms — from data foundations to production governance.",
    accent: "green" as const,
    tag: "Advisory",
  },
];

export function Services() {
  return (
    <Section id="solutions" className="relative">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <SectionHeader
        eyebrow={<Badge variant="cyan">Solutions · 08 Lines of Engagement</Badge>}
        title={
          <>
            Production-grade AI systems,
            <br />
            <span className="text-gradient-cyan">engineered for institutional scale.</span>
          </>
        }
        description="RustAI builds, deploys, and operates the infrastructure underneath modern AI organizations — from data foundations and model runtimes to autonomous agents and decisioning systems."
        align="left"
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
          >
            <ServiceCard {...s} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  accent,
  tag,
}: {
  icon: typeof Bot;
  title: string;
  description: string;
  accent: "cyan" | "blue" | "green" | "orange";
  tag: string;
}) {
  const iconColor = {
    cyan: "text-cyan-300 bg-cyan-400/[0.08] border-cyan-400/20",
    blue: "text-blue-300 bg-blue-400/[0.08] border-blue-400/20",
    green: "text-emerald-300 bg-emerald-400/[0.08] border-emerald-400/20",
    orange: "text-orange-300 bg-orange-400/[0.08] border-orange-400/20",
  };

  return (
    <GlowCard accent={accent} className="h-full">
      <div className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-lg border ${iconColor[accent]}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B]">
            {tag}
          </span>
        </div>

        <h3 className="mt-5 font-display text-[17px] font-medium tracking-tight text-[#E2E8F0]">
          {title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-[#94A3B8]">
          {description}
        </p>

        <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/[0.04]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] group-hover:text-cyan-300 transition-colors">
            Read brief
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[#64748B] group-hover:text-cyan-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </GlowCard>
  );
}
