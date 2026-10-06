import Link from "next/link";

const links = [
  { href: "/calculators/tdee", label: "TDEE Calculator" },
  { href: "/calculators/macros", label: "Macro Calculator" },
  { href: "/calculators/pace", label: "Pace Calculator" },
  { href: "/privacy", label: "Privacy" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-lg font-black text-white">
            S
          </span>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            StrideFit
          </span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-700"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-semibold text-slate-700 hover:text-brand-700"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Get started free
          </Link>
        </div>
      </nav>
    </header>
  );
}
