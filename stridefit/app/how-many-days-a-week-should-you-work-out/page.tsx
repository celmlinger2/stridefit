import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleByline from "@/components/ArticleByline";

const SLUG = "/how-many-days-a-week-should-you-work-out";
const TITLE = "How Many Days a Week Should a Beginner Work Out?";
const DESCRIPTION =
  "Three full-body days is the sweet spot for most beginners. Here's how to choose 2, 3, or 4+ days, build a realistic weekly schedule, and use rest days well.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SLUG,
    type: "article",
    images: ["/guides/workout-schedule.webp"],
  },
};

const situations = [
  {
    situation: "Brand-new to exercise",
    start: "2–3 days",
    why: "You're learning movements and building the habit; recovery is slower at first",
  },
  {
    situation: "Busy schedule — work, kids, both",
    start: "2 days",
    why: "Two sessions you never miss beat four you attend half the time",
  },
  {
    situation: "Adding running or cardio to strength",
    start: "3 strength + 2 easy cardio",
    why: "Builds an aerobic base without eating the recovery your strength days need",
  },
  {
    situation: "Older or deconditioned starter",
    start: "2–3 days, with more recovery",
    why: "Same training, more space between sessions; walking on off days helps early on",
  },
];

const week2 = [
  ["Monday", "Strength A (full-body)"],
  ["Tuesday", "Rest or an easy walk"],
  ["Wednesday", "Rest"],
  ["Thursday", "Strength B (full-body)"],
  ["Friday", "Rest or an easy walk"],
  ["Saturday–Sunday", "Rest or light activity"],
];

const week3 = [
  ["Monday", "Strength A (full-body)"],
  ["Tuesday", "Rest or an easy walk"],
  ["Wednesday", "Strength B (full-body)"],
  ["Thursday", "Rest"],
  ["Friday", "Strength A (full-body) — next week starts with B"],
  ["Saturday–Sunday", "Rest or light activity"],
];

const weekMix = [
  ["Monday", "Strength A (full-body)"],
  ["Tuesday", "Easy cardio — 20–40 minutes walk, run-walk, or cycle"],
  ["Wednesday", "Strength B (full-body)"],
  ["Thursday", "Rest"],
  ["Friday", "Strength A (full-body) — alternating as above"],
  ["Saturday", "Easy cardio or a longer walk"],
  ["Sunday", "Rest"],
];

const mistakes = [
  {
    title: "Copying a six-day influencer split.",
    fix: "The body-part split — chest Monday, back Tuesday, legs twice — is built for advanced lifters who need that volume and have the recovery to match. Beginners progress fastest on less, and a split punishes every missed day: skip leg day and your legs wait a week. Full-body, two or three days, is not a lesser version of the real thing. For a beginner, it is the real thing.",
  },
  {
    title: "Training through sharp pain.",
    fix: "Soreness, effort, and burning muscles are part of training. Sharp, sudden, or worsening pain is information — stop that exercise for the day. If it keeps showing up, get it looked at by a qualified professional before you load it again.",
  },
  {
    title: "All-or-nothing thinking.",
    fix: "The belief that a one-workout week \"doesn't count,\" or that missing Monday ruins the week, kills more beginner programs than any exercise choice ever will. One workout is infinitely more than zero, and a two-day week in a busy month is the bridge that carries the habit to a calmer month. The same trap appears as adding everything at once — new plan, new diet, 5 a.m. alarm, all starting Monday. Add one thing, let it become routine, then add the next.",
  },
];

