"use client";

import { useState } from "react";

/**
 * Email capture form (UI only for the scaffold).
 * Wire `onSubscribe` to your newsletter provider (e.g. ConvertKit, Beehiiv)
 * when ready — see README.
 */
export default function EmailCapture({
  heading = "Get weekly training tips",
  subheading = "One short email a week. No spam, unsubscribe anytime.",
}: {
  heading?: string;
  subheading?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    // TODO: POST to newsletter provider.
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-brand-50 p-6 text-center">
        <p className="font-semibold text-brand-800">
          You&apos;re on the list — welcome to StrideFit!
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-slate-900 p-6 sm:p-8">
      <h3 className="text-xl font-bold text-white">{heading}</h3>
      <p className="mt-1 text-sm text-slate-300">{subheading}</p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-full border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-accent-400 px-6 py-2.5 text-sm font-bold text-slate-900 hover:bg-accent-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
