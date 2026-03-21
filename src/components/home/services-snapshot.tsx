"use client";

import Link from "next/link";
import { ArrowRight, Shield, Crosshair, Server, Layout, Bug, UserCheck } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const serviceCards = [
  {
    icon: Shield,
    title: "Smart Contract Audit",
    description:
      "EVM (Solidity/Vyper), Rust, Cairo. Manual + automated analysis across all major chains.",
    tags: ["Manual Review", "Custom Tools", "Aderyn", "Echidna", "Medusa", "Halmos"],
    href: "/services#smart-contract-audit",
  },
  {
    icon: Crosshair,
    title: "Red Team Operations",
    description:
      "Full-scope adversary simulation. Infrastructure, social engineering. TIBER-EU methodology.",
    tags: ["External", "Internal", "Social Engineering", "TIBER-EU"],
    href: "/services#red-team",
  },
  {
    icon: Server,
    title: "Blockchain Infrastructure Security",
    description:
      "Nodes, RPC, key management, validator security, threat modeling for protocol backends.",
    tags: ["Node Hardening", "Key Management", "Threat Modeling", "HSM/MPC"],
    href: "/services#blockchain-infrastructure",
  },
  {
    icon: Layout,
    title: "Security Architecture Review",
    description:
      "Pre-code threat modeling for protocols, bridges, L2s. Cheaper than post-launch fixes.",
    tags: ["Threat Modeling", "Design Review", "DeFi", "Bridges"],
    href: "/services#security-architecture",
  },
  {
    icon: Bug,
    title: "Vulnerability Research",
    description:
      "Bespoke research for vendors and protocols. CVE-track history in firmware and blockchain.",
    tags: ["CVE Research", "Firmware", "Embedded", "Blockchain"],
    href: "/services#vulnerability-research",
  },
  {
    icon: UserCheck,
    title: "vCISO / Advisory",
    description:
      "Fractional security leadership for Web3 teams building their security function from scratch.",
    tags: ["Strategic", "Policy", "Incident Response", "Ongoing"],
    href: "/services#vciso",
  },
];

export function ServicesSnapshot() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-4">
          {"// our services"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          What We Do
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl mb-12">
          Hands-on offensive security across Web3 and Web2.
          No automated scan reports. No junior consultants.
          Every engagement is led by a senior engineer with 15 years
          of real-world attack experience.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.07}>
              <Link href={card.href} className="group block h-full">
                <div className="h-full rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                  <card.icon className="h-7 w-7 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{card.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-emerald-400 group-hover:gap-2 transition-all font-mono">
                    Learn more
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
