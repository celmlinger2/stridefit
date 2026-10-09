import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Beginner's Guide to Running and Walking: Start This Week",
  description:
    "New to running? This beginner guide covers the walk-run method, a realistic first-week plan, gear basics, and how to stay consistent — start today.",
  alternates: {
    canonical: "/beginners-guide-to-running-walking",
  },
};

const faqs = [
  {
    q: "How long before running feels easier?",
    a: "Most beginners notice a real difference around weeks 3–4. The first two weeks are the hardest — your breathing and legs are adapting to something entirely new. It gets better, and faster than you think.",
  },
  {
    q: "Should I run every day?",
    a: "No. Rest days are when your body actually adapts. Three sessions a week with rest or easy walking between them is the right dose to start.",
  },
  {
    q: "Is walking \u201ccheating\u201d?",
    a: "No — and anyone who says so misunderstands training. Walking breaks are a deliberate, proven method used by beginners and ultramarathoners alike.",
  },
];

const mistakes = [
  {
    title: "Running too fast.",
    fix: "If you can't talk in short sentences, slow down. Nearly every beginner's \u201ceasy\u201d pace is too hard.",
  },
  {
    title: "Skipping the warm-up.",
    fix: "Cold legs + first running interval = unhappy calves. Always walk 4–5 minutes first.",
  },
  {
    title: "Adding too much, too soon.",
    fix: "When week one feels easy, the temptation is to double everything. Increase total weekly time by no more than about 10% per week.",
  },
  {
    title: "Comparing yourself to runners on social media.",
    fix: "You're seeing their year three, not their week one.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Beginner's Guide to Starting Running or Walking",
  description:
    "New to running? This beginner guide covers the walk-run method, a realistic first-week plan, gear basics, and how to stay consistent — start today.",
  author: {
    "@type": "Organization",
    name: "StrideFit",
    url: "https://stridefitapp.com",
  },
  publisher: {
    "@type": "Organization",
    name: "StrideFit",
    url: "https://stridefitapp.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://stridefitapp.com/beginners-guide-to-running-walking",
  },
};

export default function BeginnersGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Running · Beginner Guide
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Beginner&apos;s Guide to Starting Running or Walking
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          You don&apos;t need to be fit to start running. You start running to
          get fit — and if running every step sounds like too much, you&apos;re
          allowed to walk. Almost every successful beginner plan is built on
          the same idea: alternate running and walking, and let your body
          catch up before you ask for more.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          This guide gives you everything you need to start this week: the
          method, a realistic first-week plan, the only gear that matters, and
          the consistency system that keeps people going past month one. No
          expensive gadgets, no punishing workouts, no &ldquo;no pain, no
          gain.&rdquo;
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Start with walking. Seriously.
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            Walking is not the consolation prize — it&apos;s the foundation. A
            brisk 20–30 minute walk trains your joints, tendons, and heart for
            the impact of running. Many coaches have new runners spend their
            first 1–2 weeks walking briskly before adding any running at all,
            and injury rates are lower for those who do.
          </p>
          <p className="mt-3 leading-relaxed text-slate-600">
            If you can walk briskly for 30 minutes without stopping, you&apos;re
            ready to add short running intervals. If that&apos;s not quite there
            yet, spend a week or two getting there first. Nothing in this guide
            expires.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Use the walk-run method
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            The walk-run method is simple: alternate short periods of easy
            running with walking breaks, from the very first session. It keeps
            your heart rate in a comfortable zone, reduces impact stress, and —
            this is the part beginners underestimate — makes the workout
            enjoyable enough to repeat.
          </p>
          <p className="mt-3 leading-relaxed text-slate-600">
            A typical first session looks like this: walk 4 minutes to warm up,
            then repeat 1 minute of easy running followed by 2 minutes of
            walking, 6–8 times, then walk 4 minutes to cool down.
            &ldquo;Easy running&rdquo; means a pace where you could hold a short
            conversation. If you can&apos;t, slow down or walk more. Speed is
            irrelevant right now.
          </p>
          <p className="mt-3 leading-relaxed text-slate-600">
            Over weeks, you gradually lengthen the running intervals and
            shorten the walks. That&apos;s the entire training philosophy. Every
            advanced plan is a more elaborate version of this same progression.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Your first-week plan
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            Three sessions in seven days is the sweet spot: enough to build
            momentum, enough recovery to stay injury-free. Do them on
            non-consecutive days if you can (Monday, Wednesday, Friday works
            well).
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-slate-50 p-4 text-slate-700">
              <strong className="text-slate-900">Session 1 (25–30 min):</strong>{" "}
              Walk 5 min → alternate 1 min run / 2 min walk × 6 → walk 5 min
            </li>
            <li className="rounded-2xl bg-slate-50 p-4 text-slate-700">
              <strong className="text-slate-900">Session 2 (25–30 min):</strong>{" "}
              Walk 5 min → alternate 1 min run / 2 min walk × 7 → walk 5 min
            </li>
            <li className="rounded-2xl bg-slate-50 p-4 text-slate-700">
              <strong className="text-slate-900">Session 3 (30–35 min):</strong>{" "}
              Walk 5 min → alternate 90 sec run / 2 min walk × 6 → walk 5 min
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-slate-600">
            Finish each session feeling like you could have done a little more.
            That feeling is the whole game — it means you&apos;ll actually come
            back for the next one.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">
            The only gear that matters: shoes
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            You need one thing to start: a pair of shoes designed for running.
            Not lifestyle sneakers, not cross-training shoes — running shoes,
            ideally fitted at a specialty running store where someone watches
            you walk. The right shoe won&apos;t make you faster, but the wrong
            one can make your shins, knees, and feet miserable within two
            weeks.
          </p>
          <p className="mt-3 leading-relaxed text-slate-600">
            Everything else is optional. Comfortable clothes you already own are
            fine. A phone for timing your intervals is fine (any free
            interval-timer app works). Leave the GPS watch, the heart-rate
            strap, and the carbon-plated racers for later — or never.
          </p>
          <p className="mt-3 leading-relaxed text-slate-600">
            One more thing worth saying out loud: you don&apos;t need new gear
            to begin. Don&apos;t let shopping become procrastination. Start with
            what you have; upgrade when the habit exists.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Eat like someone who trains (a little)
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            You don&apos;t need a special diet to start running, but a few
            basics make the first weeks noticeably easier:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
            <li>
              <strong className="text-slate-800">
                Don&apos;t run on empty or stuffed.
              </strong>{" "}
              A light snack 60–90 minutes before — banana, toast, a handful of
              crackers — beats both extremes.
            </li>
            <li>
              <strong className="text-slate-800">Eat normally after.</strong> A
              regular balanced meal within a couple of hours covers recovery
              for beginner-level sessions.
            </li>
            <li>
              <strong className="text-slate-800">Hydrate around the workout.</strong>{" "}
              Water before and after is enough for sessions under an hour.
            </li>
          </ul>
          <p className="mt-3 leading-relaxed text-slate-600">
            As your runs get longer, nutrition starts to matter more — and{" "}
            <Link
              href="/calculators/macros"
              className="font-semibold text-brand-600 hover:underline"
            >
              StrideFit&apos;s macro calculator
            </Link>{" "}
            can help you figure out what your training actually needs.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">
            The consistency system: never miss twice
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            Motivation gets you to session one. Systems get you to session
            thirty. Here&apos;s the simplest one that works:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-6 text-slate-600">
            <li>
              <strong className="text-slate-800">Schedule it.</strong> Put your
              three sessions on your calendar like appointments. Morning
              runners miss fewer sessions than evening runners — but the best
              time is the time you&apos;ll actually do.
            </li>
            <li>
              <strong className="text-slate-800">
                Lay out your gear the night before.
              </strong>{" "}
              Removing one small decision in the morning measurably increases
              follow-through.
            </li>
            <li>
              <strong className="text-slate-800">Never miss twice.</strong>{" "}
              You&apos;ll miss a session eventually — travel, weather, life.
              That&apos;s fine. The rule is: never let one missed session
              become two. The streak that matters is the comeback, not the
              perfection.
            </li>
            <li>
              <strong className="text-slate-800">Track it.</strong> Write down
              what you did after each session: time, intervals, how it felt.
              Seeing two weeks of entries is one of the strongest motivators
              there is.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">
            What about bad knees, asthma, or a health condition?
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            If you have a health condition, an old injury, or you&apos;re
            managing something like asthma or joint pain, check with your
            doctor or a physical therapist before starting — ideally one who
            works with runners. This guide is general information, not medical
            advice. Pain that changes how you move is a signal to stop and get
            checked, not to push through.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Common beginner mistakes (and the fix)
          </h2>
          <ul className="mt-4 space-y-3">
            {mistakes.map((m) => (
              <li
                key={m.title}
                className="rounded-2xl bg-slate-50 p-4 text-slate-700"
              >
                <strong className="text-slate-900">{m.title}</strong> {m.fix}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">What&apos;s next</h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            Once you can comfortably alternate 3 minutes of running with 1
            minute of walking for 30 minutes, you&apos;re ready for a structured
            goal — and the classic first one is a 5K. A beginner 5K plan picks
            up exactly where this guide leaves off.
          </p>
          <p className="mt-3 leading-relaxed text-slate-600">
            Curious what your easy pace translates to over race distances? Try
            our{" "}
            <Link
              href="/calculators/pace"
              className="font-semibold text-brand-600 hover:underline"
            >
              running pace calculator
            </Link>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl bg-slate-50 p-5">
                <p className="font-bold text-slate-900">{f.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-3xl bg-brand-600 p-8 text-center">
          <h2 className="text-2xl font-black text-white">Start Session 1 this week</h2>
          <p className="mx-auto mt-2 max-w-md text-brand-100">
            Then log it in StrideFit — every run, walk, and interval counts,
            and watching your weeks stack up is the best motivation there is.
            Free forever.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-bold text-brand-700 hover:bg-brand-50"
          >
            Create your free account
          </Link>
        </div>

        <p className="mt-10 rounded-2xl bg-slate-100 p-4 text-xs leading-relaxed text-slate-600">
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
