"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  MessageSquare,
  Database,
  Globe,
  Wrench,
  Plug,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/glow-card";

const services = [
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Automate repetitive workflows — data entry, follow-ups, document handling, and the small tasks that quietly eat hours every week.",
    accent: "cyan" as const,
    tag: "Operations",
  },
  {
    icon: MessageSquare,
    title: "Chatbots & Assistants",
    description:
      "Custom chatbots and AI assistants for customer support, internal Q&A, lead handling, or specific tasks unique to your business.",
    accent: "blue" as const,
    tag: "Conversational",
  },
  {
    icon: Plug,
    title: "Custom AI Integrations",
    description:
      "Connect AI models into the tools you already use — CRMs, spreadsheets, inboxes, internal apps — without forcing you to rebuild anything.",
    accent: "cyan" as const,
    tag: "Integration",
  },
  {
    icon: Bot,
    title: "Business Process Automation",
    description:
      "End-to-end automation built around your real processes. We map the workflow with you and ship something that actually fits.",
    accent: "green" as const,
    tag: "Workflows",
  },
  {
    icon: Database,
    title: "Data Tools",
    description:
      "Lightweight dashboards, reporting tools, and data pipelines that turn whatever you already have into something useful and readable.",
    accent: "orange" as const,
    tag: "Data",
  },
  {
    icon: Globe,
    title: "Websites with AI Features",
    description:
      "Modern, fast websites with AI features built in — search, recommendations, chat, content generation, or whatever fits your audience.",
    accent: "blue" as const,
    tag: "Web",
  },
  {
    icon: Sparkles,
    title: "Workflow Optimization",
    description:
      "We audit how work moves through your business, find the slow points, and rebuild the parts where AI or automation actually helps.",
    accent: "cyan" as const,
    tag: "Strategy",
  },
  {
    icon: Wrench,
    title: "Custom Software",
    description:
      "Small, focused internal tools and software solutions — built quickly, designed to solve one problem well rather than ten things poorly.",
    accent: "green" as const,
    tag: "Software",
  },
];

export function Services() {
  return (
    <Section id="services" className="relative">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <SectionHeader
        eyebrow={<Badge variant="cyan">Services</Badge>}
        title={
          <>
            Practical AI &amp; automation,
            <br />
            <span className="text-gradient-cyan">built around your business.</span>
          </>
        }
        description="Rust AI builds tools that fit how you already work — not generic platforms you have to bend yourself around. Every engagement starts with a conversation about what you actually need."
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
      </div>
    </GlowCard>
  );
}
