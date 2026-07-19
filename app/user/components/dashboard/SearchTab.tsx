// components/dashboard/SearchTab.tsx
export default function SearchTab() {
  const currentNews = [
    "Placeholder news 1",
    "Placeholder news 2",
    "Placeholder news 3",
  ];
  const recentSearches = ["AAPL", "TSLA", "NVDA"];
  const trendingKeywords = ["earnings", "inflation", "AI stocks"];

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search stocks, news, tags..."
        className="w-full px-4 py-2 border border-[#8458B3] bg-[#262826] text-[#E5EAF5] placeholder-[#E5EAF5]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D0BDF4]"
      />

      {/* Current news row */}
      <div>
        <h3 className="text-sm font-semibold text-[#E5EAF5] mb-2">
          Current News
        </h3>
        <div className="flex flex-col gap-2">
          {currentNews.map((item, i) => (
            <div
              key={i}
              className="p-3 bg-[#262826] border border-[#D0BDF4] rounded-md text-sm text-[#E5EAF5]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Recent searches row */}
      <div>
        <h3 className="text-sm font-semibold text-[#E5EAF5] mb-2">
          Recent Searches
        </h3>
        <div className="flex flex-wrap gap-2">
          {recentSearches.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[#262826] rounded-full text-sm text-[#E5EAF5]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Trending keywords row */}
      <div>
        <h3 className="text-sm font-semibold text-[#E5EAF5] mb-2">
          Trending Keywords
        </h3>
        <div className="flex flex-wrap gap-2">
          {trendingKeywords.map((item, i) => (
            <span key={i} className="px-3 py-1 bg-blue-50 rounded-full text-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
