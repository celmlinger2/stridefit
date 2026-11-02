import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";
import PaceCalculator from "@/components/calculators/PaceCalculator";

export const metadata: Metadata = {
  title: "Pace Calculator — Running Pace & Race Time Predictor",
  description:
    "Free running pace calculator: convert race times to pace per km or mile, see kilometer-by-kilometer splits, and predict finish times for 5K, 10K, half marathon, and marathon.",
};

const faqs = [
  {
    question: "How do I calculate my running pace?",
    answer:
      "Divide your finish time by the distance. A 30:00 5K is 30 ÷ 5 = 6:00 per kilometer (about 9:39 per mile).",
  },
  {
    question: "What are splits?",
    answer:
      "Your cumulative clock time at each kilometer (or mile) marker. Checking splits against a plan is how you hold an even effort during a race.",
  },
  {
    question: "What is a good 5K pace for a beginner?",
    answer:
      "There isn't one number — it depends on age, fitness, and terrain, and a first 5K anywhere from about 30 to 45 minutes is a normal, respectable range. Your useful target is your own recent result, improving gradually.",
  },
  {
    question: "Should I run my race at an even pace?",
    answer:
      "Roughly, yes — near-even splits with a slightly conservative start is the most reliable strategy for beginners. Big early surges almost always cost more time late than they gain early.",
  },
  {
    question: "Why is my predicted marathon time so far off what I could run?",
    answer:
      "Predictions here hold one pace constant across distances, with no fatigue adjustment. They translate a pace; they don't forecast a different event.",
  },
  {
    question: "Which is better, pace per km or per mile?",
    answer:
      "Whichever your race uses for its markers. The calculator shows both so you can plan in the unit you'll see on course.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function PacePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
          Pace Calculator
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          Whether you&apos;re training for your first 5K or chasing a marathon
          PR, pace is the language of running. Enter a recent race time to see
          your pace per kilometer and per mile — or flip it around and predict
          a finish time from the pace you want to hold. Either way you&apos;ll
          get your kilometer-by-kilometer splits and predicted finish times for
          every standard race distance.
        </p>

        <div className="mt-8">
          <PaceCalculator />
        </div>

        <div className="mt-12 space-y-4 text-sm leading-relaxed text-muted">
          <h2 className="text-xl font-bold text-ink">Common race distances</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>5K — 5 km (3.1 miles)</li>
            <li>10K — 10 km (6.2 miles)</li>
            <li>Half marathon — 21.1 km (13.1 miles)</li>
            <li>Marathon — 42.2 km (26.2 miles)</li>
          </ul>
          <h2 className="text-xl font-bold text-ink">Put your pace to work</h2>
          <p>
            Log every run in Stride&apos;s free cardio tracker, import GPX or
            TCX files from your watch, and watch your average pace trend down
            over your training block.
          </p>

          <h2 className="text-xl font-bold text-ink">How to read your result</h2>
          <p>
            Pace is simply time divided by distance, expressed per kilometer or
            per mile. A 27:30 5K and a 5:30/km pace are the same performance
            said two ways — and pace is the more useful version, because you can
            act on it mid-run: glance at your watch at each kilometer marker,
            compare with the split table above, and you know within seconds
            whether you are on plan, drifting, or going out too hard. The
            calculator gives you both units, because races, treadmills, and
            training plans disagree about which one they use.
          </p>

          <h2 className="text-xl font-bold text-ink">Using your splits on race day</h2>
          <p>
            The split table assumes the steadiest possible race: every kilometer
            in exactly the same time. Treat it as a reference line, not a
            command. Most beginners race better slightly <em>under</em> pace for
            the first kilometer or two and finishing strong than by banking time
            early — the classic beginner mistake is a first kilometer 20–30
            seconds too fast that the last kilometer pays back with interest. A
            practical approach: let the early splits run a few seconds slow, sit
            on your target pace through the middle, and only push in the final
            quarter if you still feel controlled. Our{" "}
            <a href="/how-to-pace-a-10k" className="font-semibold text-brand-700 hover:underline">
              guide to pacing a 10K
            </a>{" "}
            walks through that shape in detail.
          </p>

          <h2 className="text-xl font-bold text-ink">
            Turning a race result into training paces
          </h2>
          <p>
            One honest recent race — even a parkrun or a hard time trial — tells
            you more than any generic chart. As a rule of thumb from a recent 5K
            result: easy and recovery runs are typically 60–90 seconds per mile
            (roughly 40–55 seconds per kilometer) <em>slower</em> than your 5K
            pace, and most of your weekly running should live down there; steady
            tempo work sits noticeably closer to race pace but should still feel
            controlled, like you could speak in short sentences. If every run
            comes out at race pace, that is not toughness — it is the most
            common reason beginners plateau or get hurt. Stride&apos;s{" "}
            <a href="/beginner-5k-training-plan" className="font-semibold text-brand-700 hover:underline">
              beginner 5K plan
            </a>{" "}
            shows how those paces fit into an actual week.
          </p>

          <h2 className="text-xl font-bold text-ink">
            What the predictions do — and don&apos;t — promise
          </h2>
          <p>
            The finish-time table holds your entered pace constant across every
            distance. That is exactly right for planning splits at the distance
            you entered, and only a rough translation anywhere else: nobody
            holds their 5K pace for a marathon, and a marathon pace extended
            down to 5K undersells what you could do. Use the table to compare
            paces and set targets at <em>your</em> distance, and treat other
            distances as “what this pace would equal,” not as a forecast. Real
            forecasts also bend for hills, heat, wind, and how well you fuel —
            our guide to{" "}
            <a href="/what-to-eat-before-and-after-a-run" className="font-semibold text-brand-700 hover:underline">
              what to eat before and after a run
            </a>{" "}
            covers the fueling side.
          </p>

          <h2 className="text-xl font-bold text-ink">Your next step in Stride</h2>
          <p>
            Pace only improves if you can see it trending. Log your runs in
            Stride&apos;s free cardio tracker — or import GPX/TCX files straight
            from your watch — and your average pace is tracked across the whole
            training block, so the next time you use this calculator you are
            working from a real recent result instead of a guess.{" "}
            <a href="/signup" className="font-semibold text-brand-700 hover:underline">
              Create a free account
            </a>{" "}
            and bring your last race time with you.
          </p>

          <h2 className="text-xl font-bold text-ink">Pace questions, answered</h2>
          {faqs.map((f) => (
            <div key={f.question}>
              <h3 className="font-bold text-ink">{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <EmailCapture
            heading="Train smarter, for free"
            subheading="Join Stride and log every run, walk, and cardio session."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
