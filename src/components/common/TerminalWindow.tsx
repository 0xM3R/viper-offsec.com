"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const sessions = [
  `$ viper audit --target ./contracts/Vault.sol --chain ethereum
[CRITICAL]  Reentrancy in withdraw() → line 142
[HIGH]      Missing access control on setOwner() → line 89
[MEDIUM]    Oracle price manipulation vector → line 203
[INFO]      Gas optimization opportunity → line 317

4 findings. Report: ./reports/vault-audit.pdf`,

  `$ viper audit --target ./contracts/Bridge.sol --chain arbitrum
[CRITICAL]  Cross-chain message replay attack → line 78
[HIGH]      Unchecked return value on transfer() → line 156
[LOW]       Timestamp dependence → line 290

3 findings. Report: ./reports/bridge-audit.pdf`,

  `$ viper audit --target ./contracts/AMM.sol --chain base
[CRITICAL]  Flash loan price manipulation → line 201
[HIGH]      Sandwich attack vector in swap() → line 334
[MEDIUM]    Precision loss in fee calculation → line 412
[INFO]      Dead code path → line 509

4 findings. Report: ./reports/amm-audit.pdf`,

  `$ viper audit --target ./agent/loan-bot --mode ai-redteam
[CRITICAL]  Prompt injection via user input → tool misuse confirmed
[CRITICAL]  On-chain tx signing bypassed via jailbreak → line 34
[HIGH]      RAG pipeline leaks system prompt context → endpoint /query
[HIGH]      Agent escalates privileges via chained tool calls
[MEDIUM]    LLM output used directly in transfer() without validation
[INFO]      Model fingerprinting possible via timing oracle

6 findings. Report: ./reports/ai-agent-audit.pdf`,
];

function getLineColor(line: string): string {
  if (line.startsWith("$")) return "text-emerald-400";
  if (line.startsWith("[CRITICAL]")) return "text-red-400";
  if (line.startsWith("[HIGH]")) return "text-orange-400";
  if (line.startsWith("[MEDIUM]")) return "text-yellow-400";
  if (line.startsWith("[LOW]")) return "text-blue-400";
  if (line.startsWith("[INFO]")) return "text-zinc-500";
  if (line.startsWith(">")) return "text-emerald-300";
  return "text-zinc-400";
}

export function TerminalWindow() {
  const [displayText, setDisplayText] = useState("");
  const [sessionIdx, setSessionIdx] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const charIdx = useRef(0);
  const phase = useRef<"typing" | "pausing" | "fading-out" | "fading-in">("typing");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentSession = sessions[sessionIdx];

  const tick = useCallback(() => {
    if (phase.current === "typing") {
      if (charIdx.current < currentSession.length) {
        charIdx.current++;
        setDisplayText(currentSession.slice(0, charIdx.current));
        timerRef.current = setTimeout(tick, 16);
      } else {
        phase.current = "pausing";
        timerRef.current = setTimeout(tick, 2800);
      }
    } else if (phase.current === "pausing") {
      phase.current = "fading-out";
      setOpacity(0);
      timerRef.current = setTimeout(tick, 300);
    } else if (phase.current === "fading-out") {
      charIdx.current = 0;
      setDisplayText("");
      setSessionIdx((prev) => (prev + 1) % sessions.length);
      phase.current = "fading-in";
      setOpacity(1);
      timerRef.current = setTimeout(tick, 100);
    } else if (phase.current === "fading-in") {
      phase.current = "typing";
      timerRef.current = setTimeout(tick, 16);
    }
  }, [currentSession]);

  useEffect(() => {
    phase.current = "typing";
    charIdx.current = 0;
    timerRef.current = setTimeout(tick, 300);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [tick]);

  const lines = displayText.split("\n");

  return (
    <div className="relative">
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden relative">
        <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
          <span className="font-mono text-xs text-zinc-500 ml-2">audit.sol</span>
        </div>
        <div
          className="bg-[#0a0a0b] p-5 font-mono text-sm min-h-[320px] transition-opacity duration-300"
          style={{ opacity }}
        >
          {lines.map((line, i) => {
            if (line === "") return <br key={i} />;
            return (
              <div key={i} className={getLineColor(line)}>
                {line}
                {i === lines.length - 1 && (
                  <span className="text-emerald-400 animate-pulse">▋</span>
                )}
              </div>
            );
          })}
          {displayText === "" && (
            <span className="text-emerald-400 animate-pulse">▋</span>
          )}
        </div>
      </div>
      <div className="absolute -bottom-3 -left-3 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono text-xs text-zinc-300">audit in progress</span>
      </div>
    </div>
  );
}
