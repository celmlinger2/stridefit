"use client";

import { useMemo, useState } from "react";

type Style = "balanced" | "high-protein" | "low-carb";

const styles: { value: Style; label: string; desc: string }[] = [
  { value: "balanced", label: "Balanced", desc: "Great default for beginners and maintenance." },
  { value: "high-protein", label: "High-protein", desc: "Best for cutting or building muscle." },
  { value: "low-carb", label: "Lower-carb", desc: "Higher fat, fewer carbs. Good for low training volume." },
];

// protein g per kg body weight, and remaining calorie split
const presets: Record<Style, { proteinPerKg: number; carbShare: number }> = {
  balanced: { proteinPerKg: 1.8, carbShare: 0.5 },
  "high-protein": { proteinPerKg: 2.2, carbShare: 0.4 },
  "low-carb": { proteinPerKg: 2.0, carbShare: 0.25 },
};

export default function MacroCalculator() {
  const [units, setUnits] = useState<"metric" | "imperial">("metric");
  const [calories, setCalories] = useState("2200");
  const [weight, setWeight] = useState("70");
  const [style, setStyle] = useState<Style>("balanced");

  const result = useMemo(() => {
    const cals = parseFloat(calories);
    let w = parseFloat(weight);
    if (!cals || !w || cals <= 0 || w <= 0) return null;
    if (units === "imperial") w = w * 0.453592;

    const { proteinPerKg, carbShare } = presets[style];
    const proteinG = Math.round(proteinPerKg * w);
    const proteinCals = proteinG * 4;
    const remaining = Math.max(cals - proteinCals, 0);
    const carbsG = Math.round((remaining * carbShare) / 4);
    const fatG = Math.round((remaining * (1 - carbShare)) / 9);

    return { proteinG, carbsG, fatG };
  }, [calories, weight, style, units]);

  return (
    <div className="card">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">Daily calories (kcal)</label>
          <input type="number" min={1} value={calories} onChange={(e) => setCalories(e.target.value)} className="field" />
        </div>
        <div>
          <label className="label">Body weight ({units === "metric" ? "kg" : "lb"})</label>
          <div className="flex gap-2">
            <input type="number" min={1} value={weight} onChange={(e) => setWeight(e.target.value)} className="field" />
            <button
              onClick={() => setUnits(units === "metric" ? "imperial" : "metric")}
              className="btn-secondary whitespace-nowrap px-3"
              title="Toggle units"
            >
              {units === "metric" ? "kg" : "lb"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <label className="label">Diet style</label>
        <div className="grid gap-2 sm:grid-cols-3">
          {styles.map((s) => (
            <button
              key={s.value}
              onClick={() => setStyle(s.value)}
              className={`rounded-xl border p-3 text-left ${
                style === s.value
                  ? "border-brand-500 bg-brand-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <p className="text-sm font-bold text-slate-900">{s.label}</p>
              <p className="mt-1 text-xs text-slate-500">{s.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {result && (
        <div className="mt-6 rounded-2xl bg-brand-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">
            Daily macro targets
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Protein", value: result.proteinG, color: "text-red-600" },
              { label: "Carbs", value: result.carbsG, color: "text-amber-600" },
              { label: "Fat", value: result.fatG, color: "text-sky-600" },
            ].map((m) => (
              <div key={m.label} className="rounded-xl bg-white p-4 text-center">
                <p className="text-xs font-semibold text-slate-500">{m.label}</p>
                <p className={`text-3xl font-black ${m.color}`}>{m.value}<span className="text-sm font-medium text-slate-500">g</span></p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Protein set first ({presets[style].proteinPerKg}g per kg body weight); remaining
            calories split between carbs and fat.
          </p>
        </div>
      )}
    </div>
  );
}
