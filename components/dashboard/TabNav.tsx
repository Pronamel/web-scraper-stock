// components/dashboard/TabNav.tsx
type TabNavProperties = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const TABS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "personal-feed", label: "Personal Feed" },
  { key: "explore-feed", label: "Explore Feed" },
  { key: "search", label: "Search" },
];

export default function TabNav({ activeTab, onTabChange }: TabNavProperties) {
  return (
    <nav>
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          style={{ fontWeight: activeTab === tab.key ? "bold" : "normal" }}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
