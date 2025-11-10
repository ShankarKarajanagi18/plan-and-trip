import React, { useState, useEffect } from 'react';
import './Step4TripReviews.css';

const Step4TripReviews = () => {
  const [priceRange, setPriceRange] = useState([0, 80000]);
  const [transport, setTransport] = useState('Public');
  const [stay, setStay] = useState('3 star');
  const [activity, setActivity] = useState('Free');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTripTypes, setSelectedTripTypes] = useState([]);
  const [filteredAccommodations, setFilteredAccommodations] = useState([]);

  const categories = [
    { id: 'beaches', label: 'Beaches', icon: '🏖️', color: '#ff6b6b' },
    { id: 'luxury', label: 'Luxury', icon: '💎', color: '#4ecdc4' },
    { id: 'balanced', label: 'Balanced', icon: '⚖️', color: '#45b7d1' },
    { id: 'backpackers', label: 'Back packers', icon: '🎒', color: '#f9ca24' }
  ];

  const tripTypes = [
    { id: 'adventure', label: 'Adventure', icon: '🏔️' },
    { id: 'random', label: 'Random Planners', icon: '🎲' },
    { id: 'balanced', label: 'Balanced', icon: '⚖️' },
    { id: 'relaxed', label: 'Relaxed', icon: '🌴' }
  ];

  const allAccommodations = [
    { id: 1, name: 'Shibuya Crossing', price: 3500, rating: 4.8, category: 'luxury', type: 'adventure', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400' },
    { id: 2, name: 'Tokyo Tower', price: 4200, rating: 4.7, category: 'balanced', type: 'balanced', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
    { id: 3, name: 'Darma Inn', price: 2800, rating: 4.5, category: 'backpackers', type: 'relaxed', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' },
    { id: 4, name: 'Senso-ji Temple', price: 5000, rating: 4.9, category: 'luxury', type: 'adventure', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400' },
    { id: 5, name: 'Shinjuku', price: 3200, rating: 4.6, category: 'balanced', type: 'adventure', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400' },
    { id: 6, name: 'Akihabara', price: 2500, rating: 4.7, category: 'backpackers', type: 'random', image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400' },
    { id: 7, name: 'Tsukiji Outer', price: 6000, rating: 4.8, category: 'luxury', type: 'relaxed', image: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=400' },
    { id: 8, name: 'Ginza', price: 7500, rating: 4.5, category: 'luxury', type: 'balanced', image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=400' },
    { id: 9, name: 'Harajuku', price: 1800, rating: 4.4, category: 'backpackers', type: 'adventure', image: 'https://images.unsplash.com/photo-1545579149-d817073296b6?w=400' },
    { id: 10, name: 'Roppongi Hills', price: 5500, rating: 4.8, category: 'luxury', type: 'balanced', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400' },
    { id: 11, name: 'Ueno Park', price: 2000, rating: 4.3, category: 'backpackers', type: 'relaxed', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400' },
    { id: 12, name: 'Odaiba', price: 4800, rating: 4.6, category: 'balanced', type: 'adventure', image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=400' }
  ];

  // Filter accommodations based on all criteria
  useEffect(() => {
    let filtered = allAccommodations.filter(place => {
      // Price filter
      if (place.price > priceRange[1]) return false;
      
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(place.category)) {
        return false;
      }
      
      // Trip type filter
      if (selectedTripTypes.length > 0 && !selectedTripTypes.includes(place.type)) {
        return false;
      }
      
      return true;
    });
    
    setFilteredAccommodations(filtered);
  }, [priceRange, selectedCategories, selectedTripTypes]);

  const handleCategoryToggle = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleTripTypeToggle = (typeId) => {
    if (selectedTripTypes.includes(typeId)) {
      setSelectedTripTypes(selectedTripTypes.filter(id => id !== typeId));
    } else {
      setSelectedTripTypes([...selectedTripTypes, typeId]);
    }
  };

  return (
    <div className="trip-details-container">
      <div className="trip-details-header">
        <h2>Trip Details</h2>
      </div>

      <div className="trip-details-content">
        {/* Left Panel - Filters */}
        <div className="filters-panel">
          {/* Price Range */}
          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-slider">
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="range-slider"
                  style={{
                    background: `linear-gradient(to right, #667eea 0%, #667eea ${(priceRange[1] / 100000) * 100}%, #e0e0e0 ${(priceRange[1] / 100000) * 100}%, #e0e0e0 100%)`
                  }}
                />
              </div>
              <div className="price-labels">
                <div className="price-label-item">
                  <span className="label-text">Min</span>
                  <span className="label-value">₹{priceRange[0].toLocaleString()}</span>
                </div>
                <div className="price-label-item">
                  <span className="label-text">Max</span>
                  <span className="label-value">₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transport */}
          <div className="filter-section">
            <h3>🚗 Transport</h3>
            <div className="filter-options">
              <button
                className={`filter-btn ${transport === 'Public' ? 'active' : ''}`}
                onClick={() => setTransport('Public')}
              >
                <strong>Public</strong>
                <p className="filter-subtitle">Car pooling, Bike Taxi</p>
              </button>
            </div>
          </div>

          {/* Stay */}
          <div className="filter-section">
            <h3>🏨 Stay</h3>
            <div className="filter-options">
              <button
                className={`filter-btn ${stay === '3 star' ? 'active' : ''}`}
                onClick={() => setStay('3 star')}
              >
                <strong>3 star</strong>
                <p className="filter-subtitle">Food Excluded · Non - AC</p>
              </button>
            </div>
          </div>

          {/* Activity */}
          <div className="filter-section">
            <h3>🎯 Activity</h3>
            <div className="filter-options">
              <button
                className={`filter-btn ${activity === 'Free' ? 'active' : ''}`}
                onClick={() => setActivity('Free')}
              >
                <strong>Free</strong>
                <p className="filter-subtitle">Roaming streets, Shopping</p>
              </button>
            </div>
          </div>

          {/* Trip Category */}
          <div className="filter-section">
            <h3>Trip Category</h3>
            <div className="category-grid">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-card ${selectedCategories.includes(category.id) ? 'selected' : ''}`}
                  onClick={() => handleCategoryToggle(category.id)}
                >
                  <div className="category-icon" style={{ backgroundColor: category.color }}>
                    {category.icon}
                  </div>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Trip Type */}
          <div className="filter-section">
            <h3>Trip Type</h3>
            <div className="trip-type-grid">
              {tripTypes.map((type) => (
                <button
                  key={type.id}
                  className={`trip-type-card ${selectedTripTypes.includes(type.id) ? 'selected' : ''}`}
                  onClick={() => handleTripTypeToggle(type.id)}
                >
                  <div className="trip-type-icon">{type.icon}</div>
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Accommodations */}
        <div className="accommodations-panel">
          <div className="panel-header">
            <h3 className="panel-title">Within the given budget</h3>
            <span className="results-count">
              Showing {filteredAccommodations.length} of {allAccommodations.length} places
            </span>
          </div>
          
          {filteredAccommodations.length > 0 ? (
            <div className="accommodations-grid">
              {filteredAccommodations.map((place) => (
                <div key={place.id} className="accommodation-card">
                  <div className="accommodation-image">
                    <img src={place.image} alt={place.name} />
                    <div className="price-badge">₹ {(place.price / 1000).toFixed(1)}K</div>
                  </div>
                  <div className="accommodation-info">
                    <h4>{place.name}</h4>
                    <div className="accommodation-rating">
                      <span>⭐ {place.rating}</span>
                    </div>
                    <div className="accommodation-tags">
                      <span className="tag">{place.category}</span>
                      <span className="tag">{place.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results-message">
              <h3>No accommodations found</h3>
              <p>Try adjusting your filters to see more options</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step4TripReviews;
