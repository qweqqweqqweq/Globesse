
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Dreams into Reality with{" "}
            <span className="text-blue-600">GlobeEase</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
            Your Trusted Partner in Overseas Education and Immigration
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
            From counseling to visa approval, we handle every step of your journey with unmatched expertise and care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              onClick={() => navigate('/contact')} 
            >
              Book Your Free Consultation
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Successful Visa Applications</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700">Partner Universities</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-700">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
