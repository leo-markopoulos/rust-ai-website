"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] disabled:pointer-events-none disabled:opacity-40 relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-cyan-400 to-cyan-500 text-[#050816] font-semibold shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_8px_32px_-8px_rgba(34,211,238,0.6),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_0_0_1px_rgba(34,211,238,0.6),0_12px_40px_-8px_rgba(34,211,238,0.8),inset_0_1px_0_rgba(255,255,255,0.3)] hover:-translate-y-[1px]",
        secondary:
          "bg-white/[0.04] text-[#E2E8F0] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.16] backdrop-blur",
        ghost:
          "text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-white/[0.04]",
        outline:
          "border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/50",
        terminal:
          "bg-[#0B1120] border border-cyan-400/20 text-cyan-300 font-mono text-xs uppercase tracking-[0.18em] hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-5",
        lg: "h-12 px-7 text-[15px]",
        xl: "h-14 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        {variant === "primary" && (
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
