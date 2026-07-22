// app/user/dashboard/page.tsx
"use client";

import { useState } from "react";
import TabNav from "@/app/user/components/dashboard/TabNav";
import PersonalDashboardTab from "@/app/user/components/dashboard/PersonalDashTab";
import PersonalFeedTab from "@/app/user/components/dashboard/PersonalFeedTab";
import ExploreFeedTab from "@/app/user/components/dashboard/ExploreFeedTab";
import SearchTab from "@/app/user/components/dashboard/SearchTab";
import AdminTab from "@/app/user/components/dashboard/AdminTab";

const TAB_COMPONENTS: Record<string, React.ComponentType> = {
  dashboard: PersonalDashboardTab,
  "personal-feed": PersonalFeedTab,
  "explore-feed": ExploreFeedTab,
  search: SearchTab,
  admin: AdminTab,
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard"); // set the default active tab to "dashboard"
  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <div>
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="px-10 py-4">
        <ActiveComponent />
      </main>
    </div>
  );
}
