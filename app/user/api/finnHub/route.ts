import { NextResponse } from "next/server";

const CACHE_DURATION_MS = 30 * 1000; // 30 seconds
let cachedQuotes: unknown[] | null = null;
let cacheTimestamp = 0;

export async function GET() {
  const now = Date.now();

  // Serve cached data if still fresh
  if (cachedQuotes && now - cacheTimestamp < CACHE_DURATION_MS) {
    return NextResponse.json(cachedQuotes);
  }

  const apiKey = process.env.FinnHubApiKey;
  const tickers = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA", "NVDA", "META", "NFLX", "INTC", "AMD"];

  const quotes = await Promise.all(
    tickers.map(async (symbol) => {
      const res = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
      );
      const data = await res.json();

      return {
        symbol,
        price: data.c,
        change: data.d,
        changePercent: data.dp,
      };
    })
  );

  const valid = quotes.filter((q) => typeof q.price === "number" && !isNaN(q.price));

  // Only replace the cache when we get a full successful response
  if (valid.length === tickers.length) {
    cachedQuotes = valid;
    cacheTimestamp = now;
  } else if (cachedQuotes) {
    // Partial/failed fetch — return the last good cache rather than degraded data
    return NextResponse.json(cachedQuotes);
  }

  return NextResponse.json(valid);
}