import Link from "next/link";

export default function Scrapers() {
  const scraperList = ["Scraper 1", "Scraper 2", "Scraper 3", "Scraper 4", "Scraper 5"];
  const blackList = ["Domain 1", "Domain 2", "Domain 3", "Domain 4", "Domain 5"];

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/admin/controlPannel"
          className="text-sm text-gray-600 hover:underline"
        >
          ← Back
        </Link>
        <h1 className="text-2xl font-semibold">Scrapers</h1>
      </div>
      <div className="flex gap-8 max-w-2xl">
        {/* Scraper List */}
        <div className="flex-1 border-2 border-gray-400 rounded bg-white p-4">
          <h2 className="text-sm font-semibold mb-3 text-gray-600">Scraper List</h2>
          <ul className="space-y-2">
            {scraperList.map((item) => (
              <li key={item}>
                <Link
                  href={`/admin/scraperControls?scraper=${encodeURIComponent(item)}`}
                  className="block border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Black List */}
        <div className="flex-1 border-2 border-gray-400 rounded bg-white p-4">
          <h2 className="text-sm font-semibold mb-3 text-gray-600">Black List</h2>
          <ul className="space-y-2">
            {blackList.map((item) => (
              <li
                key={item}
                className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
