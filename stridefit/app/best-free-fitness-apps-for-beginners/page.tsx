import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleByline from "@/components/ArticleByline";

export const metadata: Metadata = {
  title: "Best Free Fitness Apps for Beginners (2026), Honestly Compared",
  description:
    "Five genuinely free fitness apps compared on what the free version actually includes — running, workouts, and food logging — plus where each one paywalls you.",
  alternates: {
    canonical: "/best-free-fitness-apps-for-beginners",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Free Fitness Apps for Beginners (2026): An Honest Comparison",
  description:
    "Five genuinely free fitness apps compared on what the free version actually includes — running, workouts, and food logging — plus where each one paywalls you.",
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
    "@id": "https://stridefitapp.com/best-free-fitness-apps-for-beginners",
  },
  datePublished: "2026-11-09",
};

const rows = [
  {
    app: "Nike Run Club",
    bestAt: "Guided running",
    free: "Everything: GPS tracking, 300+ audio guided runs, training plans 5K–marathon",
    paywall: "Nothing — no premium tier exists",
    paid: "None",
  },
  {
    app: "FitOn",
    bestAt: "Home workout videos",
    free: "Large on-demand class library (strength, HIIT, yoga, Pilates, cardio), challenges",
    paywall: "Offline downloads, personalized meal plans, premium music",
    paid: "Pro ≈ $29.99/year",
  },
  {
    app: "MyFitnessPal",
    bestAt: "Food logging",
    free: "Food diary, huge searchable food database (20M+ foods), calorie & macro tracking, weight tracking",
    paywall: "Barcode scan, meal scan (photo logging), voice log, ad-free, custom gram-level goals",
    paid: "Premium ≈ $79.99/year · Premium+ $99.99/year",
  },
  {
    app: "ASICS Runkeeper",
    bestAt: "No-fuss run tracking",
    free: "GPS tracking, audio cues, goal setting, full activity history",
    paywall: "Personalized training plans, advanced insights, live tracking, ad-free",
    paid: "Go $39.99/year · monthly from $9.99",
  },
  {
    app: "Strava",
    bestAt: "Social training log",
    free: "GPS tracking, activity feed, clubs, challenges, basic stats",
    paywall:
      "Segment leaderboards, route builder, training log & analysis, personal heatmaps, live location (Beacon)",
    paid: "$11.99/mo or $79.99/year",
  },
  {
    app: "Stride",
    bestAt: "All three habits in one place",
    free: "Diet tracking, a 150+ exercise library with a form video for nearly every exercise, workout plans, run/walk logging, calculators, local race guides",
    paywall: "Nothing — there is no paid tier",
    paid: "None (free; supported by future sponsors, not subscriptions)",
  },
];

const shortVersion = [
  {
    q: "Just want to run, with a coach in your ear?",
    a: "Nike Run Club — the only big app here with no premium tier at all.",
  },
  {
    q: "Want home workout videos to follow along with?",
    a: "FitOn — a large class library that's free; the paid tier is cheap and mostly extras.",
  },
  {
    q: "Want to log food seriously?",
    a: "MyFitnessPal has the biggest food database — but know that its barcode scanner has been a paid feature since 2022.",
  },
  {
    q: "Want simple run tracking without social pressure?",
    a: "ASICS Runkeeper — free tracking and full history; its training plans need the paid Go tier.",
  },
  {
    q: "Want the social feed and clubs everyone you know is on?",
    a: "Strava — free tracking is solid, but leaderboards, routes, and training analysis are subscription features now.",
  },
  {
    q: "Want running, workouts, and food in one place, in a browser, with no subscription tier?",
    a: "That's Stride — with its trade-offs stated plainly in its section below.",
  },
];

function AppSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
        {title}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default function BestFreeFitnessAppsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="eyebrow">Fitness Apps · Comparison Guide</p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          Best Free Fitness Apps for Beginners (2026): An Honest Comparison
        </h1>
        <ArticleByline published="Nov 9, 2026" readMinutes={7} />
        <p className="mt-4 text-lg leading-relaxed text-muted">
          &ldquo;Free&rdquo; is the most abused word in fitness apps. Most of
          the big names are free to download and expensive to actually use:
          the training plan, the barcode scanner, or your own workout history
          sits behind a subscription you only meet after you&apos;ve built
          the habit. So this guide compares the free versions — what you
          genuinely get for $0, where each paywall is, and which app fits
          which beginner.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          One disclosure before the rankings: <strong className="text-ink">Stride is ours.</strong>{" "}
          It&apos;s included because it belongs in a &ldquo;free for
          beginners&rdquo; list, it&apos;s judged on the same criteria as
          everyone else, and where another app is simply the better tool for
          a particular job, this guide says so.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            The short version
          </h2>
          <ul className="mt-4 space-y-3">
            {shortVersion.map((item) => (
              <li
                key={item.q}
                className="rounded-2xl bg-sand p-4 text-slate-700"
              >
                <strong className="text-ink">{item.q}</strong> {item.a}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            What &ldquo;free&rdquo; gets you, side by side
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl bg-sand p-5">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="py-2 pr-3 font-bold text-ink">App</th>
                  <th className="py-2 pr-3 font-bold text-ink">Best at</th>
                  <th className="py-2 pr-3 font-bold text-ink">
                    Free version includes
                  </th>
                  <th className="py-2 pr-3 font-bold text-ink">
                    Behind the paywall
                  </th>
                  <th className="py-2 font-bold text-ink">Paid tier (US)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.app}
                    className="border-b border-ink/5 align-top last:border-0"
                  >
                    <td className="py-2 pr-3 font-semibold text-ink">
                      {row.app}
                    </td>
                    <td className="py-2 pr-3 text-slate-700">{row.bestAt}</td>
                    <td className="py-2 pr-3 text-slate-700">{row.free}</td>
                    <td className="py-2 pr-3 text-slate-700">{row.paywall}</td>
                    <td className="py-2 text-slate-700">{row.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted">
            Prices checked November 2026 against the apps&apos; own pages and
            store listings; free tiers and prices change often, so confirm on
            the app&apos;s site before you rely on one.
          </p>
        </section>

        <AppSection title="Nike Run Club — the genuinely free one">
          <p>
            Nike Run Club is the strangest deal in fitness apps: there is
            nothing to buy. Guided runs narrated by real coaches, structured
            plans from a first 5K to a marathon, GPS tracking, challenges —
            all of it is free with a Nike account, and there is no premium
            tier to upsell you into.
          </p>
          <p>
            <strong className="text-ink">How it differs from Stride:</strong>{" "}
            audio coaching is Nike&apos;s specialty — a real coach talking you
            through the run, inside a native phone app with live GPS tracking.
            Stride takes the other route: structured written plans you follow
            at your own pace, and you log the run when you&apos;re done. If a
            voice in your ear is what keeps you going, Nike is the better tool
            for that job.
          </p>
          <p>
            <strong className="text-ink">The catches:</strong> it&apos;s
            running only — no food logging, no strength library. And its
            beginner plan starts at a level some true beginners find steep
            (the first week asks for a continuous 20-minute run), so brand-new
            exercisers may do better starting with a run-walk plan like our{" "}
            <Link
              href="/beginner-5k-training-plan"
              className="font-semibold text-brand-600 hover:underline"
            >
              beginner 5K training plan
            </Link>{" "}
            and adding Nike&apos;s guided runs once running feels normal.
          </p>
        </AppSection>

        <AppSection title="FitOn — follow-along workouts, free">
          <p>
            FitOn&apos;s free tier is a large library of instructor-led workout
            videos — strength, HIIT, yoga, Pilates, barre, cardio, meditation
            — that you follow along with at home, no payment information
            required. The optional Pro tier (about $29.99/year, cheap by app
            standards) adds offline downloads, personalized meal plans, and
            premium music rather than unlocking the workouts themselves.
          </p>
          <p>
            <strong className="text-ink">How it differs from Stride:</strong>{" "}
            FitOn is built for pressing play and having a person on screen
            lead the whole session. Stride instead builds you a plan from
            individual exercises, each with its own short form video — better
            for learning the movements and progressing at your own speed, less
            like a class.
          </p>
          <p>
            <strong className="text-ink">The catches:</strong> it&apos;s a
            class library, not a tracker — it
            won&apos;t log your food, build your running base, or keep your
            training history the way a tracking app does. Stride&apos;s
            approach is the opposite trade: short form-check videos for each
            exercise in a plan (see the{" "}
            <Link
              href="/exercises"
              className="font-semibold text-brand-600 hover:underline"
            >
              exercise library
            </Link>
            ) rather than full follow-along classes.
          </p>
        </AppSection>

        <AppSection title="MyFitnessPal — the food database, with an asterisk">
          <p>
            MyFitnessPal&apos;s food database is the largest in this list —
            over 20 million foods, including restaurant dishes — and the free
            version still covers the core job: search a food, log it, track
            calories and macros, watch your weight trend. Our own{" "}
            <Link
              href="/how-to-track-macros"
              className="font-semibold text-brand-600 hover:underline"
            >
              guide to tracking macros
            </Link>{" "}
            applies in any of these apps.
          </p>
          <p>
            <strong className="text-ink">The asterisk:</strong> the features
            that make logging <em>fast</em> are paid. The barcode scanner
            moved to Premium in October 2022 and is still there; photo-based
            Meal Scan and voice logging are Premium too, and the free tier is
            ad-supported. Premium runs about $79.99/year in the US — and
            there&apos;s now a tier above it, Premium+ at $99.99/year, which
            adds meal-planning tools. None of
            that makes it a bad app — it makes it a freemium app, which is
            worth knowing before your habit depends on a scanner you
            don&apos;t have.
          </p>
          <p>
            <strong className="text-ink">How it differs from Stride:</strong>{" "}
            database size. MyFitnessPal&apos;s library has been growing for
            over a decade — if a packaged or restaurant food exists, it&apos;s
            the most likely place to find it already entered. Stride&apos;s
            food database is smaller and still growing; the difference is that
            nothing in Stride&apos;s logging is held back for a paid tier,
            because there isn&apos;t one.
          </p>
        </AppSection>

        <AppSection title="ASICS Runkeeper — tracking without the noise">
          <p>
            Runkeeper (owned by ASICS) is the quiet option: free GPS run
            tracking, audio cues, simple goals, and your full activity
            history, without Strava&apos;s leaderboard culture. For a beginner
            who finds segments and kudos more stressful than motivating, that
            calm is a feature.
          </p>
          <p>
            <strong className="text-ink">The catches:</strong> the
            personalized training plans — the thing most beginners eventually
            want — sit behind Runkeeper Go at $39.99/year (monthly plans from
            $9.99). The
            free tier tracks where you&apos;ve been; it doesn&apos;t coach
            where you&apos;re going.
          </p>
        </AppSection>

        <AppSection title="Strava — where your friends are, less free than it was">
          <p>
            Strava&apos;s free tier still does the basics well: GPS tracking,
            the activity feed, clubs, challenges, and syncing from nearly
            every watch. If your run club or your friends live on Strava, that
            network is the reason to be there.
          </p>
          <p>
            <strong className="text-ink">The catches:</strong> Strava has
            steadily moved its signature features behind the subscription
            ($11.99/month or $79.99/year): full segment leaderboards, the
            route builder, training-log analysis, personal heatmaps, and
            Beacon live-location sharing. Free Strava in 2026 is a good
            logbook; the analysis layer is the paid product.
          </p>
        </AppSection>

        <AppSection title="Stride — one free home for all three habits (ours)">
          <p>
            Stride exists because of the pattern in the table above: the free{" "}
            <em>running</em> app doesn&apos;t log food, the free <em>food</em>{" "}
            app paywalls its scanner, and the free <em>workout</em> app
            doesn&apos;t track either. Stride puts diet tracking, workouts,
            and run/walk logging in one free account, on the web — no
            app-store download (it installs as a web app), no subscription
            tier, and no feature in this guide&apos;s table sitting behind a
            paywall.
          </p>
          <p>
            What&apos;s in it: a food log with macro targets and a &ldquo;what
            fits your remaining macros&rdquo; suggester, voice logging, a 150+
            exercise library with a short form video for nearly every
            exercise, an adaptive Workout of the Day, streaks and challenges,
            pace and calorie calculators, and guides to real local races
            (start with{" "}
            <Link
              href="/how-to-choose-your-first-5k-or-10k"
              className="font-semibold text-brand-600 hover:underline"
            >
              how to choose your first 5K or 10K
            </Link>
            ).
          </p>
          <p>
            <strong className="text-ink">
              The trade-offs, stated plainly:
            </strong>{" "}
            Stride is web-first — it installs in seconds and works on any
            phone or computer with no app-store download, and the trade-off is
            that it doesn&apos;t track you live by GPS or put a coach in your
            ear while you run; you log the run when you&apos;re done. Its food
            database is smaller than MyFitnessPal&apos;s — theirs has a
            decade&apos;s head start — though every part of Stride&apos;s
            logging is free to use. And there&apos;s no social feed: your
            training stays yours, not a leaderboard. What Stride won&apos;t do
            is sell you back your own features later — it&apos;s funded by
            sponsors, not by converting free users, which is why there is no
            premium tier to move things into.
          </p>
        </AppSection>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            How to choose, in one minute
          </h2>
          <ol className="mt-4 space-y-3">
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">One job, done brilliantly:</strong>{" "}
              running coaching → Nike Run Club; food database → MyFitnessPal
              (budget for Premium if you scan); follow-along classes → FitOn.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">Tracking without coaching:</strong>{" "}
              Runkeeper for calm, Strava for community.
            </li>
            <li className="rounded-2xl bg-sand p-4 text-slate-700">
              <strong className="text-ink">
                All three habits, one login, $0 for real:
              </strong>{" "}
              Stride —{" "}
              <Link
                href="/signup"
                className="font-semibold text-brand-600 hover:underline"
              >
                create a free account
              </Link>{" "}
              and start with whichever habit matters most this week.
            </li>
          </ol>
          <p className="mt-4 leading-relaxed text-muted">
            Whichever you pick, pick one and give it two honest weeks.
            Beginners don&apos;t fail because they chose the second-best app;
            they fail because they kept switching.
          </p>
        </section>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            One app for food, workouts, and runs — free
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Create a free Stride account and put all three habits in one
            place. No subscription tier, no paywalled features. Free forever.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-block rounded-full bg-brand-500 px-6 py-3 font-bold text-white hover:bg-brand-600"
          >
            Create your free account
          </Link>
        </div>

        <p className="mt-10 rounded-2xl bg-sand p-4 text-xs leading-relaxed text-muted">
          <strong>Not medical advice:</strong> General information, not
          medical advice. Talk to a clinician before starting a new exercise
          or nutrition program if you have a health condition.
        </p>
      </main>
      <Footer />
    </div>
  );
}
