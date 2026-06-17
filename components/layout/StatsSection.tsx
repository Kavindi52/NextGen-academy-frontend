export default function StatsSection() {
  const stats = [
    { number: "5,000+", label: "Happy Students" },
    { number: "250+", label: "Courses Available" },
    { number: "40+", label: "Departments" },
    { number: "99%", label: "Success Rate" },
  ];

  return (
    <div className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
              <p className="text-blue-200 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}