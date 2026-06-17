export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Register for Your Courses with Ease
          </h1>
          <p className="text-xl text-blue-100 mb-10">
            A simple and secure platform for students to browse, register, and manage their university courses anytime, anywhere.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition">
              Browse Courses
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center text-[180px] opacity-90">🎓</div>
      </div>
    </div>
  );
}