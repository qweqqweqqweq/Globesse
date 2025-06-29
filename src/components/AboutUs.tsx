
const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At GlobeEase, we're more than just an immigration service; we are your gateway to endless possibilities. 
              Founded with a passion to make global education and travel accessible, we've assisted countless individuals 
              in turning their dreams into reality.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're a student aspiring to study abroad or an adventurer planning a memorable trip, we are here 
              to simplify the process, ensuring a seamless experience from start to finish.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Our Vision</h4>
                <p className="text-gray-600">
                  To be a globally recognized leader in education and immigration services, empowering individuals 
                  to explore, learn, and grow beyond boundaries.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-900 mb-3">Our Mission</h4>
                <p className="text-gray-600">
                  To provide personalized, reliable, and efficient services that help our clients achieve their 
                  international goals with confidence and ease.
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Professional consultation" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
