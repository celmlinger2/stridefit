"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { FoodLog, MealType, Profile } from "@/lib/database.types";

const mealTypes: MealType[] = ["breakfast", "lunch", "dinner", "snack"];

function todayRange(): { start: string; end: string } {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return { start: start.toISOString(), end: end.toISOString() };
}

export default function NutritionPage() {
  const supabase = createClient();
  const [logs, setLogs] = useState<FoodLog[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // form state
  const [mealType, setMealType] = useState<MealType>("breakfast");
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");
  const [saving, setSaving] = useState(false);

  // targets form
  const [targets, setTargets] = useState({ calorie_target: "", protein_target_g: "", carbs_target_g: "", fat_target_g: "" });
  const [savingTargets, setSavingTargets] = useState(false);

  const updateTarget = (key: keyof typeof targets, value: string) =>
    setTargets((t) => ({ ...t, [key]: value }));

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { start, end } = todayRange();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const [logsRes, profileRes] = await Promise.all([
      supabase
        .from("food_logs")
        .select("*")
        .eq("user_id", user.id)
        .gte("logged_at", start)
        .lte("logged_at", end)
        .order("logged_at", { ascending: false }),
      supabase.from("profiles").select("*").eq("id", user.id).single(),
    ]);

    if (logsRes.error) setError(logsRes.error.message);
    else setLogs(logsRes.data as FoodLog[]);
    if (!profileRes.error && profileRes.data) {
      const p = profileRes.data as Profile;
      setProfile(p);
      setTargets({
        calorie_target: p.calorie_target?.toString() ?? "",
        protein_target_g: p.protein_target_g?.toString() ?? "",
        carbs_target_g: p.carbs_target_g?.toString() ?? "",
        fat_target_g: p.fat_target_g?.toString() ?? "",
      });
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    load();
  }, [load]);

  async function addLog(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase.from("food_logs").insert({
      user_id: user.id,
      meal_type: mealType,
      food_name: foodName.trim(),
      calories: parseInt(calories, 10) || 0,
      protein_g: parseFloat(protein) || 0,
      carbs_g: parseFloat(carbs) || 0,
      fat_g: parseFloat(fat) || 0,
    });
    setSaving(false);
    if (error) {
      setError(error.message);
      return;
    }
    setFoodName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFat("");
    load();
  }

  async function saveTargets(e: React.FormEvent) {
    e.preventDefault();
    setSavingTargets(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const num = (v: string) => (v.trim() === "" ? null : parseInt(v, 10));
    const { error } = await supabase
      .from("profiles")
      .update({
        calorie_target: num(targets.calorie_target),
        protein_target_g: num(targets.protein_target_g),
        carbs_target_g: num(targets.carbs_target_g),
        fat_target_g: num(targets.fat_target_g),
      })
      .eq("id", user.id);
    setSavingTargets(false);
    if (error) setError(error.message);
    else load();
  }

  async function deleteLog(id: string) {
    const { error } = await supabase.from("food_logs").delete().eq("id", id);
    if (!error) setLogs((ls) => ls.filter((l) => l.id !== id));
  }

  const totals = logs.reduce(
    (s, l) => ({
      calories: s.calories + (l.calories ?? 0),
      protein: s.protein + Number(l.protein_g ?? 0),
      carbs: s.carbs + Number(l.carbs_g ?? 0),
      fat: s.fat + Number(l.fat_g ?? 0),
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  const pct = (val: number, target: number | null) =>
    target && target > 0 ? Math.min(Math.round((val / target) * 100), 999) : null;

  return (
    <div>
      <h1 className="text-3xl font-black tracking-tight text-ink">Nutrition</h1>
      <p className="mt-1 text-muted">Log meals and watch your day fill up.</p>

      {error && <p className="error-text mt-4">{error}</p>}

      {/* Daily totals */}
      <div className="card mt-6">
        <h2 className="text-lg font-bold text-ink">Today&apos;s totals</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-4">
          {[
            { label: "Calories", val: totals.calories, target: profile?.calorie_target ?? null, unit: "" },
            { label: "Protein", val: Math.round(totals.protein), target: profile?.protein_target_g ?? null, unit: "g" },
            { label: "Carbs", val: Math.round(totals.carbs), target: profile?.carbs_target_g ?? null, unit: "g" },
            { label: "Fat", val: Math.round(totals.fat), target: profile?.fat_target_g ?? null, unit: "g" },
          ].map((m) => {
            const p = pct(m.val, m.target);
            return (
              <div key={m.label}>
                <div className="flex items-baseline justify-between">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted">{m.label}</p>
                  {p !== null && <p className="text-xs font-bold text-brand-700">{p}%</p>}
                </div>
                <p className="mt-1 text-2xl font-black text-ink">
                  {m.val.toLocaleString()}
                  <span className="text-sm font-medium text-muted">
                    {m.target ? ` / ${m.target.toLocaleString()}${m.unit}` : m.unit}
                  </span>
                </p>
                {p !== null && (
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-sand">
                    <div className="h-full rounded-full bg-brand-500" style={{ width: `${Math.min(p, 100)}%` }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <details className="mt-5">
          <summary className="cursor-pointer text-sm font-bold text-brand-700">Set daily targets</summary>
          <form onSubmit={saveTargets} className="mt-3 grid gap-3 sm:grid-cols-4">
            {(
              [
                ["calorie_target", "Calories"],
                ["protein_target_g", "Protein (g)"],
                ["carbs_target_g", "Carbs (g)"],
                ["fat_target_g", "Fat (g)"],
              ] as const
            ).map(([key, label]) => (
              <div key={key}>
                <label className="label">{label}</label>
                <input
                  type="number" min={0}
                  value={targets[key]}
                  onChange={(e) => updateTarget(key, e.target.value)}
                  className="field" placeholder="—"
                />
              </div>
            ))}
            <div className="sm:col-span-4">
              <button type="submit" disabled={savingTargets} className="btn-secondary">
                {savingTargets ? "Saving…" : "Save targets"}
              </button>
            </div>
          </form>
        </details>
      </div>

      {/* Add food */}
      <div className="card mt-6">
        <h2 className="text-lg font-bold text-ink">Log food</h2>
        <form onSubmit={addLog} className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Meal</label>
            <select value={mealType} onChange={(e) => setMealType(e.target.value as MealType)} className="field">
              {mealTypes.map((m) => (
                <option key={m} value={m}>{m[0].toUpperCase() + m.slice(1)}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Food</label>
            <input value={foodName} onChange={(e) => setFoodName(e.target.value)} required className="field" placeholder="Grilled chicken breast" />
          </div>
          {(
            [
              ["Calories", calories, setCalories],
              ["Protein (g)", protein, setProtein],
              ["Carbs (g)", carbs, setCarbs],
              ["Fat (g)", fat, setFat],
            ] as const
          ).map(([label, val, set]) => (
            <div key={label}>
              <label className="label">{label}</label>
              <input type="number" min={0} step="any" value={val} onChange={(e) => set(e.target.value)} className="field" placeholder="0" />
            </div>
          ))}
          <div className="sm:col-span-2">
            <button type="submit" disabled={saving} className="btn-primary">
              {saving ? "Saving…" : "Add entry"}
            </button>
          </div>
        </form>
      </div>

      {/* Today's log */}
      <div className="card mt-6">
        <h2 className="text-lg font-bold text-ink">Today&apos;s log</h2>
        {loading ? (
          <p className="mt-4 text-sm text-muted">Loading…</p>
        ) : logs.length === 0 ? (
          <p className="mt-4 text-sm text-muted">
            Nothing logged yet today. Add your first meal above — small steps count.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-line">
            {logs.map((l) => (
              <li key={l.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-bold text-ink">{l.food_name}</p>
                  <p className="text-xs text-muted">
                    {l.meal_type} · {l.calories} kcal · P {Number(l.protein_g)}g · C {Number(l.carbs_g)}g · F {Number(l.fat_g)}g
                  </p>
                </div>
                <button onClick={() => deleteLog(l.id)} className="text-xs font-semibold text-red-600 hover:underline">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
