"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/effects/grid-background";
import { site } from "@/lib/site";

export function Leadership() {
  return (
    <Section id="founder" className="relative">
      <SectionHeader
        eyebrow={<Badge variant="cyan">Founder</Badge>}
        title={
          <>
            One person, focused on
            <br />
            <span className="text-gradient-cyan">doing the work well.</span>
          </>
        }
        description="Rust AI is founder-led. The person you'll talk to in the first call is the person who'll build your project."
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
              The goal of Rust AI is simple: build practical, accessible AI
              and automation tools for businesses that don't have the time or
              budget to figure it all out themselves. Honest scope, honest
              timelines, and software you'll actually use.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <a href={site.contact.mailto}>
                <Button variant="primary" size="md">
                  <Mail className="h-3.5 w-3.5" />
                  Direct outreach
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
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
            Founder
          </div>
        </div>

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#64748B]">
            Rust AI · 2026
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-emerald-300">
              Active
            </span>
          </div>
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
