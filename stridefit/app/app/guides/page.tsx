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

export default function GuidesPage() {
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

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
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
    </div>
  );
}
