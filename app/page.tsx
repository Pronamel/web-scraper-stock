"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <button
        onClick={() => router.push("/TempNavigation")}
        className="rounded-xl bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Go to navigation
      </button>
    </main>
  );
}
