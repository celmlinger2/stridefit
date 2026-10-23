"use client";

import { useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { FOODS, type FoodItem } from "@/lib/foods";
import type { Profile } from "@/lib/database.types";

interface Totals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

type MacroKey = "protein" | "carbs" | "fat";
const MACRO_LABEL: Record<MacroKey, string> = { protein: "protein", carbs: "carbs", fat: "fat" };

/**
 * "What fits?" — reads today's remaining macros against the user's
 * targets and suggests foods that close the biggest gap without
 * blowing the calorie budget. One tap logs the food as a snack.
 */
export default function MacroFit({
  totals,
  profile,
  onLogged,
}: {
  totals: Totals;
  profile: Profile | null;
  onLogged: () => void;
}) {
  const supabase = createClient();
  const [logging, setLogging] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);

  const targets = profile
    ? {
        calories: profile.calorie_target,
        protein: profile.protein_target_g,
        carbs: profile.carbs_target_g,
        fat: profile.fat_target_g,
      }
    : null;

  const hasTargets = !!targets && (targets.protein != null || targets.carbs != null || targets.fat != null);

  const result = useMemo(() => {
    if (!hasTargets || !targets) return null;
    const remaining: Record<MacroKey, number | null> = {
      protein: targets.protein != null ? Math.max(targets.protein - totals.protein, 0) : null,
      carbs: targets.carbs != null ? Math.max(targets.carbs - totals.carbs, 0) : null,
      fat: targets.fat != null ? Math.max(targets.fat - totals.fat, 0) : null,
    };
    const calRemaining = targets.calories != null ? Math.max(targets.calories - totals.calories, 0) : null;

    // Biggest gap by share of target still unmet.
    let focus: MacroKey | null = null;
    let worstShare = 0.05; // ignore gaps under 5% of target
    (Object.keys(remaining) as MacroKey[]).forEach((k) => {
      const rem = remaining[k];
      const tgt = targets[k];
      if (rem != null && tgt != null && tgt > 0) {
        const share = rem / tgt;
        if (share > worstShare) {
          worstShare = share;
          focus = k;
        }
      }
    });
    if (!focus) return { focus: null as MacroKey | null, remaining, calRemaining, picks: [] as { food: FoodItem; closes: number }[] };

    const remFocus = remaining[focus] ?? 0;
    const scored = FOODS.map((food) => {
      const closes = remFocus > 0 ? Math.min(food[focus as MacroKey] / remFocus, 1) : 0;
      let score = closes;
      // Penalize foods that overshoot the calorie budget badly.
      if (calRemaining != null && calRemaining > 0 && food.calories > calRemaining * 1.15) score -= 0.5;
      // Small bonus for protein density when protein is the focus.
      if (focus === "protein") score += Math.min(food.protein / Math.max(food.calories, 1), 0.25);
      return { food, closes: Math.round(closes * 100), score };
    })
      .filter((s) => s.closes > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(({ food, closes }) => ({ food, closes }));

    return { focus, remaining, calRemaining, picks: scored };
  }, [hasTargets, targets, totals]);

  if (!hasTargets) {
    return (
      <div className="card mt-6">
        <h2 className="font-display text-3xl uppercase tracking-wide text-ink">
          What fits<span className="text-brand-500">?</span>
        </h2>
        <p className="mt-2 text-sm text-muted">
          Set your daily targets above and Stride will suggest foods that close your biggest macro gap — one tap to log them.
        </p>
      </div>
    );
  }

  async function logFood(food: FoodItem) {
    setLogging(food.name);
    setNote(null);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setLogging(null);
      return;
    }
    const { error } = await supabase.from("food_logs").insert({
      user_id: user.id,
      meal_type: "snack",
      food_name: food.name,
      calories: food.calories,
      protein_g: food.protein,
      carbs_g: food.carbs,
      fat_g: food.fat,
    });
    setLogging(null);
    if (error) {
      setNote(`Couldn't log that: ${error.message}`);
      return;
    }
    setNote(`Logged ${food.name} as a snack.`);
    onLogged();
  }

  return (
    <div className="card mt-6">
      <h2 className="font-display text-3xl uppercase tracking-wide text-ink">
        What fits<span className="text-brand-500">?</span>
      </h2>
      {result?.focus ? (
        <>
          <p className="mt-2 text-sm text-muted">
            Your biggest gap is <strong className="text-ink">{MACRO_LABEL[result.focus]}</strong> —{" "}
            {Math.round(result.remaining[result.focus] ?? 0)}g to go
            {result.calRemaining != null && <> with about {result.calRemaining.toLocaleString()} kcal left</>}. These close it
            without blowing the budget:
          </p>
          <ul className="mt-4 space-y-3">
            {result.picks.map(({ food, closes }) => (
              <li key={food.name} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-sand px-4 py-3">
                <div>
                  <p className="text-sm font-bold text-ink">
                    {food.name} <span className="font-medium text-muted">· {food.serving}</span>
                  </p>
                  <p className="text-xs text-muted">
                    {food.calories} kcal · P {food.protein}g · C {food.carbs}g · F {food.fat}g — closes ~{closes}% of the gap
                  </p>
                </div>
                <button
                  onClick={() => logFood(food)}
                  disabled={logging === food.name}
                  className="btn-secondary"
                >
                  {logging === food.name ? "Logging…" : "Log it"}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-2 text-sm text-muted">
          You&apos;re basically there — every target is within a few percent. Nice work today. 🎉
        </p>
      )}
      {note && <p className="mt-3 text-sm font-semibold text-brand-700">{note}</p>}
    </div>
  );
}
