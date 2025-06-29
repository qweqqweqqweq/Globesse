
import { ArrowLeft, GraduationCap, CheckCircle, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OverseasEducation = () => {
  const navigate = useNavigate();

  const features = [
    "University Selection & Guidance",
    "Course Recommendation",
    "Application Processing",
    "Visa Filing Support",
    "Document Preparation",
    "Interview Preparation",
    "Pre-departure Orientation",
    "Scholarship Assistance"
  ];

  const countries = [
    { name: "Canada", universities: "100+ Partner Universities", programs: "500+ Programs" },
    { name: "Australia", universities: "80+ Partner Universities", programs: "400+ Programs" },
    { name: "UK", universities: "60+ Partner Universities", programs: "300+ Programs" },
    { name: "USA", universities: "120+ Partner Universities", programs: "600+ Programs" },
    { name: "Germany", universities: "40+ Partner Universities", programs: "200+ Programs" },
    { name: "New Zealand", universities: "30+ Partner Universities", programs: "150+ Programs" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Overseas Education Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your gateway to world-class education. We help you find the perfect course, university, and country that aligns with your career goals and aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Education Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Counselors</h3>
                    <p className="text-gray-600">Experienced education consultants with deep knowledge of international education systems.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">High Success Rate</h3>
                    <p className="text-gray-600">95% success rate in university admissions and visa approvals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Study Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{country.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">{country.universities}</p>
                      <p className="text-sm text-gray-600">{country.programs}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-600 mb-8">Book a free consultation with our education experts today!</p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate('/#contact')}
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OverseasEducation;
