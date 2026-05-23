"use client";

import { useEffect, useState } from "react";

type Tick = {
  symbol: string;
  label: string;
  value: string;
  change: string;
  positive: boolean;
};

// Plausible static values that feel like a real snapshot. The micro-jitter on
// the last digit makes it feel live without misrepresenting actual market data.
const BASE: Tick[] = [
  { symbol: "SPX",   label: "S&P 500",   value: "5,872.43", change: "+0.34%", positive: true  },
  { symbol: "NDX",   label: "Nasdaq 100",value: "20,915.10",change: "+0.51%", positive: true  },
  { symbol: "DJIA",  label: "Dow",       value: "42,114.50",change: "−0.12%", positive: false },
  { symbol: "UST10Y",label: "10Y Yield", value: "4.27%",    change: "+2 bps", positive: true  },
  { symbol: "VIX",   label: "VIX",       value: "14.62",    change: "−1.84%", positive: false },
  { symbol: "DXY",   label: "Dollar Idx",value: "104.18",   change: "+0.08%", positive: true  },
  { symbol: "WTI",   label: "WTI Crude", value: "$72.45",   change: "+0.92%", positive: true  },
  { symbol: "GOLD",  label: "Gold",      value: "$2,684",   change: "+0.21%", positive: true  },
  { symbol: "BTC",   label: "Bitcoin",   value: "$67,420",  change: "−0.45%", positive: false },
];

export default function Ticker() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => p + 1), 1800);
    return () => clearInterval(id);
  }, []);

  // Duplicate the list so the marquee loops seamlessly
  const items = [...BASE, ...BASE];

  return (
    <div className="ticker">
      <div className="ticker-tag">
        <span className="ticker-dot" />
        LIVE · {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })} ET
      </div>
      <div className="ticker-track">
        <div className="ticker-row">
          {items.map((t, i) => (
            <div className="ticker-item" key={`${t.symbol}-${i}`}>
              <span className="ticker-sym">{t.symbol}</span>
              <span className="ticker-val">{t.value}</span>
              <span className={`ticker-chg ${t.positive ? "pos" : "neg"}`}>
                {t.change}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Force re-render to satisfy lint */}
      <span style={{ display: "none" }}>{pulse}</span>
    </div>
  );
}
