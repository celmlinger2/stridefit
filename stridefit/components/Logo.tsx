/**
 * Brand logo lockup: the orange bolt mark from Chris's logo,
 * plus the "STRIDE." wordmark in Bebas Neue.
 * Use dark={true} on dark backgrounds (white text),
 * default navy text on light backgrounds.
 */
export default function Logo({
  dark = false,
  markClassName = "h-9 w-9",
  textClassName = "text-[1.7rem]",
}: {
  dark?: boolean;
  markClassName?: string;
  textClassName?: string;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src="/stride-logo-mark.png"
        alt="Stride logo"
        className={markClassName}
      />
      <span
        className={`font-display ${textClassName} leading-none tracking-wide ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        STRIDE<span className="text-brand-500">.</span>
      </span>
    </span>
  );
}
