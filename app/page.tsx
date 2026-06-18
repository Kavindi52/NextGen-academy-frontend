"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to dashboard if user is already authenticated
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  }, [router]);

  if (showLogin) {
    return <LoginPage onBack={() => setShowLogin(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-slate-700 py-5 px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🚀</span>
          <h1 className="text-3xl font-bold">NextGen Academy</h1>
        </div>
        <div className="flex gap-8 text-lg items-center">
          <a href="#" className="hover:text-blue-400">Courses</a>
          <a href="#" className="hover:text-blue-400">Categories</a>
          <a href="#" className="hover:text-blue-400">My Learning</a>
          <button
            onClick={() => setShowLogin(true)}
            className="bg-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-950 to-slate-950 py-32 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Learn Without Limits
        </h1>
        <p className="text-2xl text-slate-300 max-w-2xl mx-auto">
          Master new skills with world-class courses. Start your learning journey today.
        </p>
        <button 
          onClick={() => setShowLogin(true)}
          className="mt-10 bg-blue-600 text-xl px-12 py-5 rounded-2xl font-semibold hover:bg-blue-700 transition"
        >
          Browse Courses
        </button>
      </div>

      <div className="text-center py-20 text-green-400 text-2xl font-medium">
        ✅ NextGen Academy Custom Home Page is Working!
      </div>
    </div>
  );
}

function LoginPage({ onBack }: { onBack: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/api/auth/login", { email, password });
      
      // Save details to localStorage for session persistence
      if (typeof window !== "undefined") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("userName", response.data.fullName);
        localStorage.setItem("userRole", response.data.role);
      }

      // Redirect user to dashboard
      router.push("/dashboard");
    } catch (err: any) {
      console.error("Login failure:", err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Unable to connect to server. Ensure your backend is running at http://localhost:8080.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-slate-700 py-5 px-8 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-3"
        >
          <span className="text-4xl">🚀</span>
          <h1 className="text-3xl font-bold">NextGen Academy</h1>
        </button>
        <button
          onClick={onBack}
          className="text-lg hover:text-blue-400 transition"
        >
          ← Back to Home
        </button>
      </nav>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-2">Welcome back</h2>
          <p className="text-slate-400 text-center mb-8">
            Log in to continue your learning journey
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-sm text-center">
                ⚠️ {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                disabled={loading}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={loading}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                <input type="checkbox" className="rounded bg-slate-800 border-slate-700 text-blue-500" />
                Remember me
              </label>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Logging In...
                </>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-8">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}