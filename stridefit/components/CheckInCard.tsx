"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { readinessFromScores, type CheckinScores } from "@/lib/readiness";

function localToday(): string {
  const d = new Date();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

const ROWS: {
  key: keyof CheckinScores;
  label: string;
  low: string;
  high: string;
}[] = [
  { key: "sleep", label: "Sleep", low: "Rough", high: "Great" },
  { key: "energy", label: "Energy", low: "Drained", high: "Charged" },
  { key: "soreness", label: "Soreness", low: "None", high: "Very sore" },
];

/**
 * The 10-second morning check-in. Saves one row per day to
 * daily_checkins and announces the save (window event
 * "stride:checkin") so the Workout of the Day can re-tune itself.
 */
export default function CheckInCard() {
  const [scores, setScores] = useState<CheckinScores>({
    sleep: 3,
    energy: 3,
    soreness: 2,
  });
  const [saved, setSaved] = useState<CheckinScores | null>(null);
  const [editing, setEditing] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const load = useCallback(async () => {
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from("daily_checkins")
        .select("sleep_score, energy_score, soreness_score")
        .eq("user_id", user.id)
        .eq("checkin_date", localToday())
        .maybeSingle();
      if (data) {
        const s = {
          sleep: data.sleep_score,
          energy: data.energy_score,
          soreness: data.soreness_score,
        };
        setSaved(s);
        setScores(s);
      }
    } catch {
      /* The card simply stays in its fresh state. */
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function save() {
    setBusy(true);
    setError(null);
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("You need to be logged in.");
      const { error: upsertError } = await supabase
        .from("daily_checkins")
        .upsert(
          {
            user_id: user.id,
            checkin_date: localToday(),
            sleep_score: scores.sleep,
            energy_score: scores.energy,
            soreness_score: scores.soreness,
          },
          { onConflict: "user_id,checkin_date" }
        );
      if (upsertError) throw new Error(upsertError.message);
      setSaved(scores);
      setEditing(false);
      window.dispatchEvent(new CustomEvent("stride:checkin"));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not save your check-in.");
    } finally {
      setBusy(false);
    }
  }

  if (!ready) return null;

  const showForm = !saved || editing;
  const readiness = saved ? readinessFromScores(saved) : null;

  return (
    <div className="card h-full">
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="font-display text-3xl uppercase tracking-wide text-ink">
          Morning check-in
        </h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          10 seconds
        </span>
      </div>

      {!showForm && readiness ? (
        <div className="mt-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-sand px-3 py-1 text-xs font-bold text-ink">
              Sleep {saved!.sleep}/5
            </span>
            <span className="rounded-full bg-sand px-3 py-1 text-xs font-bold text-ink">
              Energy {saved!.energy}/5
            </span>
            <span className="rounded-full bg-sand px-3 py-1 text-xs font-bold text-ink">
              Soreness {saved!.soreness}/5
            </span>
          </div>
          <p className="mt-3 text-sm">
            <span
              className={`mr-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${
                readiness.level === "high"
                  ? "bg-brand-500 text-white"
                  : readiness.level === "low"
                    ? "bg-navy-900 text-white"
                    : "bg-brand-100 text-brand-800"
              }`}
            >
              {readiness.label}
            </span>
            <span className="text-muted">{readiness.advice}</span>
          </p>
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="mt-3 text-sm font-bold text-brand-700 hover:underline"
          >
            Update check-in
          </button>
        </div>
      ) : (
        <div className="mt-3">
          <p className="text-sm text-muted">
            How do you feel right now? Your answers tune today&apos;s workout.
          </p>
          <div className="mt-4 space-y-4">
            {ROWS.map((row) => (
              <div key={row.key}>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-ink">{row.label}</span>
                  <span className="text-[11px] text-muted">
                    {row.low} → {row.high}
                  </span>
                </div>
                <div className="mt-1.5 flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-label={`${row.label}: ${n} of 5`}
                      aria-pressed={scores[row.key] === n}
                      onClick={() =>
                        setScores((prev) => ({ ...prev, [row.key]: n }))
                      }
                      className={`h-9 flex-1 rounded-xl border-2 text-sm font-bold transition ${
                        scores[row.key] === n
                          ? "border-brand-500 bg-brand-500 text-white"
                          : "border-line bg-white text-muted hover:border-brand-300"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {error && <p className="error-text mt-3">{error}</p>}
          <button
            type="button"
            disabled={busy}
            onClick={save}
            className="mt-4 w-full rounded-full bg-navy-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-800 disabled:opacity-40"
          >
            {busy ? "Saving…" : saved ? "Save updated check-in" : "Save check-in"}
          </button>
        </div>
      )}
    </div>
  );
}
