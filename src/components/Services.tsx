
import { GraduationCap, Plane, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      title: "Overseas Education Services",
      description: "Find the perfect course, university, and country for your goals. From program selection to visa filing, we've got you covered.",
      features: ["University Selection", "Course Guidance", "Application Processing", "Visa Filing Support"],
      route: "/overseas-education"
    },
    {
      icon: <Plane className="h-12 w-12 text-green-600" />,
      title: "Visitor Visa Assistance",
      description: "Plan your next vacation stress-free with our expert visa consultancy services.",
      features: ["Document Preparation", "Application Review", "Interview Preparation", "Travel Planning"],
      route: "/visitor-visa"
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Counseling & Support",
      description: "Personalized guidance at every step, from SOP writing to interview preparation.",
      features: ["SOP Writing", "Interview Coaching", "Profile Assessment", "Career Guidance"],
      route: "/counseling-support"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive resources, expert advice, and a commitment to your success set us apart from the rest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white cursor-pointer group"
              onClick={() => navigate(service.route)}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
