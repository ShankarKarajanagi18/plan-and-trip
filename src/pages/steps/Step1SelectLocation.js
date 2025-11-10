import React, { useState } from 'react';
import './Step1SelectLocation.css';

const Step1SelectLocation = ({ events, onToggleFavorite }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('Price');
  const [filterView, setFilterView] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Beaches', 'Iconic Cities', 'Deserts', 'Adventure'];

  // Filter events based on search, category
  const filteredEvents = events.filter(event => {
    const matchesSource = source === '' || event.title.toLowerCase().includes(source.toLowerCase());
    const matchesDestination = destination === '' || event.title.toLowerCase().includes(destination.toLowerCase()) || event.location.toLowerCase().includes(destination.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = searchQuery === '' || event.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSource && matchesDestination && matchesCategory && matchesSearch;
  });

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === 'Price') {
      const priceA = a.price.includes('FREE') ? 0 : parseInt(a.price.replace(/[^0-9]/g, '')) || 0;
      const priceB = b.price.includes('FREE') ? 0 : parseInt(b.price.replace(/[^0-9]/g, '')) || 0;
      return priceA - priceB;
    }
    if (sortBy === 'Rating') {
      return b.rating - a.rating;
    }
    if (sortBy === 'Date') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const handleSearch = () => {
    console.log('Searching for:', source, destination);
  };

  return (
    <>
      {/* Search Filters */}
      <div className="search-filters">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <button className="search-btn-inline" onClick={handleSearch}>🔍</button>
        </div>

        <div className="search-box">
          <span className="search-icon">📍</span>
          <input
            type="text"
            placeholder="Destinations"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button className="search-btn-inline" onClick={handleSearch}>🔍</button>
        </div>

        <button className="add-destination-btn" onClick={() => alert('Add destination clicked!')}>
          +
        </button>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Header with View Toggle and Controls */}
      <div className="events-header">
        <div className="view-toggle">
          <button 
            className={`view-btn ${viewMode === 'map' ? 'active' : ''}`}
            onClick={() => setViewMode(viewMode === 'grid' ? 'map' : 'grid')}
          >
            📍 Map View
          </button>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={viewMode === 'map'}
              onChange={() => setViewMode(viewMode === 'grid' ? 'map' : 'grid')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="controls">
          <div className="filters">
            <span>Filters:</span>
            <button 
              className={filterView === 'grid' ? 'active' : ''}
              onClick={() => setFilterView('grid')}
            >
              ☷
            </button>
            <button 
              className={filterView === 'list' ? 'active' : ''}
              onClick={() => setFilterView('list')}
            >
              ☰
            </button>
          </div>
          <div className="sort">
            <span>Sort by:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option>Price</option>
              <option>Rating</option>
              <option>Date</option>
            </select>
          </div>
        </div>
      </div>

      {/* Map View or Grid View */}
      {viewMode === 'map' ? (
        <div className="map-view-container">
          {/* Left Side - Location List */}
          <div className="map-locations-list">
            <div className="map-search-bar">
              <button className="back-arrow">‹</button>
              <div className="map-search-input">
                <input
                  type="text"
                  placeholder="Things to do"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-icon-btn">🔍</button>
                <button className="clear-btn" onClick={() => setSearchQuery('')}>✕</button>
              </div>
            </div>

            <div className="results-header">
              <div className="results-info">
                <span className="results-label">Results</span>
                <button className="share-btn">🔗 Share</button>
              </div>
              <div className="filter-controls">
                <button className="filter-option">⭐ Rating</button>
                <button className="filter-option">🕐 Hours</button>
                <button className="filter-option">⚙️ All filters</button>
              </div>
            </div>

            <div className="location-results">
              {sortedEvents.slice(0, 5).map((event) => (
                <div key={event.id} className="location-result-card">
                  <div className="result-image">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="result-info">
                    <h4 className="result-title">{event.title}</h4>
                    <div className="result-rating">
                      <span className="rating-stars">⭐ {event.rating}</span>
                      <span className="rating-count">({event.ratingCount})</span>
                    </div>
                    <p className="result-type">Tourist attraction · {event.location}</p>
                    <p className="result-description">{event.distance || event.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="map-footer">
              <label className="update-map-checkbox">
                <input type="checkbox" />
                <span>Update results when map moves</span>
              </label>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="map-container">
            <div className="map-iframe-wrapper">
              <iframe
                title="Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207426.4169470058!2d139.55908574999998!3d35.709025799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen
              ></iframe>
              
              {/* Map Overlay Info Card */}
              <div className="map-info-card">
                <div className="info-card-image">
                  <img src={sortedEvents[0]?.image} alt={sortedEvents[0]?.title} />
                </div>
                <div className="info-card-content">
                  <h4>{sortedEvents[0]?.title}</h4>
                  <div className="info-rating">
                    ⭐ {sortedEvents[0]?.rating} ({sortedEvents[0]?.ratingCount})
                  </div>
                  <p>{sortedEvents[0]?.location}</p>
                  <div className="info-actions">
                    <button className="info-btn">📍</button>
                    <button className="info-btn">🔖</button>
                    <button className="save-btn">Save</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-attribution">
              Map data ©2023 Google
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Event Cards Grid */}
          <div className={`events-grid ${filterView === 'list' ? 'list-view' : ''}`}>
            {sortedEvents.length > 0 ? (
              sortedEvents.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="card-image-wrapper">
                    <img src={event.image} alt={event.title} />
                    <button 
                      className={`favorite-icon ${event.isFavorite ? 'active' : ''}`}
                      onClick={() => onToggleFavorite(event.id)}
                    >
                      ❤️
                    </button>
                    <div className="card-overlay">
                      <div className="card-header-info">
                        <h3 className="card-title">{event.title}</h3>
                        <span className="entry-fee">{event.price}</span>
                      </div>
                      <p className="card-distance">{event.distance || event.date}</p>
                      <div className="card-footer-info">
                        <span className="location">📍 {event.location}</span>
                        <span className="card-rating">⭐ {event.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No locations found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Step1SelectLocation;
