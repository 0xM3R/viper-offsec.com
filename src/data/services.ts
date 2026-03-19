import { Shield, Server, Crosshair, Bug, Layout, UserCheck } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  icon: typeof Shield;
  shortDescription: string;
  description: string[];
  tags: string[];
  tools?: string[];
  deliverables?: string[];
}

export const services: Service[] = [
  {
    id: "smart-contract-audit",
    title: "Smart Contract Audit",
    icon: Shield,
    shortDescription:
      "EVM (Solidity/Vyper), Rust, Cairo. Manual + automated analysis across all major chains.",
    description: [
      "Manual security review of smart contracts across EVM and non-EVM chains. Our methodology covers the full spectrum of smart contract vulnerabilities: reentrancy, access control flaws, flash loan attack vectors, oracle manipulation, upgrade proxy risks, integer over/underflow, and critical business logic flaws.",
      "We combine manual expert review with state-of-the-art automated tooling to achieve coverage that neither approach achieves alone. Every finding includes severity ratings, proof-of-concept exploits where applicable, and actionable remediation guidance.",
    ],
    tags: ["Manual Review", "Custom Tools", "Aderyn", "Echidna", "Medusa", "Halmos"],
    tools: [
      "Custom Viper tooling (static analysis)",
      "Aderyn (static analysis)",
      "Echidna (property-based fuzzing)",
      "Medusa (property-based fuzzing)",
      "Halmos (symbolic execution)",
      "Certora Prover (formal verification)",
    ],
    deliverables: [
      "Detailed audit report with severity ratings (Critical / High / Medium / Low / Informational)",
      "Proof-of-concept exploits for critical/high findings",
      "Remediation guidance and fix verification",
      "Executive summary for non-technical stakeholders",
    ],
  },
  {
    id: "red-team",
    title: "Red Team Operations",
    icon: Crosshair,
    shortDescription:
      "Full-scope adversary simulation. Infrastructure, social engineering. TIBER-EU methodology.",
    description: [
      "Full-scope adversary simulation engagements that test your organization's security posture against real-world attack scenarios. We cover external network attacks, internal lateral movement, social engineering campaigns, and physical intrusion where scoped.",
      "Our methodology aligns with TIBER-EU and CBEST frameworks where required, ensuring regulatory compliance while delivering genuine adversarial insight. The goal isn't to find one vulnerability — it's to demonstrate the full attack chain an adversary would exploit.",
    ],
    tags: ["External", "Internal", "Social Engineering", "TIBER-EU"],
    deliverables: [
      "Executive summary for leadership",
      "Detailed technical report with attack chain documentation",
      "Evidence package with screenshots and logs",
      "Interactive debrief session with your security team",
    ],
  },
  {
    id: "blockchain-infrastructure",
    title: "Blockchain Infrastructure Security",
    icon: Server,
    shortDescription:
      "Nodes, RPC, key management, validator security, threat modeling for protocol backends.",
    description: [
      "Security assessment of the non-contract layer: node infrastructure hardening, RPC endpoint security, key management architecture (HSMs, MPC), validator security, monitoring & alerting setup, and threat modeling for protocol backends.",
      "Smart contracts don't exist in a vacuum. The infrastructure running your chain, validators, and backend services is equally critical. We assess the full stack — from cloud configuration to key ceremony processes.",
    ],
    tags: ["Node Hardening", "Key Management", "Threat Modeling", "HSM/MPC"],
    tools: [
      "Custom infrastructure scanning tools",
      "Cloud security assessment frameworks",
      "Network analysis tools",
    ],
    deliverables: [
      "Infrastructure security assessment report",
      "Threat model documentation",
      "Hardening recommendations with priority matrix",
      "Architecture review findings",
    ],
  },
  {
    id: "security-architecture",
    title: "Security Architecture Review",
    icon: Layout,
    shortDescription:
      "Pre-code threat modeling for protocols, bridges, L2s. Cheaper than post-launch fixes.",
    description: [
      "Design-phase threat modeling and architecture review for protocols, bridges, L2s, and DeFi systems before code is written. Finding architectural flaws before implementation is orders of magnitude cheaper than fixing them post-launch.",
      "We review your protocol design, trust assumptions, economic incentives, and system architecture to identify risks before they become vulnerabilities. This includes cross-chain bridge designs, rollup architectures, DeFi protocol mechanics, and governance systems.",
    ],
    tags: ["Threat Modeling", "Design Review", "DeFi", "Bridges"],
    deliverables: [
      "Threat model document",
      "Architecture risk assessment",
      "Design recommendations and alternative approaches",
      "Security requirements specification",
    ],
  },
  {
    id: "vulnerability-research",
    title: "Vulnerability Research",
    icon: Bug,
    shortDescription:
      "Bespoke research for vendors and protocols. CVE-track history in firmware and blockchain.",
    description: [
      "Bespoke research engagements for vendors or protocols seeking deep-dive analysis into specific attack surfaces. Our research background spans CVE discovery, forensic analysis (Netherlands Forensic Institute), firmware reverse engineering, and embedded systems security.",
      "Whether you need a targeted investigation into a suspected vulnerability class, a comprehensive security analysis of a new protocol design, or expert forensic analysis of a security incident, we bring researcher-grade depth to every engagement.",
    ],
    tags: ["CVE Research", "Firmware", "Embedded", "Blockchain"],
    deliverables: [
      "Research report with technical findings",
      "CVE submissions where applicable",
      "Proof-of-concept demonstrations",
      "Remediation and mitigation strategies",
    ],
  },
  {
    id: "vciso",
    title: "vCISO / Advisory",
    icon: UserCheck,
    shortDescription:
      "Fractional security leadership for Web3 teams building their security function from scratch.",
    description: [
      "Fractional Chief Information Security Officer services for Web3 teams that need senior security leadership without the full-time overhead. We help you build security programs, define policies, and establish incident response capabilities.",
      "From hiring your first security engineer to setting up bug bounty programs, security review pipelines, and compliance frameworks — we provide strategic security guidance tailored to the unique challenges of Web3 organizations.",
    ],
    tags: ["Strategic", "Policy", "Incident Response", "Ongoing"],
    deliverables: [
      "Security program roadmap",
      "Policy and procedure documentation",
      "Incident response playbooks",
      "Ongoing advisory and mentorship",
    ],
  },
];
