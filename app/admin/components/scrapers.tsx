// components/admin/Scrapers.tsx
"use client";

import { useState } from "react";
import ScraperControls from "./scraperControls";

export default function Scrapers() {
  const [selectedScraper, setSelectedScraper] = useState<string | null>(null);

  const scraperList = [
    "Scraper 1",
    "Scraper 2",
    "Scraper 3",
    "Scraper 4",
    "Scraper 5",
  ];
  const blackList = [
    "Domain 1",
    "Domain 2",
    "Domain 3",
    "Domain 4",
    "Domain 5",
  ];

  // If a scraper is selected, show its controls instead of the list
  if (selectedScraper) {
    return (
      <ScraperControls
        scraper={selectedScraper}
        onBack={() => setSelectedScraper(null)}
      />
    );
  }

  return (
    <div className="flex gap-8 max-w-2xl">
      {/* Scraper List */}
      <div className="flex-1 border-2 border-gray-700 rounded bg-[#262826] p-4">
        <h2 className="text-sm font-semibold mb-3 text-gray-600">
          Scraper List
        </h2>
        <ul className="space-y-2">
          {scraperList.map((item) => (
            <li key={item}>
              <button
                onClick={() => setSelectedScraper(item)}
                className="w-full text-left border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Black List */}
      <div className="flex-1 border-2 border-gray-700 rounded bg-[#262826] p-4">
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
  );
}
