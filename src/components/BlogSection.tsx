
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Top 5 Countries for Higher Education in 2025",
      excerpt: "Discover the best destinations for international students with excellent education systems, job opportunities, and quality of life.",
      date: "December 20, 2024",
      category: "Education",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "How to Ace Your Visa Interview",
      excerpt: "Essential tips and strategies to confidently navigate your visa interview and increase your chances of approval.",
      date: "December 18, 2024",
      category: "Visa Tips",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "A Guide to Writing the Perfect SOP",
      excerpt: "Learn how to craft a compelling Statement of Purpose that showcases your goals and convinces admission committees.",
      date: "December 15, 2024",
      category: "Application Tips",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Informed</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            Latest insights and tips for your international journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
