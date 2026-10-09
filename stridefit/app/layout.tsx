import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Stride — Diet Tracking, Workouts & Cardio in One Free App",
    template: "%s | Stride",
  },
  description:
    "Stride is the free, beginner-friendly fitness and wellness app. Track nutrition, build workouts, log runs and cardio events, and stay motivated.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://stridefitapp.com"
  ),
};

export const viewport: Viewport = {
  themeColor: "#EF7143",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
