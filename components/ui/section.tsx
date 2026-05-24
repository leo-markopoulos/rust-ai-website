import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  containerClassName?: string;
}

export function Section({
  className,
  containerClassName,
  children,
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative w-full py-24 md:py-32", className)}
      {...props}
    >
      <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className={cn("mb-5", align === "center" && "flex justify-center")}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-gradient leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-[#94A3B8] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
