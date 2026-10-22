"use client";

export default function PrintButton({ label = "Print this plan" }: { label?: string }) {
  function handlePrint() {
    // Expand every collapsible week so the full plan prints.
    document.querySelectorAll("details").forEach((d) => {
      (d as HTMLDetailsElement).open = true;
    });
    window.print();
  }

  return (
    <button
      onClick={handlePrint}
      className="no-print rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-bold text-ink transition hover:border-brand-500/50 hover:text-brand-600"
    >
      🖨 {label}
    </button>
  );
}
