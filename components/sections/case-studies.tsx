"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/effects/grid-background";
import { site } from "@/lib/site";

const facts = [
  { label: "Founded", value: "2026" },
  { label: "Stage", value: "Early-stage" },
  { label: "Engagements", value: "Open" },
  { label: "Run by", value: "Founder" },
];

const looking = [
  "Small businesses that want to automate the boring parts of their day",
  "Creators and operators who need a one-off AI tool built for them",
  "Teams with a clear, focused problem and a willingness to start small",
  "Pilot projects, fixed-scope builds, and ongoing partnerships",
];

export function CaseStudies() {
  return (
    <Section id="about" className="relative">
      <SectionHeader
        eyebrow={<Badge variant="cyan">About · Transparency</Badge>}
        title={
          <>
            Building something new,
            <br />
            <span className="text-gradient-cyan">honestly and from the ground up.</span>
          </>
        }
        description="Rust AI is in its early stages. We don't have a long list of past clients or revenue numbers to show off — and we'd rather tell you that up front than pretend otherwise."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7 }}
        className="relative mt-14 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm"
      >
        <GridBackground variant="fine" fade="radial" />
        <div
          aria-hidden
          className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.16) 0%, transparent 65%)",
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
              Where we are right now
            </div>
            <h3 className="mt-3 font-display text-2xl md:text-3xl font-medium tracking-tight text-[#E2E8F0] leading-tight">
              A new company, actively looking for first clients,
              collaborations, and pilot projects.
            </h3>
            <p className="mt-5 text-[14.5px] leading-relaxed text-[#94A3B8] max-w-xl">
              Rust AI was founded in 2026 to build practical AI tools and
              automation systems for businesses and creators. We're set up
              intentionally as a small, founder-led operation — capable of
              moving quickly, scoping honestly, and staying close to the work.
            </p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-[#94A3B8] max-w-xl">
              If you're considering working with us, you'd be one of our first
              clients. That comes with real tradeoffs (we're new) and real
              advantages (we have the time, focus, and motivation to make sure
              your project goes well).
            </p>

            <div className="mt-8 space-y-2.5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                Who we're a fit for
              </div>
              {looking.map((l) => (
                <div key={l} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                  <span className="text-[13.5px] text-[#94A3B8]">{l}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <a href={site.contact.mailto}>
                <Button variant="primary" size="md">
                  <Sparkles className="h-3.5 w-3.5" />
                  Start a conversation
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
              Company snapshot
            </div>
            <div className="mt-4 grid grid-cols-2 gap-px rounded-xl border border-white/[0.06] bg-white/[0.05] overflow-hidden">
              {facts.map((f) => (
                <div key={f.label} className="bg-[#0B1120] px-4 py-5">
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#64748B]">
                    {f.label}
                  </div>
                  <div className="mt-1.5 font-display text-lg font-medium text-cyan-300 tabular-nums">
                    {f.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                  Accepting new projects
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[#94A3B8]">
                We're currently taking on a small number of new engagements.
                The first conversation is free — even if we decide together
                that we're not the right fit, you'll leave with a clearer
                picture of where AI or automation could help.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
