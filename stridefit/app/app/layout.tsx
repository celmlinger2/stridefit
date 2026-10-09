import { redirect } from "next/navigation";
import AppNav from "@/components/AppNav";
import { createClient } from "@/lib/supabase/server";

/**
 * Layout for all /app/* routes. Middleware already redirects unauthenticated
 * users to /login; this double-checks server-side and records health-data
 * consent for OAuth signups that skipped the signup form.
 */
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // OAuth signups bypass the signup form: record consent on first app load.
  const { data: profile } = await supabase
    .from("profiles")
    .select("health_data_consent")
    .eq("id", user.id)
    .single();

  if (profile && !profile.health_data_consent) {
    await supabase
      .from("profiles")
      .update({
        health_data_consent: true,
        health_data_consented_at: new Date().toISOString(),
        display_name:
          (user.user_metadata?.display_name as string | undefined) ??
          (user.user_metadata?.full_name as string | undefined) ??
          null,
      })
      .eq("id", user.id);
  }

  return (
    <div className="min-h-screen bg-cream">
      <AppNav />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
