import type { Metadata } from "next";
import { Suspense } from "react";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Reset your password",
  description: "Set a new password for your Stride account.",
};

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-cream" />}>
      <ResetPasswordForm />
    </Suspense>
  );
}
