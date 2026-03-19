"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { researchPosts, talks, categories, type ResearchCategory } from "@/data/research";
import { cn } from "@/lib/utils";

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState<ResearchCategory | "All">("All");

  const filteredPosts =
    activeCategory === "All"
      ? researchPosts.filter((p) => p.published)
      : researchPosts.filter((p) => p.published && p.category === activeCategory);

  return (
    <div className="pt-24">
      <Section>
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Research
          </h1>
          <p className="text-lg text-viper-gray max-w-2xl">
            Security research, vulnerability analysis, and insights from real-world
            engagements.
          </p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "text-xs font-mono px-3 py-1.5 rounded-full border transition-all",
              activeCategory === "All"
                ? "border-viper-green text-viper-green bg-viper-green/10"
                : "border-viper-dark-border text-viper-gray hover:text-foreground"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "text-xs font-mono px-3 py-1.5 rounded-full border transition-all",
                activeCategory === cat
                  ? "border-viper-green text-viper-green bg-viper-green/10"
                  : "border-viper-dark-border text-viper-gray hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.05}>
              <Link href={`/research/${post.slug}`} className="group block h-full">
                <div className="h-full rounded-lg border border-viper-dark-border bg-viper-dark-card p-6 transition-all duration-300 hover:border-viper-green/30">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-viper-green/10 text-viper-green">
                      {post.category}
                    </span>
                    <span className="text-xs text-viper-gray">{post.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-viper-green transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-viper-gray leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-viper-green group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-viper-gray py-12">
            No posts in this category yet.
          </p>
        )}
      </Section>

      <Section className="border-t border-viper-dark-border">
        <SectionHeading title="Talks & Presentations" align="left" />
        <div className="space-y-4">
          {talks.map((talk, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-viper-dark-border bg-viper-dark-card p-5">
                <div>
                  <h3 className="font-semibold text-foreground">{talk.title}</h3>
                  <p className="text-sm text-viper-gray mt-1">
                    <span className="font-mono text-viper-green">{talk.conference}</span>
                    {" \u00B7 "}
                    {talk.year}
                  </p>
                </div>
                {talk.slidesUrl && (
                  <a
                    href={talk.slidesUrl}
                    className="inline-flex items-center gap-1.5 text-sm text-viper-gray hover:text-viper-green transition-colors shrink-0"
                  >
                    Slides
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
