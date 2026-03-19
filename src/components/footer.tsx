import Link from "next/link";

const footerColumns = [
  {
    title: "Services",
    links: [
      { href: "/services#smart-contract-audit", label: "Smart Contract Audit" },
      { href: "/services#red-team", label: "Red Team" },
      { href: "/services#blockchain-infrastructure", label: "Infrastructure Security" },
      { href: "/services#security-architecture", label: "Architecture Review" },
      { href: "/services#vulnerability-research", label: "Vulnerability Research" },
      { href: "/services#vciso", label: "vCISO / Advisory" },
      { href: "/services#ai-security", label: "AI Security" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/reports", label: "Public Reports" },
      { href: "/research", label: "Research Blog" },
      { href: "/research#talks", label: "Talks & Presentations" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-viper-dark-border bg-viper-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-viper-green font-mono text-lg font-bold">
              VIPER<span className="text-viper-gray ml-1 text-sm">offsec</span>
            </Link>
            <p className="mt-3 text-sm text-viper-gray max-w-xs">
              Boutique Web3 security consultancy. Smart contract audits, red team operations, and
              blockchain infrastructure security.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium text-foreground mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-viper-gray hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-viper-gray">
              <li>
                <a
                  href="mailto:info@viper-offsec.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@viper-offsec.com
                </a>
              </li>
              <li>Netherlands</li>
              <li className="flex gap-3 pt-2">
                <a href="#" className="hover:text-viper-green transition-colors" aria-label="LinkedIn">
                  LinkedIn
                </a>
                <a href="https://github.com/viper-offsec" className="hover:text-viper-green transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="#" className="hover:text-viper-green transition-colors" aria-label="X">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-viper-dark-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-viper-gray">
            &copy; {new Date().getFullYear()} Viper Offensive Security Ltd. All rights reserved.
          </p>
          <p className="text-xs text-viper-gray">Registered in the UK &amp; Netherlands</p>
        </div>
      </div>
    </footer>
  );
}
