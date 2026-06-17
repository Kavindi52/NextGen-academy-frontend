export default function TaskTable() {
  const tasks = [
    { id: 1, title: "Implement User Authentication", status: "IN_PROGRESS", priority: "High" },
    { id: 2, title: "Create Task API", status: "COMPLETED", priority: "Medium" },
    { id: 3, title: "Design Dashboard UI", status: "PENDING", priority: "High" },
    { id: 4, title: "Connect Frontend with Backend", status: "IN_PROGRESS", priority: "High" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead className="border-b border-slate-700">
          <tr>
            <th className="text-left p-5 text-slate-400 font-medium">Task</th>
            <th className="text-left p-5 text-slate-400 font-medium">Status</th>
            <th className="text-left p-5 text-slate-400 font-medium">Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b border-slate-700 hover:bg-slate-800">
              <td className="p-5 font-medium">{task.title}</td>
              <td className="p-5">
                <span className={`px-3 py-1 rounded-full text-xs font-medium
                  ${task.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400' : ''}
                  ${task.status === 'IN_PROGRESS' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                  ${task.status === 'PENDING' ? 'bg-red-500/20 text-red-400' : ''}`}>
                  {task.status}
                </span>
              </td>
              <td className="p-5">
                <span className="text-sm text-slate-400">{task.priority}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}