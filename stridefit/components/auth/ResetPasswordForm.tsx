"use client";

import Logo from "@/components/Logo";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const supabase = createClient();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  // Accept the recovery session from the email link (PKCE ?code= or hash tokens).
  useEffect(() => {
    async function accept() {
      const code = searchParams.get("code");
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) setError("This reset link is invalid or has expired. Request a new one.");
      }
      setReady(true);
    }
    accept();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setDone(true);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-4 py-10">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(42rem 22rem at 50% -6rem, rgba(239,113,67,0.14), transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-md">
        <Link href="/" className="mb-8 flex justify-center" aria-label="Stride home">
          <Logo markClassName="h-12 w-12" textClassName="text-4xl" />
        </Link>

        <div className="rounded-3xl border border-line bg-card p-6 shadow-[0_24px_60px_-24px_rgba(28,37,64,0.25)] sm:p-8">
          <p className="eyebrow">Password reset</p>
          <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink">
            New password<span className="text-brand-500">.</span>
          </h1>

          {!ready ? (
            <p className="mt-4 text-sm text-muted">Verifying your reset link…</p>
          ) : done ? (
            <>
              <p className="mt-3 text-sm text-muted">
                Your password has been updated. You&apos;re all set.
              </p>
              <Link
                href="/login"
                className="mt-6 block w-full rounded-full bg-brand-500 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-brand-600"
              >
                Log in
              </Link>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm text-muted">Choose a new password (8+ characters).</p>
              {error && <p className="error-text mt-5">{error}</p>}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="label" htmlFor="new-password">
                    New password
                  </label>
                  <input
                    id="new-password"
                    type="password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="field"
                    placeholder="At least 8 characters"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="confirm-password">
                    Confirm password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    required
                    autoComplete="new-password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className="field"
                    placeholder="Repeat your new password"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Updating…" : "Update password"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
