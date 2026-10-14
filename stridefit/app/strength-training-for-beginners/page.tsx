import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleByline from "@/components/ArticleByline";

export const metadata: Metadata = {
  title: "Strength Training for Beginners: A Simple 4-Week Plan",
  description:
    "New to lifting? This beginner strength plan gives you 3 full-body workouts a week, a handful of basic moves, and a simple 4-week progression.",
  alternates: {
    canonical: "/strength-training-for-beginners",
  },
};

const weeks = [
  {
    week: "Week 1",
    sets: "2",
    reps: "8",
    job: "Learn the moves. Light weight, perfect form.",
  },
  {
    week: "Week 2",
    sets: "3",
    reps: "8–10",
    job: "Add a set, then reps. Same weight.",
  },
  {
    week: "Week 3",
    sets: "3",
    reps: "10–12",
    job: "Add reps; if a move feels easy, add a little weight or use the harder variation (knee push-ups → push-ups).",
  },
  {
    week: "Week 4",
    sets: "2–3",
    reps: "8–10",
    job: "Consolidation. Slightly easier on purpose — you finish the month feeling strong, not wrecked.",
  },
];

const mistakes = [
  {
    title: "Going too heavy, too soon.",
    fix: "Ego lifting with sloppy form is how beginners get hurt and quit. Fix: pick a weight that lets you finish every rep cleanly, and earn the heavier one.",
  },
  {
    title: "Skipping the rest days.",
    fix: "Muscles get stronger while you recover, not while you train. Fix: keep the non-consecutive days. If you want to move on off days, walk or run — more on that below.",
  },
  {
    title: "Changing the plan every week.",
    fix: "A new workout every Monday means you never practice anything long enough to improve at it. Fix: run the same A/B plan for the full four weeks. The progression is the variety.",
  },
  {
    title: "Ignoring protein.",
    fix: "Strength training is the signal; protein is the building material. Fix: aim for protein at most meals.",
  },
];

const faqs = [
  {
    q: "Do I need a gym?",
    a: "No. One pair of dumbbells and a bit of floor space covers everything in this plan, and every dumbbell move has a bodyweight fallback. A gym becomes useful later, when you outgrow the weights you own.",
  },
  {
    q: "How heavy should I start?",
    a: "Lighter than your pride suggests. Choose a weight where the last two reps are hard but your form stays clean. If you could easily do five more reps, go a little heavier next session. Week 1 is for learning, not testing.",
  },
  {
    q: "Will this make me bulky?",
    a: "No. Building visibly large muscles takes years of deliberate training and eating for size. Four weeks — or four months — of this plan makes you firmer, stronger, and more capable. That “toned” look people want is exactly what this builds.",
  },
  {
    q: "Can I combine this with running or the 5K plan?",
    a: "Yes — they fit together well. Lift on your non-running days if you can, or lift first and run easy afterward.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Strength Training for Beginners: A Simple 4-Week Plan",
  description:
    "New to lifting? This beginner strength plan gives you 3 full-body workouts a week, a handful of basic moves, and a simple 4-week progression.",
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
    "@id": "https://stridefitapp.com/strength-training-for-beginners",
  },
};

export default function StrengthTrainingForBeginnersPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="eyebrow">Training · Beginner Guide</p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          Strength Training for Beginners: A Simple 4-Week Plan
        </h1>
        <ArticleByline published="Oct 14, 2026" readMinutes={6} />
        <p className="mt-4 text-lg leading-relaxed text-muted">
          You don&apos;t need a gym membership to start strength training. You
          don&apos;t need a six-day body-part split, a shelf of supplements, or
          a personal trainer shouting at you. What you need is a handful of
          basic movements, three sessions a week, and a plan for making them
          slightly harder over time. That&apos;s it. This plan gives you exactly
          that: four weeks, two simple workouts, and dumbbells (or just your
          bodyweight) at home.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            How the plan works
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            You&apos;ll train <strong className="text-ink">three days a week on
            non-consecutive days</strong> — Monday, Wednesday, Friday is the
            classic setup, but any three days with a rest day between them
            works. Each session is <strong className="text-ink">full-body</strong>:
            squats, a push, a pull, a hinge, and a core move, every time.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Full-body beats body-part splits for beginners for two simple
            reasons. First, you practice each movement more often, and practice
            is how form improves. Second, life happens — miss a day on a
            full-body plan and you&apos;ve still trained everything that week.
            Miss &ldquo;leg day&rdquo; on a split and your legs wait another
            week.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            The engine underneath is{" "}
            <strong className="text-ink">progressive overload</strong>, which
            sounds technical and isn&apos;t: make the work a little harder over
            time, and your body adapts by getting stronger. For the first month,
            that means adding reps first. When you can do all the reps with good
            form, then add a little weight or switch to a harder variation.
            Small steps, repeated — that&apos;s the whole secret.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Warm up before each session with 3–5 minutes of easy movement:
            marching in place, arm circles, a few bodyweight squats. Then rest
            60–90 seconds between sets.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The two workouts
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Alternate A and B across your three weekly sessions: Week 1 runs
            A-B-A, Week 2 runs B-A-B, and so on.
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl bg-sand p-5">
              <p className="font-display text-2xl uppercase tracking-wide text-ink">Workout A</p>
              <ul className="mt-2 space-y-2 text-slate-700">
                <li><strong className="text-ink">Goblet squats</strong> — hold one dumbbell at your chest, sit deep between your heels. No dumbbell yet? Bodyweight squats work fine: hips back and down, chest up, knees track over toes.</li>
                <li><strong className="text-ink">Push-ups</strong> — chest to floor, body in one straight line. Drop to knees if needed; knee push-ups keep the same straight line, just from your knees, and they&apos;re a strength builder, not a shortcut.</li>
                <li><strong className="text-ink">Bent-over rows</strong> — hinge at the hips, pull the weights to your ribs, squeeze.</li>
                <li><strong className="text-ink">Dead bugs</strong> — back pressed to the floor, lower opposite arm and leg slowly.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-sand p-5">
              <p className="font-display text-2xl uppercase tracking-wide text-ink">Workout B</p>
              <ul className="mt-2 space-y-2 text-slate-700">
                <li><strong className="text-ink">Romanian deadlifts</strong> — soft knees, push hips back, feel the hamstrings load.</li>
                <li><strong className="text-ink">Overhead press</strong> — press overhead without arching your lower back.</li>
                <li><strong className="text-ink">Glute bridges</strong> — drive hips up, squeeze glutes hard at the top for a beat.</li>
                <li><strong className="text-ink">Plank</strong> — elbows under shoulders, squeeze glutes, breathe steadily (hold for time instead of reps).</li>
                <li><strong className="text-ink">Calf raises</strong> — rise tall on your toes, pause, lower slowly.</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            Every move here is from Stride&apos;s exercise library, so once you
            create your free account you can log these exact workouts and follow
            the Workout of the Day.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Your 4-week progression
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="bg-sand text-ink">
                  <th className="px-4 py-3 font-bold">Week</th>
                  <th className="px-4 py-3 font-bold">Sets</th>
                  <th className="px-4 py-3 font-bold">Reps (per move)</th>
                  <th className="px-4 py-3 font-bold">The job this week</th>
                </tr>
              </thead>
              <tbody>
                {weeks.map((w, i) => (
                  <tr key={w.week} className={i % 2 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-bold text-ink">{w.week}</td>
                    <td className="px-4 py-3">{w.sets}</td>
                    <td className="px-4 py-3">{w.reps}</td>
                    <td className="px-4 py-3 text-muted">{w.job}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            A few ground rules. Start lighter than you think you should; if
            your form breaks down, the weight is too heavy, full stop. The last
            two reps of a set should feel challenging but clean. Soreness for a
            day or two after the first sessions is normal. Sharp pain is not —
            stop that exercise and get it checked before you train it again.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            After week 4
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Just repeat the cycle, one notch up: a little more weight on the
            dumbbell moves, the harder push-up variation, an extra rep or two
            everywhere. You can run this same A/B structure for months — plenty
            of people do. Strength training rewards boring consistency far more
            than novelty. When the plan eventually feels easy at weights you
            own, that&apos;s a good problem, and it means you&apos;ve stopped
            being a beginner.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Four beginner mistakes to skip
          </h2>
          <ul className="mt-4 space-y-3">
            {mistakes.map((m) => (
              <li key={m.title} className="rounded-2xl bg-sand p-4 text-slate-700">
                <strong className="text-ink">{m.title}</strong> {m.fix}
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            The{" "}
            <Link href="/how-to-track-macros" className="font-semibold text-brand-600 hover:underline">
              macro-tracking guide
            </Link>{" "}
            and the guide to{" "}
            <Link href="/calories-to-lose-weight" className="font-semibold text-brand-600 hover:underline">
              how many calories to eat
            </Link>{" "}
            cover the eating side, and the{" "}
            <Link href="/calculators/tdee" className="font-semibold text-brand-600 hover:underline">
              TDEE calculator
            </Link>{" "}
            gives you your starting numbers.
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
                  {f.q.startsWith("Can I combine") && (
                    <>
                      Our{" "}
                      <Link
                        href="/beginner-5k-training-plan"
                        className="font-semibold text-brand-600 hover:underline"
                      >
                        8-week beginner 5K plan
                      </Link>{" "}
                      uses the same three-days-a-week rhythm, so the two
                      alternate neatly across the week.
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Pick your three days this week
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Then log every session in Stride — four weeks of entries is the
            proof that keeps you going in month two. Free forever.
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
          fitness information only and is not a substitute for professional
          medical advice, diagnosis, or treatment. If you have a health
          condition or an injury, talk to a qualified professional before
          starting a new exercise program.
        </p>
      </main>
      <Footer />
    </div>
  );
}
