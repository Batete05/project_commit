import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, Tag, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Top 10 Must-Visit Places in Kigali",
      excerpt: "Discover the hidden gems and popular attractions that make Kigali a must-visit destination for travelers.",
      content: "Kigali, the capital of Rwanda, is a city that beautifully blends modernity with tradition...",
      author: "Ndarehe Team",
      publishedAt: "2024-01-15",
      readTime: "5 min read",
      category: "Travel Tips",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Kigali", "Travel", "Attractions", "City Guide"]
    },
    {
      id: "2",
      title: "Best Time to Visit Rwanda for Gorilla Trekking",
      excerpt: "Plan your perfect gorilla trekking adventure with our comprehensive guide to the best seasons and weather conditions.",
      content: "Gorilla trekking in Rwanda is a once-in-a-lifetime experience that requires careful planning...",
      author: "Wildlife Expert",
      publishedAt: "2024-01-10",
      readTime: "7 min read",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Gorillas", "Wildlife", "Volcanoes National Park", "Trekking"]
    },
    {
      id: "3",
      title: "Traditional Rwandan Cuisine: A Food Lover's Guide",
      excerpt: "Explore the rich flavors and traditional dishes that make Rwandan cuisine unique and delicious.",
      content: "Rwandan cuisine is a reflection of the country's agricultural heritage and cultural diversity...",
      author: "Food Blogger",
      publishedAt: "2024-01-08",
      readTime: "6 min read",
      category: "Food & Culture",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Food", "Culture", "Traditional", "Cuisine"]
    },
    {
      id: "4",
      title: "Budget Travel in Rwanda: How to Explore on a Shoestring",
      excerpt: "Discover how to experience the best of Rwanda without breaking the bank with our budget travel tips.",
      content: "Rwanda offers incredible experiences for travelers on any budget. Here's how to make the most of your money...",
      author: "Budget Traveler",
      publishedAt: "2024-01-05",
      readTime: "8 min read",
      category: "Travel Tips",
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Budget", "Travel", "Tips", "Affordable"]
    },
    {
      id: "5",
      title: "Cultural Experiences: Immersing Yourself in Rwandan Traditions",
      excerpt: "Learn about the rich cultural heritage of Rwanda and how to respectfully engage with local traditions.",
      content: "Rwanda's cultural heritage is as diverse as its landscape, offering visitors unique opportunities to connect...",
      author: "Cultural Guide",
      publishedAt: "2024-01-03",
      readTime: "6 min read",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Culture", "Traditions", "Heritage", "Local Life"]
    },
    {
      id: "6",
      title: "Safety Tips for Traveling in Rwanda",
      excerpt: "Essential safety information and travel advice to ensure a secure and enjoyable trip to Rwanda.",
      content: "Rwanda is one of the safest countries in Africa, but it's always important to be prepared...",
      author: "Travel Safety Expert",
      publishedAt: "2024-01-01",
      readTime: "4 min read",
      category: "Travel Tips",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Safety", "Travel", "Tips", "Security"]
    }
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "Travel Tips", name: "Travel Tips" },
    { id: "Wildlife", name: "Wildlife" },
    { id: "Food & Culture", name: "Food & Culture" },
    { id: "Culture", name: "Culture" }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog & Travel Tips</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the best of Rwanda through our curated articles, travel tips, and local insights
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{filteredPosts[0].category}</Badge>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{filteredPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{filteredPosts[0].title}</h3>
                  <p className="text-muted-foreground mb-4">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {filteredPosts[0].author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(filteredPosts[0].publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <Button>
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/80 mb-6">
                Get the latest travel tips and updates delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-white text-black"
                />
                <Button variant="secondary">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;