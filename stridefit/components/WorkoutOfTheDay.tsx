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
import ExerciseMediaModal, { WatchButton } from "@/components/ExerciseMedia";
import { createClient } from "@/lib/supabase/client";

const STORAGE_KEY = "stride-equipment";
const progressKey = (dateStr: string) => `stride-wod-progress-${dateStr}`;

type SectionKey = "warmup" | "main" | "finisher";
const setKey = (section: SectionKey, exName: string, i: number) =>
  `${section}:${exName}:${i}`;

function SetBubbles({
  ex,
  section,
  done,
  onToggle,
}: {
  ex: Exercise;
  section: SectionKey;
  done: Set<string>;
  onToggle: (key: string) => void;
}) {
  return (
    <div className="mt-2.5 flex flex-wrap items-center gap-2">
      {Array.from({ length: ex.sets }, (_, i) => {
        const key = setKey(section, ex.name, i);
        const isDone = done.has(key);
        return (
          <button
            key={key}
            type="button"
            onClick={() => onToggle(key)}
            aria-pressed={isDone}
            aria-label={`Set ${i + 1} of ${ex.name}${isDone ? " (done)" : ""}`}
            className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold transition ${
              isDone
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-line bg-white text-muted hover:border-brand-400 hover:text-ink"
            }`}
          >
            {isDone ? "✓" : i + 1}
          </button>
        );
      })}
      <span className="ml-1 text-xs text-muted">tap a circle as you finish each set</span>
    </div>
  );
}

function ExerciseRow({
  ex,
  index,
  onWatch,
  session,
  section,
  done,
  onToggleSet,
}: {
  ex: Exercise;
  index?: number;
  onWatch: () => void;
  session?: boolean;
  section?: SectionKey;
  done?: Set<string>;
  onToggleSet?: (key: string) => void;
}) {
  const allDone =
    session && done && section
      ? Array.from({ length: ex.sets }, (_, i) => setKey(section, ex.name, i)).every((k) =>
          done.has(k)
        )
      : false;
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
          {allDone && (
            <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-brand-800">
              Done ✓
            </span>
          )}
        </div>
        <p className="mt-0.5 text-sm text-muted">{ex.instructions}</p>
        {session && section && done && onToggleSet && (
          <SetBubbles ex={ex} section={section} done={done} onToggle={onToggleSet} />
        )}
      </div>
      <div className="flex shrink-0 flex-col items-end gap-2">
        <span className="hidden rounded-full bg-sand px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-muted sm:block">
          {ex.focus}
        </span>
        <WatchButton onClick={onWatch} />
      </div>
    </div>
  );
}

export default function WorkoutOfTheDay() {
  const [equipment, setEquipment] = useState<EquipmentKey[]>([]);
  const [dateStr, setDateStr] = useState(todayKey);
  const [loaded, setLoaded] = useState(false);
  const [watching, setWatching] = useState<Exercise | null>(null);
  const [session, setSession] = useState(false);
  const [done, setDone] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);
  const [logged, setLogged] = useState(false);
  const [logError, setLogError] = useState<string | null>(null);

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

  // Load any in-progress set check-offs for today.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(progressKey(dateStr));
      setDone(raw ? new Set(JSON.parse(raw) as string[]) : new Set());
    } catch {
      setDone(new Set());
    }
    setLogged(false);
    setSession(false);
  }, [dateStr]);

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

  function toggleSet(key: string) {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      try {
        localStorage.setItem(progressKey(dateStr), JSON.stringify([...next]));
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  const workout = useMemo(() => getWorkoutOfDay(dateStr, equipment), [dateStr, equipment]);

  const { totalSets, doneSets } = useMemo(() => {
    const sections: [SectionKey, Exercise[]][] = [
      ["warmup", workout.warmup],
      ["main", workout.main],
      ["finisher", [workout.finisher]],
    ];
    let total = 0;
    let doneCount = 0;
    for (const [section, exs] of sections) {
      for (const ex of exs) {
        total += ex.sets;
        for (let i = 0; i < ex.sets; i++) {
          if (done.has(setKey(section, ex.name, i))) doneCount++;
        }
      }
    }
    return { totalSets: total, doneSets: doneCount };
  }, [workout, done]);

  const pct = totalSets > 0 ? Math.round((doneSets / totalSets) * 100) : 0;
  const complete = totalSets > 0 && doneSets === totalSets;

  async function finishAndLog() {
    setSaving(true);
    setLogError(null);
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("You need to be logged in to save this workout.");
      const all = [...workout.warmup, ...workout.main, workout.finisher];
      const exercises = all.map((ex) => ({
        name: ex.name,
        sets: Array.from({ length: ex.sets }, () => ({
          reps: ex.reps,
          weight_kg: null as number | null,
        })),
      }));
      const { error } = await supabase.from("workout_logs").insert({
        user_id: user.id,
        template_id: null,
        exercises,
        notes: "Workout of the Day",
      });
      if (error) throw new Error(error.message);
      setLogged(true);
      setSession(false);
      try {
        localStorage.removeItem(progressKey(dateStr));
      } catch {
        /* ignore */
      }
      setDone(new Set());
    } catch (e) {
      setLogError(e instanceof Error ? e.message : "Could not save the workout.");
    } finally {
      setSaving(false);
    }
  }

  const displayDate = new Date(dateStr + "T12:00:00").toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {session && (
        <div className="sticky top-3 z-30 mb-4 rounded-2xl bg-navy-900 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-cream/80">
              Workout progress
            </p>
            <p className="font-mono text-xs font-bold text-white">
              {doneSets} of {totalSets} sets · {pct}%
            </p>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-brand-500 transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          {complete && !logged && (
            <p className="mt-2 text-sm font-bold text-brand-300">
              All sets done — finish below to log this workout 🎉
            </p>
          )}
        </div>
      )}

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
                  <ExerciseRow
                    key={ex.name}
                    ex={ex}
                    onWatch={() => setWatching(ex)}
                    session={session}
                    section="warmup"
                    done={done}
                    onToggleSet={toggleSet}
                  />
                ))}
              </div>

              {/* Main */}
              <h3 className="mt-8 font-display text-2xl uppercase tracking-wide text-ink">
                Main circuit
              </h3>
              <div className="mt-1 divide-y divide-line">
                {workout.main.map((ex, i) => (
                  <ExerciseRow
                    key={ex.name}
                    ex={ex}
                    index={i}
                    onWatch={() => setWatching(ex)}
                    session={session}
                    section="main"
                    done={done}
                    onToggleSet={toggleSet}
                  />
                ))}
              </div>

              {/* Finisher */}
              <div className="mt-8 rounded-2xl bg-brand-50 p-5">
                <p className="eyebrow">Finisher</p>
                <div className="mt-1">
                  <ExerciseRow
                    ex={workout.finisher}
                    onWatch={() => setWatching(workout.finisher)}
                    session={session}
                    section="finisher"
                    done={done}
                    onToggleSet={toggleSet}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {!session && !logged && (
                  <>
                    <button
                      type="button"
                      onClick={() => setSession(true)}
                      className="rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600"
                    >
                      {doneSets > 0
                        ? `Resume workout (${doneSets}/${totalSets} sets done)`
                        : "Start today's workout"}
                    </button>
                    <Link
                      href="/app/workouts"
                      className="text-sm font-bold text-brand-700 hover:underline"
                    >
                      or log it manually →
                    </Link>
                  </>
                )}
                {session && (
                  <>
                    <button
                      type="button"
                      disabled={!complete || saving}
                      onClick={finishAndLog}
                      className="rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {saving
                        ? "Saving…"
                        : complete
                          ? "Finish & log workout"
                          : `Finish & log workout (${doneSets}/${totalSets} sets)`}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSession(false)}
                      className="text-sm font-bold text-muted hover:underline"
                    >
                      Pause session
                    </button>
                  </>
                )}
                {logged && (
                  <p className="text-sm font-bold text-brand-700">
                    Workout logged ✓ — find it in your history on the Workouts page.
                  </p>
                )}
                {logError && <p className="error-text">{logError}</p>}
                <p className="text-xs text-muted">
                  New workout drops every night at midnight.
                </p>
              </div>
            </>
          )}
        </div>
        {watching && (
          <ExerciseMediaModal
            name={watching.name}
            instructions={watching.instructions}
            onClose={() => setWatching(null)}
          />
        )}
      </section>
    </>
  );
}
