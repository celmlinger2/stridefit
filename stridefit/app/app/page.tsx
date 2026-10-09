import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { CardioLog, FoodLog, WorkoutLog } from "@/lib/database.types";
import WorkoutOfTheDay from "@/components/WorkoutOfTheDay";
import { getDailyQuote } from "@/lib/workout-of-the-day";

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

  const [{ data: foods }, { data: cardio }, { data: workouts }, { data: profile }] =
    await Promise.all([
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

  const name = profile?.display_name || user?.email?.split("@")[0] || "there";
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const dateStr = now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
  const hasAnyData = foodLogs.length > 0 || cardioLogs.length > 0 || workoutLogs.length > 0;

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
      sub: caloriePct !== null ? `${caloriePct}% of daily target` : "Set a target in Nutrition.",
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
      {/* Header */}
      <p className="eyebrow">Today · {dateStr}</p>
      <div className="mt-2 flex flex-wrap items-center gap-4">
        <h1 className="font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink">
          {greeting}, {name}<span className="text-brand-500">.</span>
        </h1>
        {streak > 1 && (
          <span className="rounded-full bg-brand-100 px-4 py-1.5 text-sm font-bold text-brand-800">
            {streak}-day streak
          </span>
        )}
      </div>
      <p className="mt-2 max-w-xl text-[15px] italic leading-relaxed text-muted">
        &ldquo;{getDailyQuote()}&rdquo;
      </p>

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

      {/* Empty state */}
      {!hasAnyData && (
        <div className="card mt-6 border-dashed text-center">
          <p className="font-display text-4xl uppercase tracking-wide text-ink">
            Welcome to Stride<span className="text-brand-500">.</span>
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Your dashboard fills in as you track. Start with one small win —
            log a meal, a workout, or a walk.
          </p>
        </div>
      )}

      {/* Wellness tip */}
      <div className="mt-6 rounded-3xl bg-navy-900 p-6 sm:p-8">
        <p className="eyebrow !text-brand-400">Wellness tip</p>
        <p className="mt-2 font-display text-3xl uppercase leading-tight tracking-wide text-white">
          Consistency beats intensity<span className="text-brand-500">.</span>
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/70">
          A 20-minute walk you actually do beats the perfect workout you skip.
          Show up, log it, repeat.
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
