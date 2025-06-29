
import { Users, Award, CheckCircle, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Personalized Guidance",
      description: "We tailor our services to your unique needs and aspirations."
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Expert Team",
      description: "Years of experience and in-depth knowledge ensure accurate and effective solutions."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
      title: "Proven Success",
      description: "A high success rate in securing admissions and visas for our clients."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Transparency",
      description: "No hidden fees, no false promises—just honest and reliable support."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Us Different?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
