export default function HowItWorks() {
  const steps = [
    { number: "01", title: "Create an Account", desc: "Sign up with your university email" },
    { number: "02", title: "Browse Available Courses", desc: "Explore courses by department and semester" },
    { number: "03", title: "Register for Courses", desc: "Select and register for your desired courses" },
    { number: "04", title: "Track Your Courses", desc: "Monitor your registered courses and schedule" },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-gray-600 mb-16">Simple 4-step process to register your courses</p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}