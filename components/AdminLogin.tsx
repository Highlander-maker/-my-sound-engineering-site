"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      setError("That key didn’t work. Try again.");
    }
  }

  return (
    <div className="min-h-[70vh] grid place-items-center px-5">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl border border-line bg-ink2 p-8"
      >
        <p className="eyebrow mb-3">Highlander Audio</p>
        <h1 className="display text-3xl mb-6">Studio access</h1>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Access key"
          className="w-full rounded-lg bg-ink border border-line px-4 py-3 outline-none focus:border-tungsten/60 transition-colors"
        />
        {error && <p className="mt-3 text-sm text-signal">{error}</p>}
        <button
          disabled={loading}
          className="mt-5 w-full rounded-lg bg-bone text-ink font-medium py-3 hover:bg-tungsten transition-colors disabled:opacity-50"
        >
          {loading ? "Checking…" : "Enter"}
        </button>
      </form>
    </div>
  );
}
