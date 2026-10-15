import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleByline from "@/components/ArticleByline";

export const metadata: Metadata = {
  title: "How to Pace a 10K: Start Slower, Finish Faster",
  description:
    "Learn how to pace a 10K: pick a realistic goal time, run mile 1 controlled, settle in the middle, and negative-split the finish. Includes a pace chart.",
  alternates: {
    canonical: "/how-to-pace-a-10k",
  },
};

const goals = [
  { time: "50:00", mile: "8:03", km: "5:00" },
  { time: "55:00", mile: "8:51", km: "5:30" },
  { time: "60:00", mile: "9:39", km: "6:00" },
  { time: "65:00", mile: "10:28", km: "6:30" },
  { time: "70:00", mile: "11:16", km: "7:00" },
  { time: "75:00", mile: "12:04", km: "7:30" },
];

const mistakes = [
  {
    title: "Banking time.",
    fix: "Running the first half fast \u201cto have time in the bank\u201d is the #1 mistake. The bank charges enormous interest. Everyone who tries it pays in the final mile.",
  },
  {
    title: "Racing the first 400 meters.",
    fix: "Start-line adrenaline plus a downhill first stretch is a trap. Your first mile should be your most disciplined, not your fastest.",
  },
  {
    title: "Surging.",
    fix: "Passing someone feels great for about a minute. Small changes of pace cost far more energy than holding steady. Pass gradually or not at all until late.",
  },
  {
    title: "Checking out at mile 5.",
    fix: "The race gets hard here for everyone \u2014 including everyone ahead of you. Hold form, shorten your stride slightly, and the finish gets closer faster than it feels.",
  },
];

const faqs = [
  {
    q: "What if I go out too fast anyway?",
    a: "Slow down immediately, even if it means a genuinely easy next mile. Recovering at mile 2 is cheap. Recovering at mile 5 barely exists.",
  },
  {
    q: "Should beginners really try to negative split?",
    a: "Yes \u2014 but think of it as starting patient, not finishing superhuman. Your final mile being faster than your first is enough.",
  },
  {
    q: "How much slower should my first mile be?",
    a: "About 10\u201315 seconds slower than goal pace for the first mile, a touch less for mile 2. Less than you'd think, more than your adrenaline wants.",
  },
  {
    q: "Can I use walk breaks in a 10K?",
    a: "Absolutely. Short, planned walk breaks \u2014 say 30\u201360 seconds every couple of miles \u2014 beat one long unplanned collapse.",
    planLink: true,
  },
  {
    q: "What's a good first 10K time?",
    a: "Whatever gets you to the finish line with a strong final mile. For most new runners that's somewhere between 60 and 75 minutes \u2014 and a well-paced 70 beats a miserable 65 every time.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Pace a 10K: Start Slower, Finish Faster",
  description:
    "Learn how to pace a 10K: pick a realistic goal time, run mile 1 controlled, settle in the middle, and negative-split the finish. Includes a pace chart.",
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
    "@id": "https://stridefitapp.com/how-to-pace-a-10k",
  },
  datePublished: "2026-10-15",
};

