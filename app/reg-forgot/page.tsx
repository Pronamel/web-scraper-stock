// app/reg-forgot/page.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function RegForgotContent() {
  const router = useRouter();
  const params = useSearchParams();
  const mode = params.get("mode"); // "register" | "forgot"

  const isForgot = mode === "forgot";
  const isRegister = mode === "register";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      {/* Logo + site name */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-6xl">📈</span>
        <h1 className="text-5xl font-extrabold tracking-tight">StockScraper</h1>
      </div>

      {/* Forgot password */}
      {isForgot && (
        <form
          className="flex w-full max-w-sm flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-xl font-semibold text-center">Reset your password</h2>
          <p className="text-sm text-gray-500 text-center">
            Enter your email and we&apos;ll send you a reset link.
          </p>

          <div className="flex flex-col gap-1">
            <label htmlFor="reset-email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="reset-email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Send reset link
          </button>
        </form>
      )}

      {/* Register */}
      {isRegister && (
        <form
          className="flex w-full max-w-sm flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-xl font-semibold text-center">Create an account</h2>

          <div className="flex flex-col gap-1">
            <label htmlFor="reg-email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="reg-email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="reg-password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="reg-password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="••••••••"
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="reg-confirm" className="text-sm font-medium">
              Confirm password
            </label>
            <input
              id="reg-confirm"
              type="password"
              autoComplete="new-password"
              required
              placeholder="••••••••"
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Register
          </button>
        </form>
      )}

      {/* Back to login */}
      <button
        type="button"
        onClick={() => router.push("/login")}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back to login
      </button>
    </main>
  );
}

export default function RegForgotPage() {
  return (
    <Suspense>
      <RegForgotContent />
    </Suspense>
  );
}
