"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { researchPosts } from "@/data/research";

export function FeaturedResearch() {
  const featured = researchPosts.filter((p) => p.published).slice(0, 3);

  return (
    <section className="py-20 md:py-28 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-4">
          {"// research"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Latest Research
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl mb-12">
          Security insights from the field.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <Link href={`/research/${post.slug}`} className="group block h-full">
                <div className="h-full rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/5">
                      {post.category}
                    </span>
                    <span className="text-xs text-zinc-600">{post.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-emerald-400 font-mono group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
