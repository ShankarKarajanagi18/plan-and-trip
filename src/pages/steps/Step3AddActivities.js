import React, { useState } from 'react';
import './Step3AddActivities.css';

const Step3AddActivities = () => {
  const [sourceCity, setSourceCity] = useState('same');
  const [travelerName, setTravelerName] = useState('Mohit');
  const [travelerNumber, setTravelerNumber] = useState('+917858926478');
  const [socialMedia, setSocialMedia] = useState('Facebook/ Instagram');
  const [travelingWith, setTravelingWith] = useState([]);
  const [newCompanion, setNewCompanion] = useState('');

  // Predefined companion options
  const companionOptions = ['kids', 'Differently abled', 'Elders', 'Toddler'];

  const handleToggleCompanion = (companion) => {
    if (travelingWith.includes(companion)) {
      // Remove if already added
      setTravelingWith(travelingWith.filter(item => item !== companion));
    } else {
      // Add if not present
      setTravelingWith([...travelingWith, companion]);
    }
  };

  const handleAddCustomCompanion = () => {
    if (newCompanion.trim() && !travelingWith.includes(newCompanion.trim())) {
      setTravelingWith([...travelingWith, newCompanion.trim()]);
      setNewCompanion('');
    }
  };

  const handleRemoveCompanion = (companion) => {
    setTravelingWith(travelingWith.filter(item => item !== companion));
  };

  return (
    <div className="traveller-details-container">
      <div className="traveller-details-card">
        <h2 className="traveller-title">Traveller Details</h2>

        {/* Source City Selection */}
        <div className="source-city-section">
          <label className="radio-option">
            <input
              type="radio"
              name="sourceCity"
              value="same"
              checked={sourceCity === 'same'}
              onChange={(e) => setSourceCity(e.target.value)}
            />
            <span className="radio-label">Same Source City</span>
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="sourceCity"
              value="different"
              checked={sourceCity === 'different'}
              onChange={(e) => setSourceCity(e.target.value)}
            />
            <span className="radio-label">Different Source City</span>
          </label>
        </div>

        {/* Traveler Info */}
        <div className="traveler-info-grid">
          <div className="input-group">
            <label className="input-label">
              <span className="icon">✈️</span>
              Traveler Name
            </label>
            <input
              type="text"
              className="input-field"
              value={travelerName}
              onChange={(e) => setTravelerName(e.target.value)}
              placeholder="Enter name"
            />
          </div>

          <div className="input-group">
            <label className="input-label">
              <span className="icon">📞</span>
              Traveler Number
            </label>
            <input
              type="text"
              className="input-field"
              value={travelerNumber}
              onChange={(e) => setTravelerNumber(e.target.value)}
              placeholder="Enter number"
            />
          </div>

          <div className="input-group full-width">
            <label className="input-label">
              <span className="icon">📱</span>
              Social media link
            </label>
            <input
              type="text"
              className="input-field"
              value={socialMedia}
              onChange={(e) => setSocialMedia(e.target.value)}
              placeholder="Facebook/ Instagram"
            />
          </div>
        </div>

        {/* Traveling With Section */}
        <div className="traveling-with-section">
          <h3 className="section-title">Traveling with</h3>
          
          {/* Companion Option Buttons */}
          <div className="companion-options">
            {companionOptions.map((option, index) => (
              <button
                key={index}
                className={`companion-option-btn ${travelingWith.includes(option) ? 'selected' : ''}`}
                onClick={() => handleToggleCompanion(option)}
              >
                {option}
                {travelingWith.includes(option) && <span className="check-icon">✓</span>}
              </button>
            ))}
          </div>

          {/* Selected Companions */}
          {travelingWith.length > 0 && (
            <div className="selected-companions">
              <p className="selected-label">Selected:</p>
              <div className="companions-list">
                {travelingWith.map((companion, index) => (
                  <span key={index} className="companion-tag">
                    {companion}
                    <button
                      className="remove-tag-btn"
                      onClick={() => handleRemoveCompanion(companion)}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add Custom Companion */}
          <div className="add-companion-section">
            <input
              type="text"
              className="add-companion-input"
              value={newCompanion}
              onChange={(e) => setNewCompanion(e.target.value)}
              placeholder="Add custom traveling companion"
              onKeyPress={(e) => e.key === 'Enter' && handleAddCustomCompanion()}
            />
            <button className="add-more-btn" onClick={handleAddCustomCompanion}>
              <span className="add-icon">+</span>
              Add more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3AddActivities;
