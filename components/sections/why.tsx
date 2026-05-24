"use client";

import { motion } from "framer-motion";
import {
  Hammer,
  Eye,
  Heart,
  Compass,
  Sparkles,
  Users,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    icon: Hammer,
    title: "We build, not just pitch",
    body: "We're an early-stage company that prefers shipping things to talking about things. Every engagement ends with something real you can use.",
  },
  {
    icon: Eye,
    title: "Honest about what we are",
    body: "Rust AI was founded in 2026. We're new. We don't claim a portfolio we don't have — and we'd rather earn trust by delivering than by inflating it.",
  },
  {
    icon: Heart,
    title: "Founder-led work",
    body: "When you hire us, the person building your project is the person you talked to. No handoffs, no account managers, no surprises.",
  },
  {
    icon: Compass,
    title: "Small projects welcome",
    body: "We don't need huge contracts. A focused automation, a single AI feature, a small internal tool — these are exactly the kind of projects we're looking for.",
  },
  {
    icon: Sparkles,
    title: "Practical over impressive",
    body: "We pick tools that fit the problem, not the ones that sound good in a deck. The goal is something useful — not a tech showcase you can't maintain.",
  },
  {
    icon: Users,
    title: "Pilot-friendly pricing",
    body: "As an early-stage startup we're open to pilot projects, fixed-scope work, and partnerships that grow over time. Tell us what you're working with.",
  },
];

export function Why() {
  return (
    <Section id="why" className="relative">
      <SectionHeader
        eyebrow={<Badge variant="cyan">Why Rust AI</Badge>}
        title={
          <>
            An honest start
            <br />
            <span className="text-gradient-cyan">to a long-term partner.</span>
          </>
        }
        description="Rust AI is a new company. That's a feature, not a flaw — it means we have time for your project, real motivation to do it well, and no legacy baggage to work around."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-xl border border-white/[0.06] bg-white/[0.05] overflow-hidden">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
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
