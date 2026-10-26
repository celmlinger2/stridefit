"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { Challenge, ChallengeMetric } from "@/lib/database.types";
import { METRIC_LABEL, challengeStatus, dateRangeLabel } from "@/lib/challenges";

export default function ChallengesPage() {
  const supabase = createClient();
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [joinedIds, setJoinedIds] = useState<Set<string>>(new Set());
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  // create form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [metric, setMetric] = useState<ChallengeMetric>("workouts");
  const [startsOn, setStartsOn] = useState("");
  const [endsOn, setEndsOn] = useState("");
  const [creating, setCreating] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const [chRes, myRes] = await Promise.all([
      supabase.from("challenges").select("*").order("starts_on", { ascending: true }),
      supabase.from("challenge_members").select("challenge_id").eq("user_id", user.id),
    ]);
    if (chRes.error) setError(chRes.error.message);
    else setChallenges((chRes.data ?? []) as Challenge[]);
    if (!myRes.error && myRes.data) {
      setJoinedIds(new Set(myRes.data.map((r) => r.challenge_id as string)));
    }
    // Member counts: rows are visible for challenges I'm in or created;
    // for others the count may come back empty — the detail page shows
    // the full picture once joined. We count what we can see.
    const { data: memberRows } = await supabase.from("challenge_members").select("challenge_id");
    if (memberRows) {
      const c: Record<string, number> = {};
      memberRows.forEach((r) => {
        const id = r.challenge_id as string;
        c[id] = (c[id] ?? 0) + 1;
      });
      setCounts(c);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    load();
  }, [load]);

  async function join(id: string) {
    setBusyId(id);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase.from("challenge_members").insert({ challenge_id: id, user_id: user.id });
    setBusyId(null);
    if (error) setError(error.message);
    else load();
  }

  async function leave(id: string) {
    setBusyId(id);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase
      .from("challenge_members")
      .delete()
      .eq("challenge_id", id)
      .eq("user_id", user.id);
    setBusyId(null);
    if (error) setError(error.message);
    else load();
  }

  async function createChallenge(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    setError(null);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase.from("challenges").insert({
      name: name.trim(),
      description: description.trim() || null,
      metric,
      starts_on: startsOn,
      ends_on: endsOn,
      created_by: user.id,
    });
    setCreating(false);
    if (error) {
      setError(error.message);
      return;
    }
    setName("");
    setDescription("");
    setStartsOn("");
    setEndsOn("");
    load();
  }

  const official = challenges.filter((c) => c.is_official);
  const community = challenges.filter((c) => !c.is_official);

  function ChallengeCard({ c }: { c: Challenge }) {
    const st = challengeStatus(c.starts_on, c.ends_on);
    const joined = joinedIds.has(c.id);
    return (
      <div className="card">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl uppercase tracking-wide text-ink">{c.name}</h3>
          {c.is_official && (
            <span className="rounded-full bg-brand-500 px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-white">
              Official
            </span>
          )}
        </div>
        {c.description && <p className="mt-1 text-sm text-muted">{c.description}</p>}
        <p className="mt-3 text-sm font-semibold text-ink">
          {METRIC_LABEL[c.metric]} · {dateRangeLabel(c.starts_on, c.ends_on)}
        </p>
        <p className={`text-sm font-semibold ${st.live ? "text-brand-700" : "text-muted"}`}>
          {st.label}
          {counts[c.id] ? ` · ${counts[c.id]} in` : ""}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {joined ? (
            <>
              <Link href={`/app/challenges/${c.id}`} className="btn-primary">
                View leaderboard
              </Link>
              <button onClick={() => leave(c.id)} disabled={busyId === c.id} className="btn-secondary">
                Leave
              </button>
            </>
          ) : (
            <button onClick={() => join(c.id)} disabled={busyId === c.id} className="btn-primary">
              {busyId === c.id ? "Joining…" : "Join challenge"}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="eyebrow">Compete</p>
      <h1 className="mt-2 font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink">
        Challenges<span className="text-brand-500">.</span>
      </h1>
      <p className="mt-2 text-muted">
        Join a challenge and climb the board — your logged workouts and cardio count automatically. Only your totals ever
        show; nobody sees your individual workouts.
      </p>

      {error && <p className="error-text mt-4">{error}</p>}

      {loading ? (
        <p className="mt-6 text-sm text-muted">Loading challenges…</p>
      ) : (
        <>
          <h2 className="mt-8 font-display text-3xl uppercase tracking-wide text-ink">Stride challenges</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {official.map((c) => (
              <ChallengeCard key={c.id} c={c} />
            ))}
          </div>

          <h2 className="mt-10 font-display text-3xl uppercase tracking-wide text-ink">Community challenges</h2>
          {community.length === 0 ? (
            <p className="mt-3 text-sm text-muted">None yet — start the first one below and share the link with your crew.</p>
          ) : (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {community.map((c) => (
                <ChallengeCard key={c.id} c={c} />
              ))}
            </div>
          )}
        </>
      )}

      <div className="card mt-10">
        <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Start your own</h2>
        <p className="mt-1 text-sm text-muted">A friendly race with your people. Share the challenge page link — anyone with a Stride account can join.</p>
        <form onSubmit={createChallenge} className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required className="field" placeholder="Smith Family Step-Off" />
          </div>
          <div>
            <label className="label">What counts</label>
            <select value={metric} onChange={(e) => setMetric(e.target.value as ChallengeMetric)} className="field">
              <option value="workouts">Most workouts</option>
              <option value="cardio_km">Most cardio distance</option>
              <option value="active_days">Most active days</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="label">Description (optional)</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="field" placeholder="Loser buys coffee." />
          </div>
          <div>
            <label className="label">Starts</label>
            <input type="date" value={startsOn} onChange={(e) => setStartsOn(e.target.value)} required className="field" />
          </div>
          <div>
            <label className="label">Ends</label>
            <input type="date" value={endsOn} onChange={(e) => setEndsOn(e.target.value)} required className="field" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" disabled={creating} className="btn-primary">
              {creating ? "Creating…" : "Create challenge"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
