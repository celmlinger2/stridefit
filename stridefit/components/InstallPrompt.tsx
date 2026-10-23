"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "stride-install-dismissed";

/**
 * A small, dismissible "install Stride" card. On Chrome/Android it uses
 * the real beforeinstallprompt flow; on iOS Safari (which has no install
 * API) it shows the Share → Add to Home Screen hint. Never shows when
 * already installed (standalone) or after the user dismisses it.
 */
export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<BIPEvent | null>(null);
  const [showIOSHint, setShowIOSHint] = useState(false);
  const [gone, setGone] = useState(true);

  useEffect(() => {
    if (window.localStorage.getItem(DISMISS_KEY)) return;
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // iOS Safari exposes this non-standard flag.
      (window.navigator as unknown as { standalone?: boolean }).standalone;
    if (standalone) return;

    const ua = window.navigator.userAgent;
    const isIOS = /iphone|ipad|ipod/i.test(ua);
    const isSafari = /safari/i.test(ua) && !/chrome|crios|fxios/i.test(ua);
    if (isIOS && isSafari) {
      setShowIOSHint(true);
      setGone(false);
      return;
    }

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BIPEvent);
      setGone(false);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  const dismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setGone(true);
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    const choice = await deferred.userChoice;
    if (choice.outcome === "accepted") setGone(true);
    else dismiss();
  };

  if (gone || (!deferred && !showIOSHint)) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 sm:left-auto sm:w-80">
      <div className="flex items-center gap-3 rounded-2xl bg-navy-900 p-4 shadow-xl ring-1 ring-black/10">
        <Image
          src="/icons/icon-192.png"
          alt=""
          width={40}
          height={40}
          className="rounded-[10px]"
        />
        <div className="min-w-0 flex-1 text-sm text-cream">
          <p className="font-bold">Get the Stride app</p>
          {showIOSHint ? (
            <p className="text-cream/80">
              Tap the Share button, then “Add to Home Screen.”
            </p>
          ) : (
            <p className="text-cream/80">
              Install it on your home screen — no app store needed.
            </p>
          )}
        </div>
        {!showIOSHint && (
          <button
            onClick={install}
            className="shrink-0 rounded-full bg-brand-500 px-4 py-2 text-sm font-bold text-white hover:bg-brand-600"
          >
            Install
          </button>
        )}
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 px-1 text-lg leading-none text-cream/60 hover:text-cream"
        >
          ×
        </button>
      </div>
    </div>
  );
}
