/**
 * Morning readiness — turns a daily check-in (sleep / energy / soreness,
 * each scored 1–5) into a simple readiness level that adapts the
 * Workout of the Day. Shared by the check-in card and the WOD.
 */

export interface CheckinScores {
  sleep: number;
  energy: number;
  soreness: number;
}

export type ReadinessLevel = "low" | "steady" | "high";

export interface Readiness {
  /** 3 (rough day) to 15 (fully charged). */
  score: number;
  level: ReadinessLevel;
  label: string;
  advice: string;
}

export function readinessFromScores(s: CheckinScores): Readiness {
  const score = s.sleep + s.energy + (6 - s.soreness);
  if (score >= 12) {
    return {
      score,
      level: "high",
      label: "Strong day",
      advice: "You're charged up — level-ups are on for today's workout.",
    };
  }
  if (score >= 8) {
    return {
      score,
      level: "steady",
      label: "Steady day",
      advice: "Right in the groove — today's workout runs as prescribed.",
    };
  }
  return {
    score,
    level: "low",
    label: "Lighter day",
    advice:
      "Recovery is training too — today's main sets are trimmed by one. Show up, move easy, keep the streak.",
  };
}
