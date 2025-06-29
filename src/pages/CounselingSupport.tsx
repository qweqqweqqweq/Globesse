
import { ArrowLeft, Users, CheckCircle, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CounselingSupport = () => {
  const navigate = useNavigate();

  const services = [
    "Personalized Career Counseling",
    "University & Course Selection",
    "Statement of Purpose (SOP) Writing",
    "Letter of Recommendation (LOR) Assistance",
    "Interview Preparation & Mock Sessions",
    "Profile Assessment & Enhancement",
    "Scholarship Guidance",
    "Post-Admission Support"
  ];

  const sopServices = [
    { title: "SOP Writing", description: "Professionally crafted statements that highlight your unique story and goals." },
    { title: "SOP Review", description: "Expert review and feedback on your existing statement of purpose." },
    { title: "SOP Editing", description: "Comprehensive editing to improve clarity, flow, and impact." }
  ];

  const interviewPrep = [
    "Mock Interview Sessions",
    "Common Questions & Answers",
    "Body Language & Presentation",
    "Confidence Building Techniques",
    "Country-Specific Interview Tips",
    "Technical Interview Preparation"
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
              <Users className="h-16 w-16 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Counseling & Support Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized guidance at every step of your journey. From career counseling to interview preparation, we're here to ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Counseling Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Our Counseling Works</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">One-on-One Sessions</h3>
                    <p className="text-gray-600">Personalized attention with dedicated counselors who understand your unique goals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Comprehensive Support</h3>
                    <p className="text-gray-600">From application to visa, we provide end-to-end support for your journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Statement of Purpose (SOP) Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sopServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Interview Preparation</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {interviewPrep.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">Book your personalized counseling session today and take the first step towards your dreams!</p>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => navigate('/#contact')}
            >
              Book Counseling Session
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CounselingSupport;
