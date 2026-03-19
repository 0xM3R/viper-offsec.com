"use client";

import { FadeIn } from "./fade-in";
import type { TimelineEntry } from "@/data/timeline";

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-viper-dark-border" />
      <div className="space-y-12">
        {entries.map((entry, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="relative pl-12 md:pl-20">
              <div className="absolute left-3 md:left-7 top-1.5 h-3 w-3 rounded-full border-2 border-viper-green bg-viper-dark" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                <span className="font-mono text-sm text-viper-green">{entry.year}</span>
                <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
              </div>
              <p className="text-sm font-medium text-viper-gray-light mb-1">{entry.organization}</p>
              <p className="text-sm text-viper-gray leading-relaxed">{entry.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
