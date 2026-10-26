"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { FitnessEvent } from "@/lib/database.types";

const PRESETS = [
  { label: "5K", km: 5 },
  { label: "10K", km: 10 },
  { label: "Half marathon", km: 21.0975 },
  { label: "Marathon", km: 42.195 },
];

function fmtClock(totalSec: number): string {
  const s = Math.round(totalSec);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = h > 0 ? String(m).padStart(2, "0") : String(m);
  const ss = String(sec).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

function fmtPace(secPerUnit: number): string {
  const m = Math.floor(secPerUnit / 60);
  const s = Math.round(secPerUnit % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

const CHECKLIST = [
  "Packet / bib picked up (or plan to get it)",
  "Bib pinned to your race outfit the night before",
  "Shoes + socks laid out (nothing new on race day)",
  "Gels / fuel packed and pinned or in your belt",
  "Watch + phone charged",
  "Pre-race breakfast bought and ready",
  "Weather checked; layers planned for the start",
  "Start time, parking / transport, and bag drop sorted",
  "Alarm set — with a backup",
];

export default function RaceKitPage() {
  const supabase = createClient();
  const [events, setEvents] = useState<FitnessEvent[]>([]);
  const [eventId, setEventId] = useState("");
  const [distKm, setDistKm] = useState(10);
  const [customKm, setCustomKm] = useState("");
  const [goalH, setGoalH] = useState("");
  const [goalM, setGoalM] = useState("55");
  const [goalS, setGoalS] = useState("");
  const [unit, setUnit] = useState<"mi" | "km">("mi");
  const [weightLb, setWeightLb] = useState("");
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const load = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const today = new Date().toISOString().slice(0, 10);
    const { data } = await supabase
      .from("fitness_events")
      .select("*")
      .eq("user_id", user.id)
      .gte("event_date", today)
      .order("event_date", { ascending: true });
    if (data) {
      setEvents(data as FitnessEvent[]);
      const firstRace = (data as FitnessEvent[]).find((e) => e.event_type === "race") ?? (data as FitnessEvent[])[0];
      if (firstRace) setEventId(firstRace.id);
    }
  }, [supabase]);

  useEffect(() => {
    load();
  }, [load]);

  const event = events.find((e) => e.id === eventId) ?? null;
  const daysToRace = event
    ? Math.ceil((new Date(event.event_date + "T12:00:00").getTime() - Date.now()) / 86400000)
    : null;

  const goalSec =
    (parseInt(goalH, 10) || 0) * 3600 + (parseInt(goalM, 10) || 0) * 60 + (parseInt(goalS, 10) || 0);
  const dist = customKm ? parseFloat(customKm) || 0 : distKm;

  const plan = useMemo(() => {
    if (!dist || !goalSec) return null;
    const paceSecPerKm = goalSec / dist;
    const unitKm = unit === "mi" ? 1.60934 : 1;
    const marks: { label: string; atKm: number }[] = [];
    const totalUnits = dist / unitKm;
    for (let u = 1; u < Math.floor(totalUnits); u++) {
      marks.push({ label: `${u} ${unit}`, atKm: u * unitKm });
    }
    if (dist > 15 && unit === "mi") marks.push({ label: "Halfway", atKm: dist / 2 });
    marks.sort((a, b) => a.atKm - b.atKm);
    marks.push({ label: "Finish", atKm: dist });

    // Fueling (standard endurance guidance by duration)
    const hours = goalSec / 3600;
    let carbsPerHour = 0;
    if (hours > 2.5) carbsPerHour = 75;
    else if (hours > 1.5) carbsPerHour = 60;
    else if (hours > 1) carbsPerHour = 30;
    const gelCarbs = 25;
    const gels = carbsPerHour > 0 ? Math.max(1, Math.round((hours * carbsPerHour) / gelCarbs)) : 0;
    const gelEveryMin = gels > 0 ? Math.round(goalSec / 60 / (gels + 1)) : 0;
    const weightKg = weightLb ? (parseFloat(weightLb) || 0) * 0.453592 : null;

    return { paceSecPerKm, marks, hours, carbsPerHour, gels, gelEveryMin, weightKg };
  }, [dist, goalSec, unit, weightLb]);

  return (
    <div>
      <p className="eyebrow">Race day</p>
      <h1 className="mt-2 font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink">
        Race-Day Kit<span className="text-brand-500">.</span>
      </h1>
      <p className="mt-2 text-muted">Your pace plan and fuel plan on one page — set a goal time and everything works itself out.</p>

      {/* Setup */}
      <div className="card mt-6">
        <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Your race</h2>
        {events.length > 0 && (
          <div className="mt-4">
            <label className="label">Upcoming event</label>
            <select value={eventId} onChange={(e) => setEventId(e.target.value)} className="field">
              {events.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name} — {e.event_date}
                </option>
              ))}
            </select>
            {event && daysToRace != null && (
              <p className="mt-2 text-sm font-semibold text-brand-700">
                {daysToRace === 0 ? "Race day — go get it! 🎉" : daysToRace === 1 ? "Tomorrow's the day!" : `${daysToRace} days to go.`}
                {event.goal ? ` Goal: ${event.goal}` : ""}
              </p>
            )}
          </div>
        )}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="label">Distance</label>
            <select
              value={customKm ? "custom" : String(distKm)}
              onChange={(e) => {
                if (e.target.value === "custom") setCustomKm("15");
                else {
                  setCustomKm("");
                  setDistKm(parseFloat(e.target.value));
                }
              }}
              className="field"
            >
              {PRESETS.map((p) => (
                <option key={p.label} value={p.km}>
                  {p.label}
                </option>
              ))}
              <option value="custom">Custom…</option>
            </select>
          </div>
          {customKm && (
            <div>
              <label className="label">Custom distance (km)</label>
              <input type="number" min={0} step="any" value={customKm} onChange={(e) => setCustomKm(e.target.value)} className="field" />
            </div>
          )}
          <div>
            <label className="label">Goal time (h : m : s)</label>
            <div className="flex gap-2">
              <input type="number" min={0} value={goalH} onChange={(e) => setGoalH(e.target.value)} className="field" placeholder="0" />
              <input type="number" min={0} max={59} value={goalM} onChange={(e) => setGoalM(e.target.value)} className="field" placeholder="55" />
              <input type="number" min={0} max={59} value={goalS} onChange={(e) => setGoalS(e.target.value)} className="field" placeholder="00" />
            </div>
          </div>
          <div>
            <label className="label">Splits in</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value as "mi" | "km")} className="field">
              <option value="mi">Miles</option>
              <option value="km">Kilometers</option>
            </select>
          </div>
          <div>
            <label className="label">Your weight (lb, optional)</label>
            <input type="number" min={0} value={weightLb} onChange={(e) => setWeightLb(e.target.value)} className="field" placeholder="165" />
          </div>
        </div>
      </div>

      {plan && (
        <>
          {/* Pace plan */}
          <div className="card mt-6">
            <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Pace plan</h2>
            <p className="mt-2 text-sm text-muted">
              Even splits: <strong className="text-ink">{fmtPace(plan.paceSecPerKm * (unit === "mi" ? 1.60934 : 1))} per {unit}</strong>{" "}
              ({fmtPace(plan.paceSecPerKm)} per km) for a {fmtClock(goalSec)} finish. Bank nothing early — even is fastest.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {plan.marks.map((mk) => (
                <div key={mk.label} className="rounded-xl bg-sand px-3 py-2">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted">{mk.label}</p>
                  <p className="text-lg font-black text-ink">{fmtClock(mk.atKm * plan.paceSecPerKm)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fuel plan */}
          <div className="card mt-6">
            <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Fuel plan</h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink">
              <p>
                <strong>Breakfast (2–3 hours before):</strong>{" "}
                {plan.weightKg
                  ? `about ${Math.round(plan.weightKg * 1.5)}–${Math.round(plan.weightKg * 2)}g of carbs (roughly 1.5–2g per kg of body weight) — oatmeal, toast, banana, juice. Low fiber, low fat, familiar foods only.`
                  : "a carb-focused meal of familiar foods — oatmeal, toast, banana, juice. Low fiber, low fat, nothing new. Add your weight above for a sized-up target."}
              </p>
              <p>
                <strong>Top-off (30–60 min before):</strong> 25–40g of quick carbs — a gel, sports drink, or a banana.
              </p>
              {plan.carbsPerHour > 0 ? (
                <p>
                  <strong>During the race:</strong> about {plan.carbsPerHour}g of carbs per hour. With standard gels (~25g each),
                  that&apos;s <strong>{plan.gels} gel{plan.gels === 1 ? "" : "s"}</strong> — one roughly every {plan.gelEveryMin}{" "}
                  minutes, starting around minute {plan.gelEveryMin}. Wash each down with water, and sip ~500–750ml of fluid per
                  hour. Don&apos;t wait until you feel empty; by then it&apos;s too late to catch up.
                </p>
              ) : (
                <p>
                  <strong>During the race:</strong> at this duration you don&apos;t need fuel mid-race — water to thirst is enough.
                  Save the gels for your longer efforts.
                </p>
              )}
              {plan.hours > 1.5 && (
                <p>
                  <strong>The two days before:</strong> make carbs the main event at every meal (pasta, rice, bread, potatoes).
                  You&apos;re topping off the tank your muscles will actually race on.
                </p>
              )}
              <p>
                <strong>After:</strong> protein + carbs within the hour — a real meal, chocolate milk, or a shake — and keep sipping
                water through the day.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Checklist */}
      <div className="card mt-6">
        <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Night-before checklist</h2>
        <ul className="mt-4 space-y-2">
          {CHECKLIST.map((item, i) => (
            <li key={item}>
              <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-ink">
                <input
                  type="checkbox"
                  checked={!!checked[i]}
                  onChange={(e) => setChecked((c) => ({ ...c, [i]: e.target.checked }))}
                  className="h-4 w-4 accent-[#EF7143]"
                />
                <span className={checked[i] ? "text-muted line-through" : ""}>{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
