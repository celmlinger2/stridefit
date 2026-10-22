"use client";

import { useState } from "react";
import GuideCard from "@/components/GuideCard";
import { GUIDES } from "@/lib/guides";

const filters = ["All", ...Array.from(new Set(GUIDES.map((g) => g.category)))];

export default function GuidesPage() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? GUIDES : GUIDES.filter((g) => g.category === active);
  const count = (c: string) =>
    c === "All" ? GUIDES.length : GUIDES.filter((g) => g.category === c).length;

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
          <GuideCard key={g.href} guide={g} />
        ))}
      </div>

      {shown.length === 0 && (
        <p className="mt-6 text-muted">No guides in this topic yet — check back soon.</p>
      )}
    </div>
  );
}
