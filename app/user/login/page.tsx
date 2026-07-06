// app/login/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      {/* Logo + site name */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-6xl">📈</span>
        <h1 className="text-5xl font-extrabold tracking-tight">StockScraper</h1>
      </div>

      {/* Login form */}
      <form
        className="flex w-full max-w-sm flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/user/dashboard");
        }}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="••••••••"
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Log in
        </button>
        <button
          type="button"
          className="mt-2 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
          onClick={() => router.push("/admin/login")}
        >
          Admin Login
        </button>

        {/* Register / Forgot password links */}
        <div className="flex justify-between text-sm">
          <button
            type="button"
            onClick={() => router.push("/user/reg-forgot?mode=forgot")}
            className="text-blue-600 hover:underline"
          >
            Forgot password?
          </button>
          <button
            type="button"
            onClick={() => router.push("/user/reg-forgot?mode=register")}
            className="text-blue-600 hover:underline"
          >
            Register
          </button>
        </div>
      </form>
    </main>
  );
}
