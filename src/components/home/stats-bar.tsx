"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "15+", label: "years offensive security" },
  { value: "3", label: "DEF CON & Infiltrate talks" },
  { value: "10", label: "chains audited" },
  { value: "0", label: "undisclosed critical findings" },
];

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={cn(
        "font-mono text-3xl font-semibold text-emerald-400 transition-opacity duration-700",
        visible ? "opacity-100" : "opacity-0"
      )}
    >
      {value}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="bg-zinc-950 border-y border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "text-center py-4 md:py-0",
                i > 0 && "md:border-l md:border-zinc-800"
              )}
            >
              <AnimatedValue value={stat.value} />
              <p className="text-zinc-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
