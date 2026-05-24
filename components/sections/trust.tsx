"use client";

import { motion } from "framer-motion";
import { Lock, FileBadge, ShieldCheck, GitBranch } from "lucide-react";
import { Section } from "@/components/ui/section";

const integrations = [
  { name: "AWS", glyph: "AWS" },
  { name: "Azure", glyph: "AZ" },
  { name: "OpenAI", glyph: "OAI" },
  { name: "NVIDIA", glyph: "NV" },
  { name: "Snowflake", glyph: "SNW" },
  { name: "Databricks", glyph: "DBX" },
  { name: "Kubernetes", glyph: "K8S" },
  { name: "Anthropic", glyph: "ANT" },
];

const badges = [
  { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "SOC 2 Type II" },
  { icon: <Lock className="h-3.5 w-3.5" />, label: "ISO 27001" },
  { icon: <FileBadge className="h-3.5 w-3.5" />, label: "HIPAA Ready" },
  { icon: <GitBranch className="h-3.5 w-3.5" />, label: "GDPR Compliant" },
];

export function Trust() {
  return (
    <Section id="trust" className="py-16 md:py-20">
      <div className="text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#64748B]">
          Trusted infrastructure · Enterprise-grade integrations
        </div>
      </div>

      <div className="mt-10 grid grid-cols-4 md:grid-cols-8 gap-px rounded-xl border border-white/[0.06] bg-white/[0.05] overflow-hidden">
        {integrations.map((it, i) => (
          <motion.div
            key={it.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group relative bg-[#0B1120] hover:bg-[#0F172A] transition-colors duration-300"
          >
            <div className="flex h-20 flex-col items-center justify-center px-3">
              <div className="font-display text-base font-medium tracking-tight text-[#94A3B8] group-hover:text-cyan-300 transition-colors">
                {it.glyph}
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                {it.name}
              </div>
            </div>
            <div
              aria-hidden
              className="absolute inset-x-3 -bottom-px h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-gradient-to-r from-cyan-400/60 to-transparent"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {badges.map((b) => (
          <div
            key={b.label}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 backdrop-blur"
          >
            <span className="text-cyan-300">{b.icon}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8]">
              {b.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
