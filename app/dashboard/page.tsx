"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import StatsCard from "@/components/ui/StatsCard";
import TaskTable from "@/components/ui/TaskTable";
import AddTaskForm from "@/components/forms/AddTaskForm";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string; name: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("userEmail");
      const name = localStorage.getItem("userName");
      const role = localStorage.getItem("userRole");

      if (!token) {
        // User not logged in, redirect to home page
        router.push("/");
      } else {
        setUser({
          email: email || "",
          name: name || "User",
          role: role || "STUDENT",
        });
        setLoading(false);
      }
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      localStorage.removeItem("userRole");
      router.push("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-xl">
        <div className="flex flex-col items-center gap-4">
          <span className="animate-spin inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></span>
          <span>Loading Dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar navigation */}
      <Sidebar />

      {/* Main content workspace */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-slate-900 border-b border-slate-700 h-20 px-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-200">Workspace</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="font-semibold text-slate-200">{user?.name}</p>
              <p className="text-xs text-slate-400 font-mono">{user?.email} • {user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600/20 hover:bg-red-600 border border-red-500/30 text-red-200 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </header>

        {/* Dashboard contents */}
        <main className="flex-1 p-8 overflow-y-auto space-y-8 max-w-7xl w-full mx-auto">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Dashboard Overview
            </h1>
            <p className="text-slate-400 mt-2">Welcome back to NextGen Academy. Track your learning progress and tasks here.</p>
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard title="Completed Courses" value="12" change="+3" color="green" />
            <StatsCard title="Active Courses" value="4" change="0" color="blue" />
            <StatsCard title="Pending Tasks" value="7" change="+2" color="yellow" />
            <StatsCard title="Learning Hours" value="142 hrs" change="+12" color="green" />
          </div>

          {/* Grid Layout for Tasks and Add Task Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Task Table (2/3 width) */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-slate-200">Current Assignments & Tasks</h2>
              <TaskTable />
            </div>

            {/* Quick Actions (1/3 width) */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-200">Quick Actions</h2>
              <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-slate-300">Request Course Extension / Task</h3>
                <AddTaskForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
