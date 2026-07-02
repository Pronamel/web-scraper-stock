"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Home() {
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1 className="text-5xl font-bold text-center text-black dark:text-white">
          im the captian now
        </h1>
      </main>
    </div>
  );
}
