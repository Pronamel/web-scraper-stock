// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import TabNav from "@/components/dashboard/TabNav";
import PersonalDashboardTab from "@/components/dashboard/PersonalDashTab";
import PersonalFeedTab from "@/components/dashboard/PersonalFeedTab";
import ExploreFeedTab from "@/components/dashboard/ExploreFeedTab";
import SearchTab from "@/components/dashboard/SearchTab";

const TAB_COMPONENTS: Record<string, React.ComponentType> = {
  dashboard: PersonalDashboardTab,
  "personal-feed": PersonalFeedTab,
  "explore-feed": ExploreFeedTab,
  search: SearchTab,
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard"); // set the default active tab to "dashboard"
  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <div>
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        <ActiveComponent />
      </main>
    </div>
  );
}
