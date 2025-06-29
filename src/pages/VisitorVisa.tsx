
import { ArrowLeft, Plane, CheckCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VisitorVisa = () => {
  const navigate = useNavigate();

  const services = [
    "Visa Application Assistance",
    "Document Checklist & Preparation",
    "Application Review & Submission",
    "Interview Preparation",
    "Travel Planning Support",
    "Travel Insurance Guidance",
    "Itinerary Planning",
    "Embassy Appointment Booking"
  ];

  const visaTypes = [
    { type: "Tourist Visa", duration: "1-6 months", description: "For leisure travel and sightseeing" },
    { type: "Business Visa", duration: "1-12 months", description: "For business meetings and conferences" },
    { type: "Transit Visa", duration: "1-3 days", description: "For connecting flights and short layovers" },
    { type: "Medical Visa", duration: "1-6 months", description: "For medical treatment abroad" }
  ];

  const countries = [
    "USA", "Canada", "UK", "Australia", "Schengen Area", "UAE", "Singapore", "Japan", "South Korea", "Thailand"
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
              <Plane className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Visitor Visa Assistance</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make your travel dreams come true with our comprehensive visitor visa services. We handle the paperwork so you can focus on planning your perfect trip.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services Include</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Visa Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Processing</h3>
                    <p className="text-gray-600">Quick turnaround times with efficient document processing and submission.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Coverage</h3>
                    <p className="text-gray-600">Visa services for over 50 countries worldwide with expert knowledge of requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Visa Types We Handle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visaTypes.map((visa, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{visa.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-blue-600 font-medium">Duration: {visa.duration}</p>
                      <p className="text-sm text-gray-600">{visa.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Popular Destinations</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {countries.map((country, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <span className="font-medium text-gray-900">{country}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Travel?</h2>
            <p className="text-gray-600 mb-8">Let us handle your visa requirements while you plan your adventure!</p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => navigate('/#contact')}
            >
              Get Visa Assistance
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VisitorVisa;
