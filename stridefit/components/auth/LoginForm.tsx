"use client";

import Logo from "@/components/Logo";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.9-.1-1.5-.3-2.3H12v4.3h6.5c-.1 1.1-.8 2.7-2.4 3.8l3.7 2.9c2.3-2.1 3.7-5.2 3.7-8.7z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.7-2.9c-1 .7-2.4 1.2-4.2 1.2-3.2 0-5.9-2.1-6.8-5l-3.9 3C3.3 21.3 7.3 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.2 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4l-3.9-3C.5 8.2 0 10 0 12s.5 3.8 1.3 5.4l3.9-3z"
      />
      <path
        fill="#EA4335"
        d="M12 4.7c1.8 0 3 .8 3.7 1.4l3.3-3.2C17.9 1.1 15.2 0 12 0 7.3 0 3.3 2.7 1.3 6.6l3.9 3c.9-2.9 3.6-4.9 6.8-4.9z"
      />
    </svg>
  );
}

export default function LoginForm({ next }: { next: string }) {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "forgot">("login");
  const [resetSent, setResetSent] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push(next);
    router.refresh();
  }

  async function handleGoogle() {
    setError(null);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${siteUrl}/app` },
    });
    if (error) setError(error.message);
  }

  async function handleForgot(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${siteUrl}/reset-password`,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setResetSent(true);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-4 py-10">
      {/* soft brand wash */}
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
          {mode === "login" ? (
            <>
              <p className="eyebrow">Member login</p>
              <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink">
                Welcome back<span className="text-brand-500">.</span>
              </h1>
              <p className="mt-2 text-sm text-muted">
                Your workouts, meals, and miles are waiting.
              </p>

              {error && <p className="error-text mt-5">{error}</p>}

              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <div>
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="field"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-sm font-semibold text-ink" htmlFor="password">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setMode("forgot")}
                      className="text-sm font-semibold text-brand-700 hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="field pr-16"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute inset-y-0 right-0 px-4 text-sm font-semibold text-muted hover:text-ink"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Logging in…" : "Log in"}
                </button>
              </form>

              <div className="my-6 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted">
                <span className="h-px flex-1 bg-line" /> or <span className="h-px flex-1 bg-line" />
              </div>

              <button
                onClick={handleGoogle}
                className="flex w-full items-center justify-center gap-3 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold text-ink transition hover:bg-sand"
              >
                <GoogleIcon />
                Continue with Google
              </button>

              <p className="mt-6 text-center text-sm text-muted">
                New to Stride?{" "}
                <Link href="/signup" className="font-bold text-brand-700 hover:underline">
                  Create a free account
                </Link>
              </p>
            </>
          ) : (
            <>
              <p className="eyebrow">Password reset</p>
              <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink">
                Reset it<span className="text-brand-500">.</span>
              </h1>
              {resetSent ? (
                <>
                  <p className="mt-3 text-sm text-muted">
                    If an account exists for <strong className="text-ink">{email}</strong>,
                    a reset link is on its way. Check your inbox (and spam folder).
                  </p>
                  <button
                    onClick={() => {
                      setMode("login");
                      setResetSent(false);
                      setError(null);
                    }}
                    className="mt-6 w-full rounded-full bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-950"
                  >
                    Back to log in
                  </button>
                </>
              ) : (
                <>
                  <p className="mt-2 text-sm text-muted">
                    Enter your email and we&apos;ll send you a link to set a new password.
                  </p>
                  {error && <p className="error-text mt-5">{error}</p>}
                  <form onSubmit={handleForgot} className="mt-6 space-y-4">
                    <div>
                      <label className="label" htmlFor="reset-email">
                        Email
                      </label>
                      <input
                        id="reset-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="field"
                        placeholder="you@example.com"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {loading ? "Sending…" : "Send reset link"}
                    </button>
                  </form>
                  <button
                    onClick={() => {
                      setMode("login");
                      setError(null);
                    }}
                    className="mt-4 w-full text-center text-sm font-semibold text-muted hover:text-ink"
                  >
                    ← Back to log in
                  </button>
                </>
              )}
            </>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          Free forever · No credit card · Cancel anytime
        </p>
      </div>
    </div>
  );
}
