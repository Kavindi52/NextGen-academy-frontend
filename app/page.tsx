"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import {
  BookOpen,
  Zap,
  Calendar,
  CheckCircle,
  BarChart2,
  ShieldCheck,
  Users,
  Monitor,
  Camera,

  Computer,
} from "lucide-react";

type View = "home" | "login" | "signup";

export default function Home() {
  const [view, setView] = useState<View>("home");
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to dashboard if user is already authenticated
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  }, [router]);

  if (view === "login") {
    return <LoginPage onBack={() => setView("home")} onSwitchToSignup={() => setView("signup")} />;
  }

  if (view === "signup") {
    return <SignUpPage onBack={() => setView("home")} onSwitchToLogin={() => setView("login")} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">NextGen Academy</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#courses" className="hover:text-white transition">Courses</a>
            <button onClick={() => setView("login")} className="hover:text-white transition">Login</button>
            <button onClick={() => setView("signup")} className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">Sign Up</button>
          </div>
        </div>
      </nav>

      <header className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-blue-950/50 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-blue-900/50">
          <Zap className="w-4 h-4" /> Powering the next generation of talent
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
          Accelerate your <span className="text-blue-500">learning</span><br /> with industry experts.
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-12">
          Join thousands of students and professionals mastering modern skills through interactive, project-based courses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setView("signup")}
            className="bg-blue-600 text-white text-xl px-12 py-5 rounded-2xl font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Get Started Free
          </button>
          <button
            onClick={() => setView("login")}
            className="border border-slate-600 text-xl px-12 py-5 rounded-2xl font-semibold hover:bg-slate-800 transition cursor-pointer"
          >
            Browse Courses
          </button>
        </div>
      </header>
      <div className="text-center py-20 text-green-400 text-2xl font-medium">
        ✅ NextGen Academy Custom Home Page is Working!
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
//  Login Page
// ─────────────────────────────────────────────────────────
function LoginPage({ onBack, onSwitchToSignup }: { onBack: () => void; onSwitchToSignup: () => void }) {
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
                id="login-email"
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
                id="login-password"
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
              id="login-submit"
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
            <button
              onClick={onSwitchToSignup}
              className="text-blue-400 hover:text-blue-300 transition cursor-pointer font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
//  Sign-Up Page
// ─────────────────────────────────────────────────────────
function SignUpPage({ onBack, onSwitchToLogin }: { onBack: () => void; onSwitchToLogin: () => void }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Client-side validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await api.post("/api/auth/register", {
        fullName,
        email,
        password,
        role,
      });

      setSuccess("Account created successfully! Redirecting to login…");

      // Auto-redirect to login after a short delay
      setTimeout(() => {
        onSwitchToLogin();
      }, 1500);
    } catch (err: any) {
      console.error("Registration failure:", err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
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

      {/* Sign-Up Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-2">Create your account</h2>
          <p className="text-slate-400 text-center mb-8">
            Join NextGen Academy and start learning today
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-sm text-center">
                ⚠️ {error}
              </div>
            )}
            {success && (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl text-sm text-center">
                ✅ {success}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <input
                id="signup-fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Doe"
                required
                disabled={loading}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                id="signup-email"
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
                id="signup-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                required
                disabled={loading}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <input
                id="signup-confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                required
                disabled={loading}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                I want to join as
              </label>
              <select
                id="signup-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                disabled={loading}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 cursor-pointer"
              >
                <option value="STUDENT">Student</option>
                <option value="INSTRUCTOR">Instructor</option>
              </select>
            </div>

            <button
              id="signup-submit"
              type="submit"
              disabled={loading || !!success}
              className="w-full bg-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Creating Account...
                </>
              ) : success ? (
                "Redirecting…"
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-8">
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              className="text-blue-400 hover:text-blue-300 transition cursor-pointer font-medium"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}