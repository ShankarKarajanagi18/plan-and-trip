import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import InfluencerLogin from './pages/InfluencerLogin';
import Register from './pages/Register';
import BookingPage from './pages/BookingPage';
import TripPlannerPage from './pages/TripPlannerPage';
import TripPlanSummary from './pages/TripPlanSummary';
import Checkout from './pages/Checkout';
import InfluencerDashboard from './pages/InfluencerDashboard';
import DayWisePlan from './pages/DayWisePlan';
import Attractions from './components/Attractions';
import PackagesListing from './components/PackagesListing';



import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/influencer-login" element={<InfluencerLogin />} />
            <Route path="/register" element={<Register />} />   
          <Route path="/booking/:destinationId" element={<BookingPage />} />
          <Route path="/profile" element={<div>Profile Page</div>} />
          <Route path="/bookings" element={<div>My Bookings</div>} />
          <Route path="/favorites" element={<div>Favorites</div>} />
          <Route path="/settings" element={<div>Settings</div>} />
          <Route path="/trip-planner/:destinationId" element={<TripPlannerPage />} />
          <Route path="/trip-summary" element={<TripPlanSummary />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/influencer-dashboard" element={<InfluencerDashboard />} />
          <Route path="/daywise-plan" element={<DayWisePlan />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/packages" element={<PackagesListing />} />
        

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
