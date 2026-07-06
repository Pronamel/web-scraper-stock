// components/dashboard/PersonalDashComponents/ProfileSection.tsx
export default function ProfileSection() {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="w-16 h-16 rounded-full bg-gray-300 shrink-0" />
      <div>
        <h2 className="text-lg font-bold text-gray-800">Placeholder Name</h2>
        <p className="text-sm text-gray-500">Placeholder bio goes here.</p>
      </div>
    </div>
  );
}