export default function HowToPaceA10KPage() {
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
          How to Pace a 10K: Start Slower, Finish Faster
        </h1>
        <ArticleByline published="Oct 15, 2026" readMinutes={6} />
        <p className="mt-4 text-lg leading-relaxed text-muted">
          The short version: pick a realistic goal time, divide it evenly
          across 6.2 miles, run the first mile a touch slower than goal pace,
          settle into goal pace through the middle, and build over the final
          mile. Almost every 10K mistake comes from the first five minutes.
          Get those right and the race mostly takes care of itself.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Why pacing matters more at 10K
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            A 5K is short enough to survive a bad start. A 10K isn&apos;t. At
            6.2 miles, it&apos;s twice the distance — long enough that going
            out too fast in the first mile quietly borrows energy you&apos;ll
            desperately want in the last one, and short enough that there&apos;s
            no time to recover from the debt.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            The good news: pacing is a skill, not a talent. You don&apos;t need
            to be experienced, you just need a plan before the start line
            instead of a hope.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 1: Set a goal time you can actually hit
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Everything starts from an honest target.{" "}
            <strong className="text-ink">Use a recent 5K:</strong> double your
            5K time and add a little, because nobody holds 5K pace for twice as
            long. Multiply your 5K time by about 2.08 — a 25:00 5K points to
            about a <strong className="text-ink">52:00</strong> 10K, a 30:00
            5K to about <strong className="text-ink">62:30</strong>, and a
            35:00 5K to about <strong className="text-ink">73:00</strong>.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            <strong className="text-ink">Or use a recent training run:</strong>{" "}
            if you can run 5 miles comfortably at a steady pace in training,
            your 10K goal pace can be roughly 20 seconds per mile faster than
            that.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            No recent times at all? Then your first 10K goal should simply be{" "}
            <em>finish strong</em> — and the strategy below still works, using
            effort instead of a watch.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 2: Know your numbers
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Divide your goal time by 6.2 and you have your target pace per
            mile. Here are the most common goals (kilometers included for
            anyone whose watch is set that way):
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="bg-sand text-ink">
                  <th className="px-4 py-3 font-bold">Goal time</th>
                  <th className="px-4 py-3 font-bold">Per mile</th>
                  <th className="px-4 py-3 font-bold">Per kilometer</th>
                </tr>
              </thead>
              <tbody>
                {goals.map((g, i) => (
                  <tr key={g.time} className={i % 2 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-bold text-ink">{g.time}</td>
                    <td className="px-4 py-3">{g.mile}</td>
                    <td className="px-4 py-3 text-muted">{g.km}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            Stride&apos;s free{" "}
            <Link href="/calculators/pace" className="font-semibold text-brand-600 hover:underline">
              pace calculator
            </Link>{" "}
            does this math for any goal time and shows your split for every
            mile — worth bookmarking before race day.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Step 3: Run the race in three parts
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl bg-sand p-5">
              <p className="font-display text-2xl uppercase tracking-wide text-ink">Mile 1 — Deliberately easy</p>
              <p className="mt-2 text-slate-700">
                Run it about 10–15 seconds <em>slower</em> than goal pace. It
                will feel too easy. Everyone around you will sprint off. Let
                them. You are not being slow — you are being paid back with
                interest in the final mile. Effort check: you should be able to
                speak in full sentences.
              </p>
            </div>
            <div className="rounded-2xl bg-sand p-5">
              <p className="font-display text-2xl uppercase tracking-wide text-ink">Miles 2–4 — Settle in</p>
              <p className="mt-2 text-slate-700">
                Lock onto goal pace and relax. You&apos;ll cross the 5K mark —
                the halfway point — during this stretch, which is a good moment
                to check in honestly: if you&apos;re already struggling, ease
                off 10 seconds a mile and protect the finish. Small drifts are
                fine either way; surges are not. Effort check: short phrases,
                maybe three or four words at a time.
              </p>
            </div>
            <div className="rounded-2xl bg-sand p-5">
              <p className="font-display text-2xl uppercase tracking-wide text-ink">Mile 5 to the finish — Build</p>
              <p className="mt-2 text-slate-700">
                Now you spend what you saved. Pick up the pace gradually, pass
                people who went out too fast (there will be many), and from the
                final half-mile, give what you have left. The last stretch can
                be your fastest of the day. Effort check: talking is no longer
                on the agenda.
              </p>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            This is called a <strong className="text-ink">negative split</strong>{" "}
            — running the second half slightly faster than the first — and
            it&apos;s how most distance records are set. For a first 10K, think
            of it simply as: <strong className="text-ink">start controlled,
            finish brave.</strong>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            No watch? Pace by effort
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Pacing by feel works just as well once you know the landmarks:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">First mile:</strong> Feels almost too
              easy. Breathing steady, legs fresh. If it feels &ldquo;about
              right,&rdquo; it&apos;s probably too fast.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Halfway (the 5K mark):</strong>{" "}
              Working, but sustainable. You should think, &ldquo;I can hold
              this, but I wouldn&apos;t want to go much faster.&rdquo;
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Mile 5:</strong> Genuinely hard. This
              is the part of the race everyone warns you about — it means
              you&apos;re pacing correctly, not that you&apos;re falling apart.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Final stretch:</strong> Everything
              you have. It&apos;s close enough to hurt.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Adjust for the day you&apos;re given
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            <strong className="text-ink">Hills.</strong> Pace the effort, not
            the number. Slow down going up, let gravity help you down, and
            don&apos;t sprint the downhill to &ldquo;make up time&rdquo; — your
            quads will invoice you later.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            <strong className="text-ink">Heat.</strong> Warm days cost real
            time. On a hot morning, add 20–30 seconds per mile to your early
            pace and race by effort. Chasing a personal best in 85 degrees is
            how races become walks.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            <strong className="text-ink">Wind.</strong> Into the wind, tuck in
            behind other runners and accept a slower mile. Save your push for
            when it turns behind you.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The four pacing mistakes to avoid
          </h2>
          <ul className="mt-4 space-y-3">
            {mistakes.map((m) => (
              <li key={m.title} className="rounded-2xl bg-sand p-4 text-slate-700">
                <strong className="text-ink">{m.title}</strong> {m.fix}
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            Still building toward your first 10K? Start with the{" "}
            <Link href="/beginners-guide-to-running-walking" className="font-semibold text-brand-600 hover:underline">
              beginner&apos;s guide to running and walking
            </Link>{" "}
            and the{" "}
            <Link href="/beginner-5k-training-plan" className="font-semibold text-brand-600 hover:underline">
              8-week beginner 5K plan
            </Link>{" "}
            to build the base first.
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
                  {f.planLink && (
                    <>
                      If you&apos;re building up to your first 10K, our{" "}
                      <Link
                        href="/beginner-5k-training-plan"
                        className="font-semibold text-brand-600 hover:underline"
                      >
                        8-week beginner 5K plan
                      </Link>{" "}
                      is the place to build the base first.
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Your race-day checklist
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted">
            <li>Goal time picked, mile splits written down (or saved from the pace calculator)</li>
            <li>Mile 1: deliberately easy — full sentences</li>
            <li>Middle miles: goal pace, no surges</li>
            <li>5K mark: honest check-in at halfway</li>
            <li>Mile 5: start building</li>
            <li>Final half-mile: everything left</li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            Then log it in Stride, enjoy having a time to beat, and start
            plotting the next one. Pacing is the skill that turns a finish into
            a personal best — and now you have the plan.
          </p>
        </section>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Train for it, then race it
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Track your training runs in Stride, check your splits with the free
            pace calculator, and show up on race day with a plan. Free forever.
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
