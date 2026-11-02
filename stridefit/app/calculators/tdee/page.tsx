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

const faqs = [
  {
    question: "What is TDEE?",
    answer:
      "Total Daily Energy Expenditure — an estimate of all the calories you burn in a day, including rest, daily movement, digestion, and exercise.",
  },
  {
    question: "How is TDEE calculated?",
    answer:
      "Stride estimates your BMR with the Mifflin-St Jeor equation, then multiplies it by an activity factor from 1.2 (sedentary) to 1.9 (very active).",
  },
  {
    question: "How accurate is a TDEE calculator?",
    answer:
      "Within about 10% for most people. Activity level causes most of the error, and your real two-to-three-week weight trend is the better measure.",
  },
  {
    question: "How many calories should I eat to lose weight?",
    answer:
      "A common starting point is 300–500 below TDEE; Stride's “Lose” target uses 400 below. Adjust by 100–200 if your trend stalls for 2–3 weeks.",
  },
  {
    question: "Should I eat back the calories I burn exercising?",
    answer:
      "No — exercise is already inside the activity multiplier. Eating them back on top double-counts them.",
  },
  {
    question: "How often should I recalculate?",
    answer:
      "Every few weeks, after a meaningful weight change, or when your training or job activity changes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function TdeePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
            your actual intake in Stride&apos;s free nutrition tracker to see
            how you compare.
          </p>
          <h2 className="text-xl font-bold text-ink">How accurate is this?</h2>
          <p>
            TDEE calculators estimate within about 10% for most people. Activity
            level is the biggest variable — when in doubt, pick the lower
            activity option and adjust based on real-world results over 2–3
            weeks.
          </p>

          <h2 className="text-xl font-bold text-ink">What your TDEE is made of</h2>
          <p>
            Your TDEE is not one number your body “has” — it is four kinds of
            burn added together. The biggest share is your basal metabolic rate
            (BMR), the energy your body spends just staying alive: breathing,
            circulation, temperature, cell repair. On top of that sit the
            calories you burn moving around outside formal exercise — walking to
            the store, standing, fidgeting, chores — which is why two people
            with the same desk job can have noticeably different totals.
            Digesting food itself costs energy too (roughly a tenth of what you
            eat, mostly from protein), and finally there is the exercise you
            deliberately do. This calculator estimates your BMR from your age,
            sex, height, and weight using the Mifflin-St Jeor equation, then
            scales it by an activity multiplier to account for the other three
            parts.
          </p>

          <h2 className="text-xl font-bold text-ink">
            Choosing your activity level — honestly
          </h2>
          <p>
            The activity level is where most estimates go wrong, usually by one
            notch too high. Use your typical week, not your best week:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Sedentary (×1.2):</strong> desk job, little or no exercise.
            </li>
            <li>
              <strong>Light (×1.375):</strong> light exercise 1–3 days a week, or
              a job with some walking.
            </li>
            <li>
              <strong>Moderate (×1.55):</strong> moderate exercise 3–5 days a
              week — where most regular exercisers land.
            </li>
            <li>
              <strong>Active (×1.725):</strong> hard exercise 6–7 days a week.
            </li>
            <li>
              <strong>Very active (×1.9):</strong> a physical job plus hard
              training.
            </li>
          </ul>
          <p>
            If you are between two levels, pick the lower one. An estimate that
            starts slightly low and gets adjusted up from real results beats the
            opposite, especially for fat loss.
          </p>

          <h2 className="text-xl font-bold text-ink">
            Turning your number into a daily target
          </h2>
          <p>
            Stride shows three targets under your TDEE: about{" "}
            <strong>400 calories below</strong> it to lose weight,{" "}
            <strong>at it</strong> to maintain, and about{" "}
            <strong>250 above</strong> it to gain muscle. Those are starting
            points, not promises. A few hundred calories a day is deliberately
            modest — it is the size of change most people can actually sustain
            for months, and sustainable beats aggressive for keeping the weight
            off. Pair the calorie target with protein at most meals if your goal
            is muscle: the total decides the direction of your weight, and
            protein helps decide what that weight is made of. Our{" "}
            <a href="/calculators/macros" className="font-semibold text-brand-700 underline">
              macro calculator
            </a>{" "}
            turns the same numbers into protein, carb, and fat targets.
          </p>

          <h2 className="text-xl font-bold text-ink">
            Adjust from real results, not from the formula
          </h2>
          <p>
            Treat your first estimate as a two-to-three-week experiment. Weigh
            yourself a few times a week under the same conditions, log what you
            eat honestly, and look at the trend — single days bounce with water,
            salt, and meal timing and mean very little. If the trend is moving
            the way you want at roughly the pace you want, your estimate is
            effectively right for you, whatever the formula said. If nothing has
            changed after two to three consistent weeks, nudge the target by
            100–200 calories a day and run the experiment again. Recalculate from
            scratch whenever your weight changes by a meaningful amount or your
            training changes — a smaller body burns less, and a new training
            block burns more.
          </p>

          <h2 className="text-xl font-bold text-ink">Limitations worth knowing</h2>
          <p>
            This is an estimate — calculators land within about 10% for most
            people, and that&apos;s exactly why the adjustment step above
            matters. The formula does not know about pregnancy or breastfeeding,
            medical conditions that affect metabolism, medications, or the
            difference between lean and less-lean bodies at the same weight
            (muscle burns more at rest, so very lean people often land higher
            than the estimate, and the standard activity labels fit competitive
            athletes poorly). If any of those apply to you, or you have a history
            of disordered eating, use the number only as general information and
            get personal guidance from a doctor or registered dietitian. Nothing
            on this page is medical advice.
          </p>

          <h2 className="text-xl font-bold text-ink">Your next step in Stride</h2>
          <p>
            A target only helps if you can see yourself against it. Stride&apos;s
            free nutrition tracker logs meals against exactly this calorie goal —
            run your numbers above, then{" "}
            <a href="/signup" className="font-semibold text-brand-700 underline">
              create a free account
            </a>{" "}
            and log one normal day before changing anything. Most people are
            surprised by what a normal day actually contains, and that baseline
            is the most useful number on this page. If you want the thinking
            behind the targets, read our guides to{" "}
            <a href="/calories-to-lose-weight" className="font-semibold text-brand-700 underline">
              how many calories to eat to lose weight
            </a>{" "}
            and{" "}
            <a href="/how-to-log-food-without-obsessing" className="font-semibold text-brand-700 underline">
              how to log food without obsessing
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-ink">TDEE questions, answered</h2>
          {faqs.map((f) => (
            <div key={f.question}>
              <h3 className="font-bold text-ink">{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <EmailCapture
            heading="Track your calories for free"
            subheading="Join Stride and log meals against your TDEE target."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
