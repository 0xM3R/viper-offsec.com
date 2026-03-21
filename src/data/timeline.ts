export interface TimelineEntry {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    year: "2024",
    title: "DEF CON Speaker",
    organization: "DEF CON",
    description:
      "Presented research on cross-chain bridge vulnerabilities to the global security community.",
  },
  {
    year: "2022–Present",
    title: "Founder & Principal Consultant",
    organization: "Viper Offensive Security Ltd",
    description:
      "Founded hands-on offensive security practice. Delivering smart contract audits, penetration testing, red team operations, and blockchain infrastructure security for protocols including Rootstock, ZetaChain, IFT, and BitMEX.",
  },
  {
    year: "2019–2022",
    title: "Head of Security",
    organization: "Bird (Scooter Unicorn)",
    description:
      "Led security program at European scooter unicorn. Built and managed the security team, oversaw penetration testing, incident response, and security architecture.",
  },
  {
    year: "2017–2019",
    title: "Offensive Security Consultant",
    organization: "KPN",
    description:
      "Conducted red team operations and penetration testing for one of the largest telecommunications providers in the Netherlands.",
  },
  {
    year: "2012–2017",
    title: "Digital Forensics & Malware Analyst",
    organization: "Netherlands Forensic Institute",
    description:
      "Performed digital forensics investigations and malware analysis for law enforcement and national security cases.",
  },
  {
    year: "2011",
    title: "BEng Computer Science",
    organization: "Wrocław University of Science and Technology",
    description:
      "Bachelor of Engineering in Computer Science from one of Poland's leading technical universities.",
  },
];
