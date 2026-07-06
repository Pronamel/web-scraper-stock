// components/dashboard/PersonalDashTab.tsx
import ProfileSection from "./PersonalDashComponents/ProfileSection";
import GraphsSection from "./PersonalDashComponents/GraphsSection";
import NotificationsSection from "./PersonalDashComponents/NotificationSection";
import SubscribedScrapersSection from "./PersonalDashComponents/SubscribedScrapersSection";

export default function PersonalDashTab() {
  return (
    <div className="flex flex-col gap-6">
      <ProfileSection />
      <GraphsSection />
      <NotificationsSection />
      <SubscribedScrapersSection />
    </div>
  );
}
