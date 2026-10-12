"use client";

import { useEffect, useState } from "react";
import { dateKey, getDailyQuote } from "@/lib/workout-of-the-day";

/**
 * Dashboard greeting header. Rendered on the client so the greeting, date,
 * and daily quote always follow the user's *local* clock (the server may be
 * in a different timezone) and roll over at local midnight — matching the
 * Workout of the Day below it.
 */
export default function DashboardHero({ name, streak }: { name: string; streak: number }) {
  // Null until mounted: avoids a server/client hydration mismatch when the
  // server's timezone differs from the browser's.
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  if (!now) {
    // Skeleton with matching heights to avoid layout shift.
    return (
      <div aria-hidden>
        <div className="h-4 w-40 animate-pulse rounded bg-sand" />
        <div className="mt-2 h-14 w-72 animate-pulse rounded bg-sand sm:h-16" />
        <div className="mt-2 h-5 w-80 max-w-full animate-pulse rounded bg-sand" />
      </div>
    );
  }

  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const dateStr = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <p className="eyebrow">Today · {dateStr}</p>
      <div className="mt-2 flex flex-wrap items-center gap-4">
        <h1 className="font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink">
          {greeting}, {name}<span className="text-brand-500">.</span>
        </h1>
        {streak > 1 && (
          <span className="rounded-full bg-brand-100 px-4 py-1.5 text-sm font-bold text-brand-800">
            {streak}-day streak
          </span>
        )}
      </div>
      <p className="mt-2 max-w-xl text-[15px] italic leading-relaxed text-muted">
        &ldquo;{getDailyQuote(dateKey(now))}&rdquo;
      </p>
    </div>
  );
}
