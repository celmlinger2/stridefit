import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How StrideFit collects, uses, and protects your data.",
};

const sections = [
  {
    heading: "Information we collect",
    body: "Account information (email, display name), and health and fitness data you choose to log: meals and nutrition, workouts, cardio activities, and events. We collect only what the features you use require.",
  },
  {
    heading: "How we use your information",
    body: "To operate the service: display your dashboard, track progress toward your goals, and personalize targets. We do not sell your personal or health data.",
  },
  {
    heading: "Health data consent",
    body: "By creating an account you explicitly consent to the collection and storage of the health and fitness data described above. You may withdraw consent by deleting your account, which deletes your data.",
  },
  {
    heading: "Your rights: export and deletion",
    body: "You can request a copy of your data or delete your account and all associated data at any time. [Contact method to be added before launch.]",
  },
  {
    heading: "Data security",
    body: "Data is transmitted over encrypted connections and stored with access controls so that users can only access their own records. No system is perfectly secure; we work to keep improving ours.",
  },
  {
    heading: "Third-party services",
    body: "We use infrastructure providers (hosting, database, authentication, email) to operate StrideFit. Each processes data only as needed to provide their service. [Provider list to be added before launch.]",
  },
  {
    heading: "Children",
    body: "StrideFit is not directed at children under 13, and we do not knowingly collect their data.",
  },
  {
    heading: "Changes to this policy",
    body: "We will notify users of material changes before they take effect. [Effective date and contact email to be added before launch.]",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="rounded-2xl bg-amber-50 p-4 text-sm font-medium text-amber-900">
          <strong>Draft for legal review.</strong> This is a starting template —
          have a qualified attorney review and finalize it before launch,
          especially the bracketed items.
        </p>
        <h1 className="mt-6 text-3xl font-black tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: [date]</p>
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold text-ink">{s.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 rounded-2xl bg-slate-100 p-4 text-xs leading-relaxed text-muted">
          <strong>Not medical advice:</strong> StrideFit provides general fitness
          information only and is not a substitute for professional medical
          advice, diagnosis, or treatment.
        </p>
      </main>
      <Footer />
    </div>
  );
}
