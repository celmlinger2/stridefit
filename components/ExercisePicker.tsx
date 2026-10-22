"use client";

import { useMemo, useRef, useState } from "react";
import { EXERCISES, type Exercise } from "@/lib/workout-of-the-day";
import { exerciseSlug } from "@/lib/exercise-videos";

const BY_SLUG = new Map(EXERCISES.map((e) => [exerciseSlug(e.name), e]));

export function libraryMatch(name: string): Exercise | undefined {
  return BY_SLUG.get(exerciseSlug(name.trim()));
}

/**
 * Search-and-pick exercise selector. Users can only choose exercises that
 * exist in the Stride library — free-text exercise names are not allowed,
 * so every logged exercise can carry its form video and defaults.
 */
export default function ExercisePicker({
  value,
  onSelect,
  onClear,
  index,
}: {
  value: string;
  onSelect: (ex: Exercise) => void;
  onClear: () => void;
  index: number;
}) {
  const selected = value ? libraryMatch(value) : undefined;
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return EXERCISES.slice(0, 8);
    return EXERCISES.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.focus.toLowerCase().includes(q) ||
        e.equipment.some((eq) => eq.replace("-", " ").includes(q))
    ).slice(0, 8);
  }, [query]);

  if (selected) {
    return (
      <div className="flex items-center justify-between gap-3 rounded-xl border border-brand-300 bg-brand-50 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate font-semibold text-ink">{selected.name}</p>
          <p className="text-xs text-muted">
            {selected.focus} · {selected.equipment.join(", ").replace(/-/g, " ")} ·{" "}
            {selected.sets} × {selected.reps} {selected.unit}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            onClear();
            setQuery("");
            setOpen(true);
            setTimeout(() => inputRef.current?.focus(), 0);
          }}
          className="shrink-0 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold text-muted hover:text-ink"
        >
          Change
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="field font-semibold"
        placeholder={`Exercise ${index + 1} — search the library (e.g. Squat)`}
        aria-label={`Exercise ${index + 1}: search the exercise library`}
      />
      {open && (
        <ul className="absolute inset-x-0 top-full z-20 mt-1 max-h-72 overflow-auto rounded-xl border border-line bg-white shadow-lg">
          {results.length === 0 && (
            <li className="px-4 py-3 text-sm text-muted">
              No library exercise matches “{query}”. Try “squat”, “row”, or “plank”.
            </li>
          )}
          {results.map((ex) => (
            <li key={ex.name}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onSelect(ex);
                  setOpen(false);
                  setQuery("");
                }}
                className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left hover:bg-brand-50"
              >
                <span>
                  <span className="block text-sm font-semibold text-ink">{ex.name}</span>
                  <span className="block text-xs text-muted">
                    {ex.focus} · {ex.equipment.join(", ").replace(/-/g, " ")}
                  </span>
                </span>
                <span className="shrink-0 font-mono text-xs font-bold text-brand-700">
                  {ex.sets} × {ex.reps} {ex.unit}
                </span>
              </button>
            </li>
          ))}
          {!query && (
            <li className="border-t border-line px-4 py-2 text-xs text-muted">
              Showing a few of {EXERCISES.length} exercises — start typing to search them all.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
