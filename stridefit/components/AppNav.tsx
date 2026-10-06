"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const links = [
  { href: "/app", label: "Dashboard" },
  { href: "/app/nutrition", label: "Nutrition" },
  { href: "/app/workouts", label: "Workouts" },
  { href: "/app/cardio", label: "Cardio" },
  { href: "/app/wellness", label: "Wellness" },
];

export default function AppNav() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/app" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-lg font-black text-white">
            S
          </span>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            StrideFit
          </span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active =
              l.href === "/app" ? pathname === "/app" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  active
                    ? "bg-brand-100 text-brand-800"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
        <button
          onClick={signOut}
          className="text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          Sign out
        </button>
      </nav>
      {/* Mobile nav */}
      <nav className="flex gap-1 overflow-x-auto border-t border-slate-100 px-4 py-2 md:hidden">
        {links.map((l) => {
          const active =
            l.href === "/app" ? pathname === "/app" : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold ${
                active ? "bg-brand-100 text-brand-800" : "text-slate-600"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
