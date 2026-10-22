import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleByline from "@/components/ArticleByline";

export const metadata: Metadata = {
  title: "Walking for Weight Management: A Realistic Starter Plan",
  description:
    "Walking can support weight management — if the plan is realistic. A 4-week beginner starter plan: how much to walk and the habits that make it stick.",
  alternates: {
    canonical: "/walking-for-weight-management",
  },
};

const weeks = [
  {
    title: "Week 1 — Your baseline, on purpose",
    body: "Walk your normal amount, but do it deliberately: pick a regular time (after breakfast, on your lunch break, after dinner) and walk then on at least 5 days. No increase yet. You're installing the time slot.",
  },
  {
    title: "Week 2 — Add a little",
    body: "Add about 5 minutes to each walk (or roughly 500 steps to your daily average). Keep the same time slot. If a route is involved, extend it by one block, one loop, or one extra street.",
  },
  {
    title: "Week 3 — Add a little more, and one longer walk",
    body: "Add another 5 minutes to daily walks, and make one walk this week noticeably longer — 40–60 minutes at an easy, conversational pace. A weekend morning works well for most people.",
  },
  {
    title: "Week 4 — Settle into your rhythm",
    body: "Repeat Week 3's volume. By now most beginners land somewhere around 30–45 minutes on regular days, plus the longer walk — but your number is whatever grew naturally from your baseline. That rhythm, repeated, is the plan from here. Every few weeks, if it feels easy, add another 5 minutes or a gentle hill.",
  },
];

const stickTips = [
  {
    title: "Anchor it to something you already do.",
    fix: "After coffee, after lunch, after dinner, while you take a regular call. \"After dinner\" beats \"sometime today\" every time.",
  },
  {
    title: "Lay out the shoes.",
    fix: "Shoes and a jacket by the door remove the two minutes of friction where most walks die.",
  },
  {
    title: "Have a minimum version.",
    fix: "Busy day? The rule is a 10-minute walk, not zero. Minimum days keep the streak — and the identity — alive.",
  },
  {
    title: "Walk somewhere you like.",
    fix: "A pleasant route, a podcast you only let yourself hear on walks, a dog who has opinions about the schedule — enjoyment is a strategy, not a bonus.",
  },
  {
    title: "Track it simply.",
    fix: "Log the walk's time or distance and move on. Seeing four weeks of small walks stacked up is the best argument for week five. (This is exactly what Stride's cardio logging is for.)",
  },
];

const faqs = [
  {
    q: "How long before walking shows results?",
    a: "Fitness changes come first — most beginners feel walks getting easier within 2–3 weeks. Visible and scale changes are slower and depend far more on the food side of the balance. Judge the first month by consistency: did you walk most days? That's the result that predicts all the others.",
  },
  {
    q: "Is walking enough, or do I need to run?",
    a: "Walking is enough to start, and for many people it's enough, period — especially at the volumes this plan builds toward. If you eventually get curious about running, curiosity is a good reason to try it; feeling that walking \"doesn't count\" is not — it counts.",
    links: true,
  },
  {
    q: "Should I walk every day?",
    a: "Walking is gentle enough that most healthy beginners can walk daily, and a daily anchor time is actually easier to keep than an every-other-day schedule. Keep most days easy, and if your feet, knees, or shins start complaining, take a rest day and ease the increases — soreness that changes how you walk is a signal, not a test.",
  },
  {
    q: "Morning or evening — does timing matter?",
    a: "The best time is the one you'll repeat. A post-dinner walk has a nice side benefit — it replaces the highest-risk snacking hour for a lot of people — but a morning walk that actually happens beats a theoretically perfect evening walk that doesn't.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Walking for Weight Management: A Realistic Starter Plan",
  description:
    "Walking can support weight management — if the plan is realistic. A 4-week beginner starter plan: how much to walk and the habits that make it stick.",
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
    "@id": "https://stridefitapp.com/walking-for-weight-management",
  },
  datePublished: "2026-10-22",
};

