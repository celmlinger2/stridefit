import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleByline from "@/components/ArticleByline";

export const metadata: Metadata = {
  title: "How to Choose Your First 5K or 10K: A Beginner's Guide",
  description:
    "First race? How to pick 5K vs 10K, what to check before you enter (course, cutoffs, walkers, price deadlines), and how much training time you really need.",
  alternates: {
    canonical: "/how-to-choose-your-first-5k-or-10k",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose Your First 5K or 10K: A Beginner's Guide to Picking a Race",
  description:
    "First race? How to pick 5K vs 10K, what to check before you enter (course, cutoffs, walkers, price deadlines), and how much training time you really need.",
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
    "@id": "https://stridefitapp.com/how-to-choose-your-first-5k-or-10k",
  },
  datePublished: "2026-11-02",
};

const comparison = [
  {
    label: "Training time needed",
    fiveK: "~8 weeks from little or no running",
    tenK: "~10–12 weeks; easier if you already run",
  },
  {
    label: "Weekly time commitment",
    fiveK: "3 sessions, roughly 2 hours total",
    tenK: "3–4 sessions, roughly 3 hours total",
  },
  {
    label: "Race-day time on course",
    fiveK: "~30–50 minutes for most beginners",
    tenK: "~60–90 minutes for most beginners",
  },
  {
    label: "Recovery",
    fiveK: "Usually back to normal in a day or two",
    tenK: "A few easy days afterwards",
  },
  {
    label: "Best for",
    fiveK: "A first finish line; run-walk is completely normal",
    tenK: "Runners who already enjoy longer weekend runs",
  },
];

const checks = [
  {
    title: "1. The date gives you enough training time",
    body: "Count the weeks between today and race day. If they're fewer than the minimums above, pick the shorter distance at the same event or a later race. Cramming is how beginners get hurt.",
  },
  {
    title: "2. The course profile",
    body: "Most race pages show a course map, and many show elevation. A flat or gently rolling course is the friendly choice for a first race; a famously hilly one is a great second race. If the course is local, go run or walk part of it in training — familiarity removes most race-morning nerves.",
  },
  {
    title: "3. The time limit (cutoff)",
    body: null,
  },
  {
    title: "4. Walkers are welcome — in writing",
    body: "\"Walkers welcome\" on the race page, a walker division, or finish photos full of walking groups are the real signals. If the page never mentions walkers and the cutoff is tight, believe the cutoff.",
  },
  {
    title: "5. Packet pickup and start time",
    body: "When and where do you collect your bib — the day before, or race morning? A 7 AM start an hour from home with day-before pickup across town is two early alarms, not one. Neither is a dealbreaker; both are worth knowing before you pay.",
  },
  {
    title: "6. The price-increase date",
    body: "Entry fees almost always rise in steps as race day approaches, and the first increase is often months out. If you've decided, entering before the first increase is the single easiest saving in the whole sport. (One local example: the Cincinnati Cyclones Frozen 5K/10K's entry price stepped up on November 1 — months before its February race day.)",
  },
  {
    title: "7. The refund and transfer policy",
    body: "Most races don't refund, full stop. Some let you transfer your entry to another runner or defer a year. Know which you're buying — it decides how much a twisted ankle in week six actually costs you.",
  },
];

