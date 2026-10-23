import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { CardioLog, FoodLog, WorkoutLog } from "@/lib/database.types";
import WorkoutOfTheDay from "@/components/WorkoutOfTheDay";
import DashboardHero from "@/components/DashboardHero";
import StreakRing from "@/components/StreakRing";
import CheckInCard from "@/components/CheckInCard";

function dayKey(d: Date): string {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const now = new Date();
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 6);
  sevenDaysAgo.setHours(0, 0, 0, 0);

  const [
    { data: foods },
    { data: cardio },
    { data: workouts },
    { data: profile },
    { data: wideFoods },
    { data: wideCardio },
    { data: wideWorkouts },
  ] = await Promise.all([
      supabase
        .from("food_logs")
        .select("calories, logged_at")
        .eq("user_id", user!.id)
        .gte("logged_at", sevenDaysAgo.toISOString()),
      supabase
        .from("cardio_logs")
        .select("performed_at, distance_km")
        .eq("user_id", user!.id)
        .order("performed_at", { ascending: false })
        .limit(60),
      supabase
        .from("workout_logs")
        .select("performed_at")
        .eq("user_id", user!.id)
        .order("performed_at", { ascending: false })
        .limit(60),
      supabase
        .from("profiles")
        .select("display_name, calorie_target")
        .eq("id", user!.id)
        .single(),
      supabase
        .from("food_logs")
        .select("logged_at")
        .eq("user_id", user!.id)
        .order("logged_at", { ascending: false })
        .limit(1000),
      supabase
        .from("cardio_logs")
        .select("performed_at")
        .eq("user_id", user!.id)
        .order("performed_at", { ascending: false })
        .limit(1000),
      supabase
        .from("workout_logs")
        .select("performed_at")
        .eq("user_id", user!.id)
        .order("performed_at", { ascending: false })
        .limit(1000),
    ]);

  const foodLogs = (foods ?? []) as Pick<FoodLog, "calories" | "logged_at">[];
  const cardioLogs = (cardio ?? []) as Pick<CardioLog, "performed_at" | "distance_km">[];
  const workoutLogs = (workouts ?? []) as Pick<WorkoutLog, "performed_at">[];

  const todayKey = dayKey(now);
  const caloriesToday = foodLogs
    .filter((f) => dayKey(new Date(f.logged_at)) === todayKey)
    .reduce((s, f) => s + (f.calories ?? 0), 0);
  const calorieTarget = profile?.calorie_target ?? null;
  const caloriePct =
    calorieTarget && calorieTarget > 0 ? Math.min(Math.round((caloriesToday / calorieTarget) * 100), 100) : null;

  // Activity per day for the last 7 days.
  const activityByDay = new Map<string, number>();
  const bump = (iso: string) => {
    const d = new Date(iso);
    if (d >= sevenDaysAgo) {
      const k = dayKey(d);
      activityByDay.set(k, (activityByDay.get(k) ?? 0) + 1);
    }
  };
  foodLogs.forEach((f) => bump(f.logged_at));
  cardioLogs.forEach((c) => bump(c.performed_at));
  workoutLogs.forEach((w) => bump(w.performed_at));

  const week: { label: string; count: number; isToday: boolean }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    week.push({
      label: d.toLocaleDateString(undefined, { weekday: "narrow" }),
      count: activityByDay.get(dayKey(d)) ?? 0,
      isToday: i === 0,
    });
  }
  const maxCount = Math.max(1, ...week.map((d) => d.count));

  const workoutsThisWeek = workoutLogs.filter((w) => new Date(w.performed_at) >= sevenDaysAgo).length;
  const cardioThisWeek = cardioLogs.filter((c) => new Date(c.performed_at) >= sevenDaysAgo);
  const kmThisWeek = cardioThisWeek.reduce((s, c) => s + Number(c.distance_km ?? 0), 0);

  // Streak: consecutive days with any activity (uses up to 60 recent logs).
  const activeDays = new Set<string>();
  foodLogs.forEach((f) => activeDays.add(dayKey(new Date(f.logged_at))));
  cardioLogs.forEach((c) => activeDays.add(dayKey(new Date(c.performed_at))));
  workoutLogs.forEach((w) => activeDays.add(dayKey(new Date(w.performed_at))));
  let streak = 0;
  const cursor = new Date(now);
  if (!activeDays.has(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (activeDays.has(dayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  // Longest streak + ring data from the full (timestamp-only) history.
  const allDays = new Set<string>();
  (wideFoods ?? []).forEach((f) => allDays.add(dayKey(new Date(f.logged_at))));
  (wideCardio ?? []).forEach((c) => allDays.add(dayKey(new Date(c.performed_at))));
  (wideWorkouts ?? []).forEach((w) => allDays.add(dayKey(new Date(w.performed_at))));
  let longest = streak;
  {
    let run = 0;
    const d = new Date(now);
    // Walk back day by day over at most ~3 years of history.
    for (let i = 0; i < 1100 && allDays.size > 0; i++) {
      if (allDays.has(dayKey(d))) {
        run += 1;
        if (run > longest) longest = run;
      } else {
        run = 0;
      }
      d.setDate(d.getDate() - 1);
    }
  }
  const activeToday = allDays.has(dayKey(now));
  const last7: boolean[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    last7.push(allDays.has(dayKey(d)));
  }

  const name = profile?.display_name || user?.email?.split("@")[0] || "there";
  const hasAnyData = foodLogs.length > 0 || cardioLogs.length > 0 || workoutLogs.length > 0;

  const wellnessTips = [
    {
      title: "Consistency beats intensity",
      body: "A 20-minute walk you actually do beats the perfect workout you skip. Show up, log it, repeat.",
    },
    {
      title: "Sleep is training",
      body: "Muscles repair while you sleep. Seven to nine hours is part of the program, not a break from it.",
    },
    {
      title: "Protein at every meal",
      body: "Spreading protein across the day beats one giant serving. A palm-sized portion per meal is a good rule of thumb.",
    },
    {
      title: "Walk after you eat",
      body: "A 10-minute walk after meals helps digestion and steadies energy. Easiest habit in fitness.",
    },
    {
      title: "Warm up, always",
      body: "Five minutes of easy movement before hard effort prevents most beginner injuries.",
    },
    {
      title: "Water first",
      body: "Dehydration feels like fatigue. A glass of water before your coffee is a small win.",
    },
    {
      title: "Rest days count",
      body: "Progress happens during recovery. A planned rest day is training, not quitting.",
    },
  ];
  const epochDay = Math.floor(Date.now() / 86_400_000);
  const dailyTip = wellnessTips[((epochDay % wellnessTips.length) + wellnessTips.length) % wellnessTips.length];

  const stats = [
    {
      label: "Day streak",
      value: String(streak),
      unit: streak === 1 ? "day" : "days",
      sub: streak > 0 ? "Keep it alive — log something today." : "Log something to start one.",
      bar: null as number | null,
    },
    {
      label: "Calories today",
      value: caloriesToday.toLocaleString(),
      unit: calorieTarget ? `/ ${calorieTarget.toLocaleString()}` : "kcal",
      sub:
        caloriePct !== null ? (
          `${caloriePct}% of daily target`
        ) : (
          <Link href="/app/nutrition" className="font-bold text-brand-700 hover:underline">
            Set a target in Nutrition →
          </Link>
        ),
      bar: caloriePct,
    },
    {
      label: "Workouts this week",
      value: String(workoutsThisWeek),
      unit: workoutsThisWeek === 1 ? "session" : "sessions",
      sub: "Strength, mobility, anything counts.",
      bar: null as number | null,
    },
    {
      label: "Cardio this week",
      value: kmThisWeek > 0 ? kmThisWeek.toFixed(1) : String(cardioThisWeek.length),
      unit: kmThisWeek > 0 ? "km" : cardioThisWeek.length === 1 ? "session" : "sessions",
      sub: "Runs, walks, rides, rows.",
      bar: null as number | null,
    },
  ];

  return (
    <div>
      {/* Header — client-rendered so greeting, date, and quote follow the
          user's local clock and roll over at local midnight. */}
      <DashboardHero name={name} streak={streak} />

      {/* Empty state — first for brand-new users, so they see a welcome, not zeros */}
      {!hasAnyData && (
        <div className="card mt-8 border-dashed text-center">
          <p className="font-display text-4xl uppercase tracking-wide text-ink">
            Welcome to Stride<span className="text-brand-500">.</span>
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Your dashboard fills in as you track. Start with one small win —
            log a meal, a workout, or a walk.
          </p>
        </div>
      )}

      {/* Streak ring + morning check-in */}
      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <StreakRing
            streak={streak}
            longest={longest}
            activeToday={activeToday}
            last7={last7}
          />
        </div>
        <div className="lg:col-span-2">
          <CheckInCard />
        </div>
      </div>

      {/* Workout of the day */}
      <div className="mt-8">
        <WorkoutOfTheDay />
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card">
            <p className="eyebrow !text-[11px]">{s.label}</p>
            <p className="mt-2 font-display text-5xl tracking-wide text-ink">
              {s.value} <span className="text-xl text-muted">{s.unit}</span>
            </p>
            {s.bar !== null ? (
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-sand">
                <div className="h-full rounded-full bg-brand-500" style={{ width: `${s.bar}%` }} />
              </div>
            ) : null}
            <p className="mt-2 text-xs text-muted">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        {/* Weekly activity */}
        <div className="card lg:col-span-3">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-3xl uppercase tracking-wide text-ink">This week</h2>
            <Link href="/app/progress" className="text-sm font-bold text-brand-700 hover:underline">
              Full progress →
            </Link>
          </div>
          <div className="mt-6 flex items-end justify-between gap-2 px-1">
            {week.map((d, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-28 w-full items-end justify-center">
                  <div
                    className={`w-full max-w-10 rounded-full ${d.isToday ? "bg-brand-500" : d.count > 0 ? "bg-navy-800" : "bg-sand"}`}
                    style={{ height: `${Math.max(d.count > 0 ? 18 : 8, (d.count / maxCount) * 100)}%` }}
                    title={`${d.count} logged`}
                  />
                </div>
                <span className={`font-mono text-xs ${d.isToday ? "font-bold text-brand-700" : "text-muted"}`}>
                  {d.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            Each bar is a day — taller means more logged. Today is highlighted.
          </p>
        </div>

        {/* Quick actions */}
        <div className="card lg:col-span-2">
          <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Log it</h2>
          <p className="mt-1 text-sm text-muted">One tap, ten seconds.</p>
          <div className="mt-4 space-y-3">
            {[
              { href: "/app/nutrition", title: "Log a meal", sub: "Calories, protein, carbs, fat" },
              { href: "/app/workouts", title: "Start a workout", sub: "Templates or freestyle" },
              { href: "/app/cardio", title: "Log cardio", sub: "Run, walk, ride — or import a file" },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="flex items-center justify-between rounded-2xl border border-line bg-cream px-4 py-3 transition hover:border-brand-300 hover:bg-sand"
              >
                <span>
                  <span className="block text-sm font-bold text-ink">{a.title}</span>
                  <span className="block text-xs text-muted">{a.sub}</span>
                </span>
                <span className="text-lg font-bold text-brand-600">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Empty state (moved above) */}

      {/* Wellness tip — rotates daily, seeded by the calendar date */}
      <div className="mt-6 rounded-3xl bg-navy-900 p-6 sm:p-8">
        <p className="eyebrow !text-brand-400">Wellness tip</p>
        <p className="mt-2 font-display text-3xl uppercase leading-tight tracking-wide text-white">
          {dailyTip.title}<span className="text-brand-500">.</span>
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/70">
          {dailyTip.body}
        </p>
        <Link
          href="/app/wellness"
          className="mt-4 inline-block rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-600"
        >
          More wellness tips
        </Link>
      </div>
    </div>
  );
}
