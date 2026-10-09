import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";
import MacroCalculator from "@/components/calculators/MacroCalculator";

export const metadata: Metadata = {
  title: "Macro Calculator — Protein, Carbs & Fat Targets",
  description:
    "Free macro calculator: set protein, carbohydrate, and fat targets based on your calories, body weight, and goal — balanced, high-protein, or low-carb.",
};

export default function MacrosPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
          Macro Calculator
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          Calories tell you <em>how much</em> to eat; macros tell you{" "}
          <em>what</em> to eat. Protein drives muscle repair and satiety, carbs
          fuel training, and fats support hormones. Enter your daily calorie
          target (grab it from our{" "}
          <a href="/calculators/tdee" className="font-semibold text-brand-700 hover:underline">
            TDEE calculator
          </a>
          ) and body weight to get gram targets for each macro.
        </p>

        <div className="mt-8">
          <MacroCalculator />
        </div>

        <div className="mt-12 space-y-4 text-sm leading-relaxed text-muted">
          <h2 className="text-xl font-bold text-ink">Which split should I pick?</h2>
          <p>
            <strong>Balanced</strong> works for most beginners.{" "}
            <strong>High-protein</strong> suits anyone cutting weight or building
            muscle — protein preserves lean mass in a deficit.{" "}
            <strong>Lower-carb</strong> can help if you train less intensely or
            simply prefer fattier foods. The best split is the one you can stick
            to for months.
          </p>
          <h2 className="text-xl font-bold text-ink">Track it daily</h2>
          <p>
            Targets only work if you measure against them. StrideFit&apos;s free
            nutrition tracker lets you log meals and watch your macros fill up
            through the day.
          </p>
        </div>

        <div className="mt-12">
          <EmailCapture
            heading="Hit your macros every day"
            subheading="Join StrideFit free and track protein, carbs, and fat."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
