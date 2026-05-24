"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const tools = [
  { name: "OpenAI", glyph: "OAI" },
  { name: "Anthropic", glyph: "ANT" },
  { name: "Next.js", glyph: "NXT" },
  { name: "Python", glyph: "PY" },
  { name: "Node.js", glyph: "NODE" },
  { name: "Postgres", glyph: "PG" },
  { name: "n8n", glyph: "N8N" },
  { name: "Zapier", glyph: "ZAP" },
];

export function Trust() {
  return (
    <Section id="tools" className="py-16 md:py-20">
      <div className="text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#64748B]">
          Tools &amp; technologies we build with
        </div>
        <p className="mt-3 text-[13px] text-[#94A3B8] max-w-xl mx-auto">
          We work with modern AI APIs, automation platforms, and open-source
          frameworks — chosen for what fits the problem, not what sounds
          impressive.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-4 md:grid-cols-8 gap-px rounded-xl border border-white/[0.06] bg-white/[0.05] overflow-hidden">
        {tools.map((it, i) => (
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
    </Section>
  );
}
