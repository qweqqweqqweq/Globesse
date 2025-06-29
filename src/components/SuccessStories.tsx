
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Aman Kaur",
      story: "GlobeEase made my dream of studying in Canada come true! Their team was supportive and proactive throughout the process.",
      rating: 5,
      country: "Canada",
      course: "Masters in Computer Science"
    },
    {
      name: "Ravi Sharma",
      story: "The counseling sessions were so insightful, and the team was always just a call away. Highly recommend!",
      rating: 5,
      country: "Australia",
      course: "MBA"
    },
    {
      name: "Priya Patel",
      story: "From documentation to visa approval, everything was handled professionally. I couldn't have asked for better service.",
      rating: 5,
      country: "UK",
      course: "Masters in Data Science"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Happy Clients</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            Here's what our clients have to say about their experience with GlobeEase:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.story}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.course}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.country}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
