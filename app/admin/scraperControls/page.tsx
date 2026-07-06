import Link from "next/link";

const frequencies = [
  ["1 hour", "45 mins"],
  ["30 mins", "15 mins"],
  ["7 mins", "5 mins"],
];

export default async function ScraperControls({
  searchParams,
}: {
  searchParams: Promise<{ scraper?: string }>;
}) {
  const { scraper } = await searchParams;
  const scraperName = scraper ?? "Unknown Scraper";

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/admin/scrapers"
          className="text-sm text-gray-600 hover:underline"
        >
          ← Back
        </Link>
        <h1 className="text-2xl font-semibold">Scraper Controls — {scraperName}</h1>
      </div>
      <div className="border-2 border-gray-400 rounded bg-white p-6 max-w-md">
        {/* Scraping inputs */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold mb-3 text-gray-600">scraping</h2>
          <div className="space-y-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <input
                key={i}
                type="text"
                className="w-48 border border-gray-400 rounded px-2 py-1 text-sm block"
                placeholder=""
              />
            ))}
          </div>
        </div>

        {/* Scraping Frequency */}
        <div>
          <h2 className="text-sm font-semibold mb-3 text-gray-600">Scraping Frequency</h2>
          <div className="grid grid-cols-2 gap-2 w-48">
            {frequencies.flat().map((label) => (
              <button
                key={label}
                className="border border-gray-400 rounded px-3 py-1 text-sm hover:bg-gray-100 transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
