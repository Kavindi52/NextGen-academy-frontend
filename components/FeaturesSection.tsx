import React from "react";
import { BookOpen, Zap, Calendar, CheckCircle, BarChart2, ShieldCheck, Users, Monitor, Camera } from "lucide-react";

const features = [
  { icon: <BookOpen className="w-6 h-6 text-blue-500" />, title: "Smart Resource Booking" },
  { icon: <Zap className="w-6 h-6 text-blue-500" />, title: "AI Resource Recommendations" },
  { icon: <Calendar className="w-6 h-6 text-blue-500" />, title: "Real-Time Availability" },
  { icon: <CheckCircle className="w-6 h-6 text-blue-500" />, title: "Conflict Detection" },
  { icon: <BarChart2 className="w-6 h-6 text-blue-500" />, title: "Booking Calendar" },
  { icon: <ShieldCheck className="w-6 h-6 text-blue-500" />, title: "Notifications & Reminders" },
  { icon: <Users className="w-6 h-6 text-blue-500" />, title: "Analytics Dashboard" },
  { icon: <Monitor className="w-6 h-6 text-blue-500" />, title: "Secure Authentication" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-slate-800 rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-lg font-medium text-gray-200">{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
