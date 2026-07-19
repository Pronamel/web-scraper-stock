// components/dashboard/PersonalDashComponents/SubscribedScrapersSection.tsx
export default function SubscribedScrapersSection() {
  const scrapers = ["Placeholder scraper 1", "Placeholder scraper 2"];

  return (
    <div>
      <h3 className="text-sm font-semibold text-[#E5EAF5] mb-2">
        Subscribed Web Scrapers
      </h3>
      <div className="flex flex-col gap-2">
        {scrapers.map((scraper, i) => (
          <div
            key={i}
            className="p-3 bg-[#262826] border border-[#D0BDF4] rounded-md text-sm text-[#E5EAF5]"
          >
            {scraper}
          </div>
        ))}
      </div>
    </div>
  );
}
