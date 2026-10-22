"use client";

import { useMemo, useState } from "react";

type Mode = "pace" | "time";

const RACES = [
  { label: "5K", km: 5 },
  { label: "10K", km: 10 },
  { label: "Half marathon", km: 21.0975 },
  { label: "Marathon", km: 42.195 },
];

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
  const [copied, setCopied] = useState(false);

  // One per-km pace value whichever mode is active — splits and
  // predictions are derived from it.
  const perKm = useMemo(() => {
    const km = parseFloat(distance);
    if (!km || km <= 0) return null;
    if (mode === "pace") {
      const total = parseHMS(h, m, s);
      return total === null ? null : total / km;
    }
    const pm = parseInt(paceM || "0", 10);
    const ps = parseInt(paceS || "0", 10);
    if (Number.isNaN(pm) || Number.isNaN(ps)) return null;
    const p = pm * 60 + ps;
    return p > 0 ? p : null;
  }, [mode, distance, h, m, s, paceM, paceS]);

  const kmDistance = parseFloat(distance) || 0;

  const splits = useMemo(() => {
    if (perKm === null || kmDistance <= 0 || kmDistance > 100) return [];
    const wholeKm = Math.floor(kmDistance);
    const rows: { label: string; time: number }[] = [];
    for (let k = 1; k <= wholeKm; k++) {
      rows.push({ label: `Km ${k}`, time: perKm * k });
    }
    if (kmDistance > wholeKm) {
      rows.push({ label: `Finish (${kmDistance} km)`, time: perKm * kmDistance });
    }
    return rows;
  }, [perKm, kmDistance]);

  const predictions = useMemo(() => {
    if (perKm === null) return [];
    return RACES.map((r) => ({ label: r.label, time: perKm * r.km }));
  }, [perKm]);

  function copyResults() {
    if (perKm === null) return;
    const text =
      `My Stride pace: ${formatPace(perKm, false)}/km (${formatPace(perKm, true)}/mile)\n` +
      `Predicted finish times: ` +
      predictions.map((p) => `${p.label} ${formatDuration(p.time)}`).join(" · ") +
      `\nstridefitapp.com/calculators/pace`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="card">
      <div className="flex gap-2">
        <button
          onClick={() => setMode("pace")}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
            mode === "pace" ? "bg-brand-600 text-white" : "bg-sand text-muted hover:bg-line"
          }`}
        >
          Find my pace
        </button>
        <button
          onClick={() => setMode("time")}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
            mode === "time" ? "bg-brand-600 text-white" : "bg-sand text-muted hover:bg-line"
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
              className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-muted hover:bg-line"
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
                <p className="mt-1 text-center text-xs text-muted">{f.l}</p>
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
              <p className="mt-1 text-center text-xs text-muted">min</p>
            </div>
            <div className="flex-1">
              <input type="number" min={0} max={59} value={paceS} onChange={(e) => setPaceS(e.target.value)} className="field text-center" />
              <p className="mt-1 text-center text-xs text-muted">sec</p>
            </div>
          </div>
        </div>
      )}

      {perKm !== null && (
        <>
          <div className="mt-6 rounded-2xl bg-brand-50 p-5 text-center">
            {mode === "pace" ? (
              <>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">Your pace</p>
                <p className="mt-2 text-4xl font-black text-ink">{formatPace(perKm, false)}<span className="text-base font-medium text-muted"> /km</span></p>
                <p className="mt-1 text-lg font-bold text-muted">{formatPace(perKm, true)}<span className="text-sm font-medium text-muted"> /mile</span></p>
              </>
            ) : (
              <>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">Predicted finish time</p>
                <p className="mt-2 text-4xl font-black text-ink">{formatDuration(perKm * kmDistance)}</p>
                <p className="mt-1 text-lg font-bold text-muted">for {kmDistance} km at {formatPace(perKm, false)}/km</p>
              </>
            )}
            <button
              onClick={copyResults}
              className="mt-4 rounded-full bg-navy-900 px-5 py-2 text-sm font-semibold text-white hover:bg-navy-800"
            >
              {copied ? "Copied!" : "📋 Copy my results"}
            </button>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-ink">Predicted finish times at this pace</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {predictions.map((p) => (
                <div key={p.label} className="rounded-2xl bg-sand p-3 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{p.label}</p>
                  <p className="mt-1 text-lg font-black text-ink">{formatDuration(p.time)}</p>
                </div>
              ))}
            </div>
          </div>

          {splits.length > 1 && (
            <div className="mt-6">
              <h3 className="font-bold text-ink">Your splits — every kilometer</h3>
              <p className="mt-1 text-sm text-muted">
                The clock time you should hit at each kilometer marker to stay on pace.
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
                {splits.map((sp) => (
                  <div key={sp.label} className="rounded-xl border border-line px-2 py-2 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">{sp.label}</p>
                    <p className="text-sm font-bold text-ink">{formatDuration(sp.time)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
