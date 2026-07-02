"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

type User = {
  id: string;
  username: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const burst = () => {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0 },
        startVelocity: 45,
      });
    };

    burst();
    const id = setInterval(burst, 10000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setUsers(data);
        }
      })
      .catch(() => setError("Failed to fetch users"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold text-center text-black dark:text-white">
          im the captian now
        </h1>

        <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <div className="border-b border-zinc-200 px-4 py-3 dark:border-zinc-700">
            <h2 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
              Users
            </h2>
          </div>
          <div className="p-4">
            {loading && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading...</p>
            )}
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
            {!loading && !error && users.length === 0 && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">No users found.</p>
            )}
            {!loading && !error && users.length > 0 && (
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-zinc-500 dark:text-zinc-400">
                    <th className="pb-2 font-medium">ID</th>
                    <th className="pb-2 font-medium">Username</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {users.map((user) => (
                    <tr key={user.id} className="text-zinc-800 dark:text-zinc-200">
                      <td className="py-2 font-mono text-xs text-zinc-400">{user.id}</td>
                      <td className="py-2">{user.username}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
