import { cn } from "@/lib/utils";

export function Scanline({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
    >
      <div
        className="absolute inset-x-0 h-px scanline"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)",
          boxShadow: "0 0 12px rgba(34,211,238,0.6)",
        }}
      />
    </div>
  );
}
