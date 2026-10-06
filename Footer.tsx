import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-extrabold text-slate-900">StrideFit</p>
            <p className="mt-1 max-w-sm text-sm text-slate-600">
              Diet tracking, workouts, and cardio events in one free,
              beginner-friendly place.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-slate-900">Tools</p>
              <Link href="/calculators/tdee" className="text-slate-600 hover:text-brand-700">TDEE calculator</Link>
              <Link href="/calculators/macros" className="text-slate-600 hover:text-brand-700">Macro calculator</Link>
              <Link href="/calculators/pace" className="text-slate-600 hover:text-brand-700">Pace calculator</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-slate-900">Legal</p>
              <Link href="/privacy" className="text-slate-600 hover:text-brand-700">Privacy policy</Link>
              <Link href="/terms" className="text-slate-600 hover:text-brand-700">Terms of service</Link>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">
          StrideFit provides general fitness information only and is not medical
          advice. Consult a qualified professional before changing your diet or
          exercise routine.
        </p>
      </div>
    </footer>
  );
}
