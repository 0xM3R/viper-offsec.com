"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to secure your protocol?
            </h2>
            <p className="text-zinc-500 max-w-lg mx-auto mb-8">
              We work with a limited number of clients to maintain quality. Reach out early.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-sm font-semibold rounded-lg px-5 py-2.5 transition-colors"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
