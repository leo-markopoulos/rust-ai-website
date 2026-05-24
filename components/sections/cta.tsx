"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/effects/grid-background";
import { NeuralNetwork } from "@/components/effects/neural-network";
import { AmbientOrbs } from "@/components/effects/ambient-orbs";

export function CTA() {
  return (
    <Section id="contact" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0F172A]/80 to-[#0B1120]/80 backdrop-blur-xl"
      >
        <div className="absolute inset-0 -z-10">
          <AmbientOrbs />
          <GridBackground variant="default" fade="radial" />
          <div className="absolute inset-0 opacity-50">
            <NeuralNetwork density={40} speed={0.16} />
          </div>
        </div>

        <div
          aria-hidden
          className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        />

        <div className="relative px-6 py-20 md:px-16 md:py-28 text-center">
          <div className="flex justify-center">
            <Badge variant="cyan" pulse>
              <Sparkles className="h-3 w-3" />
              Now accepting Q3 engagements
            </Badge>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 font-display text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.02]"
          >
            <span className="text-gradient">Build the Future</span>
            <br />
            <span className="text-gradient-cyan">with AI.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-[#94A3B8] leading-relaxed"
          >
            Partner with RustAI to architect, deploy, and operate AI infrastructure
            that delivers measurable outcomes. Engagements begin with a founder-led
            consultation tailored to your organization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button variant="primary" size="xl">
              Schedule Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="xl">
              Contact RustAI
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono uppercase tracking-[0.22em] text-[#64748B]"
          >
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              Founder-led engagement
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              SOC 2 Type II
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              MSAs · global
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-orange-400" />
              48h response
            </span>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
