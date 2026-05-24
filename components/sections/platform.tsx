"use client";

import { motion } from "framer-motion";
import { MessagesSquare, Compass, Hammer, Repeat } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: MessagesSquare,
    label: "01 · Conversation",
    title: "We talk about your business",
    body: "Every engagement starts with a free consultation. We learn what you do, where things slow down, and whether AI or automation is even the right answer.",
  },
  {
    icon: Compass,
    label: "02 · Scope",
    title: "We agree on a small, real first step",
    body: "We propose a focused project — something small enough to ship quickly, real enough to be useful. No oversold roadmaps or imaginary deliverables.",
  },
  {
    icon: Hammer,
    label: "03 · Build",
    title: "We build it and stay close",
    body: "You stay in the loop while we build. We send progress along the way and adjust as things become clearer — because they always do once work starts.",
  },
  {
    icon: Repeat,
    label: "04 · Iterate",
    title: "We refine based on real use",
    body: "Once it's in your hands, we tighten the parts that matter and trim the parts that don't. From there we can keep going, or wrap up — your call.",
  },
];

export function Platform() {
  return (
    <Section id="approach" className="relative">
      <SectionHeader
        eyebrow={<Badge variant="cyan">How we work</Badge>}
        title={
          <>
            Small, honest engagements
            <br />
            <span className="text-gradient-cyan">that ship something real.</span>
          </>
        }
        description="Rust AI is new, and we're choosing to grow that way on purpose. We'd rather take on a few projects we can do well than overcommit to things we can't honestly deliver."
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
            className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-transparent p-6 backdrop-blur-sm hover:border-cyan-400/20 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                {s.label}
              </span>
            </div>
            <h3 className="mt-5 font-display text-[18px] font-medium tracking-tight text-[#E2E8F0]">
              {s.title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#94A3B8]">
              {s.body}
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
