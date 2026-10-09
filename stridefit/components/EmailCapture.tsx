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
      <div className="rounded-3xl bg-brand-50 p-6 text-center">
        <p className="font-semibold text-brand-800">
          You&apos;re on the list — welcome to StrideFit!
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-navy-900 p-6 sm:p-8">
      <p className="eyebrow !text-brand-400">Free to start · No credit card</p>
      <h3 className="mt-2 font-display text-4xl uppercase tracking-wide text-white">{heading}</h3>
      <p className="mt-1 text-sm text-cream/70">{subheading}</p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-full border border-navy-700 bg-navy-800 px-4 py-2.5 text-sm text-white placeholder:text-cream/40 focus:border-brand-400 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-brand-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-600"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
