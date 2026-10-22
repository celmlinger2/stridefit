import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleByline from "@/components/ArticleByline";

export const metadata: Metadata = {
  title: "What to Eat Before and After a Run (Beginner's Guide)",
  description:
    "Wondering what to eat before a run? Simple timing rules, snack and meal ideas that sit well, and what to eat after to recover — no complicated sports nutrition.",
  alternates: {
    canonical: "/what-to-eat-before-and-after-a-run",
  },
};

const timingCards = [
  {
    title: "If you have 2–3 hours — a real meal",
    body: "Eat a normal meal built around carbs, with some protein and not much fat or fiber: oatmeal with fruit, a turkey sandwich, pasta with a light sauce, or eggs and toast. Carbs are the headliner — they're the fuel your muscles actually burn while you run. Fat and fiber slow digestion down, which is normally a good thing, just not right before a run.",
  },
  {
    title: "If you have 30–60 minutes — a small snack",
    body: "Go small and carb-focused: a banana, a slice of toast with a little jam or honey, a handful of pretzels, or a small bowl of cereal. You're topping off the tank, not filling it.",
  },
  {
    title: "Running first thing in the morning",
    body: "For an easy run under about 45 minutes, many runners do fine on just water or half a banana — especially if dinner the night before was substantial. For anything longer or harder, have the small snack and give it at least 20–30 minutes. Race morning counts double: eat the breakfast you've practiced with, early enough to be done 2–3 hours before the start.",
  },
];

const troubleFoods = [
  {
    title: "High-fiber foods",
    fix: "Big salads, beans, and bran cereal in the last hour or two give your stomach a lot to work on while it bounces.",
  },
  {
    title: "High-fat foods",
    fix: "Fried food, creamy sauces, and a heavy fast-food meal sit in your stomach the longest of anything.",
  },
  {
    title: "Large amounts of dairy",
    fix: "Right before heading out, if you know it bothers you — everyone's stomach is a little different.",
  },
  {
    title: "Brand-new foods on race day",
    fix: "Never test a new breakfast, gel, or sports drink when it counts. Practice with it on a training run first.",
  },
  {
    title: "Sugar-free gum or candies with sorbitol",
    fix: "A surprise stomach irritant for a lot of people, and an unpleasant one to discover mid-run.",
  },
];

const recoveryMeals = [
  "Eggs, toast, and fruit",
  "Greek yogurt with granola and berries",
  "A smoothie with milk or yogurt, banana, and a spoonful of peanut butter",
  "Chicken, rice, and vegetables — in other words, a normal meal",
  "Chocolate milk, the classic budget recovery drink",
];

const faqs = [
  {
    q: "Is it okay to run on an empty stomach?",
    a: "For short, easy morning runs, usually yes — many runners prefer it. If you feel lightheaded, weak, or your performance falls off a cliff, that's your answer: have the small snack first. There's no prize for running hungry.",
  },
  {
    q: "What should I eat the night before a race?",
    a: "A normal dinner you know and like, with plenty of carbs — pasta, rice, potatoes, bread. Skip anything unusually spicy, greasy, or experimental. \"Carb loading\" with a mountain of pasta is a marathon strategy; for a 5K or 10K, a regular carb-friendly dinner is all you need.",
  },
  {
    q: "Do I need protein shakes or special sports products?",
    a: "No. They can be convenient, and convenience has value on a busy morning, but ordinary food does the same job. A shake is just protein that's easy to drink — eggs, yogurt, milk, or a chicken breast are protein too.",
  },
  {
    q: "What if running always upsets my stomach?",
    a: "Try eating earlier (push the meal to 3 hours before), making the pre-run snack smaller and lower in fiber and fat, and avoiding NSAID pain relievers before runs, which irritate some stomachs. If it keeps happening, or you have pain, blood, or ongoing symptoms, check in with a doctor rather than pushing through.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What to Eat Before and After a Run: A Beginner's Guide",
  description:
    "Wondering what to eat before a run? Simple timing rules, snack and meal ideas that sit well, and what to eat after to recover — no complicated sports nutrition.",
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
    "@id": "https://stridefitapp.com/what-to-eat-before-and-after-a-run",
  },
  datePublished: "2026-10-19",
};

export default function WhatToEatBeforeAndAfterARunPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="eyebrow">Nutrition · Running Fuel</p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          What to Eat Before and After a Run: A Beginner&apos;s Guide
        </h1>
        <ArticleByline published="Oct 19, 2026" readMinutes={7} />
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Every beginner runner learns this lesson once: eat the wrong thing —
          or eat it at the wrong time — and your stomach will have opinions
          for the entire run. Eat nothing at all and a run that should feel
          easy can feel like running through wet cement. The good news is that
          pre-run eating is not complicated. It mostly comes down to two
          things: <strong className="text-ink">timing</strong> and{" "}
          <strong className="text-ink">keeping it simple</strong>. Here&apos;s
          how to get both right, plus what to eat afterward so you recover and
          feel ready for the next one.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The short version
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">2–3 hours before:</strong> a normal
              meal built around carbs, with some protein and not much fat or
              fiber.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">30–60 minutes before:</strong> a
              small, carb-based snack — a banana, toast, a few pretzels.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">During the run:</strong> for runs
              under about an hour, water is all most beginners need.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">After the run:</strong> protein plus
              carbs within the next couple of hours, and keep drinking water.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Eating before a run: it&apos;s mostly about the clock
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Your stomach needs time to move food along before you start
            bouncing it around. The closer you get to run time, the smaller
            and simpler the food should be.
          </p>
          <div className="mt-4 space-y-4">
            {timingCards.map((c) => (
              <div key={c.title} className="rounded-2xl bg-sand p-5">
                <p className="font-display text-2xl uppercase tracking-wide text-ink">
                  {c.title}
                </p>
                <p className="mt-2 text-slate-700">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Foods that commonly cause trouble before a run
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Everyone&apos;s stomach is a little different, but these are the
            usual suspects:
          </p>
          <ul className="mt-4 space-y-3">
            {troubleFoods.map((f) => (
              <li key={f.title} className="rounded-2xl bg-sand p-4 text-slate-700">
                <strong className="text-ink">{f.title}.</strong> {f.fix}
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            The flip side matters too: your personal &ldquo;always works&rdquo;
            list is gold. Once you find a pre-run meal that never causes
            trouble, write it down and make it your default.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            What about during the run?
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            For most beginner runs — anything under about 60 minutes — you
            don&apos;t need to eat during the run at all. Water is enough,
            especially in cool weather; on hot days, take small sips regularly
            rather than waiting until you&apos;re very thirsty.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Once your long runs stretch past 60–75 minutes, a little fuel
            mid-run helps: roughly 30–60 grams of carbs per hour is the
            commonly used range, from sports drinks, gels, chews, or ordinary
            food like raisins or pretzels. Start small, practice in training,
            and see what your stomach likes. Our{" "}
            <Link href="/how-to-pace-a-10k" className="font-semibold text-brand-600 hover:underline">
              10K pacing guide
            </Link>{" "}
            covers how fueling fits into longer race efforts.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            After the run: protein + carbs, no stopwatch required
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Post-run eating has one job: refill what you burned and give your
            muscles what they need to repair. That means{" "}
            <strong className="text-ink">carbs to refill your energy stores,
            and protein for muscle repair</strong> — a palm-sized portion of
            protein (roughly 20–30 grams) alongside a normal serving of carbs
            covers most runners after most runs.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Easy combinations:
          </p>
          <ul className="mt-4 space-y-3">
            {recoveryMeals.map((m) => (
              <li key={m} className="rounded-2xl bg-sand p-4 text-slate-700">
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            You&apos;ll hear that you must eat within exactly 30 minutes or
            the run &ldquo;doesn&apos;t count.&rdquo; For most beginners,
            that&apos;s overstated — eating a proper meal within the next
            couple of hours is fine. The exception is when you have another
            hard session within about a day; then refueling sooner genuinely
            helps. And keep sipping water afterward, especially if you
            finished the run salty and thirsty.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            If you want to understand how these meals fit into your whole day —
            how much protein you&apos;re actually getting, and whether your
            carbs match your training — our{" "}
            <Link href="/how-to-track-macros" className="font-semibold text-brand-600 hover:underline">
              beginner&apos;s guide to tracking macros
            </Link>{" "}
            walks through it without turning eating into homework.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Hydration, in plain terms
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Show up hydrated:</strong>{" "}
              pale-yellow urine is a simple sign you&apos;re in decent shape
              before a run.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Drink to thirst</strong> during the
              run; small, regular sips beat a huge gulp at the end.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">After long or sweaty runs,</strong>{" "}
              a salty snack or a meal with your water helps your body actually
              keep the fluid.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">On genuinely hot days, slow down.</strong>{" "}
              No snack fixes heat — pacing and fluids do.
            </li>
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
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Your next step
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            On your next run, try the timing above — a real meal 2–3 hours
            out, a small snack if you need one — and note how it felt. After a
            few weeks of logging your runs and meals side by side, your own
            best pre-run menu will be obvious. New to running altogether? Start
            with our{" "}
            <Link href="/beginners-guide-to-running-walking" className="font-semibold text-brand-600 hover:underline">
              beginner&apos;s guide to running and walking
            </Link>
            , then follow the{" "}
            <Link href="/beginner-5k-training-plan" className="font-semibold text-brand-600 hover:underline">
              8-week beginner 5K plan
            </Link>
            .
          </p>
        </section>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Fuel it, log it, learn your menu
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Create a free Stride account to log your runs and your meals side
            by side — and find the pre-run routine your stomach loves. Free
            forever.
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
          nutrition and fitness information only and is not a substitute for
          professional medical or dietary advice, diagnosis, or treatment. If
          you have a health condition such as diabetes, or questions about your
          individual nutrition needs, talk to a qualified professional.
        </p>
      </main>
      <Footer />
    </div>
  );
}
