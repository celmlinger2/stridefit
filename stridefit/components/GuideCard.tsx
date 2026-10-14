import Link from "next/link";
import type { Guide } from "@/lib/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={guide.href}
      className="card group flex flex-col overflow-hidden !p-0 transition hover:border-brand-500/40"
    >
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={guide.image}
          alt=""
          className="aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy-800/90 px-3 py-1 text-xs font-bold text-white">
          {guide.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-3xl uppercase leading-none tracking-wide text-ink group-hover:text-brand-600">
          {guide.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{guide.copy}</p>
        <p className="mt-3 text-xs text-muted">
          {guide.published} · {guide.readMinutes} min read
        </p>
        <p className="mt-3 text-sm font-bold text-brand-600">
          Read the guide <span aria-hidden="true">→</span>
        </p>
      </div>
    </Link>
  );
}
