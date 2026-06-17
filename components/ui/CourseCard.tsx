interface CourseCardProps {
  title: string;
  instructor: string;
  price: string;
  rating: number;
  students: number;
  image: string;
}

export default function CourseCard({ title, instructor, price, rating, students, image }: CourseCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden hover:border-blue-500 hover:scale-105 transition-all duration-300">
      <div className="h-56 flex items-center justify-center text-8xl bg-gradient-to-br from-slate-800 to-slate-700">
        {image}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 line-clamp-2">{title}</h3>
        <p className="text-slate-400 text-sm mb-4">{instructor}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-400">{price}</span>
          <div className="text-right">
            <span className="text-yellow-400">⭐ {rating}</span>
            <p className="text-xs text-slate-500">{students.toLocaleString()} students</p>
          </div>
        </div>
      </div>
    </div>
  );
}