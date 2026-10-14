import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleByline from "@/components/ArticleByline";

export const metadata: Metadata = {
  title: "How to Track Macros: A Beginner's Guide That Actually Works",
  description:
    "Learn how to track macros as a beginner: what protein, carbs, and fat targets to set, how to log food, and the mistakes to avoid — start today.",
  alternates: {
    canonical: "/how-to-track-macros",
  },
};

const faqs = [
  {
    q: "Do I have to track forever?",
    a: "No. Most people track diligently for 2–3 months, internalize portion sizes and their own patterns, and then maintain on autopilot — checking in with a week of tracking whenever things drift. Think of it as training wheels, not a life sentence.",
  },
  {
    q: "What if I go over my fat target but stay under calories?",
    a: "One day like that is fine. But if it happens constantly, you're probably under-eating protein or carbs to compensate, which shows up as hunger or flat training. Nudge the balance back over the next few days.",
  },
  {
    q: "Should my targets change on workout days?",
    a: "For beginners: no. Keep one set of targets until tracking feels easy — usually 3–4 weeks. Later, you can add carbs on heavy training days if you want. Complexity is the enemy of consistency early on.",
  },
  {
    q: "Is macro tracking safe if I've struggled with food?",
    a: "Be honest with yourself here. If tracking numbers triggers obsessive or disordered patterns around food, macro tracking isn't the right tool — and that's okay. Focus on regular meals, whole foods, and working with a professional who specializes in this. Your health comes first, always.",
  },
  {
    q: "What's the difference between tracking macros and keto/low-carb?",
    a: "Keto and low-carb are specific diets with rules about which foods you eat. Macro tracking is a method — it works with any way of eating, because you're just measuring what's already on your plate. You can track macros while eating pizza. You can't do keto while eating pizza.",
  },
  {
    q: "How fast should I expect results?",
    a: "Give any new target 2–3 weeks of honest tracking before judging it. Weight and measurements move slower than anyone wants, but they move. If nothing changes after three consistent weeks, adjust calories by a couple hundred and reassess.",
  },
];

const mistakes = [
  {
    title: "Setting protein too low.",
    fix: "The #1 beginner error. Most people eat half the protein they need and wonder why they're hungry and not recovering. Fix: build every meal around a protein source first, then add the rest.",
  },
  {
    title: "Changing everything on day one.",
    fix: "New targets + new foods + new schedule = burnout by Friday. Fix: track what you already eat for 3–4 days first. Then adjust one thing at a time.",
  },
  {
    title: "Treating the budget as a daily pass/fail.",
    fix: "One bad day isn't failure — it's data. Fix: judge by the weekly average, not any single day. Bodies respond to trends, not Tuesdays.",
  },
  {
    title: "Forgetting liquid calories and cooking oils.",
    fix: "Coffee drinks, juice, alcohol, and the oil in the pan are the invisible calories that sink otherwise solid tracking. Fix: log drinks like food, and count cooking oil (a tablespoon is ~120 calories).",
  },
  {
    title: "Chasing exact numbers.",
    fix: "Hitting 142g protein when your target is 140g is a win, not a miss. Fix: think in ranges. Within 5–10 grams is excellent.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Track Macros: A Beginner's Guide That Actually Works",
  description:
    "Learn how to track macros as a beginner: what protein, carbs, and fat targets to set, how to log food, and the mistakes to avoid — start today.",
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
    "@id": "https://stridefitapp.com/how-to-track-macros",
  },
};

