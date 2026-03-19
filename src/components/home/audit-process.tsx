"use client";

import { Phone, Search, Cpu, FileText, CheckCircle, FileCheck } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const steps = [
  {
    number: "01",
    title: "Scoping Call",
    icon: Phone,
    description:
      "We review your codebase, architecture docs, and threat model. We define scope, timeline, and commit hash.",
  },
  {
    number: "02",
    title: "Manual Review",
    icon: Search,
    description:
      "Line-by-line analysis by an experienced security researcher. Logic flaws, access control, flash loan vectors, upgradeability risks — nothing is skipped.",
  },
  {
    number: "03",
    title: "Automated & Fuzzing",
    icon: Cpu,
    description:
      "Custom tools developed by Viper, alongside industry standards: Aderyn (static analysis), Echidna/Medusa (property-based fuzzing), Halmos/Certora (formal verification where applicable).",
  },
  {
    number: "04",
    title: "Initial Report",
    icon: FileText,
    description:
      "Findings categorized by severity: Critical / High / Medium / Low / Informational. Each with PoC exploit where applicable.",
  },
  {
    number: "05",
    title: "Remediation Review",
    icon: CheckCircle,
    description:
      "Your team implements fixes. We verify each mitigation and update finding status to Resolved or Acknowledged.",
  },
  {
    number: "06",
    title: "Final Report",
    icon: FileCheck,
    description:
      "Publishable PDF report delivered. Can be made public to signal security posture to your community.",
  },
];

export function AuditProcess() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-4">
          {"// how we work"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          A Rigorous Process. No Shortcuts.
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl mb-12">
          Every engagement follows a battle-tested methodology — from scoping to final deliverable.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[23px] md:left-[27px] top-8 bottom-8 w-px border-l border-dashed border-emerald-500/30" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                      <span className="text-lg md:text-xl font-mono font-bold text-emerald-400">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <step.icon className="h-4 w-4 text-emerald-400/70" />
                      <h3 className="text-base font-semibold text-foreground font-mono">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
