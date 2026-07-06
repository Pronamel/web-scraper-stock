"use client";

import { useRouter } from "next/navigation";

export default function TempNavigation(){
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-2xl font-bold">Navigation to temp pages</h1>

      <button
        onClick={() => router.push("/login")}
        className="rounded-xl bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Go to login
      </button>

      <button
        onClick={() => router.push("/reg-forgot?mode=register")}
        className="rounded-xl bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Go to register
      </button>


      <button
        onClick={() => router.push("/reg-forgot?mode=forgot")}
        className="rounded-xl bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Go to forgot password
      </button>

      <button
        onClick={() => router.push("/settings")}
        className="rounded-xl bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Go to settings
      </button>

       
    </div>
  );
}