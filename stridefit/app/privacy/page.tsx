import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Stride collects, uses, and protects your data.",
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
    body: "You can export a copy of your data or delete your account and all associated data at any time from Settings in the app, or by contacting us at strideadmin@stridefitapp.com.",
  },
  {
    heading: "Data security",
    body: "Data is transmitted over encrypted connections and stored with access controls so that users can only access their own records. No system is perfectly secure; we work to keep improving ours.",
  },
  {
    heading: "Third-party services",
    body: "We use infrastructure providers to operate Stride: Vercel (website hosting), Supabase (database and account authentication), and Google (only if you choose to sign in with Google). Each processes data only as needed to provide their service.",
  },
  {
    heading: "Children",
    body: "Stride is not directed at children under 13, and we do not knowingly collect their data.",
  },
  {
    heading: "Changes to this policy",
    body: "We will notify users of material changes before they take effect. Questions about this policy: strideadmin@stridefitapp.com.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-black tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: October 16, 2026</p>
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold text-ink">{s.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 rounded-2xl bg-slate-100 p-4 text-xs leading-relaxed text-muted">
          <strong>Not medical advice:</strong> Stride provides general fitness
          information only and is not a substitute for professional medical
          advice, diagnosis, or treatment.
        </p>
      </main>
      <Footer />
    </div>
  );
}
