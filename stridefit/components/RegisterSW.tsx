"use client";

import { useEffect } from "react";

/** Registers the PWA service worker (production only). */
export default function RegisterSW() {
  useEffect(() => {
    if (
      "serviceWorker" in navigator &&
      process.env.NODE_ENV === "production"
    ) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* PWA is an enhancement; never let it break the page. */
      });
    }
  }, []);
  return null;
}
