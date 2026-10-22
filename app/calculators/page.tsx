import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Fitness Calculators — TDEE, Macros & Running Pace",
  description:
    "Free fitness calculators from Stride: estimate your daily calories (TDEE), set protein, carb, and fat targets, and plan your running pace and race splits.",
};

const CALCULATORS = [
  {
    href: "/calculators/tdee",
    icon: "🔥",
    title: "TDEE Calculator",
    copy: "How many calories you burn in a day — plus the targets for losing, maintaining, or gaining weight.",
  },
  {
    href: "/calculators/macros",
    icon: "🥗",
    title: "Macro Calculator",
    copy: "Turn your calorie target into daily protein, carb, and fat numbers that fit your goal.",
  },
  {
    href: "/calculators/pace",
    icon: "⏱️",
    title: "Pace Calculator",
    copy: "Race pace, mile-by-mile splits, and predicted finish times from the 5K to the marathon.",
  },
];

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
          Free Fitness Calculators
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          Three quick tools to plan your training and nutrition — no account
          needed. Run the numbers, copy your results, and when you&apos;re
          ready, track them day to day in Stride for free.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {CALCULATORS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="card group flex flex-col transition hover:border-brand-500/40"
            >
              <span className="text-3xl" aria-hidden="true">
                {c.icon}
              </span>
              <h2 className="mt-3 font-display text-2xl uppercase leading-none tracking-wide text-ink group-hover:text-brand-600">
                {c.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {c.copy}
              </p>
              <p className="mt-3 text-sm font-bold text-brand-600">
                Open the calculator <span aria-hidden="true">→</span>
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-navy-800 p-6 text-center sm:p-8">
          <h2 className="font-display text-3xl uppercase tracking-wide text-white">
            Put the numbers to work
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/80">
            A free Stride account saves your targets and tracks your meals,
            workouts, and runs against them — no credit card, ever.
          </p>
          <Link
            href="/signup"
            className="mt-5 inline-block rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
          >
            Create your free account
          </Link>
        </div>

        <div className="mt-12">
          <EmailCapture />
        </div>
      </main>
      <Footer />
    </div>
  );
}
