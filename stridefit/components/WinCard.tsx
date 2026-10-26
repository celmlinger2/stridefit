"use client";

import { useRef, useState } from "react";

/**
 * "My week in Stride" — renders a branded 1080×1350 share card on a
 * canvas and offers download / native share. Stats are computed
 * server-side on the Progress page and passed in.
 */
export default function WinCard({
  workouts,
  miles,
  activeDays,
  weekLabel,
}: {
  workouts: number;
  miles: number;
  activeDays: number;
  weekLabel: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  async function ensureFont(): Promise<boolean> {
    try {
      const css = await (await fetch("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap")).text();
      const url = css.match(/url\((https:[^)]+)\)/)?.[1];
      if (!url) return false;
      const face = new FontFace("BebasCard", `url(${url})`);
      await face.load();
      document.fonts.add(face);
      return true;
    } catch {
      return false;
    }
  }

  async function draw(): Promise<HTMLCanvasElement | null> {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const W = 1080;
    const H = 1350;
    canvas.width = W;
    canvas.height = H;
    const hasFont = await ensureFont();
    const display = hasFont ? "BebasCard" : "Arial Narrow, sans-serif";

    // Background
    ctx.fillStyle = "#FDFAF4";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#1C2540";
    ctx.fillRect(0, 0, W, 300);
    ctx.fillStyle = "#EF7143";
    ctx.fillRect(0, 300, W, 14);

    // Header lockup (on navy)
    const mark = new Image();
    mark.src = "/stride-logo-mark.png";
    await mark.decode().catch(() => undefined);
    ctx.save();
    ctx.beginPath();
    ctx.arc(110, 150, 62, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(mark, 48, 88, 124, 124);
    ctx.restore();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = `120px ${display}`;
    ctx.textBaseline = "middle";
    ctx.fillText("STRIDE", 200, 138);
    const strideW = ctx.measureText("STRIDE").width;
    ctx.fillStyle = "#EF7143";
    ctx.fillText(".", 200 + strideW, 138);
    ctx.fillStyle = "#C7CEDA";
    ctx.font = "600 30px 'Plus Jakarta Sans', Arial, sans-serif";
    ctx.fillText("F I N D   Y O U R   S T R I D E", 204, 232);

    // Eyebrow + week
    ctx.fillStyle = "#EF7143";
    ctx.font = "700 34px 'Plus Jakarta Sans', Arial, sans-serif";
    ctx.fillText("MY WEEK IN STRIDE", 80, 420);
    ctx.fillStyle = "#616875";
    ctx.font = "500 34px 'Plus Jakarta Sans', Arial, sans-serif";
    ctx.fillText(weekLabel, 80, 472);

    // Stats
    const stats: [string, string][] = [
      [String(workouts), workouts === 1 ? "WORKOUT" : "WORKOUTS"],
      [miles.toFixed(1), "MILES OF CARDIO"],
      [String(activeDays), activeDays === 1 ? "ACTIVE DAY" : "ACTIVE DAYS"],
    ];
    let y = 640;
    for (const [value, label] of stats) {
      ctx.fillStyle = "#1C2540";
      ctx.font = `150px ${display}`;
      ctx.fillText(value, 76, y);
      const vw = ctx.measureText(value).width;
      ctx.fillStyle = "#616875";
      ctx.font = "700 32px 'Plus Jakarta Sans', Arial, sans-serif";
      ctx.fillText(label, 76 + vw + 28, y + 34);
      y += 205;
    }

    // Footer
    ctx.fillStyle = "#1C2540";
    ctx.fillRect(0, H - 120, W, 120);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "600 32px 'Plus Jakarta Sans', Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("stridefitapp.com — free fitness tracking", W / 2, H - 58);
    ctx.textAlign = "left";
    return canvas;
  }

  async function download() {
    setBusy(true);
    setNote(null);
    const canvas = await draw();
    setBusy(false);
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "my-week-in-stride.png";
      a.click();
      URL.revokeObjectURL(a.href);
      setNote("Saved — post it anywhere. 🎉");
    }, "image/png");
  }

  async function share() {
    setBusy(true);
    const canvas = await draw();
    setBusy(false);
    if (!canvas) return;
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], "my-week-in-stride.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: "My week in Stride" }).catch(() => undefined);
      } else {
        setNote("Sharing isn't available here — use Download instead.");
      }
    }, "image/png");
  }

  const empty = workouts === 0 && miles === 0 && activeDays === 0;

  return (
    <div>
      <p className="text-sm text-muted">
        {empty
          ? "Log a workout or a run this week and your shareable card appears here."
          : "Turn this week into a card worth posting — your numbers, Stride-branded, ready for Instagram, Pinterest, or anywhere."}
      </p>
      {!empty && (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button onClick={download} disabled={busy} className="btn-primary">
            {busy ? "Making your card…" : "Download my card"}
          </button>
          <button onClick={share} disabled={busy} className="btn-secondary">
            Share
          </button>
          {note && <span className="text-sm font-semibold text-brand-700">{note}</span>}
        </div>
      )}
      <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
    </div>
  );
}
