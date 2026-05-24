import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative">
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden
          className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
        >
          <defs>
            <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22D3EE" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="logo-grad-2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22D3EE" stopOpacity="0.4" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="28" height="28" rx="6" stroke="url(#logo-grad)" strokeWidth="1.4" fill="rgba(11,17,32,0.6)" />
          <path d="M9 22 L9 10 L17 10 Q21 10 21 14 Q21 17 18 18 L23 22 M14 18 L9 18" stroke="url(#logo-grad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="25" cy="9" r="1.5" fill="url(#logo-grad)" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-tight text-[#E2E8F0]">
          Rust AI<span className="text-cyan-400">.</span>
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#64748B] mt-0.5">
          AI &middot; Automation
        </span>
      </div>
    </div>
  );
}
