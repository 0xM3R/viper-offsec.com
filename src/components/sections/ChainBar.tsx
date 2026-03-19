"use client";

const chains = [
  {
    name: "Ethereum",
    color: "#627EEA",
    tag: "EVM",
    logo: (
      <svg viewBox="0 0 100 100" className="w-[38px] h-[38px]">
        <polygon points="50,10 80,52 50,68 20,52" fill="none" stroke="#627EEA" strokeWidth="3" />
        <polygon points="50,68 80,52 50,90 20,52" fill="none" stroke="#627EEA" strokeWidth="3" />
      </svg>
    ),
  },
  {
    name: "Arbitrum",
    color: "#28A0F0",
    tag: "L2",
    logo: (
      <svg viewBox="0 0 100 100" className="w-[38px] h-[38px]">
        <path d="M30,80 L50,20 L70,80 M38,60 L62,60" fill="none" stroke="#28A0F0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Optimism",
    color: "#FF0420",
    tag: "OP Stack",
    logo: (
      <svg viewBox="0 0 100 100" className="w-[38px] h-[38px]">
        <circle cx="50" cy="50" r="35" fill="#FF0420" />
        <circle cx="50" cy="50" r="14" fill="#09090b" />
      </svg>
    ),
  },
  {
    name: "Base",
    color: "#0052FF",
    tag: "OP Stack",
    logo: (
      <svg viewBox="0 0 100 100" className="w-[38px] h-[38px]">
        <circle cx="50" cy="50" r="35" fill="#0052FF" />
        <circle cx="50" cy="50" r="14" fill="#09090b" />
      </svg>
    ),
  },
  {
    name: "ZKsync",
    color: "#1B5EF7",
    tag: "ZK Rollup",
    logo: (
      <svg viewBox="0 0 100 100" className="w-[38px] h-[38px]">
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="#1B5EF7" strokeWidth="3" />
        <path d="M30,40 L70,40 L30,60 L70,60" fill="none" stroke="#1B5EF7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Polygon",
    color: "#8247E5",
    tag: "ZK / PoS",
    logo: (
      <svg viewBox="0 0 100 100" className="w-[38px] h-[38px]">
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="#8247E5" strokeWidth="3" />
        <polygon points="50,30 70,42 70,62 50,74 30,62 30,42" fill="none" stroke="#8247E5" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Solana",
    color: "#9945FF",
    tag: "SVM",
    logo: (
      <svg viewBox="0 0 100 100" className="w-[38px] h-[38px]">
        <rect x="20" y="25" width="60" height="8" rx="2" fill="#9945FF" />
        <rect x="25" y="40" width="50" height="8" rx="2" fill="#9945FF" />
        <rect x="30" y="55" width="40" height="8" rx="2" fill="#9945FF" />
        <rect x="35" y="70" width="30" height="8" rx="2" fill="#9945FF" />
      </svg>
    ),
  },
  {
    name: "BNB Chain",
    color: "#F0B90B",
    tag: "EVM",
    logo: (
      <svg viewBox="0 0 100 100" className="w-[38px] h-[38px]">
        <polygon points="50,15 82,33 82,67 50,85 18,67 18,33" fill="none" stroke="#F0B90B" strokeWidth="3" />
        <polygon points="50,35 65,43 65,57 50,65 35,57 35,43" fill="#F0B90B" />
      </svg>
    ),
  },
  {
    name: "Avalanche",
    color: "#E84142",
    tag: "EVM",
    logo: (
      <svg viewBox="0 0 100 100" className="w-[38px] h-[38px]">
        <polygon points="50,15 85,80 15,80" fill="none" stroke="#E84142" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="50,40 65,68 35,68" fill="#E84142" />
      </svg>
    ),
  },
  {
    name: "Cosmos",
    color: "#6F7390",
    tag: "IBC",
    logo: (
      <svg viewBox="0 0 100 100" className="w-[38px] h-[38px]">
        <circle cx="50" cy="50" r="8" fill="#6F7390" />
        <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#6F7390" strokeWidth="2" />
        <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#6F7390" strokeWidth="2" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#6F7390" strokeWidth="2" transform="rotate(120 50 50)" />
      </svg>
    ),
  },
];

export function ChainBar() {
  return (
    <section className="py-16 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-8">
          {"// chains audited"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="group bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer relative overflow-hidden transition-all duration-200 hover:-translate-y-[3px] hover:bg-zinc-900"
              style={
                {
                  "--chain-color": chain.color,
                } as React.CSSProperties
              }
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ backgroundColor: chain.color }}
              />
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${chain.color}15` }}
              >
                {chain.logo}
              </div>
              <span className="font-mono text-xs text-zinc-400">{chain.name}</span>
              <span
                className="font-mono text-[9px] px-1.5 py-0.5 rounded border"
                style={{
                  color: chain.color,
                  borderColor: `${chain.color}59`,
                  backgroundColor: `${chain.color}14`,
                }}
              >
                {chain.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
