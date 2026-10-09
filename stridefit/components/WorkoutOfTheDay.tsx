"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  EQUIPMENT_OPTIONS,
  getWorkoutOfDay,
  todayKey,
  type EquipmentKey,
  type Exercise,
} from "@/lib/workout-of-the-day";

const STORAGE_KEY = "stride-equipment";

function ExerciseRow({ ex, index }: { ex: Exercise; index?: number }) {
  return (
    <div className="flex gap-4 py-3">
      {index !== undefined && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-lg text-white">
          {index + 1}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="text-[15px] font-bold text-ink">{ex.name}</p>
          <p className="font-mono text-xs font-bold text-brand-700">
            {ex.sets} × {ex.reps} {ex.unit}
          </p>
        </div>
        <p className="mt-0.5 text-sm text-muted">{ex.instructions}</p>
      </div>
      <span className="hidden shrink-0 rounded-full bg-sand px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-muted sm:block">
        {ex.focus}
      </span>
    </div>
  );
}

export default function WorkoutOfTheDay() {
  const [equipment, setEquipment] = useState<EquipmentKey[]>([]);
  const [dateStr, setDateStr] = useState(todayKey);
  const [loaded, setLoaded] = useState(false);

  // Load saved equipment; watch for midnight rollover.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as EquipmentKey[];
        const valid = saved.filter((k) =>
          EQUIPMENT_OPTIONS.some((o) => o.key === k && !o.locked)
        );
        setEquipment(valid);
      }
    } catch {
      /* ignore */
    }
    setLoaded(true);
    const timer = setInterval(() => {
      const now = todayKey();
      setDateStr((prev) => (prev === now ? prev : now));
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  function toggle(key: EquipmentKey) {
    setEquipment((prev) => {
      const next = prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  const workout = useMemo(() => getWorkoutOfDay(dateStr, equipment), [dateStr, equipment]);

  const displayDate = new Date(dateStr + "T12:00:00").toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="overflow-hidden rounded-3xl border border-line bg-card shadow-sm">
      {/* Header band */}
      <div className="bg-navy-900 px-6 py-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="eyebrow !text-brand-400">Workout of the day</p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cream/60">{displayDate}</p>
        </div>
        <h2 className="mt-1 font-display text-4xl uppercase tracking-wide text-white sm:text-5xl">
          Today&apos;s training<span className="text-brand-500">.</span>
        </h2>
      </div>

      <div className="px-6 py-6 sm:px-8">
        {/* Equipment selector */}
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">My equipment</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {EQUIPMENT_OPTIONS.map((opt) => {
            const selected = opt.locked || equipment.includes(opt.key);
            return (
              <button
                key={opt.key}
                type="button"
                disabled={opt.locked}
                onClick={() => toggle(opt.key)}
                title={opt.locked ? "Bodyweight is always available" : undefined}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  selected
                    ? "bg-brand-500 text-white"
                    : "border border-line bg-cream text-muted hover:border-brand-300 hover:text-ink"
                } ${opt.locked ? "cursor-default opacity-90" : ""}`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-muted">
          Tap to add what you have — the workout rebuilds instantly around it.
        </p>

        {loaded && (
          <>
            {/* Warm-up */}
            <h3 className="mt-8 font-display text-2xl uppercase tracking-wide text-ink">
              Warm-up
            </h3>
            <div className="mt-1 divide-y divide-line">
              {workout.warmup.map((ex) => (
                <ExerciseRow key={ex.name} ex={ex} />
              ))}
            </div>

            {/* Main */}
            <h3 className="mt-8 font-display text-2xl uppercase tracking-wide text-ink">
              Main circuit
            </h3>
            <div className="mt-1 divide-y divide-line">
              {workout.main.map((ex, i) => (
                <ExerciseRow key={ex.name} ex={ex} index={i} />
              ))}
            </div>

            {/* Finisher */}
            <div className="mt-8 rounded-2xl bg-brand-50 p-5">
              <p className="eyebrow">Finisher</p>
              <div className="mt-1">
                <ExerciseRow ex={workout.finisher} />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/app/workouts"
                className="rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600"
              >
                Log this workout
              </Link>
              <p className="text-xs text-muted">
                New workout drops every night at midnight.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
