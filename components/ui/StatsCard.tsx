interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  color: "blue" | "yellow" | "green" | "red";
}

export default function StatsCard({ title, value, change, color }: StatsCardProps) {
  const colorClasses = {
    blue: "text-blue-500",
    yellow: "text-yellow-500",
    green: "text-green-500",
    red: "text-red-500",
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all">
      <p className="text-slate-400 text-sm">{title}</p>
      <p className="text-4xl font-bold mt-4 text-white">{value}</p>
      <p className={`text-sm mt-2 ${colorClasses[color]}`}>{change} from last week</p>
    </div>
  );
}