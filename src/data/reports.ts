export interface AuditReport {
  protocol: string;
  chain: string;
  date: string;
  findings: string;
  pdfUrl: string;
  confidential: boolean;
}

export const auditReports: AuditReport[] = [
  {
    protocol: "DeFi Lending Protocol",
    chain: "Ethereum",
    date: "2025-08",
    findings: "1 Critical \u00B7 2 High \u00B7 3 Medium \u00B7 4 Low",
    pdfUrl: "/reports/example-audit-2025-08.pdf",
    confidential: false,
  },
  {
    protocol: "Cross-Chain Bridge",
    chain: "Arbitrum / Optimism",
    date: "2025-05",
    findings: "0 Critical \u00B7 3 High \u00B7 2 Medium \u00B7 5 Low",
    pdfUrl: "/reports/example-audit-2025-05.pdf",
    confidential: false,
  },
  {
    protocol: "Protocol Name",
    chain: "Cosmos",
    date: "2025-02",
    findings: "2 High \u00B7 4 Medium \u00B7 3 Low",
    pdfUrl: "#",
    confidential: true,
  },
  {
    protocol: "Staking Derivatives Protocol",
    chain: "Ethereum",
    date: "2024-11",
    findings: "0 Critical \u00B7 1 High \u00B7 5 Medium \u00B7 2 Low",
    pdfUrl: "/reports/example-audit-2024-11.pdf",
    confidential: false,
  },
  {
    protocol: "Protocol Name",
    chain: "Solana",
    date: "2024-08",
    findings: "1 Critical \u00B7 2 High \u00B7 3 Medium \u00B7 6 Low",
    pdfUrl: "#",
    confidential: true,
  },
];
