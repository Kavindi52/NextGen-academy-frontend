interface CategoryCardProps {
  title: string;
  icon: string;
}

export default function CategoryCard({ title, icon }: CategoryCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-700 hover:border-blue-500 p-8 rounded-3xl text-center transition-all hover:scale-105 cursor-pointer">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}