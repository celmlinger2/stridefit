import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { FoodLog, CardioLog, WorkoutLog } from "@/lib/database.types";

function startOfToday(): string {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}

function daysSince(dateStr: string): number {
  const then = new Date(dateStr);
  const now = new Date();
  return Math.floor((now.getTime() - then.getTime()) / 86400000);
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const today = startOfToday();

  const [{ data: foods }, { data: cardio }, { data: workouts }, { data: profile }] =
    await Promise.all([
      supabase
        .from("food_logs")
        .select("calories, protein_g, carbs_g, fat_g")
        .eq("user_id", user!.id)
        .gte("logged_at", today),
      supabase
        .from("cardio_logs")
        .select("id, performed_at")
        .eq("user_id", user!.id)
        .order("performed_at", { ascending: false })
        .limit(20),
      supabase
        .from("workout_logs")
        .select("id, performed_at")
        .eq("user_id", user!.id)
        .order("performed_at", { ascending: false })
        .limit(20),
      supabase
        .from("profiles")
        .select("display_name, calorie_target")
        .eq("id", user!.id)
        .single(),
    ]);

  const foodLogs = (foods ?? []) as Pick<FoodLog, "calories" | "protein_g" | "carbs_g" | "fat_g">[];
  const caloriesToday = foodLogs.reduce((s, f) => s + (f.calories ?? 0), 0);
  const calorieTarget = profile?.calorie_target ?? null;

  // Simple streak: consecutive days with any logged activity (food, cardio, or workout).
  const activityDays = new Set<string>();
  const pushDay = (iso: string) => activityDays.add(new Date(iso).toDateString());
  (cardio as Pick<CardioLog, "performed_at">[] | null)?.forEach((c) => pushDay(c.performed_at));
  (workouts as Pick<WorkoutLog, "performed_at">[] | null)?.forEach((w) => pushDay(w.performed_at));
  if (foodLogs.length > 0) activityDays.add(new Date().toDateString());

  let streak = 0;
  const cursor = new Date();
  if (!activityDays.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1);
  while (activityDays.has(cursor.toDateString())) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  const lastCardio = (cardio as Pick<CardioLog, "performed_at">[] | null)?.[0];
  const lastWorkout = (workouts as Pick<WorkoutLog, "performed_at">[] | null)?.[0];

  const name = profile?.display_name || user?.email?.split("@")[0] || "there";

  return (
    <div>
      <h1 className="text-3xl font-black tracking-tight text-ink">
        Good {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening"}, {name} 👋
      </h1>
      <p className="mt-1 text-muted">Here&apos;s your day at a glance.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">🔥 Streak</p>
          <p className="mt-2 text-3xl font-black text-ink">
            {streak} <span className="text-base font-semibold text-muted">day{streak === 1 ? "" : "s"}</span>
          </p>
          <p className="mt-1 text-xs text-muted">Log something daily to keep it alive.</p>
        </div>
        <div className="card">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">🥗 Calories today</p>
          <p className="mt-2 text-3xl font-black text-ink">
            {caloriesToday.toLocaleString()}
            {calorieTarget && (
              <span className="text-base font-semibold text-muted"> / {calorieTarget.toLocaleString()}</span>
            )}
          </p>
          <Link href="/app/nutrition" className="mt-1 inline-block text-xs font-bold text-brand-700 hover:underline">
            Log a meal →
          </Link>
        </div>
        <div className="card">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">🏋️ Last workout</p>
          <p className="mt-2 text-3xl font-black text-ink">
            {lastWorkout ? `${daysSince(lastWorkout.performed_at)}d ago` : "—"}
          </p>
          <Link href="/app/workouts" className="mt-1 inline-block text-xs font-bold text-brand-700 hover:underline">
            Start a workout →
          </Link>
        </div>
        <div className="card">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">🏃 Last cardio</p>
          <p className="mt-2 text-3xl font-black text-ink">
            {lastCardio ? `${daysSince(lastCardio.performed_at)}d ago` : "—"}
          </p>
          <Link href="/app/cardio" className="mt-1 inline-block text-xs font-bold text-brand-700 hover:underline">
            Log cardio →
          </Link>
        </div>
      </div>

      {(foodLogs.length === 0 && !lastWorkout && !lastCardio) && (
        <div className="card mt-6 border-dashed text-center">
          <p className="text-lg font-bold text-ink">Welcome to StrideFit! 🎉</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Your dashboard will fill in as you track. Start with one small win —
            log a meal, a workout, or a walk.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/app/nutrition" className="btn-primary">Log a meal</Link>
            <Link href="/app/workouts" className="btn-secondary">Start a workout</Link>
            <Link href="/app/cardio" className="btn-secondary">Log cardio</Link>
          </div>
        </div>
      )}

      <div className="card mt-6 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-100">💚 Wellness tip</p>
        <p className="mt-2 text-lg font-medium">
          Consistency beats intensity. A 20-minute walk you actually do beats the
          perfect workout you skip.
        </p>
        <Link href="/app/wellness" className="mt-3 inline-block text-sm font-bold text-white underline underline-offset-4">
          More wellness tips →
        </Link>
      </div>
    </div>
  );
}
