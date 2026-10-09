import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { href: "/calculators/tdee", label: "TDEE Calculator" },
  { href: "/calculators/macros", label: "Macro Calculator" },
  { href: "/calculators/pace", label: "Pace Calculator" },
  { href: "/privacy", label: "Privacy" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted hover:text-brand-600"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-semibold text-ink hover:text-brand-600"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-navy-950"
          >
            Get started free
          </Link>
        </div>
      </nav>
    </header>
  );
}
