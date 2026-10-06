import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of StrideFit.",
};

const sections = [
  {
    heading: "The service",
    body: "StrideFit provides fitness and wellness tracking tools: nutrition logging, workout planning, cardio activity logging, event tracking, and wellness content. The service is currently free to use.",
  },
  {
    heading: "Your account",
    body: "You are responsible for maintaining the confidentiality of your login credentials and for activity under your account. You must provide accurate information when creating an account.",
  },
  {
    heading: "Acceptable use",
    body: "You agree not to misuse the service, attempt to access other users' data, upload malicious content, or interfere with the operation of the platform.",
  },
  {
    heading: "Health disclaimer",
    body: "StrideFit provides general fitness information only. It is not medical advice, diagnosis, or treatment. Consult a qualified health professional before beginning or changing any diet or exercise program. Use of the service is at your own risk.",
  },
  {
    heading: "Your data",
    body: "You retain ownership of the data you log. You grant StrideFit a license to store and process it to operate the service, as described in the Privacy Policy. You may export or delete your data at any time.",
  },
  {
    heading: "Limitation of liability",
    body: "To the maximum extent permitted by law, StrideFit is provided 'as is' without warranties, and our liability is limited. [Have an attorney tailor this section to your jurisdiction.]",
  },
  {
    heading: "Changes",
    body: "We may update these terms; material changes will be communicated before they take effect. Continued use after changes take effect constitutes acceptance.",
  },
  {
    heading: "Contact",
    body: "[Contact email and business address to be added before launch.]",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="rounded-2xl bg-amber-50 p-4 text-sm font-medium text-amber-900">
          <strong>Draft for legal review.</strong> This is a starting template —
          have a qualified attorney review and finalize it before launch,
          especially the bracketed items.
        </p>
        <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-900">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: [date]</p>
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold text-slate-900">{s.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 rounded-2xl bg-slate-100 p-4 text-xs leading-relaxed text-slate-600">
          <strong>Not medical advice:</strong> StrideFit provides general fitness
          information only and is not a substitute for professional medical
          advice, diagnosis, or treatment.
        </p>
      </main>
      <Footer />
    </div>
  );
}
