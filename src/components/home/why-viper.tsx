"use client";

import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { FadeIn } from "@/components/fade-in";

const differentiators = [
  "Independent boutique \u2014 no conflicts of interest",
  "Researcher-grade depth, not checkbox compliance",
  "Published CVE research & conference talks",
  "Active in the Web3 security community",
  "Netherlands-based, globally available",
];

export function WhyViperSection() {
  return (
    <Section>
      <SectionHeading title="Why Viper" align="left" />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeIn direction="left">
          <p className="text-viper-gray-light leading-relaxed text-lg">
            Most security firms review code. We think like the attacker who wrote the exploit.
            Viper combines 15 years of offensive security tradecraft with deep Web3 protocol
            expertise&nbsp;&mdash; from EVM internals to cross-chain bridges to embedded hardware.
            We&rsquo;ve found the bugs that automated tools miss.
          </p>
        </FadeIn>

        <FadeIn direction="right">
          <ul className="space-y-4">
            {differentiators.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-viper-green mt-0.5 shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}
