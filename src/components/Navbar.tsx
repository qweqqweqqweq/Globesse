
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">GlobeEase</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">Success Stories</button>
              <button onClick={() => navigate('/contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>

          <div className="hidden md:block">
            <Button onClick={() => navigate('/contact')} className="bg-blue-600 hover:bg-blue-700">
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</button>
              <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Success Stories</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</button>
              <Button onClick={() => scrollToSection('contact')} className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
