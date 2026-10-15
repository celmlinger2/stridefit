"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Difficulty, LoggedExercise, WorkoutLog, WorkoutTemplate } from "@/lib/database.types";
import { EXERCISES, type Exercise } from "@/lib/workout-of-the-day";
import { exerciseSlug } from "@/lib/exercise-videos";
import ExerciseMediaModal from "@/components/ExerciseMedia";
import ExercisePicker, { libraryMatch } from "@/components/ExercisePicker";
import { BUILT_IN_TEMPLATES, type BuiltInTemplate } from "@/lib/workout-templates";

const EXERCISE_BY_SLUG = new Map(EXERCISES.map((e) => [exerciseSlug(e.name), e]));

type View = "home" | "new-template" | "log-workout";

const difficulties: Difficulty[] = ["beginner", "intermediate", "advanced"];

export default function WorkoutsPage() {
  const supabase = createClient();
  const [view, setView] = useState<View>("home");
  const [templates, setTemplates] = useState<WorkoutTemplate[]>([]);
  const [history, setHistory] = useState<WorkoutLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // new template form
  const [tName, setTName] = useState("");
  const [tDesc, setTDesc] = useState("");
  const [tDiff, setTDiff] = useState<Difficulty>("beginner");

  // workout logging
  const [activeTemplate, setActiveTemplate] = useState<WorkoutTemplate | null>(null);
  const [builtInName, setBuiltInName] = useState<string | null>(null);
  const [exercises, setExercises] = useState<LoggedExercise[]>([{ name: "", sets: [{ reps: 8, weight_kg: null }] }]);
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [watching, setWatching] = useState<Exercise | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const [tRes, hRes] = await Promise.all([
      supabase.from("workout_templates").select("*").eq("user_id", user.id).order("created_at", { ascending: false }),
      supabase.from("workout_logs").select("*").eq("user_id", user.id).order("performed_at", { ascending: false }).limit(10),
    ]);
    if (tRes.error) setError(tRes.error.message);
    else setTemplates(tRes.data as WorkoutTemplate[]);
    if (!hRes.error) setHistory(hRes.data as WorkoutLog[]);
    setLoading(false);
  }, [supabase]);

  useEffect(() => { load(); }, [load]);

  async function createTemplate(e: React.FormEvent) {
    e.preventDefault();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase.from("workout_templates").insert({
      user_id: user.id, name: tName.trim(), description: tDesc.trim() || null, difficulty: tDiff,
    });
    if (error) { setError(error.message); return; }
    setTName(""); setTDesc(""); setTDiff("beginner");
    setView("home");
    load();
  }

  function startBuiltIn(t: BuiltInTemplate) {
    const picked = t.exerciseNames
      .map((name) => EXERCISE_BY_SLUG.get(exerciseSlug(name)))
      .filter((ex): ex is Exercise => Boolean(ex))
      .map((ex) => ({
        name: ex.name,
        sets: Array.from({ length: ex.sets }, () => ({ reps: ex.reps, weight_kg: null })),
      }));
    setExercises(picked.length ? picked : [{ name: "", sets: [{ reps: 8, weight_kg: null }] }]);
    setActiveTemplate(null);
    setBuiltInName(t.name);
    setError(null);
    setView("log-workout");
  }

  function addExercise() {
    setExercises([...exercises, { name: "", sets: [{ reps: 8, weight_kg: null }] }]);
  }

  function addSet(ei: number) {
    const next = [...exercises];
    const sets = next[ei].sets;
    const lastReps = sets.length ? sets[sets.length - 1].reps : 8;
    next[ei].sets = [...sets, { reps: lastReps, weight_kg: null }];
    setExercises(next);
  }

  function selectExercise(ei: number, ex: Exercise) {
    const next = [...exercises];
    next[ei] = {
      name: ex.name,
      sets: Array.from({ length: ex.sets }, () => ({ reps: ex.reps, weight_kg: null })),
    };
    setExercises(next);
  }

  function clearExercise(ei: number) {
    const next = [...exercises];
    next[ei] = { name: "", sets: [{ reps: 8, weight_kg: null }] };
    setExercises(next);
  }

  function removeExercise(ei: number) {
    setExercises(exercises.filter((_, i) => i !== ei));
  }

  function updateSet(ei: number, si: number, patch: { reps?: number; weight_kg?: number | null }) {
    const next = [...exercises];
    next[ei].sets[si] = { ...next[ei].sets[si], ...patch };
    setExercises(next);
  }

  async function finishWorkout(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const named = exercises.filter((x) => x.name.trim() !== "");
    if (named.some((x) => !libraryMatch(x.name))) {
      setSaving(false);
      setError("Every exercise needs to be picked from the library — tap a suggestion so it locks in with its form video.");
      return;
    }
    const clean = named;
    const { error } = await supabase.from("workout_logs").insert({
      user_id: user.id,
      template_id: activeTemplate?.id ?? null,
      exercises: clean,
      notes: notes.trim() || null,
    });
    setSaving(false);
    if (error) { setError(error.message); return; }
    setExercises([{ name: "", sets: [{ reps: 8, weight_kg: null }] }]);
    setNotes("");
    setActiveTemplate(null);
    setBuiltInName(null);
    setView("home");
    load();
  }

  if (view === "new-template") {
    return (
      <div className="mx-auto max-w-xl">
        <h1 className="font-display text-5xl uppercase tracking-wide text-ink">New template<span className="text-brand-500">.</span></h1>
        <div className="card mt-6">
          <form onSubmit={createTemplate} className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input value={tName} onChange={(e) => setTName(e.target.value)} required className="field" placeholder="Upper body strength" />
            </div>
            <div>
              <label className="label">Description</label>
              <textarea value={tDesc} onChange={(e) => setTDesc(e.target.value)} className="field" rows={3} placeholder="Push-focused session, 45 minutes…" />
            </div>
            <div>
              <label className="label">Difficulty</label>
              <select value={tDiff} onChange={(e) => setTDiff(e.target.value as Difficulty)} className="field">
                {difficulties.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="btn-primary">Save template</button>
              <button type="button" onClick={() => setView("home")} className="btn-secondary">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (view === "log-workout") {
    return (
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-5xl uppercase tracking-wide text-ink">
          {activeTemplate ? activeTemplate.name : builtInName ?? "Freestyle workout"}
        </h1>
        <p className="mt-1 text-muted">
          {builtInName
            ? "Loaded from a Stride template — every exercise comes with its form video and standard sets. Adjust anything, then finish to log it."
            : "Pick exercises from the Stride library — each one comes with its form video and standard sets. Add sets as you go."}
        </p>
        {error && <p className="error-text mt-4">{error}</p>}
        <form onSubmit={finishWorkout} className="mt-6 space-y-4">
          {exercises.map((ex, ei) => (
            <div key={ei} className="card">
              <div className="flex items-start gap-2">
                <div className="min-w-0 flex-1">
                  <ExercisePicker
                    index={ei}
                    value={ex.name}
                    onSelect={(picked) => selectExercise(ei, picked)}
                    onClear={() => clearExercise(ei)}
                  />
                </div>
                {exercises.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeExercise(ei)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand text-base font-bold text-muted hover:bg-line hover:text-ink"
                    aria-label={`Remove exercise ${ei + 1}`}
                  >
                    ×
                  </button>
                )}
              </div>
              {(() => {
                const match = EXERCISE_BY_SLUG.get(exerciseSlug(ex.name));
                return match ? (
                  <button
                    type="button"
                    onClick={() => setWatching(match)}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:underline"
                  >
                    <svg width="9" height="11" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
                      <path d="M0 0 L10 6 L0 12 Z" />
                    </svg>
                    Watch form video — {match.name}
                  </button>
                ) : null;
              })()}
              <div className="mt-3 space-y-2">
                {ex.sets.map((set, si) => (
                  <div key={si} className="flex items-center gap-2">
                    <span className="w-12 text-xs font-bold text-muted">Set {si + 1}</span>
                    <input
                      type="number" min={1} value={set.reps}
                      onChange={(e) => updateSet(ei, si, { reps: parseInt(e.target.value, 10) || 0 })}
                      className="field" placeholder="Reps"
                    />
                    <input
                      type="number" min={0} step="any"
                      value={set.weight_kg ?? ""}
                      onChange={(e) => updateSet(ei, si, { weight_kg: e.target.value === "" ? null : parseFloat(e.target.value) })}
                      className="field" placeholder="Weight (kg)"
                    />
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => addSet(ei)} className="mt-3 text-sm font-bold text-brand-700 hover:underline">
                + Add set
              </button>
            </div>
          ))}
          <button type="button" onClick={addExercise} className="btn-secondary w-full">+ Add exercise</button>
          <div>
            <label className="label">Notes</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="field" rows={2} placeholder="How did it feel?" />
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="btn-primary">
              {saving ? "Saving…" : "Finish workout"}
            </button>
            <button type="button" onClick={() => { setView("home"); setActiveTemplate(null); setBuiltInName(null); }} className="btn-secondary">
              Discard
            </button>
          </div>
        </form>
        {watching && (
          <ExerciseMediaModal
            name={watching.name}
            instructions={watching.instructions}
            onClose={() => setWatching(null)}
          />
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="eyebrow">Train</p>
          <h1 className="mt-2 font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink">Workouts<span className="text-brand-500">.</span></h1>
          <p className="mt-2 text-muted">Templates, logging, and history.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setView("new-template")} className="btn-secondary">New template</button>
          <button onClick={() => { setActiveTemplate(null); setBuiltInName(null); setExercises([{ name: "", sets: [{ reps: 8, weight_kg: null }] }]); setView("log-workout"); }} className="btn-primary">Start workout</button>
        </div>
      </div>

      {error && <p className="error-text mt-4">{error}</p>}

      <h2 className="mt-10 font-display text-3xl uppercase tracking-wide text-ink">Quick-start templates</h2>
      <p className="mt-2 text-sm text-muted">Ready-made Stride workouts — pick one and it loads with every exercise, sets, and form video. No planning needed.</p>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BUILT_IN_TEMPLATES.map((t) => (
          <div key={t.id} className="card">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-ink">{t.name}</h3>
              <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-800">{t.difficulty}</span>
            </div>
            <p className="mt-2 text-sm text-muted">{t.description}</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted">
              {t.exerciseNames.length} exercises · ~{t.minutes} min · {t.equipmentLabel}
            </p>
            <button
              onClick={() => startBuiltIn(t)}
              className="mt-4 text-sm font-bold text-brand-700 hover:underline"
            >
              Start this workout →
            </button>
          </div>
        ))}
      </div>

      <h2 className="mt-10 font-display text-3xl uppercase tracking-wide text-ink">Your templates</h2>
      {loading ? (
        <p className="mt-3 text-sm text-muted">Loading…</p>
      ) : templates.length === 0 ? (
        <div className="card mt-3 border-dashed">
          <p className="text-sm text-muted">
            No templates yet. Create one for routines you repeat — or just hit{" "}
            <strong>Start workout</strong> for a freestyle session.
          </p>
        </div>
      ) : (
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <div key={t.id} className="card">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-ink">{t.name}</h3>
                <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-800">{t.difficulty}</span>
              </div>
              {t.description && <p className="mt-2 text-sm text-muted">{t.description}</p>}
              <button
                onClick={() => { setActiveTemplate(t); setBuiltInName(null); setView("log-workout"); }}
                className="mt-4 text-sm font-bold text-brand-700 hover:underline"
              >
                Start this workout →
              </button>
            </div>
          ))}
        </div>
      )}

      <h2 className="mt-10 font-display text-3xl uppercase tracking-wide text-ink">Recent history</h2>
      {history.length === 0 ? (
        <p className="mt-3 text-sm text-muted">No workouts logged yet. Your history will appear here.</p>
      ) : (
        <ul className="mt-3 divide-y divide-line rounded-2xl border border-line bg-card">
          {history.map((w) => {
            const exs = (w.exercises ?? []) as LoggedExercise[];
            const setCount = exs.reduce((s, e) => s + (e.sets?.length ?? 0), 0);
            return (
              <li key={w.id} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm font-bold text-ink">
                    {new Date(w.performed_at).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
                  </p>
                  <p className="text-xs text-muted">
                    {exs.length} exercise{exs.length === 1 ? "" : "s"} · {setCount} sets
                    {w.notes ? ` · ${w.notes}` : ""}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
