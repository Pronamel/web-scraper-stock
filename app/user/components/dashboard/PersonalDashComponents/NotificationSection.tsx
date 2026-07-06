// components/dashboard/PersonalDashComponents/NotificationsSection.tsx
export default function NotificationsSection() {
  const notifications = [
    "Placeholder notification 1",
    "Placeholder notification 2",
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        Notifications
      </h3>
      <div className="flex flex-col gap-2">
        {notifications.map((note, i) => (
          <div
            key={i}
            className="p-3 bg-white border border-gray-200 rounded-md text-sm text-gray-800"
          >
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}
