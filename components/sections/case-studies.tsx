"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/glow-card";
import { AreaChart } from "@/components/widgets/area-chart";
import { Sparkline } from "@/components/widgets/sparkline";

const studies = [
  {
    sector: "Asset Management",
    title: "Reduced enterprise processing time by 72%",
    summary:
      "Re-architected a legacy nightly batch system into a streaming AI orchestration layer, shrinking end-to-end reconciliation windows from 4 hours to 67 minutes.",
    kpis: [
      { label: "Processing Time", value: "-72%", delta: "↓", color: "emerald" },
      { label: "Throughput", value: "1.4B/d", delta: "↑", color: "cyan" },
      { label: "Cost / Event", value: "-58%", delta: "↓", color: "emerald" },
    ],
    chartSeed: 14,
    accent: "cyan" as const,
  },
  {
    sector: "Logistics &amp; Operations",
    title: "Automated millions of workflow events daily",
    summary:
      "Deployed an autonomous agent fleet that triages, escalates, and resolves operational events at scale — eliminating 84% of manual ticket handling.",
    kpis: [
      { label: "Events / Day", value: "118M+", delta: "↑", color: "cyan" },
      { label: "Manual Handoffs", value: "-84%", delta: "↓", color: "emerald" },
      { label: "SLA Compliance", value: "99.99%", delta: "↑", color: "emerald" },
    ],
    chartSeed: 27,
    accent: "blue" as const,
  },
  {
    sector: "Capital Markets",
    title: "Improved predictive accuracy by 41%",
    summary:
      "Replaced classical risk forecasting models with an ensemble of calibrated learners and real-time feature pipelines — lifting directional accuracy and Sharpe by step changes.",
    kpis: [
      { label: "Accuracy Lift", value: "+41%", delta: "↑", color: "emerald" },
      { label: "Sharpe Ratio", value: "2.18", delta: "↑", color: "cyan" },
      { label: "Drift Events", value: "-67%", delta: "↓", color: "emerald" },
    ],
    chartSeed: 52,
    accent: "green" as const,
  },
  {
    sector: "Enterprise SaaS",
    title: "Reduced infrastructure overhead by 38%",
    summary:
      "Consolidated a fragmented ML stack onto the RustAI orchestrator — collapsing 14 microservices into a unified runtime with adaptive scheduling.",
    kpis: [
      { label: "Infra Cost", value: "-38%", delta: "↓", color: "emerald" },
      { label: "Services", value: "14 → 1", delta: "↓", color: "cyan" },
      { label: "Deploy Time", value: "-92%", delta: "↓", color: "emerald" },
    ],
    chartSeed: 73,
    accent: "orange" as const,
  },
];

export function CaseStudies() {
  return (
    <Section id="case-studies" className="relative">
      <SectionHeader
        eyebrow={<Badge variant="cyan">Case Studies · Production Outcomes</Badge>}
        title={
          <>
            Measurable impact, deployed
            <br />
            <span className="text-gradient-cyan">in production environments.</span>
          </>
        }
        description="Selected engagements from RustAI's portfolio. All numbers reflect measured outcomes over a minimum of six months in live operations."
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {studies.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
          >
            <CaseStudyCard {...s} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function CaseStudyCard({
  sector,
  title,
  summary,
  kpis,
  chartSeed,
  accent,
}: {
  sector: string;
  title: string;
  summary: string;
  kpis: { label: string; value: string; delta: string; color: string }[];
  chartSeed: number;
  accent: "cyan" | "blue" | "green" | "orange";
}) {
  const accentColor = {
    cyan: "#22D3EE",
    blue: "#3B82F6",
    green: "#10B981",
    orange: "#FB923C",
  };

  return (
    <GlowCard accent={accent} className="h-full">
      <div className="flex h-full flex-col p-6">
        <div className="flex items-center justify-between">
          <div
            className="font-mono text-[10px] uppercase tracking-[0.22em]"
            style={{ color: accentColor[accent] }}
          >
            {sector}
          </div>
          <Sparkline seed={chartSeed} width={80} height={28} color={accentColor[accent]} />
        </div>

        <h3
          className="mt-5 font-display text-xl md:text-2xl font-medium tracking-tight text-[#E2E8F0] leading-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="mt-3 text-[13.5px] leading-relaxed text-[#94A3B8]">
          {summary}
        </p>

        <div className="mt-6 rounded-lg border border-white/[0.05] bg-white/[0.02] overflow-hidden">
          <div className="px-4 py-3 border-b border-white/[0.04] flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#64748B]">
              Performance · 12 month trend
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-emerald-300">
              ▲ trending up
            </span>
          </div>
          <div className="px-2">
            <AreaChart
              width={520}
              height={100}
              points={48}
              seed={chartSeed}
              color={accentColor[accent]}
              showAxis={false}
            />
          </div>
          <div className="grid grid-cols-3 gap-px bg-white/[0.04]">
            {kpis.map((k) => (
              <div key={k.label} className="bg-[#0B1120] px-4 py-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#64748B]">
                  {k.label}
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="font-display text-base font-medium text-[#E2E8F0] tabular-nums">
                    {k.value}
                  </span>
                  {k.delta === "↑" ? (
                    <TrendingUp className="h-3 w-3 text-emerald-300" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-emerald-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/[0.04]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] group-hover:text-cyan-300 transition-colors">
            Read full case study
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[#64748B] group-hover:text-cyan-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </GlowCard>
  );
}
