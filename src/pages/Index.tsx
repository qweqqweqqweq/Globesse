
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <SuccessStories />
      <WhyChooseUs />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
