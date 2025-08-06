import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookAccommodation from "./pages/BookAccommodation";
import AirportPickup from "./pages/AirportPickup";
import LocalExperiences from "./pages/LocalExperiences";
import TripPlanner from "./pages/TripPlanner";
import BookingSummary from "./pages/BookingSummary";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import Blog from "./pages/Blog";
import WhatsAppSupport from "./components/WhatsAppSupport";
import { AuthProvider } from "./hooks/useAuth";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-accommodation" element={<BookAccommodation />} />
            <Route path="/airport-pickup" element={<AirportPickup />} />
            <Route path="/local-experiences" element={<LocalExperiences />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/booking-summary" element={<BookingSummary />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          
          {/* Global WhatsApp Support */}
          <WhatsAppSupport />
          
          {/* Global Toaster */}
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
