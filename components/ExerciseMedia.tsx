"use client";

import { useEffect } from "react";
import { exerciseMedia } from "@/lib/exercise-videos";

export function WatchButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-navy-900 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-navy-800"
      aria-label="Watch exercise tutorial"
    >
      <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
        <path d="M0 0 L10 6 L0 12 Z" />
      </svg>
      Watch
    </button>
  );
}

export default function ExerciseMediaModal({
  name,
  instructions,
  onClose,
}: {
  name: string;
  instructions?: string;
  onClose: () => void;
}) {
  const media = exerciseMedia(name);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${name} tutorial`}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-3xl bg-card shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-6 pt-5">
          <div>
            <h3 className="font-display text-3xl uppercase tracking-wide text-ink">{name}</h3>
            {instructions && <p className="mt-1 text-sm text-muted">{instructions}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand text-lg font-bold text-ink hover:bg-line"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-6 pt-4">
          {media.kind === "video" ? (
            <video
              src={media.src}
              poster={media.poster}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="aspect-video w-full rounded-2xl bg-navy-950 object-contain"
            />
          ) : (
            <>
              <div className="grid grid-cols-3 gap-3">
                {media.images.map((img) => (
                  <figure key={img.label}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={`${name} — ${img.label.toLowerCase()} position`}
                      className="aspect-[4/5] w-full rounded-2xl bg-cream object-cover"
                    />
                    <figcaption className="mt-1.5 text-center font-mono text-xs font-bold uppercase tracking-wide text-muted">
                      {img.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-3 text-center text-xs text-muted">
                Step-by-step breakdown — follow the positions left to right.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
