"use client";

import { useState } from "react";
import Link from "next/link";

const guides = [
  {
    href: "/beginners-guide-to-running-walking",
    category: "Running",
    title: "Beginner's Guide to Running & Walking",
    copy: "Start with the walk-run method: alternate short runs with walking, build gradually, and stay injury-free.",
  },
  {
    href: "/beginner-5k-training-plan",
    category: "Training",
    title: "8-Week Beginner 5K Training Plan",
    copy: "Three walk-run sessions a week, from your first intervals to race day — with pacing and a taper week.",
  },
  {
    href: "/how-to-track-macros",
    category: "Nutrition",
    title: "How to Track Macros",
    copy: "Set protein, carb, and fat targets and log food without it taking over your life. Includes a full sample day.",
  },
  {
    href: "/calories-to-lose-weight",
    category: "Nutrition",
    title: "How Many Calories Should I Eat to Lose Weight?",
    copy: "Find your real calorie target: estimate maintenance, pick a 300–500 deficit, and adjust from the trend.",
  },
];

const filters = ["All", ...Array.from(new Set(guides.map((g) => g.category)))];

export default function GuidesPage() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? guides : guides.filter((g) => g.category === active);
  const count = (c: string) =>
    c === "All" ? guides.length : guides.filter((g) => g.category === c).length;

  return (
    <div className="mx-auto max-w-3xl">
      <p className="eyebrow">Learn the fundamentals</p>
      <h1 className="mt-2 font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink">
        Training guides<span className="text-brand-500">.</span>
      </h1>
      <p className="mt-2 text-muted">
        Plain-language guides for the stuff that actually moves the needle — running, training
        plans, and nutrition.
      </p>

      {/* Topic filter */}
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter guides by topic">
        {filters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                isActive
                  ? "border-navy-800 bg-navy-800 text-white"
                  : "border-ink/15 bg-white text-ink hover:border-brand-500/50 hover:text-brand-600"
              }`}
            >
              {f} ({count(f)})
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {shown.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="card group block transition hover:border-brand-500/40"
          >
            <p className="eyebrow">{g.category}</p>
            <h2 className="mt-2 font-display text-3xl uppercase leading-none tracking-wide text-ink group-hover:text-brand-600">
              {g.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{g.copy}</p>
            <p className="mt-4 text-sm font-bold text-brand-600">
              Read the guide <span aria-hidden="true">→</span>
            </p>
          </Link>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="mt-6 text-muted">No guides in this topic yet — check back soon.</p>
      )}
    </div>
  );
}
