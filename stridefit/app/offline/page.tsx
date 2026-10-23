import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're offline",
  description: "Stride needs an internet connection for most features.",
};

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <Image
        src="/icons/icon-192.png"
        alt="Stride"
        width={72}
        height={72}
        className="rounded-[18px]"
      />
      <h1 className="mt-6 font-display text-4xl tracking-wide text-navy-900">
        You&apos;re offline
      </h1>
      <p className="mt-3 max-w-sm text-navy-900/70">
        Stride needs a connection to load your workouts, nutrition, and
        plans. Check your signal and try again.
      </p>
      <Link href="/" className="btn-primary mt-6 px-6 py-3">
        Try again
      </Link>
    </main>
  );
}
