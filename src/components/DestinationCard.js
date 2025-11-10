import React, { useState } from 'react';
import './TrendingDestination.css';

const TrendingDestination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const destinations = [
    {
      id: 1,
      name: 'Seoul, South Korea',
      description: 'A vibrant mix of modern skyscrapers, traditional temples, and street markets',
      image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200&q=80',
      distance: '1.2 M',
      visitors: '50',
      rating: '15'
    },
    {
      id: 2,
      name: 'Singapore',
      description: 'A futuristic city with stunning architecture and a rich blend of cultures',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80',
      distance: '1.2 M',
      visitors: '50',
      rating: '15'
    },
    {
      id: 3,
      name: 'Nara, Japan',
      description: "Experience Japan's timeless temples and cherry blossoms",
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80',
      distance: '1.2 M',
      visitors: '50',
      rating: '15'
    },
    {
      id: 4,
      name: 'Taipei, Taiwan',
      description: "Known for its markets, Chiang Kai-shek Memorial Hall & Taipei 101 skyscraper",
      image: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=1200&q=80',
      distance: '1.2 M',
      visitors: '50',
      rating: '15'
    },
    {
      id: 5,
      name: 'Hangzhou, China',
      description: 'Known for its serene West Lake, ancient temples, and traditional tea culture',
      image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=1200&q=80',
      distance: '1.2 M',
      visitors: '50',
      rating: '15'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const currentDestination = destinations[currentIndex];

  return (
    <section className="trending-destination">
      <div className="trending-container">
        <h2 className="trending-title">Trending Destination</h2>
        
        <div className="destination-card-wrapper">
          {/* Navigation Arrows */}
          <button className="nav-arrow nav-arrow-left" onClick={handlePrev} aria-label="Previous">
            ‹
          </button>
          
          <div className="destination-card">
            <div className="card-image-container">
              <img 
                src={currentDestination.image} 
                alt={currentDestination.name}
                className="card-image"
              />
              
              {/* Stats Badges */}
              <div className="stats-container">
                <div className="stat-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{currentDestination.distance}</span>
                </div>
                
                <div className="stat-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{currentDestination.visitors}</span>
                </div>
                
                <div className="stat-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{currentDestination.rating}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="action-btn info-btn" aria-label="Information">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M12 16v-4M12 8h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                
                <button className="action-btn favorite-btn" aria-label="Add to favorites">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="card-content">
              <div className="location-info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="location-name">{currentDestination.name}</h3>
              </div>
              
              <p className="location-description">{currentDestination.description}</p>
            </div>
          </div>
          
          <button className="nav-arrow nav-arrow-right" onClick={handleNext} aria-label="Next">
            ›
          </button>
        </div>
        
        {/* Pagination Dots */}
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
        
        {/* Plan Your Trip Button */}
        <button className="plan-trip-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="12" y1="22.08" x2="12" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Plan your SMART trip</span>
        </button>
      </div>
      
      {/* Side Buttons */}
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
    </section>
  );
};

export default TrendingDestination;
