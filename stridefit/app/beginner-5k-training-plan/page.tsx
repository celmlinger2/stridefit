import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "8-Week Beginner 5K Training Plan (Walk-Run Method)",
  description:
    "Follow this 8-week beginner 5K plan built on walk-run intervals. Three sessions a week, no experience needed — go from walk-run to race day.",
  alternates: {
    canonical: "/beginner-5k-training-plan",
  },
};

const weeks = [
  {
    title: "Week 1 — Learn the rhythm",
    sessions: [
      "Tue: 8 × (1 min run / 90 sec walk)",
      "Thu: 8 × (1 min run / 90 sec walk)",
      "Sat (long): 8 × (90 sec run / 90 sec walk)",
    ],
  },
  {
    title: "Week 2 — Stretch the runs",
    sessions: [
      "Tue: 8 × (90 sec run / 90 sec walk)",
      "Thu: 6 × (2 min run / 90 sec walk)",
      "Sat (long): 8 × (2 min run / 90 sec walk)",
    ],
  },
  {
    title: "Week 3 — Shrink the walks",
    sessions: [
      "Tue: 6 × (2 min run / 1 min walk)",
      "Thu: 8 × (2 min run / 1 min walk)",
      "Sat (long): 6 × (3 min run / 90 sec walk)",
    ],
  },
  {
    title: "Week 4 — Consolidation week (slightly easier — this is on purpose)",
    sessions: [
      "Tue: 5 × (3 min run / 90 sec walk)",
      "Thu: 6 × (3 min run / 1 min walk)",
      "Sat (long): 4 × (5 min run / 2 min walk)",
    ],
  },
  {
    title: "Week 5 — The runs get real",
    sessions: [
      "Tue: 4 × (5 min run / 90 sec walk)",
      "Thu: 3 × (8 min run / 2 min walk)",
      "Sat (long): 2 × (10 min run / 2 min walk), then 5 min run",
    ],
  },
  {
    title: "Week 6 — Mostly running now",
    sessions: [
      "Tue: 3 × (10 min run / 90 sec walk)",
      "Thu: 2 × (12 min run / 2 min walk)",
      "Sat (long): 20 min run / 2 min walk / 10 min run",
    ],
  },
  {
    title: "Week 7 — Peak week",
    sessions: [
      "Tue: 25 min continuous run",
      "Thu: 12 min run / 2 min walk / 12 min run",
      "Sat (long): 28 min continuous run",
    ],
  },
  {
    title: "Week 8 — Race week (taper + race day)",
    sessions: [
      "Tue: 20 min easy run",
      "Thu: 15 min easy with 4 × 1-min pickups (slightly quicker, still controlled)",
      "Sat: Race day — 5K!",
    ],
  },
];

const faqs = [
  {
    q: "What pace should I run?",
    a: "Whatever pace lets you hold a conversation. For most beginners that's somewhere between 11 and 14 minutes per mile. It doesn't matter. Truly.",
  },
  {
    q: "Can I repeat a week?",
    a: "Absolutely — repeating a week is always better than struggling through the next one. The plan works if you finish it in 10 weeks instead of 8.",
  },
  {
    q: "What if I can't run the whole 5K on race day?",
    a: "Then walk parts of it. A 5K with walk breaks still counts, still earns the medal, and still makes you a runner. Most first-time 5K finishers walk at some point.",
  },
  {
    q: "Do I need a GPS watch?",
    a: "No. A phone timer is all this plan requires. If you later want distance and pace data, any free running app — or Stride's GPX import — does the job.",
  },
  {
    q: "When should I replace my shoes?",
    a: "Running shoes typically last 300–500 miles. For this plan's mileage, one pair gets you through training and race day comfortably if you start fresh.",
  },
];

