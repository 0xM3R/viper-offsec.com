export type ResearchCategory =
  | "Smart Contracts"
  | "Red Team"
  | "Vulnerability Research"
  | "Web3 Infrastructure"
  | "Tools";

export interface ResearchPost {
  title: string;
  slug: string;
  date: string;
  category: ResearchCategory;
  description: string;
  published: boolean;
}

export const researchPosts: ResearchPost[] = [
  {
    title: "Reentrancy Patterns in Modern DeFi: Beyond the Classic Attack",
    slug: "reentrancy-patterns-modern-defi",
    date: "2025-11-15",
    category: "Smart Contracts",
    description:
      "An analysis of cross-function and cross-contract reentrancy patterns found during recent DeFi protocol audits, including novel attack vectors in ERC-4626 vault implementations.",
    published: true,
  },
  {
    title: "Red Teaming a Web3 Organization: Lessons from the Field",
    slug: "red-teaming-web3-org",
    date: "2025-09-22",
    category: "Red Team",
    description:
      "Case study of a full-scope red team engagement against a Web3 company, covering social engineering of developer teams, CI/CD pipeline compromise, and smart contract deployment key extraction.",
    published: true,
  },
  {
    title: "Validator Key Management: HSMs, MPC, and the Gaps Between",
    slug: "validator-key-management",
    date: "2025-07-10",
    category: "Web3 Infrastructure",
    description:
      "A practical guide to validator key management security, comparing HSM-based approaches with MPC solutions and identifying common configuration mistakes that undermine both.",
    published: true,
  },
  {
    title: "Fuzzing Solidity: Maximizing Coverage with Echidna and Medusa",
    slug: "fuzzing-solidity-echidna-medusa",
    date: "2025-05-03",
    category: "Tools",
    description:
      "Practical techniques for writing effective fuzz harnesses for Solidity smart contracts, with benchmarks comparing Echidna and Medusa on real-world protocol code.",
    published: true,
  },
  {
    title: "Bridge Security: Analyzing Cross-Chain Message Verification",
    slug: "bridge-security-cross-chain",
    date: "2025-03-18",
    category: "Vulnerability Research",
    description:
      "Deep dive into common vulnerability classes in cross-chain bridge implementations, from signature verification flaws to message replay attacks and oracle manipulation.",
    published: true,
  },
];

export interface Talk {
  title: string;
  conference: string;
  year: number;
  slidesUrl?: string;
  videoUrl?: string;
}

export const talks: Talk[] = [
  {
    title: "Breaking Bridges: Cross-Chain Vulnerability Research",
    conference: "DEF CON",
    year: 2024,
    slidesUrl: "#",
  },
  {
    title: "Offensive Embedded Systems: From Firmware to Exploitation",
    conference: "DEF CON",
    year: 2022,
    slidesUrl: "#",
  },
  {
    title: "Advanced Red Team Infrastructure for Modern Enterprises",
    conference: "Infiltrate",
    year: 2023,
    slidesUrl: "#",
  },
];

export const categories: ResearchCategory[] = [
  "Smart Contracts",
  "Red Team",
  "Vulnerability Research",
  "Web3 Infrastructure",
  "Tools",
];
