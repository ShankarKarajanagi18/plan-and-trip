import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './BookingPage.css';

const BookingPage = () => {
    const { destinationId } = useParams();
    const location = useLocation();
    const { user, isLoggedIn } = useAuth();
    const destination = location.state?.destination;

    const [bookingData, setBookingData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: '',
        date: '',
        guests: 1
    });

    useEffect(() => {
        if (user) {
            setBookingData(prev => ({
                ...prev,
                name: user.name,
                email: user.email
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        setBookingData({
            ...bookingData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking submitted:', bookingData);
        alert('Booking confirmed!');
    };

    return (
        <div className="booking-page">
            <h1>Book Your Trip to {destination?.name}</h1>
            <form onSubmit={handleSubmit} className="booking-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={bookingData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoggedIn}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={bookingData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoggedIn}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={bookingData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="guests"
                    placeholder="Number of Guests"
                    value={bookingData.guests}
                    onChange={handleChange}
                    min="1"
                    required
                />
                <button type="submit">Confirm Booking</button>
            </form>
        </div>
    );
};

export default BookingPage;