const troubleshooting = [
  {
    title: "Shin splints.",
    fix: "The classic beginner complaint — aching along the front of your lower legs. Usually caused by too much, too soon, or worn-out shoes. Back off to walking for a few days, ice after sessions, and check your shoes: if they're old lifestyle sneakers rather than running shoes, that's often the fix.",
  },
  {
    title: "\u201cI missed a whole week.\u201d",
    fix: "Don't restart the plan from week 1. Repeat the last week you completed comfortably, then continue. Fitness fades slower than you fear.",
  },
  {
    title: "Side stitch.",
    fix: "A sharp cramp under your ribs, usually when you speed up or right after eating. Slow to a walk, breathe deeply and evenly, and gently press on the spot. It passes. Eating closer than an hour before running makes stitches more likely.",
  },
  {
    title: "Bad weather.",
    fix: "Treadmills work fine for any session in this plan — set 1% incline to mimic outdoor effort. Or swap the session to another day that week. The plan is a framework, not a contract.",
  },
  {
    title: "Knee or joint pain that changes how you move.",
    fix: "Stop and get it checked by a doctor or physical therapist — ideally one who works with runners. Muscle tiredness is normal; sharp or persistent joint pain is a signal, not something to run through.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "8-Week Beginner 5K Training Plan (Walk-Run Method)",
  description:
    "Follow this 8-week beginner 5K plan built on walk-run intervals. Three sessions a week, no experience needed — go from walk-run to race day.",
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
    "@id": "https://stridefitapp.com/beginner-5k-training-plan",
  },
};

