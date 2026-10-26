"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { Challenge, LeaderboardRow } from "@/lib/database.types";
import { METRIC_LABEL, challengeStatus, dateRangeLabel, metricDisplay, metricValue } from "@/lib/challenges";

export default function ChallengeDetailPage() {
  const supabase = createClient();
  const params = useParams();
  const id = String(params.id);

  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [rows, setRows] = useState<LeaderboardRow[]>([]);
  const [myId, setMyId] = useState<string | null>(null);
  const [isMember, setIsMember] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    setMyId(user.id);

    const { data: ch, error: chErr } = await supabase.from("challenges").select("*").eq("id", id).single();
    if (chErr) {
      setError("That challenge couldn't be found.");
      setLoading(false);
      return;
    }
    const c = ch as Challenge;
    setChallenge(c);

    const { data: mine } = await supabase
      .from("challenge_members")
      .select("challenge_id")
      .eq("challenge_id", id)
      .eq("user_id", user.id)
      .maybeSingle();
    const member = !!mine;
    setIsMember(member);

    if (member) {
      const { data: lb, error: lbErr } = await supabase.rpc("challenge_leaderboard", { p_challenge_id: id });
      if (lbErr) setError(lbErr.message);
      else {
        const list = (lb ?? []) as LeaderboardRow[];
        list.sort((a, b) => metricValue(b, c.metric) - metricValue(a, c.metric));
        setRows(list);
      }
    }
    setLoading(false);
  }, [supabase, id]);

  useEffect(() => {
    load();
  }, [load]);

  async function join() {
    setBusy(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase.from("challenge_members").insert({ challenge_id: id, user_id: user.id });
    setBusy(false);
    if (error) setError(error.message);
    else load();
  }

  async function leave() {
    setBusy(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase
      .from("challenge_members")
      .delete()
      .eq("challenge_id", id)
      .eq("user_id", user.id);
    setBusy(false);
    if (error) setError(error.message);
    else load();
  }

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: challenge?.name ?? "Stride challenge", url }).catch(() => undefined);
    } else {
      await navigator.clipboard.writeText(url).catch(() => undefined);
      setCopied(true);
    }
  }

  if (loading) return <p className="text-sm text-muted">Loading challenge…</p>;
  if (!challenge)
    return (
      <div>
        <p className="error-text">{error ?? "Challenge not found."}</p>
        <Link href="/app/challenges" className="btn-secondary mt-4 inline-block">
          Back to challenges
        </Link>
      </div>
    );

  const st = challengeStatus(challenge.starts_on, challenge.ends_on);
  const myRank = rows.findIndex((r) => r.user_id === myId);

  return (
    <div>
      <Link href="/app/challenges" className="text-sm font-bold text-brand-700 hover:underline">
        ← All challenges
      </Link>
      <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
        <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink">
          {challenge.name}
          <span className="text-brand-500">.</span>
        </h1>
        {challenge.is_official && (
          <span className="rounded-full bg-brand-500 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-white">
            Official
          </span>
        )}
      </div>
      {challenge.description && <p className="mt-2 text-muted">{challenge.description}</p>}
      <p className="mt-3 text-sm font-semibold text-ink">
        {METRIC_LABEL[challenge.metric]} · {dateRangeLabel(challenge.starts_on, challenge.ends_on)}
      </p>
      <p className={`text-sm font-semibold ${st.live ? "text-brand-700" : "text-muted"}`}>{st.label}</p>

      {error && <p className="error-text mt-4">{error}</p>}

      <div className="mt-5 flex flex-wrap gap-2">
        {isMember ? (
          <button onClick={leave} disabled={busy} className="btn-secondary">
            Leave challenge
          </button>
        ) : (
          <button onClick={join} disabled={busy} className="btn-primary">
            {busy ? "Joining…" : "Join challenge"}
          </button>
        )}
        <button onClick={share} className="btn-secondary">
          {copied ? "Link copied!" : "Share with friends"}
        </button>
      </div>

      <div className="card mt-6">
        <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Leaderboard</h2>
        {!isMember ? (
          <p className="mt-3 text-sm text-muted">
            Join the challenge to see the board — leaderboards are for members only, and only totals ever show.
          </p>
        ) : rows.length === 0 ? (
          <p className="mt-3 text-sm text-muted">No members yet. Share the link and get your crew in.</p>
        ) : (
          <>
            {myRank >= 0 && (
              <p className="mt-2 text-sm font-semibold text-brand-700">
                You&apos;re #{myRank + 1} of {rows.length} — {metricDisplay(metricValue(rows[myRank], challenge.metric), challenge.metric)} so far.
              </p>
            )}
            <ol className="mt-4 divide-y divide-line">
              {rows.map((r, i) => (
                <li
                  key={r.user_id}
                  className={`flex items-center justify-between py-3 ${r.user_id === myId ? "font-black text-ink" : ""}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 font-display text-2xl tracking-wide text-muted">
                      {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}.`}
                    </span>
                    <span className="text-sm">
                      {r.display_name}
                      {r.user_id === myId ? " (you)" : ""}
                    </span>
                  </span>
                  <span className="text-sm font-bold text-ink">
                    {metricDisplay(metricValue(r, challenge.metric), challenge.metric)}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs text-muted">
              Totals count everything logged between {dateRangeLabel(challenge.starts_on, challenge.ends_on)}. The board
              updates as members log — check back after your next session.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
