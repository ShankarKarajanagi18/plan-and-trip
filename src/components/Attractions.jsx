import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Attractions.css';

const Attractions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const destination = location.state?.destination;
  const [likedAttractions, setLikedAttractions] = useState({});

  const attractions = [
    {
      id: 1,
      name: 'Tokyo Mega Illumination',
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80',
      rating: 4.0,
      reviews: 23,
      fee: 800,
      timeRequired: '30 min',
      currency: '¥'
    },
    {
      id: 2,
      name: 'Tokyo Mega Illumination',
      image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
      rating: 4.0,
      reviews: 23,
      fee: 600,
      timeRequired: '30 min',
      currency: '¥'
    },
    {
      id: 3,
      name: 'Tokyo Mega Illumination',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
      rating: 4.0,
      reviews: 23,
      fee: 250,
      timeRequired: '30 min',
      currency: '¥'
    },
    {
      id: 4,
      name: 'Tokyo Mega Illumination',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
      rating: 4.0,
      reviews: 23,
      fee: 800,
      timeRequired: '30 min',
      currency: '¥'
    },
    {
      id: 5,
      name: 'Tokyo Mega Illumination',
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80',
      rating: 4.0,
      reviews: 23,
      fee: 800,
      timeRequired: '30 min',
      currency: '¥'
    },
    {
      id: 6,
      name: 'Tokyo Mega Illumination',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
      rating: 4.0,
      reviews: 23,
      fee: 800,
      timeRequired: '30 min',
      currency: '¥'
    }
  ];

  const handleLikeToggle = (id) => {
    setLikedAttractions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="attractions-page">
     

      {/* Hero Section */}
      <div className="attractions-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {destination?.name?.split(',')[0]?.toUpperCase() || 'JAPAN'}
          </h1>
          <p className="hero-subtitle">Top Attractions</p>
        </div>
      </div>

      {/* Scrollable Attraction Cards */}
      <div className="attractions-scroll-container">
        <div className="attractions-cards-wrapper">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="attraction-scroll-card">
              <div className="card-image-wrapper">
                <img src={attraction.image} alt={attraction.name} className="card-image" />
                
                <button 
                  className={`card-like-btn ${likedAttractions[attraction.id] ? 'liked' : ''}`}
                  onClick={() => handleLikeToggle(attraction.id)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={likedAttractions[attraction.id] ? "#ef4444" : "none"}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="2"/>
                  </svg>
                </button>

                <div className="card-fee-badge">
                  <span className="fee-amount">{attraction.currency}{attraction.fee}</span>
                  <span className="fee-text">Fee</span>
                </div>

                <div className="card-rating-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="rating-text">{attraction.rating} ({attraction.reviews})</span>
                </div>

                <div className="card-bottom-info">
                  <h3 className="card-title">{attraction.name}</h3>
                  <div className="card-time">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>Time required to visit ~ {attraction.timeRequired}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="attractions-floating-actions">
        <button className="floating-action-btn chat-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
        <button className="floating-action-btn back-btn" onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="floating-action-btn menu-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2"/>
            <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2"/>
            <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Attractions;
