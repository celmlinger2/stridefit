/**
 * The daily Stride ring: closes when the user logs anything today
 * (a meal, a workout, or cardio). Shows the current streak, the best
 * streak, and the last 7 days at a glance. Server-rendered.
 */
export default function StreakRing({
  streak,
  longest,
  activeToday,
  last7,
}: {
  streak: number;
  longest: number;
  activeToday: boolean;
  /** Oldest → today; true when anything was logged that day. */
  last7: boolean[];
}) {
  const activeCount = last7.filter(Boolean).length;
  const R = 40;
  const C = 2 * Math.PI * R;
  const frac = activeCount / 7;

  return (
    <div className="card h-full">
      <div className="flex items-center gap-5">
        <div className="relative h-28 w-28 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke="#F6F2EC"
              strokeWidth="11"
            />
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke={activeToday ? "#EF7143" : "#1C2540"}
              strokeWidth="11"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - frac)}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-4xl leading-none text-ink">
              {streak}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              day streak
            </span>
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="font-display text-3xl uppercase tracking-wide text-ink">
            {activeToday ? (
              <>
                Ring closed<span className="text-brand-500">.</span>
              </>
            ) : (
              <>
                Close your ring<span className="text-brand-500">.</span>
              </>
            )}
          </h2>
          <p className="mt-1 text-sm text-muted">
            {activeToday
              ? "You logged something today — the streak is safe. Anything else is a bonus."
              : "Log a meal, a workout, or a walk today to keep the streak alive."}
          </p>
          <p className="mt-2 text-xs font-bold uppercase tracking-wide text-muted">
            Best streak: {longest} {longest === 1 ? "day" : "days"} · Active{" "}
            {activeCount} of the last 7 days
          </p>
          <div className="mt-3 flex gap-1.5">
            {last7.map((on, i) => (
              <span
                key={i}
                title={on ? "Active day" : "No activity logged"}
                className={`h-2.5 w-6 rounded-full ${
                  on
                    ? i === 6
                      ? "bg-brand-500"
                      : "bg-navy-800"
                    : "bg-sand"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
