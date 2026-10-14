import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How Many Calories Should I Eat to Lose Weight?",
  description:
    "Find your real calorie target for fat loss: how to estimate your maintenance calories, pick a safe deficit, and adjust when the scale stalls.",
  alternates: {
    canonical: "/calories-to-lose-weight",
  },
};

const faqs = [
  {
    q: "Why am I not losing weight at my calorie target?",
    a: "Usually the target was built on a guessed maintenance number, not a measured one. Give any target 2–3 weeks of honest tracking: if the trend is flat, drop it by 150–200 calories. Also check the silent killers: unlogged drinks, cooking oils, and weekend eating that erases the weekday deficit.",
  },
  {
    q: "Do I need to cut carbs to lose weight?",
    a: "No. Calories drive fat loss; carbs are just one source of them. Low-carb diets work for the same reason every diet works — they create a deficit. Choose the approach you can stick with for months.",
  },
  {
    q: "How do I know if my calorie target is too low?",
    a: "Warning signs: constant fatigue, stalled workouts, hair thinning, disrupted sleep, irritability, or losing more than ~1% of body weight per week for several weeks. A sustainable deficit leaves you a little hungry sometimes — not exhausted and miserable.",
  },
  {
    q: "When should I stop dieting and go back to maintenance?",
    a: "Plan your exit before you start: a goal weight, a set number of weeks (8–12 is a common block), or a body-fat range. When you stop, add 150–200 calories back per week until weight stabilizes.",
  },
];

const mistakes = [
  {
    title: "Cutting too hard, too fast.",
    fix: "A 1,000-calorie deficit feels heroic on day one and unbearable by day ten. Fix: start with a 300–500 calorie deficit. You can always deepen it later.",
  },
  {
    title: "Ignoring protein in a deficit.",
    fix: "Under-eating protein while dieting means losing muscle along with fat. Fix: keep protein around 0.7–1g per pound of body weight and keep lifting.",
  },
  {
    title: "Letting weekends erase the week.",
    fix: "Five days at a 400-calorie deficit is +2,000 toward your goal; two untracked weekend days can erase all of it. Fix: track weekends too, or at least keep them near maintenance.",
  },
  {
    title: "Changing the target every three days.",
    fix: "Weight fluctuates 1–3 pounds day to day from water, food, and salt. Fix: judge by the 2–3 week trend. Adjust only when the trend is flat for two full weeks.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Many Calories Should I Eat to Lose Weight?",
  description:
    "Find your real calorie target for fat loss: how to estimate your maintenance calories, pick a safe deficit, and adjust when the scale stalls.",
  author: {
    "@type": "Organization",
    name: "Stride",
    url: "https://stridefitapp.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Stride",
    url: "https://stridefitapp.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://stridefitapp.com/calories-to-lose-weight",
  },
};

export default function CaloriesToLoseWeightPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="eyebrow">Nutrition · Beginner Guide</p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          How Many Calories Should I Eat to Lose Weight?
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          The honest answer: <em>slightly fewer than you burn</em>. The useful
          answer — an actual number to eat tomorrow — is a three-step process:
          estimate what your body burns, subtract a reasonable amount, and
          adjust from real data. Most people skip straight to a random number
          (1,200! 1,500! 1,800!) and wonder why it doesn&apos;t work.
          Let&apos;s do it properly.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 1: Find your maintenance calories
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Your <strong>TDEE</strong> — total daily energy expenditure — is
            everything your body burns in a day: keeping you alive, moving you
            around, digesting food, and training. Eat at that number and your
            weight holds steady.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            You can&apos;t measure TDEE directly at home, but you can estimate
            it well enough to start.{" "}
            <Link
              href="/calculators/tdee"
              className="font-semibold text-brand-600 hover:underline"
            >
              Run your numbers through the TDEE calculator
            </Link>{" "}
            — age, sex, height, weight, activity level, done in under a minute.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Treat that number as a starting hypothesis, not gospel. Your real
            maintenance gets revealed by the scale over the next 2–3 weeks
            (step 3).
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 2: Pick your deficit
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            A deficit is maintenance minus what you eat. Since a pound of body
            fat holds roughly 3,500 calories:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">300-calorie deficit</strong> →
              roughly 0.5–0.6 lb per week. Gentle, easy to sustain for months.
              Best choice for most beginners.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">500-calorie deficit</strong> →
              roughly 1 lb per week. The classic recommendation — noticeable
              progress without feeling deprived.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">750-calorie deficit</strong> →
              roughly 1.5 lb per week. Aggressive; hunger and fatigue climb
              fast.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            Start at 300–500. You can always deepen it later. One guardrail:
            don&apos;t go below about{" "}
            <strong>1,200 calories/day for most women</strong> and{" "}
            <strong>1,500 for most men</strong> without professional guidance —
            if your math lands you there, shrink the deficit instead.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            <strong className="text-ink">Worked example:</strong> TDEE of 2,400
            − 400 deficit = <strong>2,000 calories/day</strong>, about 0.8
            lb/week. Use the{" "}
            <Link
              href="/calculators/macros"
              className="font-semibold text-brand-600 hover:underline"
            >
              macro calculator
            </Link>{" "}
            to split those 2,000 calories across protein, carbs, and fat.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 3: Track the trend, then adjust
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Weigh yourself 3–4 mornings a week (same conditions — after the
            bathroom, before breakfast), and judge by the{" "}
            <em>trend over 2–3 weeks</em>, not any single day. Daily weight
            swings 1–3 pounds from water, food, and salt; the trend is the
            truth.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Trend matches your deficit</strong>{" "}
              — change nothing. You found your number.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Trend is flat for 2+ weeks</strong>{" "}
              — drop intake by 150–200 calories, or add 2,000–3,000 daily
              steps.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                Losing faster than ~1% of body weight per week
              </strong>{" "}
              — you&apos;re likely losing muscle too. Raise intake by 200
              calories.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            This is why a food log matters more than willpower — you can&apos;t
            adjust what you don&apos;t measure.{" "}
            <Link
              href="/how-to-track-macros"
              className="font-semibold text-brand-600 hover:underline"
            >
              The macro-tracking guide
            </Link>{" "}
            covers the logging side in detail.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Common mistakes (and the fix)
          </h2>
          <ul className="mt-4 space-y-3">
            {mistakes.map((m) => (
              <li
                key={m.title}
                className="rounded-2xl bg-sand p-4 text-slate-700"
              >
                <strong className="text-ink">{m.title}</strong> {m.fix}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl bg-sand p-5">
                <p className="font-bold text-ink">{f.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Find your number
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Get your maintenance estimate from the TDEE calculator, subtract
            your deficit, and start tomorrow. Free forever.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/calculators/tdee"
              className="inline-block rounded-full bg-brand-500 px-6 py-3 font-bold text-white hover:bg-brand-600"
            >
              Calculate my TDEE
            </Link>
            <Link
              href="/signup"
              className="inline-block rounded-full border border-cream/30 px-6 py-3 font-bold text-white hover:bg-cream/10"
            >
              Create your free account
            </Link>
          </div>
        </div>

        <p className="mt-10 rounded-2xl bg-sand p-4 text-xs leading-relaxed text-muted">
          <strong>Not medical advice:</strong> This article provides general
          fitness information only and is not a substitute for professional
          medical advice, diagnosis, or treatment. If you have a health
          condition, are pregnant, or have a history of disordered eating, talk
          to a qualified professional before starting a calorie deficit.
        </p>
      </main>
      <Footer />
    </div>
  );
}
