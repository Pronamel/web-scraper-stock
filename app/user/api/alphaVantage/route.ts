import { NextResponse } from "next/server";

const CACHE_DURATION_MS = 3600 * 1000; // 1 hour
let cachedData: unknown = null;
let cacheTimestamp = 0;

export async function GET() {
  const now = Date.now();

  if (cachedData && now - cacheTimestamp < CACHE_DURATION_MS) {
    return Response.json(cachedData);
  }

  const apiKey = process.env.AlphaVantageApiKey;
  const response = await fetch(
    `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&limit=10&apikey=${apiKey}`,
    { next: { revalidate: 3600 } }
  );

  const data = await response.json();
  cachedData = data;
  cacheTimestamp = now;

  return Response.json(data);







}