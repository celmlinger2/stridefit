import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Run ONLY where the session matters: the protected /app/* area and
     * the auth pages (login, signup, reset-password). Public pages
     * (homepage, guides, exercises, calculators) render identically
     * logged in or out, so they skip middleware entirely — a slow
     * Supabase auth check can no longer time out a public page
     * (504 MIDDLEWARE_INVOCATION_TIMEOUT, seen 2026-10-23).
     */
    "/app/:path*",
    "/login",
    "/signup",
    "/reset-password",
  ],
};
