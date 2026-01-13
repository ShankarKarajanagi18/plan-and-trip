import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PackagesListing.css';

const PackagesListing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('price');
  const [searchFilters, setSearchFilters] = useState({
    from: 'Banglore',
    to: 'Japan',
    date: 'Jan 05/25',
    guests: '2 Adults'
  });

  const packages = [
    {
      id: 1,
      title: 'Treasures of Japan - Indian Group',
      images: [
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
        'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
        'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80'
      ],
      duration: '7 Days / 6 Nights',
      startDate: 'Jan 05/25',
      itinerary: 'Tokyo (2N) ~ Kyoto (2N) ~ Osaka (2N) + More',
      features: [
        'Round Trip Flights',
        'Airport Transfers',
        'Visa',
        '5 Star, 4 Star Hotels',
        '10 Activities',
        'Selected Meals'
      ],
      highlights: [
        'Sunset ATV Ride',
        'Princess Island Tour',
        'Istanbul city tour'
      ],
      price: 497.00,
      emiPrice: 49.00,
      totalCost: 2199.00,
      rating: 4.5,
      reviews: 234
    },
    {
      id: 2,
      title: 'Japan Classic Adventure',
      images: [
        'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
        'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80',
        'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80'
      ],
      duration: '8 Days / 7 Nights',
      startDate: 'Jan 05/25',
      itinerary: 'Tokyo (3N) ~ Hakone (1N) ~ Kyoto (2N) ~ Osaka (1N) + More',
      features: [
        'Round Trip Flights',
        'Airport Transfers',
        'Visa',
        '5 Star, 4 Star Hotels',
        '10 Activities',
        'Selected Meals'
      ],
      highlights: [
        'Sunset ATV Ride',
        'Princess Island Tour',
        'Istanbul city tour'
      ],
      price: 497.00,
      emiPrice: 49.00,
      totalCost: 2199.00,
      rating: 4.8,
      reviews: 456
    },
    {
      id: 3,
      title: 'Japan Explorer Tour',
      images: [
        'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
        'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80'
      ],
      duration: '7 Days / 6 Nights',
      startDate: 'Jan 05/25',
      itinerary: 'Tokyo (2N) ~ Takayama (1N) ~ Kanazawa (1N) ~ Kyoto (2N) ~ Osaka (1N) + More',
      features: [
        'Round Trip Flights',
        'Airport Transfers',
        'Visa',
        '5 Star, 4 Star Hotels',
        '10 Activities',
        'Selected Meals'
      ],
      highlights: [
        'Sunset ATV Ride',
        'Princess Island Tour'
      ],
      price: 497.00,
      emiPrice: 49.00,
      totalCost: 2199.00,
      rating: 4.6,
      reviews: 189
    }
  ];

  return (
    <div 
      className="packages-listing-page"
      style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/influencerbg.jpg)` 
      }}
    >
      {/* Search Bar */}
      <div className="packages-search-bar">
        <div className="search-field">
          <label>Starting from</label>
          <input type="text" value={searchFilters.from} readOnly />
        </div>
        <div className="search-field">
          <label>Going to</label>
          <input type="text" value={searchFilters.to} readOnly />
        </div>
        <div className="search-field">
          <label>Starting Date</label>
          <input type="text" value={searchFilters.date} readOnly />
        </div>
        <div className="search-field">
          <label>Room&Guests</label>
          <input type="text" value={searchFilters.guests} readOnly />
        </div>
        <button className="search-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
            <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2"/>
          </svg>
          Search
        </button>
      </div>

      {/* Tabs */}
      <div className="packages-tabs">
        <button 
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Package <span>(20)</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'guided' ? 'active' : ''}`}
          onClick={() => setActiveTab('guided')}
        >
          Guided Tour package <span>(5)</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'bestseller' ? 'active' : ''}`}
          onClick={() => setActiveTab('bestseller')}
        >
          Best Seller <span>(5)</span>
        </button>
      </div>

      {/* Filters and View Controls */}
      <div className="packages-controls">
        <div className="filters-section">
          <span className="filters-label">Filters:</span>
          <button className="filter-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Price
          </button>
          <button className="filter-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="2"/>
            </svg>
            User Rating
          </button>
          <button className="filter-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Type
          </button>
          <button className="filter-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="5" r="2" fill="currentColor"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
              <circle cx="12" cy="19" r="2" fill="currentColor"/>
            </svg>
            More
          </button>
        </div>

        <div className="view-controls">
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          <button 
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2"/>
              <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2"/>
              <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2"/>
              <rect x="3" y="4" width="2" height="4" fill="currentColor"/>
              <rect x="3" y="10" width="2" height="4" fill="currentColor"/>
              <rect x="3" y="16" width="2" height="4" fill="currentColor"/>
            </svg>
          </button>
          <span className="sort-label">Sort by: <strong>{sortBy}</strong></span>
        </div>
      </div>

      {/* Packages Grid */}
      <div className={`packages-grid ${viewMode}`}>
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            {/* Image Carousel */}
            <div className="package-images">
              <img src={pkg.images[0]} alt={pkg.title} className="main-image" />
              <div className="image-thumbnails">
                {pkg.images.slice(0, 3).map((img, idx) => (
                  <div key={idx} className="thumbnail">
                    <img src={img} alt="" />
                  </div>
                ))}
                {pkg.images.length > 3 && (
                  <button className="more-images-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Package Details */}
            <div className="package-details">
              <h3 className="package-title">{pkg.title}</h3>
              
              <div className="package-meta">
                <span className="duration">{pkg.duration}</span>
                <span className="date">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  {pkg.startDate}
                </span>
              </div>

              <p className="itinerary">{pkg.itinerary}</p>

              <div className="package-features">
                <div className="features-col">
                  {pkg.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="dot">•</span> {feature}
                    </div>
                  ))}
                </div>
                <div className="features-col">
                  {pkg.features.slice(3).map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="dot">•</span> {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="package-highlights">
                {pkg.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {highlight}
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="package-footer">
                <div className="pricing-info">
                  <div className="emi-info">
                    No Cost EMI at
                    <div className="emi-price">${pkg.emiPrice.toFixed(2)}/Month</div>
                  </div>
                  <div className="total-cost">
                    Total Cost: ${pkg.totalCost.toFixed(2)}
                  </div>
                </div>
                
                <div className="price-action">
                  <div className="main-price">
                    ${pkg.price.toFixed(2)}
                    <span className="per-person">/Person</span>
                  </div>
                  <button className="pay-now-btn">Pay now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesListing;
