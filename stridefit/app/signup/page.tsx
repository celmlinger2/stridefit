"use client";

import Logo from "@/components/Logo";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!consent) {
      setError("Please consent to health data collection to create your account.");
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName },
      },
    });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    // Record consent on the profile (RLS allows the user to update their own row).
    if (data.user) {
      await supabase.from("profiles").upsert({
        id: data.user.id,
        display_name: displayName || null,
        health_data_consent: true,
        health_data_consented_at: new Date().toISOString(),
      });
    }
    setLoading(false);
    if (data.session) {
      router.push("/app");
      router.refresh();
    } else {
      setCheckEmail(true);
    }
  }

  async function handleGoogle() {
    setError(null);
    if (!consent) {
      setError("Please consent to health data collection before continuing with Google.");
      return;
    }
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${siteUrl}/app` },
    });
    if (error) setError(error.message);
    // Note: for OAuth signups, consent is recorded on first /app load via profile upsert.
  }

  if (checkEmail) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4">
        <div className="card w-full max-w-md text-center">
          <h1 className="text-2xl font-extrabold text-ink">Check your inbox</h1>
          <p className="mt-2 text-sm text-muted">
            We sent a confirmation link to <strong>{email}</strong>. Click it to
            finish creating your account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 py-10">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2">
                    <Logo markClassName="h-10 w-10" textClassName="text-3xl" />
        </Link>
        <div className="card">
          <p className="eyebrow">Free account</p>
          <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink">Join Stride<span className="text-brand-500">.</span></h1>
          <p className="mt-2 text-sm text-muted">
            Track nutrition, workouts, and cardio — free forever.
          </p>

          {error && <p className="error-text mt-4">{error}</p>}

          <form onSubmit={handleSignup} className="mt-6 space-y-4">
            <div>
              <label className="label" htmlFor="displayName">Display name</label>
              <input id="displayName" type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="field" placeholder="Alex" />
            </div>
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="field" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label" htmlFor="password">Password</label>
              <input id="password" type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className="field" placeholder="At least 8 characters" />
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-sand p-4 text-sm">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-brand-600"
              />
              <span className="text-ink">
                I consent to Stride collecting and storing my health and
                fitness data (meals, workouts, cardio activity) to provide the
                service, as described in the{" "}
                <Link href="/privacy" className="font-semibold text-brand-700 hover:underline">
                  Privacy Policy
                </Link>
                . I can export or delete my data at any time.
              </span>
            </label>

            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? "Creating account…" : "Create free account"}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 text-xs text-muted">
            <span className="h-px flex-1 bg-line" /> or <span className="h-px flex-1 bg-line" />
          </div>

          <button onClick={handleGoogle} className="btn-secondary w-full">
            Continue with Google
          </button>

          <p className="mt-6 text-center text-sm text-muted">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-brand-700 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
