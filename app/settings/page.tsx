"use client";
import { useRouter } from "next/navigation";


export default function SettingsPage() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <button
        onClick={() => router.push("/account-settings")}
        className="w-125 rounded-xl bg-white py-5 text-xl font-semibold text-gray-800 hover:bg-gray-200 transition-colors border-2 border-gray-300"
      >
        Account Settings
      </button>

      <button
        onClick={() => router.push("/general-settings")}
        className="w-125 rounded-xl bg-white py-5 text-xl font-semibold text-gray-800 hover:bg-gray-200 transition-colors border-2 border-gray-300"
      >
        General Settings
      </button>

      <button
        onClick={() => router.push("/sign-out")}
        className="w-125 rounded-xl bg-white py-5 text-xl font-semibold text-gray-800 hover:bg-gray-200 transition-colors border-2 border-gray-300"
      >
        Sign out
      </button>

      <button
        onClick={() => router.push("/bank-account-settings")}
        className="w-125 rounded-xl bg-white py-5 text-xl font-semibold text-gray-800 hover:bg-gray-200 transition-colors border-2 border-gray-300"
      >
        Bank Account Settings
      </button>
    </div>
  );
}