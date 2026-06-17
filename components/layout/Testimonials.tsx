export default function Testimonials() {
  const testimonials = [
    {
      name: "Rashmi Perera",
      role: "Computer Science Student",
      text: "The registration process is so smooth. I registered for all my courses in under 5 minutes!",
      avatar: "👩‍🎓"
    },
    {
      name: "Nipun Silva",
      role: "Business Student",
      text: "Real-time seat availability helped me secure my favorite elective course.",
      avatar: "👨‍🎓"
    },
    {
      name: "Ayesha Fernando",
      role: "Psychology Student",
      text: "Very user-friendly interface. Much better than the old system!",
      avatar: "👩‍🎓"
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Students Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="text-5xl mb-6">{t.avatar}</div>
              <p className="text-gray-700 italic mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}