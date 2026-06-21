"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StatsCard from "@/components/ui/StatsCard";
import TaskTable from "@/components/ui/TaskTable";
import AddTaskForm from "@/components/forms/AddTaskForm";

export default function StudentDashboard() {
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
        router.push("/");
        return;
      }

      // If user is an instructor, redirect them to instructor dashboard
      if (role?.toUpperCase() === "INSTRUCTOR") {
        router.replace("/dashboard/instructor");
        return;
      }

      setUser({
        email: email || "",
        name: name || "Student",
        role: role || "STUDENT",
      });
      setLoading(false);
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
          <span>Loading Student Dashboard...</span>
        </div>
      </div>
    );
  }

  // Sample enrolled courses data
  const enrolledCourses = [
    { id: 1, title: "Introduction to Web Development", instructor: "Dr. Sarah Chen", progress: 72, totalLessons: 24, completedLessons: 17, nextLesson: "CSS Grid Layouts" },
    { id: 2, title: "Data Structures & Algorithms", instructor: "Prof. Michael Lee", progress: 45, totalLessons: 30, completedLessons: 13, nextLesson: "Binary Search Trees" },
    { id: 3, title: "UI/UX Design Fundamentals", instructor: "Emma Rodriguez", progress: 90, totalLessons: 18, completedLessons: 16, nextLesson: "Design Systems" },
    { id: 4, title: "Machine Learning Basics", instructor: "Dr. James Park", progress: 15, totalLessons: 20, completedLessons: 3, nextLesson: "Linear Regression" },
  ];

  // Upcoming deadlines
  const upcomingDeadlines = [
    { id: 1, title: "Web Dev Project Submission", course: "Intro to Web Dev", dueDate: "Jun 22, 2026", urgent: true },
    { id: 2, title: "Algorithm Assignment #5", course: "Data Structures", dueDate: "Jun 25, 2026", urgent: false },
    { id: 3, title: "Design Portfolio Review", course: "UI/UX Design", dueDate: "Jun 28, 2026", urgent: false },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Student Sidebar */}
      <div className="w-64 bg-slate-900 border-r border-slate-700 p-6 flex flex-col">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">🎓</span>
            <h1 className="text-xl font-bold text-blue-400">NextGen Academy</h1>
          </div>
          <span className="text-xs font-medium bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
            Student Portal
          </span>
        </div>

        <nav className="space-y-2 flex-1">
          <a href="/dashboard/student" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800 text-white">
            <span>📊</span> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-slate-400 transition">
            <span>📚</span> My Courses
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-slate-400 transition">
            <span>📝</span> Assignments
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-slate-400 transition">
            <span>📅</span> Schedule
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-slate-400 transition">
            <span>💬</span> Messages
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-slate-400 transition">
            <span>🏆</span> Achievements
          </a>
        </nav>

        {/* User Info at bottom */}
        <div className="border-t border-slate-700 pt-4 mt-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-sm font-bold">
              {user?.name?.charAt(0)?.toUpperCase() || "S"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-200 truncate">{user?.name}</p>
              <p className="text-xs text-slate-500 truncate">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-slate-900 border-b border-slate-700 h-20 px-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-200">Student Dashboard</h2>
            <p className="text-xs text-slate-500">Track your learning journey</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="font-semibold text-slate-200">{user?.name}</p>
              <p className="text-xs text-slate-400 font-mono">{user?.email} • {user?.role}</p>
            </div>
            <button
              id="student-logout"
              onClick={handleLogout}
              className="bg-red-600/20 hover:bg-red-600 border border-red-500/30 text-red-200 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </header>

        {/* Dashboard contents */}
        <main className="flex-1 p-8 overflow-y-auto space-y-8 max-w-7xl w-full mx-auto">
          {/* Welcome Section */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Welcome back, {user?.name?.split(" ")[0]}! 👋
            </h1>
            <p className="text-slate-400 mt-2">Continue where you left off. You have {upcomingDeadlines.length} upcoming deadlines.</p>
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard title="Enrolled Courses" value={String(enrolledCourses.length)} change="+1" color="blue" />
            <StatsCard title="Completed Lessons" value="49" change="+8" color="green" />
            <StatsCard title="Pending Assignments" value={String(upcomingDeadlines.length)} change="+1" color="yellow" />
            <StatsCard title="Learning Hours" value="142 hrs" change="+12" color="green" />
          </div>

          {/* Enrolled Courses */}
          <div>
            <h2 className="text-2xl font-bold text-slate-200 mb-4">📚 My Enrolled Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-white group-hover:text-blue-300 transition">{course.title}</h3>
                      <p className="text-sm text-slate-400 mt-1">by {course.instructor}</p>
                    </div>
                    <span className="text-sm font-bold text-blue-400">{course.progress}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800 rounded-full h-2.5 mb-3">
                    <div
                      className="h-2.5 rounded-full transition-all duration-500"
                      style={{
                        width: `${course.progress}%`,
                        background: course.progress >= 80
                          ? "linear-gradient(90deg, #22c55e, #4ade80)"
                          : course.progress >= 40
                          ? "linear-gradient(90deg, #3b82f6, #60a5fa)"
                          : "linear-gradient(90deg, #f59e0b, #fbbf24)",
                      }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">{course.completedLessons}/{course.totalLessons} lessons</span>
                    <span className="text-slate-400">Next: <span className="text-slate-300">{course.nextLesson}</span></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two-Column: Deadlines + Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Deadlines */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-2xl font-bold text-slate-200">⏰ Upcoming Deadlines</h2>
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline) => (
                  <div
                    key={deadline.id}
                    className={`bg-slate-900 border rounded-xl p-4 ${
                      deadline.urgent ? "border-red-500/40" : "border-slate-700"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-white text-sm">{deadline.title}</p>
                        <p className="text-xs text-slate-500 mt-1">{deadline.course}</p>
                      </div>
                      {deadline.urgent && (
                        <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-medium">
                          Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-2">📅 Due: {deadline.dueDate}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Task Table + Quick Actions */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-slate-200">📋 Current Assignments & Tasks</h2>
              <TaskTable />
              <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-slate-300">Request Help / Submit Task</h3>
                <AddTaskForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
