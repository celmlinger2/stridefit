"use client";

import { useMemo, useState } from "react";

type Sex = "male" | "female";
type Units = "metric" | "imperial";

const activities = [
  { value: 1.2, label: "Sedentary — desk job, little exercise" },
  { value: 1.375, label: "Light — light exercise 1–3 days/week" },
  { value: 1.55, label: "Moderate — moderate exercise 3–5 days/week" },
  { value: 1.725, label: "Active — hard exercise 6–7 days/week" },
  { value: 1.9, label: "Very active — physical job + hard training" },
];

export default function TdeeCalculator() {
  const [units, setUnits] = useState<Units>("metric");
  const [sex, setSex] = useState<Sex>("female");
  const [age, setAge] = useState("30");
  const [height, setHeight] = useState("165"); // cm or in
  const [weight, setWeight] = useState("65"); // kg or lb
  const [activity, setActivity] = useState(1.55);

  const result = useMemo(() => {
    const a = parseFloat(age);
    let h = parseFloat(height);
    let w = parseFloat(weight);
    if (!a || !h || !w || a <= 0 || h <= 0 || w <= 0) return null;
    if (units === "imperial") {
      h = h * 2.54; // in -> cm
      w = w * 0.453592; // lb -> kg
    }
    // Mifflin-St Jeor
    const bmr =
      sex === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;
    const tdee = Math.round(bmr * activity);
    return {
      bmr: Math.round(bmr),
      tdee,
      cut: tdee - 400,
      maintain: tdee,
      bulk: tdee + 250,
    };
  }, [age, height, weight, sex, activity, units]);

  return (
    <div className="card">
      <div className="flex gap-2">
        {(["metric", "imperial"] as Units[]).map((u) => (
          <button
            key={u}
            onClick={() => setUnits(u)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
              units === u
                ? "bg-brand-600 text-white"
                : "bg-sand text-muted hover:bg-line"
            }`}
          >
            {u === "metric" ? "Metric (kg/cm)" : "Imperial (lb/in)"}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">Sex</label>
          <select value={sex} onChange={(e) => setSex(e.target.value as Sex)} className="field">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div>
          <label className="label">Age</label>
          <input type="number" min={10} max={100} value={age} onChange={(e) => setAge(e.target.value)} className="field" />
        </div>
        <div>
          <label className="label">Height ({units === "metric" ? "cm" : "in"})</label>
          <input type="number" min={1} value={height} onChange={(e) => setHeight(e.target.value)} className="field" />
        </div>
        <div>
          <label className="label">Weight ({units === "metric" ? "kg" : "lb"})</label>
          <input type="number" min={1} value={weight} onChange={(e) => setWeight(e.target.value)} className="field" />
        </div>
        <div className="sm:col-span-2">
          <label className="label">Activity level</label>
          <select value={activity} onChange={(e) => setActivity(parseFloat(e.target.value))} className="field">
            {activities.map((a) => (
              <option key={a.value} value={a.value}>{a.label}</option>
            ))}
          </select>
        </div>
      </div>

      {result && (
        <div className="mt-6 rounded-2xl bg-brand-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">
            Your results
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-card p-4">
              <p className="text-xs font-semibold text-muted">BMR</p>
              <p className="text-2xl font-black text-ink">{result.bmr.toLocaleString()} <span className="text-sm font-medium">kcal</span></p>
            </div>
            <div className="rounded-xl border border-line bg-card p-4">
              <p className="text-xs font-semibold text-muted">TDEE</p>
              <p className="text-2xl font-black text-brand-700">{result.tdee.toLocaleString()} <span className="text-sm font-medium">kcal/day</span></p>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <p><strong>Lose weight:</strong> ~{result.cut.toLocaleString()} kcal/day</p>
            <p><strong>Maintain:</strong> ~{result.maintain.toLocaleString()} kcal/day</p>
            <p><strong>Gain muscle:</strong> ~{result.bulk.toLocaleString()} kcal/day</p>
          </div>
        </div>
      )}
    </div>
  );
}
