import React from "react";
import { Zap, BookOpen, Calendar, CheckCircle, BarChart2, ShieldCheck, Users, Monitor, Camera, Computer } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 bg-blue-950/50 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-blue-900/50">
        <Zap className="w-4 h-4" /> AI‑Powered Smart Campus Resource Booking
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
        Smart Campus Resource Booking System
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl mb-8">
        An AI‑Powered platform for efficient campus resource booking and utilization management.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link href="/dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Book a Resource
        </Link>
        <Link href="#features" className="bg-gray-800 text-gray-200 px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
          Learn More
        </Link>
      </div>
    </header>
  );
}
