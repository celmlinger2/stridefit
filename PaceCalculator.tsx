"use client";

import { useMemo, useState } from "react";

type Mode = "pace" | "time";

function parseHMS(h: string, m: string, s: string): number | null {
  const hh = parseInt(h || "0", 10);
  const mm = parseInt(m || "0", 10);
  const ss = parseInt(s || "0", 10);
  if ([hh, mm, ss].some((n) => Number.isNaN(n) || n < 0)) return null;
  const total = hh * 3600 + mm * 60 + ss;
  return total > 0 ? total : null;
}

function formatPace(secondsPerKm: number, perMile: boolean): string {
  const s = perMile ? secondsPerKm * 1.60934 : secondsPerKm;
  const m = Math.floor(s / 60);
  const sec = Math.round(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function formatDuration(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  const mm = m.toString().padStart(2, "0");
  const ss = s.toString().padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

export default function PaceCalculator() {
  const [mode, setMode] = useState<Mode>("pace");
  const [distance, setDistance] = useState("5");
  const [h, setH] = useState("0");
  const [m, setM] = useState("25");
  const [s, setS] = useState("0");
  // time mode: target pace
  const [paceM, setPaceM] = useState("5");
  const [paceS, setPaceS] = useState("30");

  const paceResult = useMemo(() => {
    if (mode !== "pace") return null;
    const km = parseFloat(distance);
    const total = parseHMS(h, m, s);
    if (!km || km <= 0 || total === null) return null;
    const perKm = total / km;
    return { perKm, perMile: perKm * 1.60934 };
  }, [mode, distance, h, m, s]);

  const timeResult = useMemo(() => {
    if (mode !== "time") return null;
    const km = parseFloat(distance);
    const pm = parseInt(paceM || "0", 10);
    const ps = parseInt(paceS || "0", 10);
    if (!km || km <= 0 || Number.isNaN(pm) || Number.isNaN(ps)) return null;
    const perKm = pm * 60 + ps;
    if (perKm <= 0) return null;
    return { total: perKm * km };
  }, [mode, distance, paceM, paceS]);

  return (
    <div className="card">
      <div className="flex gap-2">
        <button
          onClick={() => setMode("pace")}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
            mode === "pace" ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Find my pace
        </button>
        <button
          onClick={() => setMode("time")}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
            mode === "time" ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Predict finish time
        </button>
      </div>

      <div className="mt-5">
        <label className="label">Distance (km)</label>
        <input
          type="number" min={0.1} step={0.1} value={distance}
          onChange={(e) => setDistance(e.target.value)} className="field max-w-xs"
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {[
            { label: "5K", km: "5" },
            { label: "10K", km: "10" },
            { label: "Half marathon", km: "21.0975" },
            { label: "Marathon", km: "42.195" },
          ].map((d) => (
            <button
              key={d.label}
              onClick={() => setDistance(d.km)}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-200"
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {mode === "pace" ? (
        <div className="mt-4">
          <label className="label">Your time</label>
          <div className="flex max-w-xs gap-2">
            {[
              { v: h, set: setH, l: "hr" },
              { v: m, set: setM, l: "min" },
              { v: s, set: setS, l: "sec" },
            ].map((f) => (
              <div key={f.l} className="flex-1">
                <input type="number" min={0} value={f.v} onChange={(e) => f.set(e.target.value)} className="field text-center" />
                <p className="mt-1 text-center text-xs text-slate-500">{f.l}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <label className="label">Target pace (per km)</label>
          <div className="flex max-w-xs gap-2">
            <div className="flex-1">
              <input type="number" min={0} value={paceM} onChange={(e) => setPaceM(e.target.value)} className="field text-center" />
              <p className="mt-1 text-center text-xs text-slate-500">min</p>
            </div>
            <div className="flex-1">
              <input type="number" min={0} max={59} value={paceS} onChange={(e) => setPaceS(e.target.value)} className="field text-center" />
              <p className="mt-1 text-center text-xs text-slate-500">sec</p>
            </div>
          </div>
        </div>
      )}

      {(paceResult || timeResult) && (
        <div className="mt-6 rounded-2xl bg-brand-50 p-5 text-center">
          {paceResult && (
            <>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">Your pace</p>
              <p className="mt-2 text-4xl font-black text-slate-900">{formatPace(paceResult.perKm, false)}<span className="text-base font-medium text-slate-500"> /km</span></p>
              <p className="mt-1 text-lg font-bold text-slate-600">{formatPace(paceResult.perKm, true)}<span className="text-sm font-medium text-slate-500"> /mile</span></p>
            </>
          )}
          {timeResult && (
            <>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">Predicted finish time</p>
              <p className="mt-2 text-4xl font-black text-slate-900">{formatDuration(timeResult.total)}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
