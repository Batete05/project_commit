import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hotel, Car, MapPin, HelpCircle, Star, Users, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: Hotel,
      title: "Book a Hotel or House",
      description: "Find perfect accommodations from hotels to homestays across Rwanda",
      href: "/book-accommodation",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Car,
      title: "Plan My Airport Pickup",
      description: "Reliable transportation from Kigali International Airport",
      href: "/airport-pickup",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: MapPin,
      title: "Explore City Tours & Nightlife",
      description: "Discover Rwanda's culture, history, and vibrant nightlife",
      href: "/local-experiences",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: HelpCircle,
      title: "Need Help Planning?",
      description: "Get personalized recommendations from local experts",
      href: "/trip-planner",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const stats = [
    { icon: Star, label: "Verified Accommodations", value: "500+" },
    { icon: Users, label: "Happy Travelers", value: "10,000+" },
    { icon: Shield, label: "Secure Bookings", value: "100%" },
    { icon: Clock, label: "24/7 Support", value: "Always" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-primary-foreground/10 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/src/rwanda_main.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Rwanda's
              <span className="block bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Hidden Gems
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Your gateway to authentic Rwandan accommodation and unforgettable local experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/book-accommodation">Book a Hotel or House</Link>
              </Button>
              <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700 transition-all duration-300">
                <Link to="/airport-pickup">Plan My Airport Pickup</Link>
              </Button>
              <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300">
                <Link to="/local-experiences">Explore City Tours & Nightlife</Link>
              </Button>
              <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300">
                <Link to="/trip-planner">Need Help Planning?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What can we help you with?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive services to make your Rwanda experience unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`inline-flex p-4 rounded-full ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <Button asChild className="w-full" variant="outline">
                    <Link to={feature.href}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to explore Rwanda?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the beauty of Rwanda through NDAREHE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/book-accommodation">Book Now</Link>
            </Button>
            <Button asChild size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
