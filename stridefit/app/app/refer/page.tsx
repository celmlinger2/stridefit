"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ReferPage() {
  const supabase = createClient();
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function build() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      const base = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;
      setLink(`${base}/signup?ref=${user.id.slice(0, 8)}`);
    }
    build();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Stride",
          text: "I'm tracking my fitness with Stride — it's free. Join me:",
          url: link,
        });
      } catch {
        /* dismissed */
      }
    } else {
      copy();
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <p className="eyebrow">Spread the word</p>
      <h1 className="mt-2 font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink">
        Refer a friend<span className="text-brand-500">.</span>
      </h1>
      <p className="mt-2 text-muted">
        Fitness is better together. Invite someone to train with you — Stride is free for everyone.
      </p>

      <div className="card mt-8 text-center">
        <p className="eyebrow">Your invite link</p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input value={link} readOnly className="field text-center sm:text-left" placeholder="Generating…" />
          <button onClick={copy} className="btn-secondary shrink-0">
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
        <button onClick={share} className="btn-primary mt-4 w-full sm:w-auto">
          Share invite
        </button>
        <p className="mx-auto mt-4 max-w-md text-xs text-muted">
          Your link opens the Stride signup page. No limits, no rewards gimmicks — just a free
          training partner for both of you.
        </p>
      </div>
    </div>
  );
}
