"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/effects/grid-background";
import { site } from "@/lib/site";

export function Leadership() {
  return (
    <Section id="leadership" className="relative">
      <SectionHeader
        eyebrow={<Badge variant="cyan">Leadership</Badge>}
        title={
          <>
            Founder-led engineering.
            <br />
            <span className="text-gradient-cyan">Institutional execution.</span>
          </>
        }
        description="RustAI is built by engineers who have spent their careers shipping systems for organizations where reliability, latency, and accountability are non-negotiable."
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
              "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -right-32 h-[480px] w-[480px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.16) 0%, transparent 65%)",
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-5 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            <FounderPortrait />
          </div>

          <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
              {site.founder.title} · {site.legalName}
            </div>

            <h3 className="mt-3 font-display text-3xl md:text-5xl font-medium tracking-tight text-gradient">
              {site.founder.name}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {site.founder.roles.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#94A3B8]"
                >
                  {r}
                </span>
              ))}
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-[#94A3B8] max-w-xl">
              {site.founder.bio}
            </p>

            <p className="mt-4 text-[15px] leading-relaxed text-[#94A3B8] max-w-xl">
              His approach is grounded in long-term systems thinking — privileging
              reliability, observability, and deterministic behavior over short-term
              feature velocity. Every product RustAI ships is engineered to operate
              under the same standards expected of institutional trading infrastructure.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-px rounded-xl border border-white/[0.06] bg-white/[0.05] overflow-hidden max-w-xl">
              <FounderStat label="Years in systems" value="15+" />
              <FounderStat label="Production deploys" value="2.4k+" />
              <FounderStat label="Enterprise clients" value="40+" />
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <Button variant="primary" size="md">
                <Mail className="h-3.5 w-3.5" />
                Direct outreach
              </Button>
              <Button variant="secondary" size="md">
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </Button>
              <Button variant="ghost" size="md">
                Read brief
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function FounderStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#0B1120]/60 backdrop-blur px-4 py-4">
      <div className="font-display text-xl font-medium text-cyan-300 tabular-nums">
        {value}
      </div>
      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-[#64748B]">
        {label}
      </div>
    </div>
  );
}

function FounderPortrait() {
  const initials = site.founder.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
      <div className="absolute inset-0 rounded-2xl border border-white/[0.08] bg-[#0B1120]/80 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(34,211,238,0.18) 0%, transparent 60%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -m-6 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 65%)",
              }}
            />
            <div className="relative h-32 w-32 rounded-full border border-white/[0.12] bg-gradient-to-br from-cyan-400/15 to-blue-500/15 backdrop-blur-xl flex items-center justify-center">
              <span className="font-display text-4xl font-medium tracking-tight text-cyan-200">
                {initials}
              </span>
            </div>
          </div>
          <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-300">
            Founder · Profile
          </div>
        </div>

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#64748B]">
            ID · 0001
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-emerald-300">
              Active
            </span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
          {[
            ["Office", "NYC"],
            ["Since", "2021"],
            ["Reg.", "DE-LLC"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-md border border-white/[0.06] bg-[#050816]/60 px-2 py-1.5"
            >
              <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#64748B]">
                {k}
              </div>
              <div className="font-mono text-[10px] text-[#E2E8F0]">{v}</div>
            </div>
          ))}
        </div>

        <div
          aria-hidden
          className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        />
      </div>

      <div
        aria-hidden
        className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 blur-xl"
      />
    </div>
  );
}
