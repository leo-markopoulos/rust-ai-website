"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className={cn(
            "relative flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500",
            scrolled
              ? "border-white/[0.08] bg-[#0B1120]/80 backdrop-blur-2xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
              : "border-white/[0.04] bg-[#0B1120]/50 backdrop-blur-xl",
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          />

          <a href="#top" className="flex items-center pl-1">
            <Logo />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {site.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative px-3.5 py-2 text-[13px] font-medium text-[#94A3B8] hover:text-[#E2E8F0] transition-colors"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-gradient-to-r from-cyan-400/60 to-transparent" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 mr-1 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300/90">
                Systems Online
              </span>
            </div>

            <Button variant="primary" size="sm" className="hidden md:inline-flex">
              Schedule Consultation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/[0.08] text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-white/[0.04]"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-50 lg:hidden"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-[#0B1120]/95 backdrop-blur-2xl p-4 shadow-2xl">
              <ul className="flex flex-col gap-1">
                {site.nav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-white/[0.04]"
                    >
                      {item.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="md" className="mt-3 w-full">
                Schedule Consultation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
