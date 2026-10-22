import { createClient } from "@/lib/supabase/server";
import type { CardioLog, FoodLog, WorkoutLog } from "@/lib/database.types";

function Bars({
  data,
  unit,
  colorClass,
}: {
  data: { label: string; value: number }[];
  unit: string;
  colorClass: string;
}) {
  const max = Math.max(1, ...data.map((d) => d.value));
  return (
    <div className="mt-6">
      <div className="flex h-44 items-end gap-2 sm:gap-3">
        {data.map((d, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <span className="font-mono text-[11px] font-bold text-ink">
              {d.value > 0 ? d.value : ""}
            </span>
            <div className="flex h-32 w-full items-end justify-center">
              <div
                className={`w-full max-w-12 rounded-t-lg ${d.value > 0 ? colorClass : "bg-sand"}`}
                style={{ height: `${Math.max(d.value > 0 ? 8 : 3, (d.value / max) * 100)}%` }}
                title={`${d.label}: ${d.value} ${unit}`}
              />
            </div>
            <span className="font-mono text-[10px] text-muted">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ProgressPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const now = new Date();
  const eightWeeksAgo = new Date(now);
  eightWeeksAgo.setDate(now.getDate() - 55);
  eightWeeksAgo.setHours(0, 0, 0, 0);
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 6);
  sevenDaysAgo.setHours(0, 0, 0, 0);

  const [{ data: workouts }, { data: cardio }, { data: foods }, { data: profile }] =
    await Promise.all([
      supabase
        .from("workout_logs")
        .select("performed_at")
        .eq("user_id", user!.id)
        .gte("performed_at", eightWeeksAgo.toISOString()),
      supabase
        .from("cardio_logs")
        .select("performed_at, distance_km")
        .eq("user_id", user!.id)
        .gte("performed_at", eightWeeksAgo.toISOString()),
      supabase
        .from("food_logs")
        .select("calories, logged_at")
        .eq("user_id", user!.id)
        .gte("logged_at", sevenDaysAgo.toISOString()),
      supabase.from("profiles").select("calorie_target").eq("id", user!.id).single(),
    ]);

  const workoutLogs = (workouts ?? []) as Pick<WorkoutLog, "performed_at">[];
  const cardioLogs = (cardio ?? []) as Pick<CardioLog, "performed_at" | "distance_km">[];
  const foodLogs = (foods ?? []) as Pick<FoodLog, "calories" | "logged_at">[];

  // Bucket into 8 weekly periods ending today.
  const weeks: { label: string; workouts: number; km: number }[] = [];
  for (let w = 7; w >= 0; w--) {
    const end = new Date(now);
    end.setDate(now.getDate() - w * 7);
    const start = new Date(end);
    start.setDate(end.getDate() - 6);
    start.setHours(0, 0, 0, 0);
    const inWeek = (iso: string) => {
      const d = new Date(iso);
      return d >= start && d <= end;
    };
    weeks.push({
      label: end.toLocaleDateString(undefined, { month: "numeric", day: "numeric" }),
      workouts: workoutLogs.filter((x) => inWeek(x.performed_at)).length,
      km: Math.round(
        cardioLogs.filter((x) => inWeek(x.performed_at)).reduce((s, x) => s + Number(x.distance_km ?? 0), 0) * 10
      ) / 10,
    });
  }

  // Calories per day, last 7 days.
  const days: { label: string; calories: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    const total = foodLogs
      .filter((f) => {
        const fd = new Date(f.logged_at);
        return `${fd.getFullYear()}-${fd.getMonth()}-${fd.getDate()}` === key;
      })
      .reduce((s, f) => s + (f.calories ?? 0), 0);
    days.push({
      label: i === 0 ? "Today" : d.toLocaleDateString(undefined, { weekday: "narrow" }),
      calories: total,
    });
  }

  const calorieTarget = profile?.calorie_target ?? null;
  const totalWorkouts = workoutLogs.length;
  const totalKm = Math.round(cardioLogs.reduce((s, c) => s + Number(c.distance_km ?? 0), 0) * 10) / 10;
  const activeDays = new Set<string>();
  const dayKey = (iso: string) => {
    const d = new Date(iso);
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  };
  workoutLogs.forEach((w) => activeDays.add(dayKey(w.performed_at)));
  cardioLogs.forEach((c) => activeDays.add(dayKey(c.performed_at)));

  return (
    <div>
      <p className="eyebrow">Your progress</p>
      <h1 className="mt-2 font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink">
        Progress<span className="text-brand-500">.</span>
      </h1>
      <p className="mt-2 text-muted">Eight weeks of training, at a glance.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Workouts · 8 weeks", value: String(totalWorkouts), unit: totalWorkouts === 1 ? "session" : "sessions" },
          { label: "Cardio distance · 8 weeks", value: String(totalKm), unit: "km" },
          { label: "Active days · 8 weeks", value: String(activeDays.size), unit: activeDays.size === 1 ? "day" : "days" },
        ].map((s) => (
          <div key={s.label} className="card">
            <p className="eyebrow !text-[11px]">{s.label}</p>
            <p className="mt-2 font-display text-5xl tracking-wide text-ink">
              {s.value} <span className="text-xl text-muted">{s.unit}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="card mt-6">
        <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Workouts per week</h2>
        <p className="mt-1 text-sm text-muted">Sessions logged each week.</p>
        <Bars data={weeks.map((w) => ({ label: w.label, value: w.workouts }))} unit="sessions" colorClass="bg-navy-800" />
      </div>

      <div className="card mt-6">
        <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Cardio distance per week</h2>
        <p className="mt-1 text-sm text-muted">Kilometers logged each week.</p>
        <Bars data={weeks.map((w) => ({ label: w.label, value: w.km }))} unit="km" colorClass="bg-brand-500" />
      </div>

      <div className="card mt-6">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Calories · last 7 days</h2>
          {calorieTarget && (
            <p className="text-sm font-bold text-muted">Target: {calorieTarget.toLocaleString()} kcal</p>
          )}
        </div>
        <Bars data={days.map((d) => ({ label: d.label, value: d.calories }))} unit="kcal" colorClass="bg-brand-500" />
      </div>
    </div>
  );
}
