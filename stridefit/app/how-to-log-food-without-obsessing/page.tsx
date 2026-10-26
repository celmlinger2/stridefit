import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleByline from "@/components/ArticleByline";

export const metadata: Metadata = {
  title: "How to Log Food Without Obsessing: A Starter System",
  description:
    "Food logging shouldn't take over your life. A starter system of ranges, rough portions, and repeat meals — accurate enough to work, light enough to keep.",
  alternates: {
    canonical: "/how-to-log-food-without-obsessing",
  },
};

const starterWeek = [
  {
    title: "Days 1–2 — Anchor meals only",
    body: "Log only breakfast and lunch — your anchor meals — approximately. Ignore the rest. You're building the entry habit, not a complete record.",
  },
  {
    title: "Days 3–5 — Add dinner",
    body: "Add dinner, estimated. Restaurant or takeout meals get your best guess and no second-guessing.",
  },
  {
    title: "Days 6–7 — Full days, still approximate",
    body: "At the end of day 7, do the one weekly review: ranges, protein, surprises. Nothing else.",
  },
  {
    title: "Week 2 onward — Keep the same system",
    body: "If the habit is holding and you want one upgrade, weigh just your anchor-meal portions once to sanity-check your hand estimates — then put the scale away again.",
  },
];

const faqs = [
  {
    q: "Is approximate logging accurate enough to be useful?",
    a: "Yes, for what a beginner needs it for. You're looking for patterns — portion drift, low-protein days, where the calories you didn't realize you were eating are coming from — and those show up clearly in honestly estimated logs. What approximate logging can't do is fine-tune to the last hundred calories, which most beginners don't need yet.",
  },
  {
    q: "Do I have to log every single thing, including drinks and snacks?",
    a: "Log the things with meaningful calories, honestly and roughly — yes, that includes the soda and the handful of chips, because \"everything except the extras\" is how logs quietly stop matching reality. Plain water, black coffee, and seasonings aren't worth entries. When in doubt, a quick rough entry is better than skipping it.",
  },
  {
    q: "How long should I keep logging?",
    a: "As long as it's teaching you something and costing you little. Many people log for a few months, learn their portions and patterns, then stop or drop to occasional spot-check weeks. Treat it like training wheels: valuable while you're learning balance, not a life sentence.",
  },
  {
    q: "What if I miss a day?",
    a: "Nothing happens. Log the next meal you eat and carry on. The system is built on weekly patterns, and one missing day doesn't break a pattern. What breaks progress is the all-or-nothing rule — \"I missed Tuesday, so the week is ruined\" — and this system doesn't have that rule.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Log Food Without Obsessing: A Starter System",
  description:
    "Food logging shouldn't take over your life. A starter system of ranges, rough portions, and repeat meals — accurate enough to work, light enough to keep.",
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
    "@id": "https://stridefitapp.com/how-to-log-food-without-obsessing",
  },
  datePublished: "2026-10-26",
};

export default function HowToLogFoodWithoutObsessingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="eyebrow">Nutrition · Starter System</p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          How to Log Food Without Obsessing: A Starter System
        </h1>
        <ArticleByline published="Oct 26, 2026" readMinutes={8} />
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Most people don&apos;t quit food logging because it doesn&apos;t
          work. They quit because of how it feels by day nine: weighing
          chicken at a restaurant, scrolling a database for the exact brand
          of tortilla, doing arithmetic before every meal, and treating a
          number on a screen like a grade. The information was never the
          problem. The workload was.
        </p>
        <p className="mt-3 leading-relaxed text-muted">
          This is the lighter version: a starter system that keeps the part
          of logging that&apos;s genuinely useful — an honest picture of what
          you eat — and removes the parts that make it miserable. If you
          don&apos;t log anything yet and want the basics first, start with
          our{" "}
          <Link
            href="/how-to-track-macros"
            className="font-semibold text-brand-600 hover:underline"
          >
            beginner&apos;s guide to tracking macros
          </Link>
          , which covers what to log and how to set your targets. This
          article picks up where that one leaves off.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The short version
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Log ranges, not exact numbers.</strong>{" "}
              A day that lands near your targets is a good day. Precision you
              can&apos;t sustain is worth less than honesty you can.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                Estimate portions with your hand,
              </strong>{" "}
              not a food scale — at least to start.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Repeat your anchor meals.</strong>{" "}
              The fewer new entries a day needs, the less work logging is.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Judge the week, not the meal.</strong>{" "}
              One big lunch tells you almost nothing; seven roughly-logged
              days tell you a lot.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                Logging is a tool, not a test.
              </strong>{" "}
              If it starts causing stress instead of clarity, the system
              below includes an off-ramp — use it.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Rule 1: Aim for the range, not the bullseye
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Exact targets invite exact anxiety. A calorie target is an
            estimate built on other estimates — your true maintenance
            calories vary day to day, food labels are allowed a margin of
            error, and a restaurant portion is a guess no matter what the
            database says. Chasing the last 40 calories is chasing noise.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            So work in ranges instead. If your calorie target is around
            2,000, treat roughly 1,850–2,150 as &ldquo;on target&rdquo; and
            stop there. Same with protein: a range of about 10 grams either
            side of your target is close enough for the log to do its job. If
            you haven&apos;t set targets yet, our{" "}
            <Link
              href="/calories-to-lose-weight"
              className="font-semibold text-brand-600 hover:underline"
            >
              calories guide
            </Link>{" "}
            walks through finding a sensible starting number. What
            you&apos;re collecting is a pattern over weeks — and patterns
            survive rough numbers just fine.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Rule 2: Estimate portions; keep the scale in the drawer
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            For the first month, portion with your hand: a palm-sized portion
            of protein, a fist of vegetables or grains, a thumb of fats or
            oils. It&apos;s rough, it&apos;s fast, and for a beginner
            it&apos;s close enough that the weekly picture stays honest.
            Weighing food has its place — some people enjoy the precision,
            and a short weighing experiment can teach you what a portion
            really looks like — but making it the price of entry is how
            logging becomes a second job. Estimate first. Add precision later
            only if you want it, never because you think you owe it.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Rule 3: Build anchor meals and repeat them
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Most of the friction in logging is novelty: every new meal is a
            new set of entries. So make most of your eating boring on
            purpose. Pick one breakfast you like and eat it most days. Keep
            two or three lunches in rotation. When a meal repeats, logging it
            takes seconds — in Stride&apos;s Nutrition page it&apos;s the
            same quick entry as last time: meal, food name, calories,
            protein, carbs, and fat. Dinners and eating out can stay varied
            and roughly estimated; they don&apos;t need to carry the whole
            system&apos;s accuracy. Three anchored meals out of four is
            enough structure for the log to stay useful and the effort to
            stay small.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Rule 4: Log it &ldquo;good enough,&rdquo; right away, then close the app
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            The two habits that keep logging light: log immediately after
            eating (memory is where portions quietly shrink), and log
            approximately rather than perfectly (an honest estimate entered
            in 30 seconds beats a precise entry you abandon by Thursday).
            Then close the app. The log is a record, not a dashboard to
            stare at — check your daily totals against your targets once, at
            the end of the day, the way you&apos;d glance at a weather
            report. In Stride, that glance is the top of the Nutrition page:
            today&apos;s calories, protein, carbs, and fat against your own
            targets. One look. Then you&apos;re done thinking about it until
            tomorrow.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Rule 5: Review the week, forgive the day
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            At the end of the week, look at the shape of the seven days: most
            days in range? Protein roughly consistent? Anything you ate far
            more or less of than you believed? Those answers are the entire
            point of logging, and none of them depend on any single meal. A
            birthday dinner doesn&apos;t need analyzing, apologizing for, or
            &ldquo;making up for&rdquo; the next day. It needs a rough entry
            and a closed app. The week absorbs it; that is what weeks are
            for.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            When tracking isn&apos;t the right tool
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            This matters, so it&apos;s not buried: if logging numbers starts
            to feel like pressure rather than information — if you find
            yourself skipping meals out with people to avoid logging them,
            feeling real distress over ordinary eating, or thinking about the
            numbers constantly — stop logging. That&apos;s not a discipline
            failure; it&apos;s the tool being wrong for you right now,
            possibly for good reason. Regular meals, mostly whole foods,
            protein at each meal, and walking after dinner will carry most of
            what logging would have taught you. And if eating itself has
            become a source of anxiety, a qualified professional who
            specializes in this is a better next step than any app —
            including ours. Your health comes first, always. We&apos;d
            rather lose a user than have Stride be part of that problem.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            A starter week, concretely
          </h2>
          <div className="mt-4 space-y-4">
            {starterWeek.map((s) => (
              <div key={s.title} className="rounded-2xl bg-sand p-5">
                <p className="font-display text-2xl uppercase tracking-wide text-ink">
                  {s.title}
                </p>
                <p className="mt-2 text-slate-700">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            If at any point the system starts feeling heavy, shrink it before
            you quit it: log weekdays only, or log only protein and total
            calories. A partial log you&apos;ll keep beats a complete one
            you&apos;ll delete.
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
                  {f.a}
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
            Open the Nutrition page in Stride, set your calorie and macro
            targets once (or use the starting numbers from the{" "}
            <Link
              href="/how-to-track-macros"
              className="font-semibold text-brand-600 hover:underline"
            >
              macros guide
            </Link>
            ), and log tomorrow&apos;s breakfast and lunch — approximately,
            in under a minute each. No account yet?{" "}
            <Link
              href="/signup"
              className="font-semibold text-brand-600 hover:underline"
            >
              Create a free Stride account
            </Link>{" "}
            and your first anchor meal is waiting to be entered.
          </p>
        </section>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Log it in a minute. Then get on with your day.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Create a free Stride account to log your food against your own
            calorie and macro targets — plus workouts and cardio in the same
            place. Free forever.
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
          nutrition information only and is not a substitute for professional
          medical or dietary advice, diagnosis, or treatment. If you have a
          medical condition, a history of disordered eating, or concerns about
          your relationship with food, check in with a qualified professional
          before using food tracking.
        </p>
      </main>
      <Footer />
    </div>
  );
}
