import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";
import PaceCalculator from "@/components/calculators/PaceCalculator";

export const metadata: Metadata = {
  title: "Pace Calculator — Running Pace & Race Time Predictor",
  description:
    "Free running pace calculator: convert race times to training paces per km or mile, or predict your finish time from a target pace.",
};

export default function PacePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Pace Calculator
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          Whether you&apos;re training for your first 5K or chasing a marathon
          PR, pace is the language of running. Enter a recent race time to see
          your pace per kilometer and per mile — or flip it around and predict
          a finish time from the pace you want to hold.
        </p>

        <div className="mt-8">
          <PaceCalculator />
        </div>

        <div className="mt-12 space-y-4 text-sm leading-relaxed text-slate-600">
          <h2 className="text-xl font-bold text-slate-900">Common race distances</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>5K — 5 km (3.1 miles)</li>
            <li>10K — 10 km (6.2 miles)</li>
            <li>Half marathon — 21.1 km (13.1 miles)</li>
            <li>Marathon — 42.2 km (26.2 miles)</li>
          </ul>
          <h2 className="text-xl font-bold text-slate-900">Put your pace to work</h2>
          <p>
            Log every run in StrideFit&apos;s free cardio tracker, import GPX or
            TCX files from your watch, and watch your average pace trend down
            over your training block.
          </p>
        </div>

        <div className="mt-12">
          <EmailCapture
            heading="Train smarter, for free"
            subheading="Join StrideFit and log every run, walk, and cardio session."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
