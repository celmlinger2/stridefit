"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { parseActivityFile, type ParsedActivity } from "@/lib/gpx";
import type { ActivityType, CardioLog, EventType, FitnessEvent } from "@/lib/database.types";

const activityTypes: ActivityType[] = ["run", "walk", "cycle", "swim", "row", "elliptical", "other"];
const eventTypes: EventType[] = ["race", "challenge", "group_run", "other"];

export default function CardioPage() {
  const supabase = createClient();
  const fileRef = useRef<HTMLInputElement>(null);
  const [logs, setLogs] = useState<CardioLog[]>([]);
  const [events, setEvents] = useState<FitnessEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // manual log form
  const [activityType, setActivityType] = useState<ActivityType>("run");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  // import state
  const [parsed, setParsed] = useState<ParsedActivity | null>(null);
  const [importName, setImportName] = useState("");

  // event form
  const [eName, setEName] = useState("");
  const [eDate, setEDate] = useState("");
  const [eType, setEType] = useState<EventType>("race");
  const [eGoal, setEGoal] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const [lRes, eRes] = await Promise.all([
      supabase.from("cardio_logs").select("*").eq("user_id", user.id).order("performed_at", { ascending: false }).limit(20),
      supabase.from("events").select("*").eq("user_id", user.id).order("event_date", { ascending: true }),
    ]);
    if (lRes.error) setError(lRes.error.message);
    else setLogs(lRes.data as CardioLog[]);
    if (!eRes.error) setEvents(eRes.data as FitnessEvent[]);
    setLoading(false);
  }, [supabase]);

  useEffect(() => { load(); }, [load]);

  async function saveLog(entry: { activity_type: ActivityType; distance_km: number | null; duration_min: number | null; notes: string | null }) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;
    const { error } = await supabase.from("cardio_logs").insert({ user_id: user.id, ...entry });
    if (error) { setError(error.message); return false; }
    return true;
  }

  async function handleManualLog(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const ok = await saveLog({
      activity_type: activityType,
      distance_km: distance.trim() === "" ? null : parseFloat(distance),
      duration_min: duration.trim() === "" ? null : parseFloat(duration),
      notes: notes.trim() || null,
    });
    setSaving(false);
    if (ok) {
      setDistance(""); setDuration(""); setNotes("");
      load();
    }
  }

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    try {
      const text = await file.text();
      const result = parseActivityFile(file.name, text);
      setParsed(result);
      setDistance(result.distanceKm?.toString() ?? "");
      setDuration(result.durationMin?.toString() ?? "");
      setImportName(file.name.replace(/\.(gpx|tcx)$/i, "").replace(/[_-]+/g, " "));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not read that file.");
      setParsed(null);
    }
    e.target.value = "";
  }

  async function saveImported(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const ok = await saveLog({
      activity_type: activityType,
      distance_km: distance.trim() === "" ? null : parseFloat(distance),
      duration_min: duration.trim() === "" ? null : parseFloat(duration),
      notes: importName ? `Imported: ${importName}` : "Imported from file",
    });
    setSaving(false);
    if (ok) {
      setParsed(null); setImportName(""); setDistance(""); setDuration("");
      load();
    }
  }

  async function addEvent(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase.from("events").insert({
      user_id: user.id,
      name: eName.trim(),
      event_date: eDate,
      event_type: eType,
      goal: eGoal.trim() || null,
    });
    if (error) { setError(error.message); return; }
    setEName(""); setEDate(""); setEGoal(""); setEType("race");
    load();
  }

  async function deleteLog(id: string) {
    const { error } = await supabase.from("cardio_logs").delete().eq("id", id);
    if (!error) setLogs((ls) => ls.filter((l) => l.id !== id));
  }

  return (
    <div>
      <h1 className="text-3xl font-black tracking-tight text-slate-900">Cardio</h1>
      <p className="mt-1 text-slate-600">Log runs, walks, and cardio — or import from your watch.</p>

      {error && <p className="error-text mt-4">{error}</p>}

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Manual log */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900">Log activity</h2>
          <form onSubmit={handleManualLog} className="mt-4 space-y-4">
            <div>
              <label className="label">Activity</label>
              <select value={activityType} onChange={(e) => setActivityType(e.target.value as ActivityType)} className="field">
                {activityTypes.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Distance (km)</label>
                <input type="number" min={0} step="any" value={distance} onChange={(e) => setDistance(e.target.value)} className="field" placeholder="5.0" />
              </div>
              <div>
                <label className="label">Duration (min)</label>
                <input type="number" min={0} step="any" value={duration} onChange={(e) => setDuration(e.target.value)} className="field" placeholder="30" />
              </div>
            </div>
            <div>
              <label className="label">Notes</label>
              <input value={notes} onChange={(e) => setNotes(e.target.value)} className="field" placeholder="Easy morning run" />
            </div>
            <button type="submit" disabled={saving} className="btn-primary">
              {saving ? "Saving…" : "Save activity"}
            </button>
          </form>
        </div>

        {/* File import */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900">Import from file</h2>
          <p className="mt-1 text-sm text-slate-600">
            Upload a <strong>.gpx</strong> or <strong>.tcx</strong> export from Strava,
            Garmin, or your watch. We&apos;ll read the distance and duration —
            you confirm before anything is saved.
          </p>
          <input ref={fileRef} type="file" accept=".gpx,.tcx" onChange={handleFile} className="hidden" />
          <button onClick={() => fileRef.current?.click()} className="btn-secondary mt-4">
            Choose GPX / TCX file
          </button>

          {parsed && (
            <form onSubmit={saveImported} className="mt-5 rounded-2xl bg-brand-50 p-4">
              <p className="text-sm font-bold text-brand-900">
                Found: {parsed.distanceKm ?? "—"} km in {parsed.durationMin ?? "—"} min
                <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-xs uppercase">{parsed.source}</span>
              </p>
              <p className="mt-1 text-xs text-slate-600">
                MVP parsing reads track-point distance and timestamps. Always
                double-check — then save to confirm.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Distance (km)</label>
                  <input type="number" min={0} step="any" value={distance} onChange={(e) => setDistance(e.target.value)} className="field" />
                </div>
                <div>
                  <label className="label">Duration (min)</label>
                  <input type="number" min={0} step="any" value={duration} onChange={(e) => setDuration(e.target.value)} className="field" />
                </div>
              </div>
              <div className="mt-3">
                <label className="label">Activity</label>
                <select value={activityType} onChange={(e) => setActivityType(e.target.value as ActivityType)} className="field">
                  {activityTypes.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              <div className="mt-4 flex gap-3">
                <button type="submit" disabled={saving} className="btn-primary">
                  {saving ? "Saving…" : "Confirm & save"}
                </button>
                <button type="button" onClick={() => setParsed(null)} className="btn-secondary">Cancel</button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Recent activity */}
      <div className="card mt-6">
        <h2 className="text-lg font-bold text-slate-900">Recent activity</h2>
        {loading ? (
          <p className="mt-3 text-sm text-slate-500">Loading…</p>
        ) : logs.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">No cardio logged yet. Log your first run, walk, or ride above.</p>
        ) : (
          <ul className="mt-3 divide-y divide-slate-100">
            {logs.map((l) => (
              <li key={l.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-bold capitalize text-slate-900">{l.activity_type}</p>
                  <p className="text-xs text-slate-500">
                    {new Date(l.performed_at).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                    {l.distance_km ? ` · ${Number(l.distance_km)} km` : ""}
                    {l.duration_min ? ` · ${Number(l.duration_min)} min` : ""}
                    {l.notes ? ` · ${l.notes}` : ""}
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

      {/* Events */}
      <div className="card mt-6">
        <h2 className="text-lg font-bold text-slate-900">Upcoming events</h2>
        <p className="mt-1 text-sm text-slate-600">Races, challenges, and group runs you&apos;re training for.</p>
        <form onSubmit={addEvent} className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <label className="label">Event name</label>
            <input value={eName} onChange={(e) => setEName(e.target.value)} required className="field" placeholder="Spring 10K" />
          </div>
          <div>
            <label className="label">Date</label>
            <input type="date" value={eDate} onChange={(e) => setEDate(e.target.value)} required className="field" />
          </div>
          <div>
            <label className="label">Type</label>
            <select value={eType} onChange={(e) => setEType(e.target.value as EventType)} className="field">
              {eventTypes.map((t) => <option key={t} value={t}>{t.replace("_", " ")}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Goal (optional)</label>
            <input value={eGoal} onChange={(e) => setEGoal(e.target.value)} className="field" placeholder="Finish under 55 minutes" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="btn-secondary">Add event</button>
          </div>
        </form>
        {events.length > 0 && (
          <ul className="mt-4 divide-y divide-slate-100">
            {events.map((ev) => (
              <li key={ev.id} className="py-3">
                <p className="text-sm font-bold text-slate-900">{ev.name}</p>
                <p className="text-xs text-slate-500">
                  {new Date(ev.event_date + "T12:00:00").toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
                  {" · "}{ev.event_type.replace("_", " ")}
                  {ev.goal ? ` · Goal: ${ev.goal}` : ""}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
