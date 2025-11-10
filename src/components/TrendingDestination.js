import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './TrendingDestination.css';

const TrendingDestination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  
  const destinations = [
    {
      id: 1,
      name: 'Seoul, South Korea',
      description: 'A vibrant mix of modern skyscrapers, traditional temples, and street markets',
      image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200&q=80',
      distance: '1.2 M',
      visitors: '50',
      rating: '15',
      icon: '🏛️',
      price: 1200
    },
    {
      id: 2,
      name: 'Singapore',
      description: 'A futuristic city with stunning architecture and a rich blend of cultures',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80',
      distance: '1.2 M',
      visitors: '50',
      rating: '15',
      icon: '🏙️',
      price: 1500
    },
    {
      id: 3,
      name: 'Nara, Japan',
      description: "Experience Japan's timeless temples and cherry blossoms",
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80',
      distance: '1.2 M',
      visitors: '50',
      rating: '15',
      icon: '⛩️',
      price: 1400
    },
    {
      id: 4,
      name: 'Taipei, Taiwan',
      description: "Known for its markets, Chiang Kai-shek Memorial Hall & Taipei 101 skyscraper",
      image: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=1200&q=80',
      distance: '1.2 M',
      visitors: '50',
      rating: '15',
      icon: '🏮',
      price: 1100
    },
    {
      id: 5,
      name: 'Hangzhou, China',
      description: 'Known for its serene West Lake, ancient temples, and traditional tea culture',
      image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=1200&q=80',
      distance: '1.2 M',
      visitors: '50',
      rating: '15',
      icon: '🏛️',
      price: 1000
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const handleBookNow = () => {
    console.log('Book Now clicked!');
    console.log('Is logged in:', isLoggedIn);
    console.log('Current destination:', destinations[currentIndex]);
    
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    
    console.log('Navigating to:', `/trip-planner/${destinations[currentIndex].id}`);
    navigate(`/trip-planner/${destinations[currentIndex].id}`, { 
      state: { destination: destinations[currentIndex] } 
    });
  };

  const handleLoginRedirect = () => {
    setShowLoginModal(false);
    navigate('/login');
  };

  const getCardStyle = (index) => {
    let position = (index - currentIndex + destinations.length) % destinations.length;
    
    if (position > destinations.length / 2) {
      position = position - destinations.length;
    }
    
    const isCenter = position === 0;
    const scale = isCenter ? 1 : 0.85 - Math.abs(position) * 0.08;
    const translateX = position * 280;
    const translateZ = -Math.abs(position) * 100;
    const opacity = Math.abs(position) > 2 ? 0 : 1 - Math.abs(position) * 0.25;
    const rotateY = position * 8;
    
    return {
      transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
      zIndex: 10 - Math.abs(position),
      opacity: opacity,
      pointerEvents: isCenter ? 'auto' : 'none',
    };
  };

  return (
    <section className="trending-destination">
      <div className="trending-container">
        <h2 className="trending-title">Trending Destination</h2>
        
        <div className="stacked-cards-wrapper">
          <button className="nav-arrow nav-arrow-left" onClick={handlePrev} aria-label="Previous">
            ‹
          </button>
          
          <div className="stacked-cards-container">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className="destination-card stacked-card"
                style={getCardStyle(index)}
              >
                <div className="card-image-container">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="card-image"
                  />
                  
                  <div className="icon-badge">
                    <span className="destination-icon">{destination.icon}</span>
                  </div>
                  
                  <div className="stats-container">
                    <div className="stat-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{destination.distance}</span>
                    </div>
                    
                    <div className="stat-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{destination.visitors}</span>
                    </div>
                    
                    <div className="stat-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2"/>
                      </svg>
                      <span>{destination.rating}</span>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <div className="location-info">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <h3 className="location-name">{destination.name}</h3>
                    </div>
                    
                    <p className="location-description">{destination.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="nav-arrow nav-arrow-right" onClick={handleNext} aria-label="Next">
            ›
          </button>
        </div>
        
        <div className="pagination-dots">
          {destinations.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button className="plan-trip-btn" onClick={handleBookNow}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="12" y1="22.08" x2="12" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Plan your SMART trip</span>
        </button>
      </div>
      
      <div className="side-buttons">
        <button className="side-btn search-btn" aria-label="Search">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="side-btn chat-btn" aria-label="Chat">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="side-btn menu-btn" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Login Required Modal */}
      {showLoginModal && (
        <div className="login-required-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="login-required-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon-container">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="url(#gradient)" strokeWidth="2"/>
                <path d="M12 8v4M12 16h.01" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#667eea"/>
                    <stop offset="100%" stopColor="#764ba2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <h2 className="modal-heading">Sign In Required</h2>
            <p className="modal-message">Please sign in to book your dream vacation to {destinations[currentIndex].name}</p>
            
            <div className="modal-actions">
              <button className="modal-btn-primary" onClick={handleLoginRedirect}>
                Sign In Now
              </button>
              <button className="modal-btn-secondary" onClick={() => setShowLoginModal(false)}>
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrendingDestination;
