import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "StrideFit — Diet Tracking, Workouts & Cardio in One Free App",
    template: "%s | StrideFit",
  },
  description:
    "StrideFit is the free, beginner-friendly fitness and wellness app. Track nutrition, build workouts, log runs and cardio events, and stay motivated.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://stridefitapp.com"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
