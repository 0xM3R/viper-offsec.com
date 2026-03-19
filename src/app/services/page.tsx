"use client";

import { useState, useEffect } from "react";
import { services } from "@/data/services";
import { FadeIn } from "@/components/fade-in";
import { cn } from "@/lib/utils";

const aiServices = [
  {
    title: "LLM & AI System Security",
    description:
      "Large language models introduce attack surfaces that traditional security tooling doesn\u2019t cover. We assess your AI stack end-to-end \u2014 from model inputs to tool-use boundaries \u2014 before adversaries do.",
    tags: ["Prompt Injection", "Jailbreak Testing", "Data Poisoning", "Model Inversion", "RAG Pipeline Audit", "OWASP LLM Top 10"],
    engagements: [
      "LLM penetration testing & red teaming",
      "Prompt injection & jailbreak assessment",
      "RAG architecture security review",
      "AI agent trust boundary analysis",
      "Training data poisoning assessment",
      "LLM threat modeling & risk report",
    ],
  },
  {
    title: "AI Agent Security",
    description:
      "Autonomous AI agents with tool access, memory, and on-chain signing authority are a new class of privileged system. We identify where agent trust boundaries break down and attackers can redirect actions.",
    tags: ["Agent Red Team", "Tool Misuse", "Prompt Hijacking", "Privilege Escalation", "MCP Security", "Agentic Workflow Audit"],
    engagements: [
      "Agentic workflow threat modeling",
      "Tool-use and plugin security assessment",
      "Multi-agent trust chain analysis",
      "On-chain AI agent privilege audit",
      "MCP server security review",
      "Autonomous execution boundary testing",
    ],
  },
  {
    title: "AI-Augmented Smart Contract Audits",
    description:
      "We combine manual expert review with LLM-assisted analysis to find what each method misses alone. AI surfaces pattern-level issues at speed; our researchers catch the logic flaws that models can\u2019t reason about yet.",
    tags: ["LLM-Assisted Review", "Custom Tools", "Echidna", "Medusa", "Semgrep", "Hybrid Audit", "Solidity", "Rust"],
    engagements: [
      "AI-augmented Solidity & Rust audit",
      "LLM-assisted vulnerability triage",
      "Automated fuzzing + manual validation",
      "Hybrid audit report with AI trace",
      "Pre-audit AI scan for dev teams",
      "Continuous AI monitoring integration",
    ],
  },
  {
    title: "Web3 AI Infrastructure Security",
    description:
      "Protocols integrating AI oracles, on-chain ML inference, or LLM-driven governance introduce novel risks at the intersection of both stacks. We assess the security of AI components embedded in decentralized systems.",
    tags: ["AI Oracle Security", "On-chain Inference", "LLM Governance Risk", "Supply Chain Audit", "Model Integrity", "Cross-stack Threat Model"],
    engagements: [
      "AI oracle manipulation assessment",
      "On-chain ML inference security review",
      "LLM-integrated DeFi protocol audit",
      "AI supply chain risk assessment",
      "Model integrity & provenance audit",
      "Cross-stack (AI + Web3) threat modeling",
    ],
  },
];

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState(services[0].id);

  const allSections = [...services.map((s) => s.id), "ai-security"];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    allSections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="pt-24 pb-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Services
            </h1>
            <p className="text-lg text-viper-gray max-w-2xl">
              Comprehensive offensive security services tailored to the Web3 ecosystem.
              Every engagement is led by a principal-level researcher.
            </p>
          </div>
        </FadeIn>

        <div className="hidden lg:block mb-8 sticky top-16 z-30 bg-viper-dark/80 backdrop-blur-xl -mx-6 px-6 py-3 border-b border-viper-dark-border">
          <nav className="flex gap-6">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={cn(
                  "text-sm font-medium transition-colors whitespace-nowrap",
                  activeSection === service.id
                    ? "text-viper-green"
                    : "text-viper-gray hover:text-foreground"
                )}
              >
                {service.title}
              </a>
            ))}
            <a
              href="#ai-security"
              className={cn(
                "text-sm font-medium transition-colors whitespace-nowrap",
                activeSection === "ai-security"
                  ? "text-violet-400"
                  : "text-viper-gray hover:text-foreground"
              )}
            >
              AI Security
            </a>
          </nav>
        </div>

        <div className="lg:hidden mb-8 overflow-x-auto -mx-6 px-6 sticky top-16 z-30 bg-viper-dark/80 backdrop-blur-xl py-3 border-b border-viper-dark-border">
          <nav className="flex gap-3 min-w-max">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={cn(
                  "text-xs font-medium px-3 py-1.5 rounded-full border transition-all whitespace-nowrap",
                  activeSection === service.id
                    ? "border-viper-green text-viper-green bg-viper-green/10"
                    : "border-viper-dark-border text-viper-gray hover:text-foreground"
                )}
              >
                {service.title}
              </a>
            ))}
            <a
              href="#ai-security"
              className={cn(
                "text-xs font-medium px-3 py-1.5 rounded-full border transition-all whitespace-nowrap",
                activeSection === "ai-security"
                  ? "border-violet-400 text-violet-400 bg-violet-500/10"
                  : "border-viper-dark-border text-viper-gray hover:text-foreground"
              )}
            >
              AI Security
            </a>
          </nav>
        </div>

        <div className="space-y-24">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.05}>
              <section id={service.id} className="scroll-mt-32">
                <div className="flex items-start gap-4 mb-6">
                  <service.icon className="h-8 w-8 text-emerald-400 shrink-0 mt-1" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    {service.description.map((para, j) => (
                      <p key={j} className="text-viper-gray-light leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="space-y-6">
                    {service.tools && (
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-3 font-mono uppercase tracking-wider">
                          Tools & Methods
                        </h3>
                        <ul className="space-y-1.5">
                          {service.tools.map((tool) => (
                            <li
                              key={tool}
                              className="text-sm text-viper-gray flex items-center gap-2"
                            >
                              <span className="h-1 w-1 rounded-full bg-viper-green shrink-0" />
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.deliverables && (
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-3 font-mono uppercase tracking-wider">
                          Deliverables
                        </h3>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((d) => (
                            <li
                              key={d}
                              className="text-sm text-viper-gray flex items-start gap-2"
                            >
                              <span className="h-1 w-1 rounded-full bg-viper-green shrink-0 mt-1.5" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </FadeIn>
          ))}
        </div>

        <div id="ai-security" className="pt-16 scroll-mt-24">
          <FadeIn>
            <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-2">
              {"// emerging attack surface"}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight mb-10">
              AI Security &amp; AI &times; Web3
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {aiServices.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.07}>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-violet-500/30">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{svc.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{svc.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded border border-violet-500/30 text-violet-400 bg-violet-500/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Engagement Types</h4>
                  <ul className="space-y-1">
                    {svc.engagements.map((e) => (
                      <li key={e} className="text-sm text-zinc-500 flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-violet-400 shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
