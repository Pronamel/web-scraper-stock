export async function GET() {
  const apiKey = process.env.AlphaVantageApiKey;
  const $ = await fetch(
    `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&limit=10&apikey=${apiKey}`,
    { next: { revalidate: 3600 } } // cache for 1 hour — only calls Alpha Vantage once per hour
  );

  const data = await $.json();

  return Response.json(data);









}