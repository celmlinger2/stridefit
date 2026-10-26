import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleByline from "@/components/ArticleByline";

export const metadata: Metadata = {
  title: "Beginner Bodyweight Workout: A No-Equipment Starter Plan",
  description:
    "No gym, no equipment, no guesswork. A beginner bodyweight workout you can do in your living room in about 25 minutes, plus a 4-week plan to progress it.",
  alternates: {
    canonical: "/beginner-bodyweight-workout",
  },
};

const exercises = [
  {
    title: "1. Squats — 3 sets of 15 reps",
    body: "Hips back and down, chest up, knees tracking over your toes. Go as low as you comfortably can with your heels on the floor. Too hard? Squat down to a chair and stand back up — same movement, smaller range.",
  },
  {
    title: "2. Knee push-ups — 3 sets of 12 reps",
    body: "Same straight line as a full push-up, just from your knees: body in one line from head to knees, hands under your shoulders, lower until your chest is a fist's height from the floor. This is a real push-up progression, not a lesser exercise — it's how most people earn the full version.",
  },
  {
    title: "3. Glute bridges — 3 sets of 15 reps",
    body: "On your back, knees bent, feet flat. Drive your hips up and squeeze your glutes hard at the top for a beat before lowering. If you feel this mostly in your lower back, tuck your ribs down slightly and push through your heels.",
  },
  {
    title: "4. Bird dogs — 3 sets of 10 reps per side",
    body: "On all fours, extend the opposite arm and leg while your hips stay square and level — imagine balancing a glass of water on your lower back. Slow is the whole point here; this is core control, not speed.",
  },
  {
    title: "5. Wall sit — 3 sets of 45 seconds",
    body: "Back flat against the wall, thighs parallel to the floor, knees over your ankles, and breathe through it. Legs shaking near the end is normal. If 45 seconds is out of reach today, start at 20–30 seconds and add a few seconds each session.",
  },
];

const weeks = [
  {
    title: "Week 1 — Learn the moves",
    body: "Two sessions. Use the easier versions freely and cut sets to 2 if you need to. Your only job is finishing with decent form and learning how each move is supposed to feel.",
  },
  {
    title: "Week 2 — The full workout",
    body: "Two or three sessions, all 3 sets at the listed reps. If a set felt easy last week, slow the lowering phase down to a count of three — time under tension is free progress.",
  },
  {
    title: "Week 3 — Add reps",
    body: "Add 2 reps to squats, glute bridges, and bird dogs, and 5 seconds to the wall sit. Sessions may stretch toward 30 minutes; that's fine.",
  },
  {
    title: "Week 4 — Try one harder version",
    body: "Pick a single exercise and level it up: knee push-ups become full push-ups for as many reps as you can keep clean (finish the set from your knees), or squats become split squats, one leg at a time. One upgrade at a time is how progress stays sustainable.",
  },
];

const faqs = [
  {
    q: "Can you actually build strength without weights?",
    a: "Yes — especially as a beginner. Muscles respond to challenge, not to where the challenge comes from, and bodyweight progressions (harder versions, slower reps, single-leg work) can keep challenging you for a long time.",
    links: true,
  },
  {
    q: "How many days a week should a beginner do this?",
    a: "Two or three sessions, with at least one rest day between them. Muscles adapt between sessions, not during them, so more is not automatically better at this stage. On the other days, stay generally active — walking counts.",
  },
  {
    q: "What if I can't do a movement at all?",
    a: "Use the easier version in the exercise notes, or cut the reps and build up over sessions. Every exercise here has a floor low enough for a true beginner: squat to a chair, push up against a wall, hold the wall sit for 20 seconds. Starting there is starting — the plan progresses from wherever you are.",
  },
  {
    q: "Do I need to warm up for a bodyweight workout?",
    a: "Yes, but it takes two minutes, not twenty: the march-and-rehearsal warm-up above is enough for a session at this intensity. Save the long routines for harder training later.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Beginner Bodyweight Workout: A No-Equipment Starter Plan",
  description:
    "No gym, no equipment, no guesswork. A beginner bodyweight workout you can do in your living room in about 25 minutes, plus a 4-week plan to progress it.",
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
    "@id": "https://stridefitapp.com/beginner-bodyweight-workout",
  },
  datePublished: "2026-10-26",
};

export default function BeginnerBodyweightWorkoutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="eyebrow">Training · Starter Plan</p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          Beginner Bodyweight Workout: A No-Equipment Starter Plan
        </h1>
        <ArticleByline published="Oct 26, 2026" readMinutes={7} />
        <p className="mt-4 text-lg leading-relaxed text-muted">
          The biggest myth about starting strength training is that it starts
          at a gym. It doesn&apos;t. Your body is already a perfectly good
          weight — for a beginner, it&apos;s usually more than enough weight —
          and a living-room floor is enough room. What beginners actually lack
          isn&apos;t equipment. It&apos;s one complete workout, written down,
          that they can repeat and slowly make harder. That&apos;s what this
          is: five moves, about 25 minutes, nothing to buy, and a simple
          4-week plan for progressing it.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The short version
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Five exercises:</strong> squats,
              knee push-ups, glute bridges, bird dogs, and a wall sit — legs,
              pushing, glutes, and core in one session.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Three sets each,</strong> resting
              about a minute between sets. The whole workout takes roughly 25
              minutes.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                Two or three sessions a week
              </strong>{" "}
              on non-consecutive days is plenty to start.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                Progress by making the moves harder, not longer:
              </strong>{" "}
              more reps first, then a harder version of the exercise. Details
              below.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The workout
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Do the exercises in the order listed. Rest 60–90 seconds between
            sets — long enough that your form stays clean on the next set. If
            a number below is too much on day one, do fewer good reps and
            write down what you did; that number is your starting line, not a
            failure.
          </p>
          <div className="mt-4 space-y-4">
            {exercises.map((e) => (
              <div key={e.title} className="rounded-2xl bg-sand p-5">
                <p className="font-display text-2xl uppercase tracking-wide text-ink">
                  {e.title}
                </p>
                <p className="mt-2 text-slate-700">{e.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            <strong className="text-ink">
              Warm-up (2 minutes, don&apos;t skip it):
            </strong>{" "}
            march in place for a minute, then do 5 slow squats to a chair and
            5 wall push-ups. Cold muscles and stiff joints make everything
            feel harder than it is.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The 4-week starter plan
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Repeat the workout above; what changes across the month is how
            much of it you do and how hard the versions get.
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
            After Week 4, keep cycling: add reps, then graduate another
            exercise. When several moves have reached their harder versions,
            you&apos;re ready for the fuller program in our{" "}
            <Link
              href="/strength-training-for-beginners"
              className="font-semibold text-brand-600 hover:underline"
            >
              strength training for beginners guide
            </Link>{" "}
            — the same principles, with more exercises and an equipment path
            if you want one.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            How hard should it feel?
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Use the last-two-reps rule: the final two reps of a set should
            feel genuinely challenging while your form stays clean. If you
            could have done ten more, the version is too easy — progress it.
            If your form breaks down halfway through the set, it&apos;s too
            hard — use the easier version without apology. Effort you can
            repeat beats intensity you can&apos;t.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Expect some muscle soreness in the first week, especially in your
            thighs and glutes. Ordinary soreness that fades in a day or two is
            a normal response to new movement. Sharp pain, joint pain, or
            soreness that changes how you walk is a signal to stop and ease
            off, not to push through.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Making it stick
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Schedule it like the walks.</strong>{" "}
              Two or three fixed slots a week — say Monday and Thursday after
              work — beat &ldquo;when I feel like it.&rdquo; Many beginners
              pair this with a walking habit on the off days; our{" "}
              <Link
                href="/walking-for-weight-management"
                className="font-semibold text-brand-600 hover:underline"
              >
                walking starter plan
              </Link>{" "}
              is built to fit around exactly this kind of schedule.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                Lay the mat out the night before.
              </strong>{" "}
              The same friction rule as walking shoes: remove the two-minute
              setup where sessions go to die.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Log every session.</strong> Write
              down the version, sets, and reps you actually did. Bodyweight
              progress is invisible day to day — the log is how you prove to
              yourself that Week 4 you is stronger than Week 1 you. This is
              what Stride&apos;s workout logging is for — and this exact
              workout is already in the app as the &ldquo;Bodyweight
              Beginner&rdquo; quick-start template, with a form video for
              every exercise.
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
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.a}{" "}
                  {f.links && (
                    <>
                      Weights eventually make progress easier to fine-tune,
                      which is why our{" "}
                      <Link
                        href="/strength-training-for-beginners"
                        className="font-semibold text-brand-600 hover:underline"
                      >
                        strength guide
                      </Link>{" "}
                      adds them later — but they are not the entry ticket.
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
            Open the Workouts page in Stride, tap the{" "}
            <strong className="text-ink">Bodyweight Beginner</strong> template
            under Quick-start workouts, and do session one today — the
            template loads all five exercises with their sets, reps, and form
            videos, and your completed sets are tracked as you go. No account
            yet?{" "}
            <Link
              href="/signup"
              className="font-semibold text-brand-600 hover:underline"
            >
              Create a free Stride account
            </Link>{" "}
            and it&apos;s waiting for you.
          </p>
        </section>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            No gym. No gear. No excuses left.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Create a free Stride account to load this workout as a ready-made
            template, log your food, and track your cardio in one place. Free
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
          fitness information only and is not a substitute for professional
          medical advice, diagnosis, or treatment. If you have a medical
          condition, joint problems, or haven&apos;t been active in a long
          time, check in with a qualified professional before starting an
          exercise program.
        </p>
      </main>
      <Footer />
    </div>
  );
}
