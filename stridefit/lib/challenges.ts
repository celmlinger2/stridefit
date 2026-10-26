import type { ChallengeMetric, LeaderboardRow } from "@/lib/database.types";

export const METRIC_LABEL: Record<ChallengeMetric, string> = {
  workouts: "Most workouts",
  cardio_km: "Most cardio distance",
  active_days: "Most active days",
};

export function metricValue(row: LeaderboardRow, metric: ChallengeMetric): number {
  if (metric === "workouts") return Number(row.workouts);
  if (metric === "active_days") return Number(row.active_days);
  return Number(row.cardio_km);
}

export function metricDisplay(value: number, metric: ChallengeMetric): string {
  if (metric === "cardio_km") {
    const mi = value * 0.621371;
    return `${mi.toFixed(1)} mi (${value.toFixed(1)} km)`;
  }
  if (metric === "workouts") return `${value} workout${value === 1 ? "" : "s"}`;
  return `${value} day${value === 1 ? "" : "s"}`;
}

export function challengeStatus(startsOn: string, endsOn: string): { label: string; live: boolean } {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(startsOn + "T00:00:00");
  const end = new Date(endsOn + "T23:59:59");
  if (today < start) {
    const days = Math.ceil((start.getTime() - today.getTime()) / 86400000);
    return { label: `Starts in ${days} day${days === 1 ? "" : "s"}`, live: false };
  }
  if (today > end) return { label: "Finished", live: false };
  const daysLeft = Math.ceil((end.getTime() - today.getTime()) / 86400000);
  return { label: `Live now · ${daysLeft} day${daysLeft === 1 ? "" : "s"} left`, live: true };
}

export function dateRangeLabel(startsOn: string, endsOn: string): string {
  const f = (d: string) =>
    new Date(d + "T12:00:00").toLocaleDateString(undefined, { month: "short", day: "numeric" });
  return `${f(startsOn)} – ${f(endsOn)}`;
}
