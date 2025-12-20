import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TripPlanSummary.css';

const TripPlanSummary = () => {
    const navigate = useNavigate();
    const [currentPlaceIndex, setCurrentPlaceIndex] = useState(0);

    const placesToVisit = [
        { id: 1, name: 'Shibuya Crossing', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500' },
        { id: 2, name: 'Tokyo Tower', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500' },
        { id: 3, name: 'Senso-ji Temple', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=500' },
        { id: 4, name: 'Akihabara', image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=500' }
    ];

    const tripMates = [
        { id: 1, name: 'Rebecca', sourceCity: 'Bangalore' },
        { id: 2, name: 'Robert', sourceCity: 'Bangalore' },
        { id: 3, name: 'Jessica', sourceCity: 'Bangalore' },
        { id: 4, name: 'Ravi', sourceCity: 'Hyderabad' },
        { id: 5, name: 'Riyas', sourceCity: 'Mumbai' }
    ];

    // Trip booking data
    const tripData = {
        destination: {
            name: 'Japan Itenary',
            price: 400,
            totalPrice: 2500,
            persons: 4,
            dates: 'Apr 15 to Apr 22',
            cities: ['Tokyo', 'Osaka', 'Mt.Fuji', 'Kyoto']
        },
        placesToVisit: placesToVisit,
        tripMates: tripMates
    };

    const handlePrevPlace = () => {
        setCurrentPlaceIndex((prev) => (prev === 0 ? placesToVisit.length - 1 : prev - 1));
    };

    const handleNextPlace = () => {
        setCurrentPlaceIndex((prev) => (prev === placesToVisit.length - 1 ? 0 : prev + 1));
    };

    // Navigate to Day Wise Plan
    const handleViewDayPlan = () => {
        navigate('/daywise-plan');
    };

    // Navigate to Checkout
    const handleBookTrip = () => {
        navigate('/checkout', {
            state: {
                destination: tripData.destination,
                tripDetails: tripData
            }
        });
    };

    return (
        <div className="trip-plan-summary">
            {/* Header */}
            <div className="summary-header">
               
                <div className="header-title">YOUR PERFECT JAPAN PLAN</div>
            </div>

            {/* Main Content */}
            <div className="summary-content">
                {/* Left Column */}
                <div className="left-column">
                    {/* Days Card */}
                    <div className="summary-card days-card">
                        <div className="card-icon">📅</div>
                        <div className="card-title">Days</div>
                        <div className="date-range">Apr 15 to Apr 22</div>
                    </div>

                    {/* Stays & Destination Card */}
                    <div className="summary-card stays-card">
                        <div className="card-title">Stays & Destination</div>
                        <div className="destination-icons">
                            <div className="dest-icon active">
                                <span>🗼</span>
                                <span className="dest-label">Tokyo</span>
                            </div>
                            <div className="dest-icon">
                                <span>🏖️</span>
                                <span className="dest-label">Osaka</span>
                            </div>
                            <div className="dest-icon">
                                <span>⛰️</span>
                                <span className="dest-label">Mt.Fuji</span>
                            </div>
                            <div className="dest-icon">
                                <span>🏯</span>
                                <span className="dest-label">Kyoto</span>
                            </div>
                            <div className="dest-icon more">
                                <span>+</span>
                            </div>
                        </div>
                    </div>

                    {/* Trip Mates Card */}
                    <div className="summary-card mates-card">
                        <div className="card-title">Trip Mates</div>
                        <div className="mates-header">
                            <span>Name</span>
                            <span>Source City</span>
                        </div>
                        <div className="mates-list">
                            {tripMates.map((mate) => (
                                <div key={mate.id} className="mate-item">
                                    <div className="mate-info">
                                        <span className="mate-avatar">👤</span>
                                        <span className="mate-name">{mate.name}</span>
                                    </div>
                                    <span className="mate-city">{mate.sourceCity}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Places to Visit */}
                    <div className="summary-card places-card">
                        <div className="card-title">Places to Visit</div>
                        <div className="places-carousel">
                            <button className="carousel-btn prev" onClick={handlePrevPlace}>
                                ◀
                            </button>
                            <div className="place-image">
                                <img src={placesToVisit[currentPlaceIndex].image} alt={placesToVisit[currentPlaceIndex].name} />

                                {/* Action Icons - Top Right */}
                                <div className="place-actions">
                                    <button className="place-action-btn favorite-btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                    </button>
                                    <button className="place-action-btn info-btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            
                                            <line x1="12" y1="16" x2="12" y2="12"></line>
                                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                        </svg>
                                    </button>
                                </div>

                                <div className="place-name">{placesToVisit[currentPlaceIndex].name}</div>
                            </div>
                            <button className="carousel-btn next" onClick={handleNextPlace}>
                                ▶
                            </button>
                        </div>
                    </div>

                    {/* Documents Required */}
                    <div className="summary-card documents-card">
                        <div className="card-title">Document Required for travel</div>
                        <div className="document-items">
                            <div className="doc-item">
                                <span>📄</span>
                                <span>Insurance</span>
                            </div>
                            <div className="doc-item">
                                <span>✈️</span>
                                <span>Visa</span>
                            </div>
                            <div className="doc-item">
                                <span>🎫</span>
                                <span>Return Ticket</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="right-column">
                    {/* Action Buttons */}
                    <div className="action-buttons-row">
                        <button className="action-btn primary" onClick={handleViewDayPlan}>
                            View Daywise Plan
                        </button>
                        <button className="action-btn secondary" onClick={handleBookTrip}>
                            Book Trip
                        </button>
                    </div>

                    {/* Total Cost Card */}
                    <div className="summary-card cost-card">
                        <div className="card-title">Total Cost</div>
                        <div className="total-amount">$ 2500</div>
                        <div className="cost-description">
                            For 4 persons · Balanced trip with Pan American Food
                        </div>
                        <div className="cost-validity">*cost valid till today 11:59 PM</div>
                        <div className="cost-illustration">💰🎨</div>
                    </div>

                    {/* Fun Facts Card */}
                    <div className="summary-card fun-facts-card">
                        <div className="card-title">Fun Facts</div>
                        <div className="fun-facts-content">
                            <div className="weather-section">
                                <span className="weather-icon">☀️</span>
                                <div className="weather-details">
                                    <div className="fact-item">Melting Machines Are Common!</div>
                                    <div className="fact-item">Bullet Trains Are Incredibly Fast!</div>
                                </div>
                            </div>
                            <div className="fun-fact-item">Eating While Walking Is Rude</div>
                            <div className="fun-fact-item">Capsule Hotels Are Super Compact!</div>
                            <div className="clouds">☁️☁️</div>
                        </div>
                    </div>

                    {/* Tips & Guides Card */}
                    <div className="summary-card tips-card">
                        <div className="card-title">Tips & Guides</div>
                        <div className="tips-list">
                            <div className="tip-item">📦 Packing Guides</div>
                            <div className="tip-item">🎯 Trip Hacks</div>
                            <div className="tip-item">🎭 Culture</div>
                            <div className="tip-item">👔 Do's and Don'ts</div>
                        </div>
                        <div className="tips-illustration">🎨✈️</div>
                    </div>

                    {/* Floating Action Buttons */}
                    <button className="fab chat-fab">💬</button>
                    <button className="fab menu-fab">☰</button>
                </div>
            </div>
        </div>
    );
};

export default TripPlanSummary;