export default function HowToTrackMacrosPage() {
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
          How to Track Macros: A Beginner&apos;s Guide That Actually Works
        </h1>
        <ArticleByline published="Oct 12, 2026" readMinutes={9} />
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Counting calories tells you <em>how much</em> you&apos;re eating.
          Tracking macros tells you <em>what</em> you&apos;re eating — and that
          difference is why two people can eat the same 2,000 calories and get
          completely different results. One is guessing. The other knows exactly
          where their protein, carbs, and fat stand every day.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          This guide walks you through macro tracking from zero: what macros
          are, how to find your personal targets, how to log food without it
          taking over your life, and the beginner mistakes that make most people
          quit in week two. No nutrition degree required.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            What are macros, exactly?
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            &ldquo;Macros&rdquo; is short for macronutrients — the three
            nutrients your body needs in large amounts:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Protein.</strong> The building block.
              It repairs muscles after training, keeps you full longer than carbs
              or fat, and helps you hold onto muscle when you&apos;re losing
              weight. Sources: meat, fish, eggs, Greek yogurt, beans, lentils,
              tofu.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Carbohydrates.</strong> Your
              body&apos;s preferred fuel, especially for training. Your brain
              runs on glucose, and your muscles store carbs as glycogen for hard
              efforts. Sources: rice, oats, potatoes, fruit, bread, pasta.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Fat.</strong> Essential for hormones,
              vitamin absorption, and feeling satisfied after meals. Not the
              enemy — just calorie-dense, so portions matter. Sources: olive
              oil, nuts, avocado, butter, fatty fish.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            Here&apos;s the part most beginners miss: every gram of protein and
            carbs has about 4 calories, and every gram of fat has about 9.
            That&apos;s why a small handful of nuts (mostly fat) can quietly
            match the calories of a whole bowl of rice (mostly carbs). Macros
            are the translation layer between &ldquo;I ate food&rdquo; and
            &ldquo;I ate <em>this much energy from each source</em>.&rdquo;
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Why track macros instead of just calories?
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Calories alone can&apos;t tell you <em>why</em> something isn&apos;t
            working. If you&apos;re eating 1,800 calories and still hungry all
            the time, your protein is probably too low. If your training feels
            flat, your carbs might be too low. If your weight is stalling despite
            &ldquo;eating clean,&rdquo; the fats — oils, dressings, snacks — are
            the usual suspects.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Tracking macros gives you levers to pull instead of just a number to
            shrink. It also ends the good-food/bad-food drama: nothing is
            off-limits, because everything fits into a daily budget. A cookie
            isn&apos;t cheating — it&apos;s 15 grams of carbs and 7 grams of fat
            that you account for, same as the oatmeal.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 1: Find your calorie target
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            You can&apos;t set macro targets without knowing your total calories
            first. The honest starting point is your TDEE — Total Daily Energy
            Expenditure, the calories your body burns in a day including
            activity.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            The quick version: if your goal is to lose weight, eat a few hundred
            calories below your TDEE. To maintain, eat at it. To gain muscle,
            eat a little above it. Our{" "}
            <Link
              href="/calculators/tdee"
              className="font-semibold text-brand-600 hover:underline"
            >
              TDEE calculator
            </Link>{" "}
            does the math for you in about a minute — age, weight, height,
            activity level, goal, done.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Don&apos;t overthink the exact number. Your TDEE is an estimate, and
            your body&apos;s response over 2–3 weeks is the real data. Pick a
            target, track honestly, and adjust based on what actually happens.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 2: Set your macro targets
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Once you have a calorie target, split it into protein, fat, and
            carbs. Here&apos;s the beginner-friendly order that works for most
            people:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Protein first.</strong> Aim for
              roughly 0.7–1 gram per pound of body weight per day (more if
              you&apos;re training hard or dieting). A 160-pound person lands
              around 115–160 grams. This is the macro most beginners undereat by
              a mile.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Fat second.</strong> About 0.3–0.5
              grams per pound of body weight. Enough for hormones and satiety,
              not so much that it eats your whole budget. That same 160-pound
              person: roughly 50–80 grams.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Carbs fill the rest.</strong> Take
              your total calories, subtract the calories from protein (grams ×
              4) and fat (grams × 9), and divide what&apos;s left by 4.
              That&apos;s your carb target. Carbs are the flexible macro — they
              flex up on training days and down on rest days.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            Example for a 160-pound person eating 2,200 calories: ~140g protein
            (560 cal), ~65g fat (585 cal), and ~260g carbs (1,055 cal) to round
            it out. If math isn&apos;t your thing, our{" "}
            <Link
              href="/calculators/macros"
              className="font-semibold text-brand-600 hover:underline"
            >
              macro calculator
            </Link>{" "}
            generates these targets from your stats and goal automatically.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 3: Track day-to-day (without losing your mind)
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Here&apos;s the practical part. Macro tracking has a reputation for
            being obsessive, but it doesn&apos;t have to be. The 80/20 version:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Log as you go, not at midnight.</strong>{" "}
              Enter meals when you eat them (or right before). Trying to
              reconstruct a whole day from memory at 11 PM is where accuracy
              goes to die. Stride&apos;s food logging is built for this — search
              the food, tap the portion, done in seconds.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Weigh the calorie-dense stuff.</strong>{" "}
              You don&apos;t need to weigh lettuce. But oils, butter, nuts,
              cheese, and peanut butter are worth 2–3 weeks with a cheap kitchen
              scale, because eyeballing them is notoriously off — a
              &ldquo;tablespoon&rdquo; of peanut butter is often two. After a
              few weeks you&apos;ll be able to estimate them accurately, and the
              scale can retire.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Read labels for packaged food.</strong>{" "}
              Serving size first, then protein/carbs/fat. Note the trap: a
              &ldquo;single&rdquo; bag of chips is often 2–2.5 servings. Log
              what you actually ate, not what the front of the package implies.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Eating out? Estimate and move on.</strong>{" "}
              Restaurant portions are guesses by nature. Pick the closest match
              in the food database, add a little extra fat (restaurant food is
              cooked in more oil than you think), and don&apos;t stress. One
              estimated meal doesn&apos;t ruin a week of good data.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Pre-log tricky days.</strong> Got a
              dinner out or a party tonight? Log a rough plan in the morning. It
              takes two minutes and turns &ldquo;I&apos;ll just wing it&rdquo;
              into a day that still lands near your targets.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            Aim for consistency, not perfection. Hitting your targets within
            5–10 grams most days beats nailing them exactly twice and quitting.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Common beginner mistakes (and the fix)
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
            A sample day at ~2,200 calories
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Here&apos;s what a full day near the example targets (140g protein /
            65g fat / 260g carbs) can look like — normal food, nothing exotic:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Breakfast:</strong> Greek yogurt
              (170g) with oats (50g), banana, and a drizzle of honey — ~30g
              protein
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Lunch:</strong> Chicken breast
              (150g), rice (200g cooked), mixed veg, 1 tsp olive oil — ~45g
              protein
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Snack:</strong> Apple + 30g almonds
              — ~8g protein
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Dinner:</strong> Salmon (150g),
              potatoes (250g), big salad with dressing — ~40g protein
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Evening:</strong> Cottage cheese
              (150g) with berries — ~20g protein
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            Total lands around 140g protein, 60–70g fat, 250–270g carbs. Adjust
            portions up or down to fit your own targets — the{" "}
            <em>shape</em> of the day matters more than any single meal.
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

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Stop guessing tomorrow
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Run your numbers through the macro calculator, then log everything
            you eat tomorrow — no changes yet, just data. Free forever.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/calculators/macros"
              className="inline-block rounded-full bg-brand-500 px-6 py-3 font-bold text-white hover:bg-brand-600"
            >
              Calculate my macros
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
          condition, talk to a qualified professional before starting a new
          exercise program.
        </p>
      </main>
      <Footer />
    </div>
  );
}
