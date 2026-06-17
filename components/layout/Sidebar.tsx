export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-700 p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-blue-500">Kavindi</h1>
      </div>

      <nav className="space-y-2">
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800 text-white">
          Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
          Tasks
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
          Projects
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
          API Test
        </a>
      </nav>
    </div>
  );
}