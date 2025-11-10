import React, { useState } from 'react';
import './Step2SelectDates.css';

const Step2SelectDates = ({ startDate, endDate, events, onToggleFavorite, onDateChange }) => {
  const [sortBy, setSortBy] = useState('Price');
  const [filterView, setFilterView] = useState('grid');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);

  // Parse date string to Date object
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    return new Date(dateStr);
  };

  // Check if event is available in date range
  const isEventAvailable = (event) => {
    if (!startDate || !endDate || !searchPerformed) return true;

    const start = parseDate(startDate);
    const end = parseDate(endDate);
    
    // For "Year Round" events, always available
    if (event.date.includes('Year Round') || event.date.includes('Ongoing')) {
      return true;
    }

    // Parse event date range
    const eventDateStr = event.date;
    
    // Simple date checking (you can enhance this based on your needs)
    // For demo, we'll check if event month overlaps with selected range
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    
    const startMonth = start.getMonth();
    const endMonth = end.getMonth();
    
    // Check if event date contains any of the selected months
    for (let i = startMonth; i <= endMonth; i++) {
      if (eventDateStr.includes(months[i])) {
        return true;
      }
    }
    
    return false;
  };

  // Filter available events based on dates
  const availableEvents = events.filter(event => isEventAvailable(event));

  // Sort events
  const sortedEvents = [...availableEvents].sort((a, b) => {
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
    if (startDate && endDate) {
      setSearchPerformed(true);
      console.log('Searching events from', startDate, 'to', endDate);
    } else {
      alert('Please select both start and end dates');
    }
  };

  const handleSelectEvent = (eventId) => {
    if (selectedEvents.includes(eventId)) {
      setSelectedEvents(selectedEvents.filter(id => id !== eventId));
    } else {
      setSelectedEvents([...selectedEvents, eventId]);
    }
  };

  return (
    <>
      <div className="date-filters">
        <div className="date-input">
          <label>Start Date</label>
          <div className="date-field">
            <span>📅</span>
            <input 
              type="date" 
              value={startDate} 
              onChange={(e) => onDateChange('start', e.target.value)}
              placeholder="Select start date"
            />
          </div>
        </div>

        <div className="date-input">
          <label>End Date</label>
          <div className="date-field">
            <span>📅</span>
            <input 
              type="date" 
              value={endDate} 
              onChange={(e) => onDateChange('end', e.target.value)}
              placeholder="Select end date"
            />
          </div>
        </div>

        <button className="search-btn" onClick={handleSearch}>🔍</button>
      </div>

      {searchPerformed && (
        <div className="search-results-info">
          <p>
            Found <strong>{sortedEvents.length}</strong> available events 
            from <strong>{startDate}</strong> to <strong>{endDate}</strong>
          </p>
          {selectedEvents.length > 0 && (
            <p className="selected-info">
              Selected: <strong>{selectedEvents.length}</strong> event(s)
            </p>
          )}
        </div>
      )}

      <div className="events-header">
        <h2>
          {searchPerformed 
            ? `Available Events (${sortedEvents.length})` 
            : 'Upcoming Trending events'}
        </h2>
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

      <div className={`events-grid ${filterView === 'list' ? 'list-view' : ''}`}>
        {sortedEvents.length > 0 ? (
          sortedEvents.map((event) => (
            <div 
              key={event.id} 
              className={`event-card ${selectedEvents.includes(event.id) ? 'selected' : ''}`}
              onClick={() => handleSelectEvent(event.id)}
            >
              <div className="card-image-wrapper">
                <img src={event.image} alt={event.title} />
                
                {/* Selection Checkbox */}
                {searchPerformed && (
                  <div className="selection-checkbox">
                    <input 
                      type="checkbox" 
                      checked={selectedEvents.includes(event.id)}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleSelectEvent(event.id);
                      }}
                    />
                  </div>
                )}
                
                <button 
                  className={`favorite-icon ${event.isFavorite ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(event.id);
                  }}
                >
                  ❤️
                </button>
                
                <div className="card-overlay">
                  <div className="card-rating">
                    ⭐ {event.rating} ({event.ratingCount})
                  </div>
                  <h3>{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <div className="card-footer">
                    <span className="location">📍 {event.location}</span>
                    <span className="price">{event.price}</span>
                  </div>
                </div>
                
                {selectedEvents.includes(event.id) && (
                  <div className="selected-badge">✓ Selected</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>
              {searchPerformed 
                ? 'No events available for selected dates' 
                : 'No events found'}
            </h3>
            <p>
              {searchPerformed 
                ? 'Try selecting different dates or check other categories' 
                : 'Try adjusting your search or filters'}
            </p>
          </div>
        )}
      </div>

      {selectedEvents.length > 0 && (
        <div className="selected-events-bar">
          <p>
            {selectedEvents.length} event(s) selected
          </p>
          <button className="clear-selection-btn" onClick={() => setSelectedEvents([])}>
            Clear Selection
          </button>
        </div>
      )}
    </>
  );
};

export default Step2SelectDates;
