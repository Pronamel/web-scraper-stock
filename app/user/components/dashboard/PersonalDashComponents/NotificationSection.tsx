// components/dashboard/PersonalDashComponents/NotificationsSection.tsx
export default function NotificationsSection() {
  const notifications = [
    "Placeholder notification 1",
    "Placeholder notification 2",
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold text-[#E5EAF5] mb-2">
        Notifications
      </h3>
      <div className="flex flex-col gap-2">
        {notifications.map((note, i) => (
          <div
            key={i}
            className="p-3 bg-[#262826] border border-[#D0BDF4] rounded-md text-sm text-[#E5EAF5]"
          >
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}