export default function WalkingForWeightManagementPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="eyebrow">Walking · Starter Plan</p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          Walking for Weight Management: A Realistic Starter Plan
        </h1>
        <ArticleByline published="Oct 22, 2026" readMinutes={8} />
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Walking is the most underrated exercise there is — mostly because it
          doesn&apos;t look like exercise. No gym, no special clothes, no
          recovery day spent negotiating with your stairs. And yet, done
          consistently, walking is one of the most practical tools a beginner
          has for managing their weight. The catch is in that word:{" "}
          <strong className="text-ink">consistently</strong>. A single heroic
          Saturday hike does far less than an ordinary walk you actually
          repeat. This plan is built around that idea — start where you are,
          add a little each week, and make the habit boring in the best way.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The short version
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Find your starting point first:</strong>{" "}
              track your normal steps or walking minutes for 3–4 days before
              changing anything.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Add gradually:</strong> roughly
              5–10 extra minutes a day, or about 500–1,000 extra steps a day,
              each week — not a leap to a round number you saw online.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Most days beats perfect days:</strong>{" "}
              5–6 walks a week, most weeks, is the engine. Missing a day
              changes nothing; missing the habit does.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Walking is one half of the picture:</strong>{" "}
              what you eat is the other half. Walking supports a calorie
              deficit — it doesn&apos;t replace paying attention to food.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            How walking actually helps with weight
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Your body burns energy all day, not just during workouts. Walking
            adds to that total in two ways: the walk itself, and — often more
            important — the fact that people who walk daily tend to simply
            move more the rest of the day too: more trips on foot, less
            uninterrupted sitting. Researchers call that everyday movement
            NEAT (non-exercise activity thermogenesis), and over weeks it adds
            up to a meaningful share of the energy you use.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            What walking does <em>not</em> do is guarantee a number on the
            scale. Weight management still comes down to the overall balance
            between what you eat and what you use — our guide to{" "}
            <Link href="/calories-to-lose-weight" className="font-semibold text-brand-600 hover:underline">
              how many calories to eat to lose weight
            </Link>{" "}
            explains that balance without the myths, and the free{" "}
            <Link href="/calculators/tdee" className="font-semibold text-brand-600 hover:underline">
              TDEE calculator
            </Link>{" "}
            gives you a personal starting estimate. Think of walking as the
            most sustainable way to raise the &ldquo;energy out&rdquo; side
            while you make calm, ordinary adjustments to the &ldquo;energy
            in&rdquo; side.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            One honest expectation to set: in the first few weeks, the
            clearest wins are usually not on the scale. It&apos;s a walk that
            feels easier than it did last week, a route that takes less time,
            clothes that fit a little differently, better sleep. Those are
            signs the plan is working, and they&apos;re the reason people keep
            going long enough for the slower changes to show.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 1: Find your real starting point
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Forget 10,000 steps for a moment — that number came from a 1960s
            marketing campaign, not from research, and for someone currently
            walking 3,000 steps a day it&apos;s a recipe for quitting by
            Thursday.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Instead, for 3–4 normal days, just record what you already do: the
            step count on your phone or watch, or the minutes you spent
            walking. Average it. That average — not a magazine number — is
            your Week 1 starting line. A plan built on your actual life
            survives your actual life.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 2: The 4-week starter plan
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Each week adds a small, specific amount to the week before. Walks
            can be one block or split into shorter walks across the day —
            three 10-minute walks count the same as one 30-minute walk for
            building this habit, and for many beginners they&apos;re easier to
            fit in.
          </p>
          <div className="mt-4 space-y-4">
            {weeks.map((w) => (
              <div key={w.title} className="rounded-2xl bg-sand p-5">
                <p className="font-display text-2xl uppercase tracking-wide text-ink">
                  {w.title}
                </p>
                <p className="mt-2 text-slate-700">{w.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            <strong className="text-ink">Effort check:</strong> on most walks
            you should be able to speak in full sentences, just a little
            breathlessly — often called the talk test. If you can&apos;t
            finish a sentence, slow down; if you could sing, you can pick it
            up slightly. Save the harder efforts for later, if you ever want
            them at all.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 3: Make it stick when motivation doesn&apos;t
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Motivation starts plans; systems finish them. A few that work
            unusually well for walking:
          </p>
          <ul className="mt-4 space-y-3">
            {stickTips.map((t) => (
              <li key={t.title} className="rounded-2xl bg-sand p-4 text-slate-700">
                <strong className="text-ink">{t.title}</strong> {t.fix}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            What about food?
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            This article won&apos;t hand you a diet, because walking plans
            fail when they arrive dragging a total food overhaul behind them.
            Start with one ordinary change at a time: regular meals, protein
            at most meals so you stay full, and drinks that don&apos;t quietly
            add a meal&apos;s worth of calories. If you want the next layer —
            how protein, carbs, and fat fit together across a day — our{" "}
            <Link href="/how-to-track-macros" className="font-semibold text-brand-600 hover:underline">
              beginner&apos;s guide to tracking macros
            </Link>{" "}
            shows how to track for a week or two just to learn, without
            turning eating into homework.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            And a warning about the most common trap: &ldquo;I walked today,
            so I&apos;ve earned…&rdquo; A brisk 30-minute walk uses roughly
            the energy in a modest snack. Walking absolutely helps — but
            rewarding every walk in the kitchen cancels it. Let the walk be
            the reward habit itself, not a coupon.
          </p>
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
                  {f.a}{" "}
                  {f.links && (
                    <>
                      Our{" "}
                      <Link
                        href="/beginners-guide-to-running-walking"
                        className="font-semibold text-brand-600 hover:underline"
                      >
                        beginner&apos;s guide to starting running or walking
                      </Link>{" "}
                      shows how to mix the two, and the{" "}
                      <Link
                        href="/beginner-5k-training-plan"
                        className="font-semibold text-brand-600 hover:underline"
                      >
                        8-week beginner 5K plan
                      </Link>{" "}
                      is a gentle next step.
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Your next step
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Spend the next 3–4 days just measuring your normal walking — no
            changes. Then log each walk in Stride; at the end of the week
            you&apos;ll have your real baseline, and Week 1 of the plan above
            starts from the truth instead of a guess.
          </p>
        </section>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Walk it. Log it. Watch it add up.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Create a free Stride account to log your walks and runs, track
            your food alongside them, and build the daily habit that actually
            lasts. Free forever.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-block rounded-full bg-brand-500 px-6 py-3 font-bold text-white hover:bg-brand-600"
          >
            Create your free account
          </Link>
        </div>

        <p className="mt-10 rounded-2xl bg-sand p-4 text-xs leading-relaxed text-muted">
          <strong>Not medical advice:</strong> This article provides general
          fitness and nutrition information only and is not a substitute for
          professional medical advice, diagnosis, or treatment. Walking is a
          low-impact activity for most people, but if you have a medical
          condition, joint problems, or haven&apos;t been active in a long
          time, check in with a qualified professional before starting an
          exercise program.
        </p>
      </main>
      <Footer />
    </div>
  );
}
