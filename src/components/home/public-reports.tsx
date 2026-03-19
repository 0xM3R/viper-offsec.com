"use client";

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const reports = [
  {
    protocol: "DeFi Lending Protocol",
    chain: "Ethereum",
    date: "2025-08",
    findings: "1 Critical \u00B7 2 High \u00B7 3 Medium \u00B7 4 Low",
    href: "#",
    confidential: false,
  },
  {
    protocol: "Cross-Chain Bridge",
    chain: "Arbitrum / Optimism",
    date: "2025-05",
    findings: "0 Critical \u00B7 3 High \u00B7 2 Medium \u00B7 5 Low",
    href: "#",
    confidential: false,
  },
  {
    protocol: "Protocol Name",
    chain: "Cosmos",
    date: "2025-02",
    findings: "2 High \u00B7 4 Medium \u00B7 3 Low",
    href: "#",
    confidential: true,
  },
];

export function PublicReports() {
  return (
    <section className="py-20 md:py-28 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-4">
          {"// audit reports"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          We Publish Our Work
        </h2>
        <FadeIn>
          <p className="text-lg text-zinc-500 max-w-2xl mb-12">
            Transparency is a security signal. Where clients permit, we publish full audit
            reports&nbsp;&mdash; so the community can verify the work.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {reports.map((report, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-emerald-500/30 border-l-2 border-l-emerald-500/60 shadow-lg shadow-black/20">
                <FileText className="absolute top-4 right-4 h-5 w-5 text-zinc-800" />
                <div className="mb-3">
                  <h3 className="font-semibold text-foreground">
                    {report.protocol}
                    {report.confidential && (
                      <span className="text-xs text-zinc-600 ml-1">[Confidential]</span>
                    )}
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/5">
                    {report.chain}
                  </span>
                  <span className="text-xs text-zinc-600">{report.date}</span>
                </div>
                <p className="text-xs text-zinc-400 font-mono mb-4">{report.findings}</p>
                {!report.confidential ? (
                  <a
                    href={report.href}
                    className="inline-flex items-center gap-1 text-sm text-emerald-400 font-mono hover:gap-2 transition-all"
                  >
                    View Report
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="text-sm text-zinc-600">Under NDA</span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10">
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 font-mono hover:gap-3 transition-all"
            >
              View all public reports
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
