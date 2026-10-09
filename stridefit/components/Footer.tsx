import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/">
              <Logo dark markClassName="h-8 w-8" textClassName="text-2xl" />
            </Link>
            <p className="mt-3 max-w-sm text-sm text-cream/70">
              Diet tracking, workouts, and cardio events in one free,
              beginner-friendly place.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-400">Tools</p>
              <Link href="/calculators/tdee" className="text-cream/70 hover:text-white">TDEE calculator</Link>
              <Link href="/calculators/macros" className="text-cream/70 hover:text-white">Macro calculator</Link>
              <Link href="/calculators/pace" className="text-cream/70 hover:text-white">Pace calculator</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-400">Legal</p>
              <Link href="/privacy" className="text-cream/70 hover:text-white">Privacy policy</Link>
              <Link href="/terms" className="text-cream/70 hover:text-white">Terms of service</Link>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-cream/15 pt-6 text-xs text-cream/60">
          Stride provides general fitness information only and is not medical
          advice. Consult a qualified professional before changing your diet or
          exercise routine.
        </p>
      </div>
    </footer>
  );
}
