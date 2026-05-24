"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Services",
    items: [
      { label: "AI Automation", href: "#services" },
      { label: "Chatbots & Assistants", href: "#services" },
      { label: "Custom Integrations", href: "#services" },
      { label: "Data Tools", href: "#services" },
      { label: "AI Websites", href: "#services" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "How we work", href: "#approach" },
      { label: "Founder", href: "#founder" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Get in touch",
    items: [
      { label: "Schedule Consultation", href: site.contact.mailto },
      { label: site.contact.email, href: `mailto:${site.contact.email}` },
    ],
  },
];

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050816]">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-[#94A3B8]">
              {site.description}
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a href={`mailto:${site.contact.email}`}>
                <Button variant="terminal" size="sm">
                  <Mail className="h-3 w-3" />
                  {site.contact.email}
                </Button>
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300/90">
                Accepting new projects
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <a
                        href={it.href}
                        className="group inline-flex items-center gap-1.5 text-[13px] text-[#94A3B8] hover:text-[#E2E8F0] transition-colors"
                      >
                        {it.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-mono text-[11px] text-[#64748B]">
            © {year} {site.legalName}. ·{" "}
            <span className="text-[#94A3B8]">Founded by {site.founder.name}</span>
          </div>
          <div className="font-mono text-[11px] text-[#64748B]">
            Built in 2026 · Early-stage &amp; open for clients
          </div>
        </div>

        <div
          aria-hidden
          className="mt-12 select-none overflow-hidden pointer-events-none mask-fade-horizontal"
        >
          <div className="font-display text-[16vw] leading-none font-medium tracking-[-0.04em] text-transparent bg-gradient-to-b from-white/[0.05] to-transparent bg-clip-text whitespace-nowrap">
            RUST AI
          </div>
        </div>
      </div>
    </footer>
  );
}
