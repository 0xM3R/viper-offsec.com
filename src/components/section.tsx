import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28 px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", "mb-12 md:mb-16", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-viper-gray max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
