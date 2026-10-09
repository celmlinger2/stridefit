"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Icon({ d, children }: { d?: string; children?: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      {d ? <path d={d} /> : children}
    </svg>
  );
}

function GearIcon() {
  const spokes = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3.2" />
      {spokes.map((a, i) => (
        <line
          key={i}
          x1={12 + 5.4 * Math.cos(a)}
          y1={12 + 5.4 * Math.sin(a)}
          x2={12 + 8.2 * Math.cos(a)}
          y2={12 + 8.2 * Math.sin(a)}
        />
      ))}
    </svg>
  );
}

const links = [
  { href: "/app", label: "Today", icon: <Icon d="M3 10.5 12 3l9 7.5 M5 9.5V21h14V9.5" /> },
  { href: "/app/workouts", label: "Workouts", icon: <Icon d="M6.5 6.5v11 M17.5 6.5v11 M3.5 9v6 M20.5 9v6 M6.5 12h11" /> },
  { href: "/app/cardio", label: "Cardio", icon: <Icon d="M2 12h4l2.5-6 4 12 2.5-6H22" /> },
  { href: "/app/progress", label: "Progress", icon: <Icon d="M4 20h16 M8 20v-6 M13 20V8 M18 20v-3" /> },
  { href: "/app/nutrition", label: "Nutrition", icon: <Icon d="M4 13h16a8 8 0 0 1-16 0z M9 8l1.5-4 M15 8l-1.5-4" /> },
  { href: "/app/account", label: "Account", icon: <GearIcon /> },
  { href: "/app/refer", label: "Refer a friend", icon: <Icon d="M4 10h16v10H4z M3 6.5h18V10H3z M12 6.5V20 M12 6.5C10 6.5 8.6 5.4 8.6 4c0-1 1-1.6 2-1 1.4.8 1.4 3.5 1.4 3.5z M12 6.5c2 0 3.4-1.1 3.4-2.5 0-1-1-1.6-2-1-1.4.8-1.4 3.5-1.4 3.5z" /> },
];

export default function AppSidebar({
  collapsed,
  onToggle,
  mobileOpen,
  onClose,
  userLabel,
}: {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onClose: () => void;
  userLabel: string;
}) {
  const pathname = usePathname();

  const nav = (onNavigate?: () => void) => (
    <div className="flex h-full flex-col">
      {/* Brand row */}
      <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between"} px-4 pt-5`}>
        <Link href="/app" onClick={onNavigate} className="flex items-center gap-2.5" aria-label="Stride home">
          <img src="/stride-logo-mark.png" alt="Stride logo" className="h-10 w-10" />
          {!collapsed && (
            <span className="leading-none">
              <span className="block font-display text-2xl tracking-wide text-white">
                STRIDE<span className="text-brand-500">.</span>
              </span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-cream/50">
                Find your stride
              </span>
            </span>
          )}
        </Link>
        {!collapsed && (
          <button
            onClick={onToggle}
            aria-label="Collapse sidebar"
            className="hidden rounded-lg p-1.5 text-cream/50 transition hover:bg-white/10 hover:text-white md:block"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M11 17l-5-5 5-5 M18 17l-5-5 5-5" />
            </svg>
          </button>
        )}
      </div>
      {collapsed && (
        <button
          onClick={onToggle}
          aria-label="Expand sidebar"
          className="mx-auto mt-3 hidden rounded-lg p-1.5 text-cream/50 transition hover:bg-white/10 hover:text-white md:block"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M13 17l5-5-5-5 M6 17l5-5-5-5" />
          </svg>
        </button>
      )}

      {/* Section label */}
      {!collapsed && (
        <p className="mt-8 px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-cream/40">
          Your rhythm
        </p>
      )}

      {/* Links */}
      <nav className={`mt-3 flex-1 space-y-1 px-3 ${collapsed ? "md:px-3" : ""}`}>
        {links.map((l) => {
          const active = l.href === "/app" ? pathname === "/app" : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={onNavigate}
              title={collapsed ? l.label : undefined}
              className={`group flex items-center gap-3 rounded-full px-4 py-2.5 text-[15px] font-medium transition ${
                collapsed ? "md:justify-center md:px-0" : ""
              } ${
                active
                  ? "bg-white/10 text-brand-400"
                  : "text-cream/65 hover:bg-white/5 hover:text-white"
              }`}
            >
              {l.icon}
              {!collapsed && <span className="flex-1">{l.label}</span>}
              {!collapsed && active && <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />}
            </Link>
          );
        })}
      </nav>

      {/* User chip */}
      <div className="border-t border-white/10 p-4">
        {!collapsed ? (
          <p className="truncate px-2 text-xs text-cream/50">{userLabel}</p>
        ) : (
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-cream/70">
            {userLabel.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 hidden bg-navy-800 transition-all duration-300 md:block ${
          collapsed ? "w-[76px]" : "w-60"
        }`}
      >
        {nav()}
      </aside>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${mobileOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-navy-950/60 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={onClose}
        />
        <aside
          className={`absolute inset-y-0 left-0 w-72 bg-navy-800 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute right-3 top-5 rounded-lg p-1.5 text-cream/60 hover:bg-white/10 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-5 w-5">
              <path d="M18 6 6 18 M6 6l12 12" />
            </svg>
          </button>
          {nav(onClose)}
        </aside>
      </div>
    </>
  );
}
