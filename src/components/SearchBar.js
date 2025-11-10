import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    guests: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search data:', searchData);
    // Add search logic here
  };

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <div className="input-wrapper">
            <label>📍 Where to?</label>
            <input
              type="text"
              name="destination"
              placeholder="Search destinations"
              value={searchData.destination}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-wrapper">
            <label>📅 When?</label>
            <input
              type="date"
              name="date"
              value={searchData.date}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-wrapper">
            <label>👥 Guests</label>
            <select name="guests" value={searchData.guests} onChange={handleChange}>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
          </div>
          
          <button type="submit" className="search-btn">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
