export default function FeaturesSection() {
  const features = [
    { icon: "📝", title: "Easy Course Registration", desc: "Simple and fast registration process" },
    { icon: "⏱️", title: "Real-Time Seat Availability", desc: "Check seat availability instantly" },
    { icon: "🔒", title: "Secure Student Login", desc: "Protected with advanced security" },
    { icon: "📱", title: "Mobile-Friendly Experience", desc: "Access from any device" },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose UniReg?</h2>
        <p className="text-center text-gray-600 mb-12">Everything you need for smooth course registration</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}