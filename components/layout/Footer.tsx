export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">U</div>
            <h3 className="text-2xl font-bold text-white">UniReg</h3>
          </div>
          <p className="text-sm">Simplifying university course registration for students.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Browse Courses</a></li>
            <li><a href="#" className="hover:text-white">My Schedule</a></li>
            <li><a href="#" className="hover:text-white">Academic Calendar</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>support@unireg.edu</li>
            <li>+94 11 234 5678</li>
            <li>Colombo, Sri Lanka</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
            <span>🔗</span>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-16 border-t border-gray-800 pt-8">
        © 2026 SmartCampus Hub • All Rights Reserved
      </div>
    </footer>
  );
}