export default function Beginner5kPlanPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="eyebrow">Running · 5K Training Plan</p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          8-Week Beginner 5K Training Plan (Walk-Run Method)
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Eight weeks from now, you can cross the finish line of a 5K. Not by
          running yourself into the ground, and not by &ldquo;pushing through
          the pain&rdquo; — by following a plan that alternates running and
          walking, builds gradually, and respects rest days as much as workout
          days.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          This plan assumes one thing: you can already alternate about 3
          minutes of running with 1 minute of walking for 30 minutes. If
          that&apos;s you, you&apos;re ready. (If you&apos;re not there yet,
          start with our{" "}
          <Link
            href="/beginners-guide-to-running-walking"
            className="font-semibold text-brand-600 hover:underline"
          >
            beginner&apos;s guide to running and walking
          </Link>{" "}
          — it gets you to this exact starting line.)
        </p>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            How the plan works
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Three sessions a week.</strong>{" "}
              That&apos;s it. Most beginners do well on Tuesday, Thursday, and
              Saturday, but any three non-consecutive days work. Consistency
              beats perfection — the same three days every week is better than
              a &ldquo;perfect&rdquo; schedule you can&apos;t keep.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                Every session has the same shape:
              </strong>{" "}
              5 minutes of brisk walking to warm up, the main set of run/walk
              intervals, then 5 minutes of easy walking to cool down. The
              warm-up and cool-down never change; only the middle grows.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                One session each week is slightly longer.
              </strong>{" "}
              Marked &ldquo;long&rdquo; below, it&apos;s usually the weekend
              session. It builds the endurance you&apos;ll need on race day.
              It&apos;s never more than a few minutes longer than the others —
              this plan grows you gradually, not suddenly.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                &ldquo;Easy&rdquo; means conversational.
              </strong>{" "}
              Every running interval in this plan is done at an easy pace — one
              where you could speak in short sentences. If you can&apos;t,
              you&apos;re going too fast. Walk breaks are not failures;
              they&apos;re part of the workout, built in on purpose.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">The 10% rule.</strong> Never increase
              your total weekly running time by more than about 10%. This plan
              already follows that rule — which is exactly why you
              shouldn&apos;t &ldquo;add a little extra&rdquo; when a week feels
              easy. The fitness is compounding quietly. Let it.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The 8-week schedule
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Read each session as: warm up 5 min walk → main set → cool down 5
            min walk. Only the main set is listed.
          </p>
          <div className="mt-4 space-y-4">
            {weeks.map((w) => (
              <div key={w.title} className="rounded-2xl bg-sand p-5">
                <p className="font-display text-2xl uppercase tracking-wide text-ink">
                  {w.title}
                </p>
                <ul className="mt-2 space-y-1 text-slate-700">
                  {w.sessions.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            Total time per session stays around 30–45 minutes including warm-up
            and cool-down. If life happens and you miss a session, just do the
            next one — never stack two sessions into one day to
            &ldquo;catch up.&rdquo;
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Race week and race day
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">The taper is the training.</strong>{" "}
              Week 8 looks easy because it&apos;s supposed to. Your fitness is
              already built; this week is about arriving fresh. Don&apos;t add
              extra miles. Don&apos;t try a hard workout &ldquo;to test
              yourself.&rdquo; Trust the eight weeks behind you.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Two days before:</strong> eat
              normally. Don&apos;t try new foods, new gels, or a radically
              different dinner. Boring is good.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Race morning:</strong> eat the same
              light breakfast you&apos;ve eaten before training sessions
              (banana and toast is the classic for a reason), arrive 30–45
              minutes early, and do your usual 5-minute walking warm-up plus a
              few minutes of easy jogging.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Pacing the race:</strong> start
              slower than you think you should. The single most common
              beginner race mistake is going out too fast in the first
              kilometer because of adrenaline and the crowd. If you ran your
              long sessions comfortably, aim to run the first half at that same
              comfortable effort — you can pick it up in the final kilometer if
              you feel good. Walking breaks during the race are completely
              fine; plenty of finishers walk portions of a 5K.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            <strong className="text-ink">After you finish:</strong> keep
            walking for 5–10 minutes, drink water, eat something within an hour
            or two. Then — this matters — write down your time and how it
            felt. Future you will love reading it.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Fueling for the plan
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            You don&apos;t need a runner&apos;s diet for this plan, but a few
            habits make training noticeably better:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
            <li>
              <strong className="text-slate-800">Before sessions:</strong> a
              light snack 60–90 minutes ahead — banana, toast, oatmeal. Avoid
              running on completely empty or completely full.
            </li>
            <li>
              <strong className="text-slate-800">After sessions:</strong> a
              normal balanced meal within a couple of hours. For sessions under
              an hour, you don&apos;t need recovery shakes or special products.
            </li>
            <li>
              <strong className="text-slate-800">Daily:</strong> drink water
              steadily through the day rather than chugging right before a run.
              As sessions pass 45 minutes, bring water along.
            </li>
            <li>
              <strong className="text-slate-800">Race week:</strong> eat
              normally. Carb-loading is for marathons, not 5Ks.
            </li>
          </ul>
          <p className="mt-3 leading-relaxed text-muted">
            If you want to get intentional about any of this,{" "}
            <Link
              href="/calculators/macros"
              className="font-semibold text-brand-600 hover:underline"
            >
              Stride&apos;s macro calculator
            </Link>{" "}
            is built exactly for runners figuring out their fueling.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Troubleshooting
          </h2>
          <ul className="mt-4 space-y-3">
            {troubleshooting.map((t) => (
              <li
                key={t.title}
                className="rounded-2xl bg-sand p-4 text-slate-700"
              >
                <strong className="text-ink">{t.title}</strong> {t.fix}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The 10-minute strength add-on (optional, recommended)
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Twice a week — after an easy session or on a rest day — this simple
            circuit protects you from the injuries that derail beginner plans.
            No gym needed:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-6 text-muted">
            <li>Bodyweight squats × 12</li>
            <li>Walking lunges × 10 per leg</li>
            <li>Glute bridges × 12</li>
            <li>Plank × 30 seconds</li>
            <li>Calf raises × 15</li>
          </ol>
          <p className="mt-3 leading-relaxed text-muted">
            Rest 60 seconds, repeat once. That&apos;s it. Stronger glutes and
            calves are the best injury insurance a new runner can buy.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            After the 5K: what&apos;s next
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            First, enjoy it — you earned it. Then pick a direction:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
            <li>
              <strong className="text-slate-800">A faster 5K.</strong> Repeat
              the plan with slightly quicker &ldquo;easy&rdquo; paces, or add
              one session a week with short faster intervals.
            </li>
            <li>
              <strong className="text-slate-800">A 10K.</strong> The same
              walk-run approach scales up; most runners are ready to start 10K
              training 2–3 weeks after their first 5K.
            </li>
            <li>
              <strong className="text-slate-800">Just keep running.</strong>{" "}
              Three 30-minute runs a week is a fantastic lifelong habit that
              needs no goal at all.
            </li>
          </ul>
          <p className="mt-3 leading-relaxed text-muted">
            Whatever you choose, keep logging it. Stride&apos;s run tracking
            turns eight weeks of entries into proof of how far you&apos;ve come
            — and proof is what keeps you going when motivation dips.
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
                  {f.q === "What pace should I run?" && (
                    <>
                      Our{" "}
                      <Link
                        href="/calculators/pace"
                        className="font-semibold text-brand-600 hover:underline"
                      >
                        pace calculator
                      </Link>{" "}
                      can translate any pace into race predictions once
                      you&apos;re curious.
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
            Then log every session in Stride — eight weeks of entries becomes
            proof of how far you&apos;ve come. Free forever.
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
          condition, talk to a qualified professional before starting a new
          exercise program.
        </p>
      </main>
      <Footer />
    </div>
  );
}
