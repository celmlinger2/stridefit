"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AccountPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    setEmail(user.email ?? "");
    const { data } = await supabase.from("profiles").select("display_name").eq("id", user.id).single();
    if (data) setDisplayName((data.display_name as string) ?? "");
  }, [supabase]);

  useEffect(() => {
    load();
  }, [load]);

  async function saveProfile(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSaved(false);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase
      .from("profiles")
      .update({ display_name: displayName.trim() || null })
      .eq("id", user.id);
    setSaving(false);
    if (error) setError(error.message);
    else {
      setSaved(true);
      router.refresh();
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  async function exportData() {
    setExporting(true);
    setError(null);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      const tables = ["profiles", "food_logs", "workout_logs", "workout_templates", "cardio_logs", "events"];
      const dump: Record<string, unknown> = { exported_at: new Date().toISOString(), user_id: user.id };
      for (const t of tables) {
        const q =
          t === "profiles"
            ? supabase.from(t).select("*").eq("id", user.id)
            : supabase.from(t).select("*").eq("user_id", user.id);
        const { data, error } = await q;
        if (error) throw error;
        dump[t] = data;
      }
      const blob = new Blob([JSON.stringify(dump, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `stride-export-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Export failed.");
    }
    setExporting(false);
  }

  async function deleteAllData() {
    setDeleting(true);
    setError(null);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      for (const t of ["food_logs", "workout_logs", "workout_templates", "cardio_logs", "events"]) {
        const { error } = await supabase.from(t).delete().eq("user_id", user.id);
        if (error) throw error;
      }
      setConfirmDelete(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed.");
    }
    setDeleting(false);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <p className="eyebrow">Your account</p>
      <h1 className="mt-2 font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink">
        Account<span className="text-brand-500">.</span>
      </h1>
      <p className="mt-2 text-muted">Profile, data, and sign-out.</p>

      {error && <p className="error-text mt-6">{error}</p>}

      {/* Profile */}
      <div className="card mt-8">
        <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Profile</h2>
        <form onSubmit={saveProfile} className="mt-4 space-y-4">
          <div>
            <label className="label">Email</label>
            <input value={email} disabled className="field opacity-60" />
          </div>
          <div>
            <label className="label" htmlFor="displayName">
              Display name
            </label>
            <input
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="field"
              placeholder="What should we call you?"
            />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" disabled={saving} className="btn-primary">
              {saving ? "Saving…" : "Save changes"}
            </button>
            {saved && <p className="text-sm font-semibold text-green-700">Saved.</p>}
          </div>
        </form>
      </div>

      {/* Data */}
      <div className="card mt-6">
        <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Your data</h2>
        <p className="mt-1 text-sm text-muted">
          Everything you log is yours. Export it anytime, or wipe it clean.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button onClick={exportData} disabled={exporting} className="btn-secondary">
            {exporting ? "Exporting…" : "Export my data (JSON)"}
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-bold text-red-800">Danger zone</p>
          {!confirmDelete ? (
            <>
              <p className="mt-1 text-sm text-red-700">
                Permanently delete all logged meals, workouts, cardio, and events. This can&apos;t be undone.
              </p>
              <button
                onClick={() => setConfirmDelete(true)}
                className="mt-3 rounded-full border border-red-300 bg-white px-5 py-2.5 text-sm font-bold text-red-700 transition hover:bg-red-100"
              >
                Delete all my data
              </button>
            </>
          ) : (
            <>
              <p className="mt-1 text-sm font-semibold text-red-800">
                Are you sure? This permanently erases everything you&apos;ve logged.
              </p>
              <div className="mt-3 flex gap-3">
                <button
                  onClick={deleteAllData}
                  disabled={deleting}
                  className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-700 disabled:opacity-50"
                >
                  {deleting ? "Deleting…" : "Yes, delete everything"}
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink"
                >
                  Keep my data
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Sign out */}
      <div className="card mt-6">
        <h2 className="font-display text-3xl uppercase tracking-wide text-ink">Sign out</h2>
        <p className="mt-1 text-sm text-muted">See you soon — your streak will be waiting.</p>
        <button onClick={signOut} className="btn-secondary mt-4">
          Sign out
        </button>
      </div>
    </div>
  );
}
