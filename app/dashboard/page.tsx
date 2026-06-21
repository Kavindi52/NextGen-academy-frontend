"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * /dashboard acts as a redirect hub.
 * It reads the stored role and sends the user to the correct role-specific dashboard.
 */
export default function DashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        router.replace("/");
        return;
      }

      const role = (localStorage.getItem("userRole") || "").toUpperCase();

      if (role === "INSTRUCTOR") {
        router.replace("/dashboard/instructor");
      } else {
        // Default to student dashboard (covers STUDENT, ADMIN, and unknown roles)
        router.replace("/dashboard/student");
      }
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-xl">
      <div className="flex flex-col items-center gap-4">
        <span className="animate-spin inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></span>
        <span>Redirecting to your dashboard…</span>
      </div>
    </div>
  );
}
