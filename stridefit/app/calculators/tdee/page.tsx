import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";
import TdeeCalculator from "@/components/calculators/TdeeCalculator";

export const metadata: Metadata = {
  title: "TDEE Calculator — Find Your Daily Calorie Needs",
  description:
    "Free TDEE calculator: estimate your total daily energy expenditure with the Mifflin-St Jeor equation and get calorie targets for cutting, maintaining, or bulking.",
};

export default function TdeePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
          TDEE Calculator
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          Your <strong>Total Daily Energy Expenditure (TDEE)</strong> is the
          number of calories you burn in a day, including exercise. It&apos;s
          the starting point for any nutrition plan: eat below it to lose
          weight, at it to maintain, above it to gain. This calculator uses the
          Mifflin-St Jeor equation, the most widely validated formula for
          estimating resting metabolic rate.
        </p>

        <div className="mt-8">
          <TdeeCalculator />
        </div>

        <div className="prose-sm mt-12 space-y-4 text-sm leading-relaxed text-muted">
          <h2 className="text-xl font-bold text-ink">How to use your TDEE</h2>
          <p>
            For <strong>fat loss</strong>, aim for roughly 300–500 calories below
            your TDEE. For <strong>muscle gain</strong>, aim for 200–300 above
            it. Recalculate every few weeks as your weight changes — and track
            your actual intake in StrideFit&apos;s free nutrition tracker to see
            how you compare.
          </p>
          <h2 className="text-xl font-bold text-ink">How accurate is this?</h2>
          <p>
            TDEE calculators estimate within about 10% for most people. Activity
            level is the biggest variable — when in doubt, pick the lower
            activity option and adjust based on real-world results over 2–3
            weeks.
          </p>
        </div>

        <div className="mt-12">
          <EmailCapture
            heading="Track your calories for free"
            subheading="Join StrideFit and log meals against your TDEE target."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