const faqs = [
  {
    q: "Is 2 days a week really enough?",
    a: "Yes — especially at the start. Two full-body sessions a week meets the general guidance for muscle-strengthening activity, and beginners make clear progress on it. It's slower than three days, not worthless — and two done consistently beats three done sporadically.",
  },
  {
    q: "Can I work out every day?",
    a: "You can move every day — daily walking is a good idea. But hard training every day leaves no time to rebuild between sessions, and beginners feel that wall fast: constant tiredness, stalled performance, workouts you dread. For something daily, alternate training days with easy walks and keep one or two true rest days.",
  },
  {
    q: "Should I be sore after every workout?",
    a: "No. Soreness is common in the first week or two and after any new exercise — it's mostly a response to novelty. As you adapt, it fades, while strength keeps improving. Judge workouts by whether you're progressing over the weeks, not by how stiff you are on Thursday.",
  },
  {
    q: "Do rest days matter if I'm trying to lose weight?",
    a: "Yes, just as much. Recovery is when your body adapts, whatever your goal, and skipping rest tends to show up as exhaustion and dropped workouts — the opposite of the consistency that supports long-term change. Easy walking on rest days fits a weight-management goal fine; hard extra sessions to \"burn more\" usually cost more than they add.",
  },
];

function WeekTable({ rows }: { rows: string[][] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse overflow-hidden rounded-2xl text-left text-sm">
        <thead>
          <tr className="bg-sand text-ink">
            <th className="px-4 py-3 font-bold">Day</th>
            <th className="px-4 py-3 font-bold">Session</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-sand align-top">
              <td className="px-4 py-3 font-semibold text-ink">{r[0]}</td>
              <td className="px-4 py-3 text-slate-700">{r[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WorkoutSchedulePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Many Days a Week Should a Beginner Work Out? A Realistic Schedule",
    description: DESCRIPTION,
    image: "https://stridefitapp.com/guides/workout-schedule.webp",
    datePublished: "2026-11-12",
    author: { "@type": "Organization", name: "Stride" },
    publisher: { "@type": "Organization", name: "Stride" },
    mainEntityOfPage: `https://stridefitapp.com${SLUG}`,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
          Training · Beginner schedules
        </p>
        <h1 className="mt-3 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          How many days a week should a beginner work out?
        </h1>
        <ArticleByline published="Nov 12, 2026" readMinutes={7} />

        <p className="mt-6 leading-relaxed text-muted">
          Most beginners expect a bigger number than the real answer. They
          picture six days a week because that&apos;s what fitness looks like
          on social media. Then week two arrives, life gets in the way, and
          the plan collapses — not from laziness, but because the schedule was
          never survivable.
        </p>
        <p className="mt-3 leading-relaxed text-muted">
          The honest answer is smaller: two or three workouts a week builds
          strength and fitness, as long as you keep showing up. This guide
          covers picking your number, what each week looks like, and when
          adding a day helps.
        </p>

        <div className="mt-8 rounded-3xl bg-sand p-6">
          <h2 className="font-display text-3xl uppercase tracking-wide text-ink">
            The short version
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
            <li>
              <strong className="text-ink">
                Three full-body days a week is the sweet spot for most
                beginners
              </strong>{" "}
              — enough practice to learn the movements, enough rest to
              recover.
            </li>
            <li>
              <strong className="text-ink">Two days a week works.</strong>{" "}
              Slower, but real progress — and for busy beginners, often the
              schedule that survives past month one.
            </li>
            <li>
              <strong className="text-ink">Four or five days can work too</strong>{" "}
              — if the extra days are lighter or easy cardio, and you&apos;re
              recovering well.
            </li>
            <li>
              <strong className="text-ink">
                More is not automatically better.
              </strong>{" "}
              Your body adapts between workouts, not during them. Twelve weeks
              of a modest schedule beats three weeks of an ambitious one.
            </li>
          </ul>
        </div>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            What the general guidance says
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            You don&apos;t need to take a fitness site&apos;s word for this.
            The broad public-health guidance most doctors work from —
            published by the CDC and reflected in the American College of
            Sports Medicine&apos;s recommendations — comes down to two
            targets:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
            <li>
              <strong className="text-ink">Move aerobically most weeks:</strong>{" "}
              around 150 minutes of moderate activity (brisk walking counts —
              you can talk, but not sing), or about half that in vigorous
              activity like running.
            </li>
            <li>
              <strong className="text-ink">
                Strengthen muscles on 2 or more days a week:
              </strong>{" "}
              sessions that work the major muscle groups — legs, back, chest,
              shoulders, arms, core.
            </li>
          </ul>
          <p className="mt-3 leading-relaxed text-muted">
            Notice what it does <em>not</em> require: daily workouts, a gym,
            or any particular program. Two strength days covers the muscle
            target, and the aerobic minutes can come from walks, runs,
            cycling, or swimming, spread however they fit. Everything below is
            just ways of arranging those basics into a repeatable week, built
            up gradually from wherever you are now.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Pick your number: by situation
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Your starting point matters more than the &quot;ideal&quot;
            schedule. Find the row that sounds like you:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-2xl text-left text-sm">
              <thead>
                <tr className="bg-sand text-ink">
                  <th className="px-4 py-3 font-bold">Your situation</th>
                  <th className="px-4 py-3 font-bold">Start with</th>
                  <th className="px-4 py-3 font-bold">Why</th>
                </tr>
              </thead>
              <tbody>
                {situations.map((s) => (
                  <tr key={s.situation} className="border-t border-sand align-top">
                    <td className="px-4 py-3 font-semibold text-ink">{s.situation}</td>
                    <td className="px-4 py-3 font-semibold text-brand-700">{s.start}</td>
                    <td className="px-4 py-3 text-slate-700">{s.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 leading-relaxed text-muted">
            These are starting points, not assignments — if two days feels
            easy after a month, the progression section below covers when to
            add. And if you have a health condition, an old injury, or you
            haven&apos;t exercised in years, a quick conversation with your
            doctor first is worth more than any schedule on the internet.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            What the week actually looks like
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            The schedules below use full-body strength sessions — a squat or
            leg move, a push, a pull, a hinge, and a core move in each workout
            — because it forgives a missed day: skip one and you&apos;ve still
            trained everything that week. For the sessions themselves, the{" "}
            <Link href="/strength-training-for-beginners" className="font-semibold text-brand-700 hover:underline">
              beginner strength training plan
            </Link>{" "}
            lays out the exact workouts and a four-week progression, the{" "}
            <Link href="/beginner-bodyweight-workout" className="font-semibold text-brand-700 hover:underline">
              beginner bodyweight workout
            </Link>{" "}
            covers the no-equipment version, and every movement is in the{" "}
            <Link href="/exercises" className="font-semibold text-brand-700 hover:underline">
              exercise library
            </Link>{" "}
            with a form video.
          </p>

          <h3 className="mt-8 font-display text-2xl uppercase tracking-wide text-ink">
            The 2-day week
          </h3>
          <WeekTable rows={week2} />
          <p className="mt-3 leading-relaxed text-muted">
            Two non-consecutive days, whenever they fit — the gap is a
            feature: you arrive recovered.
          </p>

          <h3 className="mt-8 font-display text-2xl uppercase tracking-wide text-ink">
            The 3-day week (the sweet spot)
          </h3>
          <WeekTable rows={week3} />
          <p className="mt-3 leading-relaxed text-muted">
            Any three non-consecutive days work the same; Monday/Wednesday/
            Friday is the classic layout. Alternate A and B so each gets equal
            time over a fortnight.
          </p>

          <h3 className="mt-8 font-display text-2xl uppercase tracking-wide text-ink">
            The 3-days-plus-cardio week
          </h3>
          <WeekTable rows={weekMix} />
          <p className="mt-3 leading-relaxed text-muted">
            &quot;Easy&quot; is doing real work in that table. Cardio days
            should feel conversational — you could chat the whole time. If
            your Tuesday run-walk leaves your legs too tired for
            Wednesday&apos;s squats, it wasn&apos;t easy, whatever the pace
            said. If a first race motivates you,{" "}
            <Link href="/how-to-choose-your-first-5k-or-10k" className="font-semibold text-brand-700 hover:underline">
              how to choose your first 5K or 10K
            </Link>{" "}
            covers picking a beginner-friendly one, and the guide to{" "}
            <Link href="/walking-for-weight-management" className="font-semibold text-brand-700 hover:underline">
              walking for weight management
            </Link>{" "}
            turns the easy days into a walking plan.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Rest days are training days, too
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            A workout is a request; the rest day is when your body answers it.
            Training breaks muscle tissue down slightly and empties your
            energy stores. Sleep, food, and time rebuild them — a little
            stronger than before, if you&apos;ve asked for a manageable
            amount. Stack hard sessions with no gaps and you keep interrupting
            that rebuild, which is why beginners training six days a week
            often feel <em>worse</em> by week three: tired, lifts going
            backwards, motivation gone.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Rest doesn&apos;t have to mean the couch, though.{" "}
            <strong className="text-ink">Active recovery</strong> — an easy
            walk, gentle cycling, light stretching — keeps you moving without
            costing recovery. Just don&apos;t let it become a secret fourth
            workout: if it leaves you tired, it wasn&apos;t recovery.
          </p>

          <h3 className="mt-8 font-display text-2xl uppercase tracking-wide text-ink">
            A plain word about soreness
          </h3>
          <p className="mt-3 leading-relaxed text-muted">
            In your first couple of weeks you&apos;ll probably meet DOMS —
            delayed onset muscle soreness, the stiffness that arrives a day or
            two after a session, especially after anything new. It&apos;s
            normal, temporary, and fades as you adapt. A few things beginners
            get wrong about it:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
            <li>
              <strong className="text-ink">Sore does not mean good.</strong>{" "}
              Soreness mostly means &quot;that was new,&quot; not &quot;that
              worked.&quot; Once you&apos;re adapted, some of your best
              sessions will leave you barely sore at all — and chasing
              soreness is a short road to dreading workouts.
            </li>
            <li>
              <strong className="text-ink">
                Soreness is a reason to go easier, not always to skip.
              </strong>{" "}
              Very stiff? Swap the session for a walk and train tomorrow.
              Sessions can move; the week is flexible.
            </li>
            <li>
              <strong className="text-ink">Sharp pain is different.</strong>{" "}
              Sharp joint pain, pain that changes how you move, or anything
              worsening is not DOMS. Stop that exercise, and if it persists,
              get it checked by a qualified professional before you train
              through it.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            How to progress (and how not to)
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            The only rule for adding a day:{" "}
            <strong className="text-ink">earn it with consistency first.</strong>{" "}
            Hit your current schedule for three to four weeks straight — most
            sessions done, recovery fine, energy normal — then add one day:
            two strength days to three, or an easy cardio day to a three-day
            week. Hold the new schedule a few weeks before adding anything
            else.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Why so patient? Because consistency is the actual engine. Three
            sessions a week for twelve weeks is thirty-six workouts. Six a
            week for two weeks, then quitting, is twelve. In the first
            months, showing up <em>is</em> the training effect.
          </p>

          <h3 className="mt-8 font-display text-2xl uppercase tracking-wide text-ink">
            When you miss a week
          </h3>
          <p className="mt-3 leading-relaxed text-muted">
            You will miss a week — holidays, illness, a work crunch, a kid
            home sick. Here&apos;s the whole protocol:{" "}
            <strong className="text-ink">just resume.</strong> Pick up your
            normal schedule on the next planned day, maybe with slightly
            lighter weights for the first session back. Do not &quot;make
            up&quot; missed workouts by doubling sessions or cramming six days
            into one week — that punishes you for a normal life event and
            makes the next miss more likely. You haven&apos;t lost your
            progress in a week; you just start again, which is the skill that
            separates people who train for years from people who trained once.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            Common beginner mistakes
          </h2>
          <ul className="mt-4 space-y-3">
            {mistakes.map((m) => (
              <li key={m.title} className="rounded-2xl bg-sand p-4 text-slate-700">
                <strong className="text-ink">{m.title}</strong> {m.fix}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            How Stride helps
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Stride was built around this kind of schedule. The Workout of the
            Day gives you a full-body session to follow on your training days,
            with a form video on nearly every move, and logging a session
            takes a few taps, so your week fills in visibly as you go. Streaks
            and challenges are there when a nudge helps, and your runs and
            walks log into the same week, so a 3-days-plus-cardio schedule
            lives in one place instead of three apps.
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
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Pick your days for this week
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            It&apos;s free, with no paid tier and no card required: create a
            free account, pick your two or three days for this week, and let
            the schedule — not motivation — carry you.
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
