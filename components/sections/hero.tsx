"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Workflow, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TerminalWindow } from "@/components/ui/terminal-window";
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
            Founded 2026 · Currently Accepting Early Clients
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
          className="mx-auto mt-7 max-w-5xl text-center font-display text-[40px] sm:text-6xl md:text-[78px] leading-[0.98] tracking-[-0.02em]"
        >
          <span className="block text-gradient">Rust AI</span>
          <span className="block mt-2">
            <span className="text-gradient-cyan">AI Automation</span>{" "}
            <span className="text-gradient">for Modern Businesses</span>
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
          <a href={site.contact.mailto}>
            <Button variant="primary" size="lg">
              Schedule Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#services">
            <Button variant="secondary" size="lg">
              Explore Services
            </Button>
          </a>
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
          <HeroPreview />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.55 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          <FocusCard
            icon={<Workflow className="h-4 w-4" />}
            title="Practical Automation"
            body="Workflow tools that take repetitive work off your plate so you can focus on the parts of the business only you can do."
            accent="cyan"
          />
          <FocusCard
            icon={<Bot className="h-4 w-4" />}
            title="Custom AI Integrations"
            body="Chatbots, assistants, and AI-powered features built around your actual workflows — not generic templates."
            accent="blue"
          />
          <FocusCard
            icon={<Code2 className="h-4 w-4" />}
            title="Software Solutions"
            body="Lightweight, modern software and internal tools that connect the pieces of your business already in motion."
            accent="green"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FocusCard({
  icon,
  title,
  body,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  accent: "cyan" | "green" | "blue" | "orange";
}) {
  const colorMap = {
    cyan: "text-cyan-300",
    green: "text-emerald-300",
    blue: "text-blue-300",
    orange: "text-orange-300",
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-transparent p-6 backdrop-blur-sm">
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
      <div className="relative">
        <div className={`flex h-9 w-9 items-center justify-center rounded-md bg-white/[0.04] border border-white/[0.06] ${colorMap[accent]}`}>
          {icon}
        </div>
        <h3 className="mt-4 font-display text-[15px] font-medium tracking-tight text-[#E2E8F0]">
          {title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-[#94A3B8]">
          {body}
        </p>
      </div>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-x-10 -inset-y-6 -z-10 rounded-3xl bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-2xl"
      />
      <TerminalWindow title="rustai ~ /intro" status="live" ticker="v0.1 · early access">
        <div className="bg-[#0B1120] p-6 md:p-8 font-mono text-[13px] leading-relaxed">
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="text-cyan-300">$</span>
              <span className="text-[#E2E8F0]">rustai --about</span>
            </div>
            <div className="pl-6 text-[#94A3B8]">
              <p>
                <span className="text-cyan-300">Rust AI</span> is an early-stage AI
                company building practical tools, automations,
              </p>
              <p>
                and custom software for businesses and creators.
              </p>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <span className="text-cyan-300">$</span>
              <span className="text-[#E2E8F0]">rustai --what-we-build</span>
            </div>
            <ul className="pl-6 space-y-1 text-[#94A3B8]">
              <li>→ AI automation &amp; workflow tools</li>
              <li>→ Chatbots, assistants, and conversational AI</li>
              <li>→ Custom integrations into existing systems</li>
              <li>→ Internal dashboards and data tools</li>
              <li>→ Modern websites with AI features built in</li>
            </ul>

            <div className="mt-5 flex items-start gap-3">
              <span className="text-cyan-300">$</span>
              <span className="text-[#E2E8F0]">rustai --status</span>
            </div>
            <div className="pl-6 text-[#94A3B8]">
              <p className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-emerald-300">
                  Open for first clients &amp; pilot projects
                </span>
              </p>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <span className="text-cyan-300">$</span>
              <span className="inline-flex items-center gap-1">
                <span className="text-[#E2E8F0]">_</span>
                <span className="inline-block h-4 w-1.5 animate-pulse bg-cyan-300" />
              </span>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-[11px] text-[#64748B]">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-cyan-300" />
              founded 2026
            </span>
            <span>·</span>
            <span>founder-led engagements</span>
            <span>·</span>
            <span>pilot projects welcome</span>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}
