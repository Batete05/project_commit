import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Wifi, Coffee, Car, Users, Home, Mountain, Umbrella, Waves, Check, Loader2, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Type definitions
interface Accommodation {
  id: number;
  name: string;
  type: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
  description: string;
}

interface FilterState {
  type: string;
  location: string;
  priceRange: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}

interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: string;
}

interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const BookAccommodation = () => {
  const [filters, setFilters] = useState<FilterState>({
    type: "",
    location: "",
    priceRange: "",
    checkIn: "",
    checkOut: "",
    guests: "1"
  });

  // Comprehensive list of accommodations in Rwanda
  const accommodations: Accommodation[] = [
    // Hotels
    {
      id: 1,
      name: "Kigali Serena Hotel",
      type: "Hotel",
      location: "Kigali",
      price: 250,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      amenities: ["Wifi", "Breakfast", "Pool", "Spa", "Restaurant"],
      description: "Luxury 5-star hotel in the heart of Kigali with exceptional service"
    },
    {
      id: 2,
      name: "Radisson Blu Kigali",
      type: "Hotel",
      location: "Kigali",
      price: 200,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      amenities: ["Wifi", "Breakfast", "Gym", "Bar", "Conference Rooms"],
      description: "Modern hotel with panoramic city views and excellent amenities"
    },
    
    // Guesthouses
    {
      id: 3,
      name: "Nyamirambo Guesthouse",
      type: "Guesthouse",
      location: "Kigali",
      price: 45,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562",
      amenities: ["Wifi", "Breakfast", "Garden", "Cultural Tours"],
      description: "Authentic Rwandan hospitality in vibrant Nyamirambo district"
    },
    {
      id: 4,
      name: "Discover Rwanda Guesthouse",
      type: "Guesthouse",
      location: "Kigali",
      price: 55,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      amenities: ["Wifi", "Breakfast", "Terrace", "Airport Transfer"],
      description: "Comfortable guesthouse with great city views"
    },
    
    // Villas
    {
      id: 5,
      name: "Lake Kivu Paradise Villa",
      type: "Villa",
      location: "Rubavu",
      price: 350,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      amenities: ["Private Beach", "Kitchen", "Lake View", "Boat Access", "Wifi"],
      description: "Luxury villa with direct lake access and stunning sunsets"
    },
    {
      id: 6,
      name: "Musanze Mountain Villa",
      type: "Villa",
      location: "Musanze",
      price: 280,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      amenities: ["Mountain View", "Fireplace", "Garden", "Wifi", "Parking"],
      description: "Charming villa with breathtaking volcano views"
    },
    
    // Apartments
    {
      id: 7,
      name: "Kigali Heights Apartment",
      type: "Apartment",
      location: "Kigali",
      price: 120,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      amenities: ["Wifi", "Kitchen", "Balcony", "Parking", "Security"],
      description: "Modern apartment with city views and full amenities"
    },
    {
      id: 8,
      name: "Luxury Lake View Apartment",
      type: "Apartment",
      location: "Rubavu",
      price: 180,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      amenities: ["Lake View", "Kitchen", "Wifi", "Pool", "Gym"],
      description: "Spacious apartment with stunning lake views"
    },
    
    // Hostels
    {
      id: 9,
      name: "Backpackers Rwanda",
      type: "Hostel",
      location: "Kigali",
      price: 25,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
      amenities: ["Wifi", "Common Kitchen", "Laundry", "Tour Desk", "Bar"],
      description: "Budget-friendly hostel perfect for backpackers and solo travelers"
    },
    {
      id: 10,
      name: "Mountain View Hostel",
      type: "Hostel",
      location: "Musanze",
      price: 30,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      amenities: ["Mountain View", "Wifi", "Kitchen", "Garden", "Hiking Tours"],
      description: "Cozy hostel with volcano views and hiking access"
    }
  ];

  const amenityIcons: Record<string, React.ComponentType<any>> = {
    Wifi: Wifi,
    Breakfast: Coffee,
    Parking: Car,
    Pool: Waves,
    Spa: Umbrella,
    Restaurant: Coffee,
    Gym: Users,
    Bar: Coffee,
    "Conference Rooms": Users,
    Garden: Home,
    "Cultural Tours": MapPin,
    Terrace: Home,
    "Airport Transfer": Car,
    "Private Beach": Waves,
    Kitchen: Coffee,
    "Lake View": Waves,
    "Boat Access": Waves,
    "Mountain View": Mountain,
    Fireplace: Home,
    Security: Users,
    "Common Kitchen": Coffee,
    Laundry: Users,
    "Tour Desk": MapPin,
    "Hiking Tours": Mountain
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<Accommodation | null>(null);
  const [booking, setBooking] = useState<BookingState>({
    checkIn: "",
    checkOut: "",
    guests: "1"
  });
  const [confirmed, setConfirmed] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showReviews, setShowReviews] = useState(false);
  const { toast } = useToast();
  const [filteredAccommodations, setFilteredAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch accommodations from backend
  useEffect(() => {
    fetchAccommodations();
  }, []);

  const fetchAccommodations = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/accommodations");
      if (response.ok) {
        const data = await response.json();
        setFilteredAccommodations(data.data.accommodations);
      } else {
        // Fallback to mock data if API fails
        setFilteredAccommodations(accommodations);
      }
    } catch (error) {
      console.error("Error fetching accommodations:", error);
      // Fallback to mock data
      setFilteredAccommodations(accommodations);
    } finally {
      setLoading(false);
    }
  };

  // Filter accommodations based on selected filters
  const filterAccommodations = () => {
    let results = filteredAccommodations;
    
    // Filter by type
    if (filters.type) {
      results = results.filter(acc => 
        acc.type.toLowerCase() === filters.type.toLowerCase()
      );
    }
    
    // Filter by location
    if (filters.location) {
      results = results.filter(acc => 
        acc.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    // Filter by price range (if implemented)
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      if (!isNaN(min) && !isNaN(max)) {
        results = results.filter(acc => acc.price >= min && acc.price <= max);
      }
    }
    
    setFilteredAccommodations(results);
  };

  // Apply filters when they change
  useEffect(() => {
    if (!loading) {
      filterAccommodations();
    }
  }, [filters, loading]);

  // Fetch reviews for an accommodation
  const fetchReviews = async (accommodationId: string) => {
    try {
      const response = await fetch(`/api/reviews/service/ACCOMMODATION/${accommodationId}`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data.data.reviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const openModal = (accommodation: Accommodation) => {
    setSelected(accommodation);
    setBooking({ 
      checkIn: filters.checkIn || "", 
      checkOut: filters.checkOut || "", 
      guests: filters.guests 
    });
    setConfirmed(false);
    setModalOpen(true);
    // Fetch reviews for this accommodation
    fetchReviews(accommodation.id.toString());
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast({
          title: "Authentication Required",
          description: "Please log in to book this accommodation",
          variant: "destructive"
        });
        return;
      }

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          serviceType: "ACCOMMODATION",
          serviceId: selected.id.toString(),
          startDate: booking.checkIn,
          endDate: booking.checkOut,
          numberOfPeople: parseInt(booking.guests),
          specialRequests: ""
        }),
      });

      if (response.ok) {
        setConfirmed(true);
        toast({ 
          title: "Booking Confirmed!", 
          description: `Your stay at ${selected.name} is confirmed.` 
        });
      } else {
        throw new Error("Booking failed");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Discover Rwanda's Best Stays</h1>
          <p className="text-muted-foreground">Find the perfect accommodation for your Rwandan adventure</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Search Accommodations</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="type">Accommodation Type</Label>
                <Select 
                  value={filters.type} 
                  onValueChange={(value) => setFilters({...filters, type: value})}
                >
                  <SelectTrigger className="focus:ring-0 focus:ring-offset-0">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hotel">Hotels</SelectItem>
                    <SelectItem value="guesthouse">Guesthouses</SelectItem>
                    <SelectItem value="villa">Villas</SelectItem>
                    <SelectItem value="apartment">Apartments</SelectItem>
                    <SelectItem value="hostel">Hostels</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="location">Location</Label>
                <Select 
                  value={filters.location} 
                  onValueChange={(value) => setFilters({...filters, location: value})}
                >
                  <SelectTrigger className="focus:ring-0 focus:ring-offset-0">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kigali">Kigali</SelectItem>
                    <SelectItem value="rubavu">Rubavu (Lake Kivu)</SelectItem>
                    <SelectItem value="musanze">Musanze</SelectItem>
                    <SelectItem value="nyagatare">Nyagatare</SelectItem>
                    <SelectItem value="huye">Huye</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="guests">Guests</Label>
                <Select 
                  value={filters.guests} 
                  onValueChange={(value) => setFilters({...filters, guests: value})}
                >
                  <SelectTrigger className="focus:ring-0 focus:ring-offset-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button 
                  className="w-full" 
                  onClick={() => {
                    setFilters({...filters, type: "", location: "", guests: "1"});
                    setFilteredAccommodations(accommodations);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accommodation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin mr-2" />
                <span>Loading accommodations...</span>
              </div>
            </div>
          ) : filteredAccommodations.length === 0 ? (
            <div className="col-span-full text-center text-muted-foreground py-12">
              No accommodations found matching your criteria.
            </div>
          ) : (
            filteredAccommodations.map((acc) => (
              <Card 
                key={acc.id} 
                className="hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => openModal(acc)}
              >
                <div className="relative">
                  <img 
                    src={acc.image} 
                    alt={acc.name} 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-background/90 px-2 py-1 rounded flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{acc.rating}</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm">
                    ${acc.price}/night
                  </div>
                </div>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-1">{acc.name}</h2>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {acc.location} • {acc.type}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {acc.amenities.slice(0, 3).map((am: string) => {
                      const Icon = amenityIcons[am] || Wifi;
                      return (
                        <Badge key={am} variant="secondary" className="flex items-center gap-1">
                          <Icon className="h-3 w-3" /> {am}
                        </Badge>
                      );
                    })}
                    {acc.amenities.length > 3 && (
                      <Badge variant="secondary">+{acc.amenities.length - 3} more</Badge>
                    )}
                  </div>
                  <Button className="w-full">View Details</Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Booking Modal */}
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="sm:max-w-[600px]">
            {selected && !confirmed && (
              <form onSubmit={handleBooking} className="space-y-4">
                <DialogHeader>
                  <div className="flex items-start gap-4">
                    <img 
                      src={selected.image} 
                      alt={selected.name} 
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div>
                      <DialogTitle>{selected.name}</DialogTitle>
                      <DialogDescription>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {selected.location} • {selected.type}
                        </div>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          {selected.rating} • ${selected.price}/night
                        </div>
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                {/* Reviews Section */}
                {reviews.length > 0 && (
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Guest Reviews</h4>
                    <div className="space-y-3 max-h-32 overflow-y-auto">
                      {reviews.slice(0, 3).map((review) => (
                        <div key={review.id} className="border-l-2 border-primary pl-3">
                          <div className="flex items-center gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="text-xs text-muted-foreground ml-1">
                              by {review.userName}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkIn">Check-In Date</Label>
                    <Input 
                      id="checkIn" 
                      type="date" 
                      value={booking.checkIn} 
                      onChange={e => setBooking({ ...booking, checkIn: e.target.value })} 
                      className="focus-visible:ring-0 focus-visible:ring-offset-0"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut">Check-Out Date</Label>
                    <Input 
                      id="checkOut" 
                      type="date" 
                      value={booking.checkOut} 
                      onChange={e => setBooking({ ...booking, checkOut: e.target.value })} 
                      className="focus-visible:ring-0 focus-visible:ring-offset-0"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input 
                    id="guests" 
                    type="number" 
                    min="1" 
                    value={booking.guests} 
                    onChange={e => setBooking({ ...booking, guests: e.target.value })} 
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                    required 
                  />
                </div>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Total for {selected.type}</p>
                      <p className="text-sm text-muted-foreground">Includes all taxes and fees</p>
                    </div>
                    <p className="text-xl font-bold">${selected.price}</p>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button type="submit" className="w-full">
                    Confirm Booking
                  </Button>
                </DialogFooter>
              </form>
            )}
            
            {selected && confirmed && (
              <div className="text-center space-y-6 py-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-600">Booking Confirmed!</h2>
                <div className="space-y-2">
                  <p>Your stay at <span className="font-semibold">{selected.name}</span> is confirmed.</p>
                  <p className="text-muted-foreground">Check your email for confirmation details.</p>
                </div>
                <div className="pt-4">
                  <Button className="w-full" onClick={() => setModalOpen(false)}>
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <Footer />
    </div>
  );
};

export default BookAccommodation;