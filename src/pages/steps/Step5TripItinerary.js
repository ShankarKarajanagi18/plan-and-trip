import React, { useState } from 'react';
import './Step5TripItinerary.css';

const Step5TripItinerary = () => {
  const [activeSidebar, setActiveSidebar] = useState('activities');
  const [activeTab, setActiveTab] = useState('myInterests');
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [notInterested, setNotInterested] = useState([]);
  
  // Stay Preferences
  const [selectedStars, setSelectedStars] = useState(3);
  const [userRating, setUserRating] = useState('3.5 to 4');
  const [stayCategory, setStayCategory] = useState('Hotel');
  const [placeType, setPlaceType] = useState('Modern');
  
  // Dietary Preferences
  const [selectedCuisines, setSelectedCuisines] = useState(['mexican', 'indian']);
  const [diningPlace, setDiningPlace] = useState('Rooftop');
  const [restaurantType, setRestaurantType] = useState('Modern');

  const interests = [
    { id: 1, name: 'Shibuya Crossing', location: 'Tokyo', rating: 4.8, image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400' },
    { id: 2, name: 'Tokyo Tower', location: 'Tokyo', rating: 4.7, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
    { id: 3, name: 'Senso-ji Temple', location: 'Tokyo', rating: 4.9, image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400' },
    { id: 4, name: 'Shinjuku', location: 'Tokyo', rating: 4.6, image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400' },
    { id: 5, name: 'Akihabara', location: 'Tokyo', rating: 4.7, image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400' },
    { id: 6, name: 'Tsukiji Outer', location: 'Tokyo', rating: 4.8, image: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=400' },
    { id: 7, name: 'Ginza', location: 'Tokyo', rating: 4.5, image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=400' },
    { id: 8, name: 'Harajuku', location: 'Tokyo', rating: 4.8, image: 'https://images.unsplash.com/photo-1545579149-d817073296b6?w=400' }
  ];

  const cuisineOptions = [
    { id: 'chinese', name: 'Chinese', icon: '🥢' },
    { id: 'mexican', name: 'Mexican', icon: '🌮' },
    { id: 'italian', name: 'Italin', icon: '🍝' },
    { id: 'greek', name: 'Greek', icon: '🥗' },
    { id: 'french', name: 'French', icon: '🥖' },
    { id: 'thai', name: 'Thai', icon: '🍜' },
    { id: 'indian', name: 'Indian', icon: '🍛' },
    { id: 'mediterranean', name: 'Mediter..', icon: '🥙' }
  ];

  const handleInterestToggle = (id, type) => {
    if (type === 'interest') {
      if (selectedInterests.includes(id)) {
        setSelectedInterests(selectedInterests.filter(item => item !== id));
      } else {
        setSelectedInterests([...selectedInterests, id]);
        setNotInterested(notInterested.filter(item => item !== id));
      }
    } else {
      if (notInterested.includes(id)) {
        setNotInterested(notInterested.filter(item => item !== id));
      } else {
        setNotInterested([...notInterested, id]);
        setSelectedInterests(selectedInterests.filter(item => item !== id));
      }
    }
  };

  const handleCuisineToggle = (cuisineId) => {
    if (selectedCuisines.includes(cuisineId)) {
      setSelectedCuisines(selectedCuisines.filter(id => id !== cuisineId));
    } else {
      setSelectedCuisines([...selectedCuisines, cuisineId]);
    }
  };

  return (
    <div className="trip-preferences-container">
      <div className="preferences-header">
        <h2>Trip Preferences</h2>
      </div>

      <div className="preferences-layout">
        {/* Left Sidebar */}
        <div className="preferences-sidebar">
          <div
            className={`sidebar-item ${activeSidebar === 'activities' ? 'active' : ''}`}
            onClick={() => setActiveSidebar('activities')}
          >
            <span className="check-icon">✓</span>
            <span>Activities & Inclusions</span>
          </div>
          <div
            className={`sidebar-item ${activeSidebar === 'dietary' ? 'active' : ''}`}
            onClick={() => setActiveSidebar('dietary')}
          >
            <span className="icon">🍽️</span>
            <span>Dietry Preferences</span>
          </div>
          <div
            className={`sidebar-item ${activeSidebar === 'stay' ? 'active' : ''}`}
            onClick={() => setActiveSidebar('stay')}
          >
            <span className="icon">🏨</span>
            <span>Stay Preferences</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="preferences-main-content">
          {/* Activities & Inclusions Section */}
          {activeSidebar === 'activities' && (
            <div className="preferences-main">
              <div className="tabs-container">
                <button
                  className={`tab-btn ${activeTab === 'myInterests' ? 'active' : ''}`}
                  onClick={() => setActiveTab('myInterests')}
                >
                  My Interests
                </button>
                <button
                  className={`tab-btn ${activeTab === 'notInterested' ? 'active' : ''}`}
                  onClick={() => setActiveTab('notInterested')}
                >
                  Not Interested in
                </button>
              </div>

              {activeTab === 'myInterests' && (
                <div className="interests-grid">
                  {interests.map((interest) => (
                    <div
                      key={interest.id}
                      className={`interest-card ${selectedInterests.includes(interest.id) ? 'selected' : ''}`}
                    >
                      <div className="interest-image">
                        <img src={interest.image} alt={interest.name} />
                        <span className="rating-badge">{interest.rating}</span>
                      </div>
                      <div className="interest-info">
                        <h4>{interest.name}</h4>
                        <p>{interest.location}</p>
                        <div className="interest-actions">
                          <button
                            className={`action-btn ${selectedInterests.includes(interest.id) ? 'active' : ''}`}
                            onClick={() => handleInterestToggle(interest.id, 'interest')}
                          >
                            {selectedInterests.includes(interest.id) ? '✓' : '+'}
                          </button>
                          <button
                            className={`action-btn remove ${notInterested.includes(interest.id) ? 'active' : ''}`}
                            onClick={() => handleInterestToggle(interest.id, 'notInterested')}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'notInterested' && (
                <div className="interests-grid">
                  {notInterested.length > 0 ? (
                    interests
                      .filter(interest => notInterested.includes(interest.id))
                      .map((interest) => (
                        <div key={interest.id} className="interest-card not-interested-card">
                          <div className="interest-image">
                            <img src={interest.image} alt={interest.name} style={{ opacity: 0.5 }} />
                            <span className="rating-badge">{interest.rating}</span>
                          </div>
                          <div className="interest-info">
                            <h4>{interest.name}</h4>
                            <p>{interest.location}</p>
                            <button
                              className="restore-btn"
                              onClick={() => handleInterestToggle(interest.id, 'notInterested')}
                            >
                              Restore
                            </button>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="empty-state">
                      <p>No items marked as not interested</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Stay Preferences Section */}
          {activeSidebar === 'stay' && (
            <div className="stay-preferences-section">
              <h3>Hotels & Stays Preferences</h3>
              
              <div className="preference-group">
                <label>Type of star</label>
                <div className="star-selector">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className={`star-btn ${selectedStars === star ? 'active' : ''}`}
                      onClick={() => setSelectedStars(star)}
                    >
                      {'⭐'.repeat(star)}
                      <span className="star-number">{star}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="preference-group">
                <label>User Rating</label>
                <div className="rating-options">
                  {['3 to 3.5', '3.5 to 4', '4.5 and 4.5 +'].map((rating) => (
                    <button
                      key={rating}
                      className={`rating-btn ${userRating === rating ? 'active' : ''}`}
                      onClick={() => setUserRating(rating)}
                    >
                      <span className="star-icon">⭐</span>
                      {rating}
                    </button>
                  ))}
                </div>
              </div>

              <div className="preference-group">
                <label>Stay Categories</label>
                <div className="category-options">
                  {['Hotel', 'Resorts', 'Home Stay', 'Shags'].map((category) => (
                    <button
                      key={category}
                      className={`category-btn ${stayCategory === category ? 'active' : ''}`}
                      onClick={() => setStayCategory(category)}
                    >
                      <div className="category-icon-img"></div>
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="preference-group">
                <label>Type of places</label>
                <div className="place-type-options">
                  {['Boutique', 'Historic', 'Modern'].map((type) => (
                    <button
                      key={type}
                      className={`place-type-btn ${placeType === type ? 'active' : ''}`}
                      onClick={() => setPlaceType(type)}
                    >
                      <div className="place-type-icon"></div>
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Dietary Preferences Section */}
          {activeSidebar === 'dietary' && (
            <div className="food-preferences-section">
              <h3>Food Preferences</h3>
              
              <div className="preference-group">
                <label>Cuisines Type</label>
                <div className="cuisine-grid">
                  {cuisineOptions.map((cuisine) => (
                    <button
                      key={cuisine.id}
                      className={`cuisine-btn ${selectedCuisines.includes(cuisine.id) ? 'active' : ''}`}
                      onClick={() => handleCuisineToggle(cuisine.id)}
                    >
                      <span className="cuisine-icon">{cuisine.icon}</span>
                      {cuisine.name}
                    </button>
                  ))}
                  <button className="add-btn">
                    <span>➕</span>
                    Add+
                  </button>
                </div>
              </div>

              <div className="preference-group">
                <label>Type of Places</label>
                <div className="dining-place-options">
                  {['Indoor', 'Outdoor', 'Rooftop'].map((place) => (
                    <button
                      key={place}
                      className={`dining-place-btn ${diningPlace === place ? 'active' : ''}`}
                      onClick={() => setDiningPlace(place)}
                    >
                      <div className="dining-icon"></div>
                      {place}
                    </button>
                  ))}
                  <button className="add-btn">
                    <span>➕</span>
                    Add+
                  </button>
                </div>
              </div>

              <div className="preference-group">
                <label>Type of Restaurant</label>
                <div className="restaurant-type-options">
                  {['Luxury', 'Fine Dine', 'Historic', 'Modern'].map((type) => (
                    <button
                      key={type}
                      className={`restaurant-type-btn ${restaurantType === type ? 'active' : ''}`}
                      onClick={() => setRestaurantType(type)}
                    >
                      <div className="restaurant-icon"></div>
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step5TripItinerary;
