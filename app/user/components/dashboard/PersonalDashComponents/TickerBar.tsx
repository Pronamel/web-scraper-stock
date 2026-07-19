// components/dashboard/PersonalDashComponents/TickerBar.tsx
"use client";

import { useEffect, useState } from "react";

type TickerItemProps = {
  label: string;
  value: number;
  changePercent: number;
};

function TickerItem({ label, value, changePercent }: TickerItemProps) {
  const isUp = changePercent >= 0;

  return (
    <div className="flex items-center justify-between gap-6 px-4 py-2 min-w-[140px]">
      <span
        className={`text-[16px] font-semibold tracking-wide ${
          isUp ? "text-green-500" : "text-red-500"
        }`}
      >
        {label}
      </span>
      <span className="text-sm font-mono text-white/70">{typeof value === "number" ? value.toFixed(2) : "—"}</span>
    </div>
  );
}

export default function TickerBar() {
  const [tickerItems, setTickerItems] = useState<TickerItemProps[]>([]);

  useEffect(() => {
    const fetchTickers = async () => {
      try {
        const res = await fetch("/user/api/finnHub");
        if (!res.ok) return; // keep existing data on HTTP error
        const data = await res.json();

        const formatted: TickerItemProps[] = data.map((quote: any) => ({
          label: quote.symbol,
          value: quote.price,
          changePercent: quote.changePercent,
        }));

        // Only update if we actually got valid quotes back
        if (formatted.length > 0) setTickerItems(formatted);
      } catch {
        // Network error — keep existing data
      }
    };

    fetchTickers();
    const interval = setInterval(fetchTickers, 15000); // 10 tickers × 4/min = 40 req/min
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[black] flex items-center">
      {tickerItems.map((item) => (
        <TickerItem key={item.label} {...item} />
      ))}
    </div>
  );
}