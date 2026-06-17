export default function PopularCourses() {
  const courses = [
    { name: "Data Structures & Algorithms", dept: "Computer Science", credits: 4, image: "💻" },
    { name: "Introduction to Psychology", dept: "Social Sciences", credits: 3, image: "🧠" },
    { name: "Business Management", dept: "Management", credits: 3, image: "📊" },
    { name: "Digital Marketing", dept: "Marketing", credits: 4, image: "📱" },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Courses</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-7xl">
                {course.image}
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{course.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.dept} • {course.credits} Credits</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-2xl hover:bg-blue-700 transition font-medium">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}