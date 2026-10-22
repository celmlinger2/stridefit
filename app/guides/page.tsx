"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuideCard from "@/components/GuideCard";
import { GUIDES } from "@/lib/guides";

const filters = ["All", ...Array.from(new Set(GUIDES.map((g) => g.category)))];

export default function GuidesIndexPage() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? GUIDES : GUIDES.filter((g) => g.category === active);
  const count = (c: string) =>
    c === "All" ? GUIDES.length : GUIDES.filter((g) => g.category === c).length;

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="eyebrow">Learn</p>
        <h1 className="mt-2 font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink">
          Training guides<span className="text-brand-500">.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Practical, beginner-friendly plans written by runners, for runners. No
          signup needed to read them.
        </p>

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

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((g) => (
            <GuideCard key={g.href} guide={g} />
          ))}
        </div>

        {shown.length === 0 && (
          <p className="mt-6 text-muted">No guides in this topic yet — check back soon.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
