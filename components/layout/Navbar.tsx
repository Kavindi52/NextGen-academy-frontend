export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">U</div>
          <h1 className="text-2xl font-bold text-gray-900">UniReg</h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">Courses</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 text-gray-700 font-medium hover:bg-gray-100 rounded-xl transition">Login</button>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition">Register</button>
        </div>
      </div>
    </nav>
  );
}