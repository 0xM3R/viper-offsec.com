import Link from "next/link";
import { HeroSection } from "@/components/home/hero-section";
import { StatsBar } from "@/components/home/stats-bar";
import { ChainBar } from "@/components/sections/ChainBar";
import { ServicesSnapshot } from "@/components/home/services-snapshot";
import { AuditProcess } from "@/components/home/audit-process";
import { PublicReports } from "@/components/home/public-reports";
import { FeaturedResearch } from "@/components/home/featured-research";
import { CTASection } from "@/components/home/cta-section";

const aiTagsLeft = ["Prompt Injection", "Jailbreak Testing", "RAG Audit", "AI Agent Red Team", "OWASP LLM Top 10", "MCP Security"];
const aiTagsRight = ["AI Oracle Security", "On-chain AI Agents", "LLM-Augmented Audit", "Model Integrity", "AI Supply Chain", "Cross-stack Threat Model"];

function AISecurityTeaser() {
  return (
    <section className="py-20 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3">
          {"// new attack surface"}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          AI Security &amp; AI &times; Web3
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mb-12">
          LLMs, autonomous agents, and on-chain AI systems are the next major
          attack surface. We bring offensive security research tradecraft to both
          sides of this stack.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="font-mono text-xs text-violet-400 tracking-widest uppercase">
                AI Systems
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Securing the AI Stack</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Prompt injection. Jailbreaks. Data poisoning. RAG pipeline leakage.
              Agentic privilege escalation. We red team LLM systems using the same
              offensive mindset we bring to every engagement.
            </p>
            <div className="flex flex-wrap gap-2">
              {aiTagsLeft.map((tag) => (
                <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded border border-violet-500/30 text-violet-400 bg-violet-500/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
                AI &times; Web3
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Where Both Worlds Collide</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              On-chain AI agents. LLM-integrated DeFi governance. AI oracle
              manipulation. We assess the full cross-stack risk surface where
              decentralized protocols embed AI components.
            </p>
            <div className="flex flex-wrap gap-2">
              {aiTagsRight.map((tag) => (
                <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/services#ai-security" className="font-mono text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
            View all AI security services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a smart contract audit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Smart contract audit pricing depends on the complexity and size of the codebase, typically ranging from $10,000 to $100,000+. We provide custom quotes after a scoping call where we review your codebase, architecture, and timeline. Contact us for a free initial assessment.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Web3 security audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Web3 security audit is a comprehensive review of smart contracts and blockchain infrastructure to identify vulnerabilities before they can be exploited. It combines manual expert review with automated tools like static analyzers and fuzzers to find issues like reentrancy bugs, access control flaws, and business logic errors.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a smart contract audit take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical smart contract audit takes 1-4 weeks depending on codebase size and complexity. Simple contracts may take 1 week, while complex DeFi protocols with multiple interacting contracts can take 3-4 weeks. This includes the initial review, report delivery, and remediation verification.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Security & LLM Red Teaming",
            description:
              "Offensive security assessment of LLM systems, AI agents, RAG pipelines, and on-chain AI infrastructure.",
            provider: {
              "@type": "Organization",
              name: "Viper Offensive Security",
            },
          }),
        }}
      />
      <HeroSection />
      <StatsBar />
      <ChainBar />
      <ServicesSnapshot />
      <AISecurityTeaser />
      <AuditProcess />
      <PublicReports />
      <FeaturedResearch />
      <CTASection />
    </>
  );
}
