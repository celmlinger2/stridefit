import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness Tips",
  description: "Weekly wellness guidance: recovery, sleep, mindset, and motivation.",
};

/**
 * Static wellness content for the MVP scaffold.
 * Later: move to a CMS or the database so tips can be published regularly
 * (this feed doubles as SEO article inventory).
 */
const tips = [
  {
    category: "Recovery",
    title: "Sleep is your best supplement",
    body: "Muscle repair, memory consolidation, and hormone balance all happen overnight. Aim for 7–9 hours, keep a consistent bedtime, and dim screens in the last hour before bed.",
  },
  {
    category: "Mindset",
    title: "The 2-day rule",
    body: "You'll miss workouts — life happens. The rule: never miss twice in a row. One missed day is a rest day; two is the start of a new (bad) habit.",
  },
  {
    category: "Nutrition",
    title: "Protein at every meal",
    body: "Spreading protein across 3–4 meals beats one giant dinner for muscle repair and satiety. Anchor each meal with a palm-sized protein source.",
  },
  {
    category: "Training",
    title: "Warm up like you mean it",
    body: "Five minutes of easy movement plus the first exercise at light weight. Warm muscles perform better and get injured less — non-negotiable as weights climb.",
  },
  {
    category: "Mindset",
    title: "Track the process, not just the outcome",
    body: "You can't control the scale on any given day, but you can control showing up. Streaks, logged meals, and completed sessions are wins worth celebrating.",
  },
  {
    category: "Recovery",
    title: "Easy days should feel easy",
    body: "Most training benefits come from consistency, not heroics. If every session is hard, none of them are — keep easy cardio conversational.",
  },
];

const categories = ["All", ...Array.from(new Set(tips.map((t) => t.category)))];

export default async function WellnessPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = category ?? "All";
  const filtered = active === "All" ? tips : tips.filter((t) => t.category === active);

  return (
    <div>
      <p className="eyebrow">Recover</p>
      <h1 className="mt-2 font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink">Wellness<span className="text-brand-500">.</span></h1>
      <p className="mt-2 text-muted">
        Recovery, mindset, and motivation — the other half of fitness.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <a
            key={c}
            href={c === "All" ? "/app/wellness" : `/app/wellness?category=${c}`}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
              active === c
                ? "bg-brand-600 text-white"
                : "bg-card text-muted border border-line hover:border-brand-300"
            }`}
          >
            {c}
          </a>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((t) => (
          <article key={t.title} className="card">
            <span className="inline-block rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-800">
              {t.category}
            </span>
            <h2 className="mt-3 font-display text-2xl uppercase tracking-wide text-ink">{t.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
          </article>
        ))}
      </div>

      <p className="mt-8 rounded-2xl bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">
        <strong>Not medical advice:</strong> these tips are general wellness
        information. Consult a qualified professional about your specific health
        needs.
      </p>
    </div>
  );
}
