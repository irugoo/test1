
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import ProviderDashboard from './pages/ProviderDashboard';
import SkilledWorkerListing from './pages/SkilledWorkerListing';
import SkilledWorkerProfile from './pages/SkilledWorkerProfile';
import Booking from './pages/Booking';
import Search from './pages/Search';
import ServiceListing from './pages/ServiceListing';
import Payment from './pages/Payment';
import OrderConfirmation from './pages/OrderConfirmation';
import Messages from './pages/Messages';
import Reviews from './pages/Reviews';
import TravelItinerary from './pages/TravelItinerary';
import TripPlanner from './pages/TripPlanner';
import BookingHistory from './pages/BookingHistory';
import ProviderRegistration from './pages/ProviderRegistration';
import TravelerRegistration from './pages/TravelerRegistration';
import ProfileManagement from './pages/ProfileManagement';
import Subscription from './pages/Subscription';
import BusinessGrowth from './pages/BusinessGrowth';
import EventListings from './pages/EventListings';
import ProviderProfile from './pages/ProviderProfile';
import ServiceManagement from './pages/ServiceManagement';
import POSManagement from './pages/POSManagement';
import HelpCenter from './pages/HelpCenter';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import CancellationPolicy from './pages/CancellationPolicy';
import Contact from './pages/Contact';
import About from './pages/About';
import ProviderApplication from './pages/ProviderApplication';
import SkilledWorkerBooking from './pages/SkilledWorkerBooking';
import AdminPanel from './pages/AdminPanel';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        <Route path="/skilled-workers" element={<SkilledWorkerListing />} />
        <Route path="/skilled-worker/:id" element={<SkilledWorkerProfile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/search" element={<Search />} />
        <Route path="/services" element={<ServiceListing />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/itinerary" element={<TravelItinerary />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/booking-history" element={<BookingHistory />} />
        <Route path="/provider/register" element={<ProviderRegistration />} />
        <Route path="/register" element={<TravelerRegistration />} />
        <Route path="/profile" element={<ProfileManagement />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/business-growth" element={<BusinessGrowth />} />
        <Route path="/events" element={<EventListings />} />
        <Route path="/provider/profile" element={<ProviderProfile />} />
        <Route path="/service-management" element={<ServiceManagement />} />
        <Route path="/pos" element={<POSManagement />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/provider/apply" element={<ProviderApplication />} />
        <Route path="/skilled-worker/book/:id" element={<SkilledWorkerBooking />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