export default function HowToChooseYourFirst5kOr10kPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="eyebrow">Running · Race Guide</p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          How to Choose Your First 5K or 10K: A Beginner&apos;s Guide to Picking a Race
        </h1>
        <ArticleByline published="Nov 2, 2026" readMinutes={6} />
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Signing up for a race is the best motivation trick in running — a
          date on the calendar turns &ldquo;I should run more&rdquo; into a
          plan. But beginners usually pick their first race the wrong way:
          whichever one a friend mentioned, or whichever is soonest. A first
          race that&apos;s too soon, too hilly, or quietly hostile to walkers
          can sour the whole idea. Picking well takes about ten minutes, and
          it&apos;s mostly a matter of knowing what to check.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The short version
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">First race ever? Choose the 5K.</strong>{" "}
              It&apos;s long enough to feel like an achievement and short
              enough that training fits a normal life.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                Already running 30–40 minutes comfortably, three times a week?
              </strong>{" "}
              A 10K is a realistic first race with 8–10 weeks to prepare.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Give yourself training time:</strong>{" "}
              at least 8 weeks for a 5K, 10–12 for a 10K, counted back from
              race day — before you pay.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                Check five things on every race&apos;s page:
              </strong>{" "}
              course hills, the time limit (cutoff), whether walkers are
              genuinely welcome, packet pickup logistics, and the next
              price-increase date.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">A local race beats a famous one</strong>{" "}
              for a first start line: no hotel, no travel stress, and you can
              train on the actual course.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            5K or 10K: an honest comparison
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl bg-sand p-5">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="py-2 pr-3 font-bold text-ink"></th>
                  <th className="py-2 pr-3 font-bold text-ink">5K (3.1 miles)</th>
                  <th className="py-2 font-bold text-ink">10K (6.2 miles)</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-ink/5 align-top last:border-0">
                    <td className="py-2 pr-3 font-semibold text-ink">{row.label}</td>
                    <td className="py-2 pr-3 text-slate-700">{row.fiveK}</td>
                    <td className="py-2 text-slate-700">{row.tenK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            Walking part of a 5K is not a lesser finish — plenty of 5K
            finishers run-walk, and many events are built for walkers outright.
            If your base right now is walking, our{" "}
            <Link
              href="/walking-for-weight-management"
              className="font-semibold text-brand-600 hover:underline"
            >
              walking starter plan
            </Link>{" "}
            is a reasonable 4–6 week on-ramp before starting a 5K plan. If you
            choose the 5K, our{" "}
            <Link
              href="/beginner-5k-training-plan"
              className="font-semibold text-brand-600 hover:underline"
            >
              beginner 5K training plan
            </Link>{" "}
            lays out the full 8 weeks. If you choose the 10K, learn how pacing
            works before race day — a 10K punishes a too-fast first mile much
            harder than a 5K does, and our guide to{" "}
            <Link
              href="/how-to-pace-a-10k"
              className="font-semibold text-brand-600 hover:underline"
            >
              how to pace a 10K
            </Link>{" "}
            walks through it.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Before you enter: the seven checks
          </h2>
          <div className="mt-4 space-y-4">
            {checks.map((c) => (
              <div key={c.title} className="rounded-2xl bg-sand p-5">
                <p className="font-display text-2xl uppercase tracking-wide text-ink">
                  {c.title}
                </p>
                {c.body ? (
                  <p className="mt-2 text-slate-700">{c.body}</p>
                ) : (
                  <p className="mt-2 text-slate-700">
                    Every organized race has one, stated on its site
                    (&ldquo;course closes at…&rdquo;). Compare it honestly with
                    your expected pace, including a run-walk pace. Our{" "}
                    <Link
                      href="/calculators/pace"
                      className="font-semibold text-brand-600 hover:underline"
                    >
                      pace calculator
                    </Link>{" "}
                    turns your recent run into a projected finish time for both
                    distances. If a race&apos;s cutoff works out faster than
                    about a 16-minute-mile average, it is not aiming at
                    beginners — pick a different one.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            What a first race should feel like
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Aim for <em>organized, local, and friendly-sized</em>: a few
            hundred to a few thousand runners, a cause or club behind it, and a
            start line you can reach without a hotel. Big famous races are
            wonderful — as a second or third race, when the logistics
            won&apos;t eat the experience. Your only jobs at a first race are
            to start healthy, pace sensibly (start slower than feels right),
            and finish smiling enough to want another one.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Verified starter races near Cincinnati
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Advice is easier with real races to point at. These three local
            events passed every check above — real dates, published prices,
            and organizers who say where walkers stand — and each one has a
            full listing in our{" "}
            <Link
              href="/events"
              className="font-semibold text-brand-600 hover:underline"
            >
              race events hub
            </Link>
            , verified November 4, 2026:
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl bg-sand p-5">
              <p className="font-display text-2xl uppercase tracking-wide text-ink">
                Cincinnati Cyclones Frozen 5K/10K — Feb 6, 2027
              </p>
              <p className="mt-2 text-slate-700">
                The soonest friendly start line: a 9 AM riverfront race at
                The Banks, 5K $40 / 10K $45, with prices stepping up after
                December 31.{" "}
                <Link
                  href="/events/cyclones-frozen-5k-10k"
                  className="font-semibold text-brand-600 hover:underline"
                >
                  Full event details
                </Link>
              </p>
            </div>
            <div className="rounded-2xl bg-sand p-5">
              <p className="font-display text-2xl uppercase tracking-wide text-ink">
                Flying Pig 5K &amp; 10K — May 1, 2027
              </p>
              <p className="mt-2 text-slate-700">
                The big-weekend option — walkers officially welcome at a
                16-minute-mile pace, 5K $55.49 / 10K $66.18 with fees
                included, and all spring to train for it.{" "}
                <Link
                  href="/events/flying-pig-5k-10k"
                  className="font-semibold text-brand-600 hover:underline"
                >
                  Full event details
                </Link>
              </p>
            </div>
            <div className="rounded-2xl bg-sand p-5">
              <p className="font-display text-2xl uppercase tracking-wide text-ink">
                Upstander 5K — Jun 27, 2027
              </p>
              <p className="mt-2 text-slate-700">
                The gentlest debut on the calendar: a walkers-welcome 5K at
                Union Terminal for $42.50, with a family festival and free
                museum admission wrapped around it.{" "}
                <Link
                  href="/events/upstander-5k"
                  className="font-semibold text-brand-600 hover:underline"
                >
                  Full event details
                </Link>
              </p>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            Entry fees step up as race day approaches, so confirm the
            current price on the organizer&apos;s registration page before
            you pay — each listing shows when we last verified it.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            After you pick one
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Put three things on the calendar the day you enter: your training
            start date (today, ideally), packet pickup, and race morning — with
            an arrival time an hour before the start. Then work backwards with
            the right plan: the{" "}
            <Link
              href="/beginner-5k-training-plan"
              className="font-semibold text-brand-600 hover:underline"
            >
              beginner 5K plan
            </Link>{" "}
            for a 5K, and the{" "}
            <Link
              href="/how-to-pace-a-10k"
              className="font-semibold text-brand-600 hover:underline"
            >
              10K pacing guide
            </Link>{" "}
            plus the{" "}
            <Link
              href="/calculators/pace"
              className="font-semibold text-brand-600 hover:underline"
            >
              pace calculator
            </Link>{" "}
            for a 10K. In the final week, our in-app{" "}
            <Link
              href="/app/race-kit"
              className="font-semibold text-brand-600 hover:underline"
            >
              Race-Day Kit
            </Link>{" "}
            covers the day itself — what to eat, when to arrive, and a
            checklist so nothing is left to memory at 6 AM. What to eat the day
            before and morning of is covered in{" "}
            <Link
              href="/what-to-eat-before-and-after-a-run"
              className="font-semibold text-brand-600 hover:underline"
            >
              what to eat before and after a run
            </Link>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Your next step
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Pick your race, then log the training for it in Stride — runs,
            walks, and workouts in one place, with your race date as the
            target. No account yet?{" "}
            <Link
              href="/signup"
              className="font-semibold text-brand-600 hover:underline"
            >
              Create a free Stride account
            </Link>{" "}
            and add the race to your cardio events.
          </p>
        </section>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Pick the race. We&apos;ll track the training.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Create a free Stride account to log runs, walks, and workouts
            against your race date — plus nutrition and strength in the same
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
          <strong>Not medical advice:</strong> General information for beginner
          runners, not medical advice. If you have a health condition or
          haven&apos;t exercised in a long time, check in with your clinician
          before starting a training plan.
        </p>
      </main>
      <Footer />
    </div>
  );
}
