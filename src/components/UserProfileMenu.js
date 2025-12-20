import React, { useState } from 'react';
import './UserProfileMenu.css';

const UserProfileMenu = ({ isOpen, onClose, userName, userEmail }) => {
  const [activeSection, setActiveSection] = useState('profile');

  if (!isOpen) return null;

  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: 'home' },
    { id: 'preferences', label: 'My preferences', icon: 'settings' },
    { id: 'partners', label: 'My travel partners', icon: 'users' },
    { id: 'essentials', label: 'My essentials', icon: 'briefcase' },
    { id: 'rewards', label: 'My Rewards', icon: 'award' },
    { id: 'plans', label: 'My plans', icon: 'map' },
    { id: 'memories', label: 'My travel memories', icon: 'camera' },
    { id: 'wallet', label: 'My wallet', icon: 'wallet' },
    { id: 'support', label: 'Support & guidance', icon: 'help' },
    { id: 'security', label: 'My Security', icon: 'shield' },
    { id: 'settings', label: 'Application Settings', icon: 'sliders' },
  ];

  const renderIcon = (iconName) => {
    const icons = {
      home: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      settings: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6m0 6v6m8.66-13.66l-4.24 4.24m-4.24 4.24l-4.24 4.24M23 12h-6m-6 0H1m20.66 8.66l-4.24-4.24m-4.24-4.24l-4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      users: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      briefcase: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      award: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      map: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="8" y1="2" x2="8" y2="18" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="6" x2="16" y2="22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      camera: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      wallet: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 12a2 2 0 0 0 0 4h4v-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      help: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      shield: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      sliders: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="4" y1="21" x2="4" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="4" y1="10" x2="4" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12" y1="21" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12" y1="8" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="20" y1="21" x2="20" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="20" y1="12" x2="20" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="1" y1="14" x2="7" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="9" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="17" y1="16" x2="23" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    };
    return icons[iconName] || icons.home;
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection userName={userName} userEmail={userEmail} />;
      case 'preferences':
        return <PreferencesSection />;
      case 'partners':
        return <PartnersSection />;
      case 'essentials':
        return <EssentialsSection />;
      default:
        return <ComingSoonSection title={menuItems.find(item => item.id === activeSection)?.label} />;
    }
  };

  return (
    <div className="profile-menu-overlay">
      <div className="profile-menu-container">
        {/* Sidebar */}
        <div className="profile-sidebar">
          <div className="sidebar-menu">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
              >
                <span className="menu-icon">{renderIcon(item.icon)}</span>
                <span className="menu-label">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="profile-content">
          {renderContent()}
        </div>

        {/* Right Sidebar - Statistics */}
        <div className="profile-stats-sidebar">
          <StatisticsPanel userName={userName} />
          
          {/* Action Buttons */}
          <div className="action-buttons">
            
            <button onClick={onClose} className="action-btn back-btn" aria-label="Go back">
              <span className="icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="12 19 5 12 12 5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            {/* removed: menu action button (not needed) */}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileSection = ({ userName, userEmail }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">My Profile</h2>
      
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            defaultValue={userName}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone number</label>
          <input
            type="tel"
            defaultValue="+91 7698954623"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email ID</label>
          <input
            type="email"
            defaultValue={userEmail}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Location</label>
          <input
            type="text"
            defaultValue="Bangalore"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Age</label>
          <input
            type="number"
            defaultValue="29"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Gender</label>
          <select className="form-input">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Social Media Link 1</label>
          <input
            type="url"
            defaultValue="www.facebook.com/travelplace.lkt1"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Social Media Link 2</label>
          <input
            type="url"
            defaultValue="www.instagram.com/TravelLeisure"
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

const PreferencesSection = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">My preferences</h2>
      
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Budget Category</label>
          <select className="form-input">
            <option>2-3 Lakhs</option>
            <option>Below 1 Lakh</option>
            <option>1-2 Lakhs</option>
            <option>3-5 Lakhs</option>
            <option>Above 5 Lakhs</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">commute/transport preferences</label>
          <select className="form-input">
            <option>Cruise and Train</option>
            <option>Flight</option>
            <option>Bus</option>
            <option>Car</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">stay preferences</label>
          <select className="form-input">
            <option>City Centers</option>
            <option>Beach Resorts</option>
            <option>Mountain Lodges</option>
            <option>Boutique Hotels</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">trip category</label>
          <select className="form-input">
            <option>Family</option>
            <option>Solo</option>
            <option>Couple</option>
            <option>Friends</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Food preference</label>
          <select className="form-input">
            <option>Veg, Jain</option>
            <option>Vegetarian</option>
            <option>Non-Vegetarian</option>
            <option>Vegan</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const PartnersSection = () => {
  const partners = [
    { name: 'Anu', trips: '35', color: '#8B3A3A' },
    { name: 'Jyoo', trips: '28', color: '#2D7A6E' }
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">My travel partners</h2>
      
      <div className="partners-header">
        <h3 className="partners-subtitle">Partners from past bookings</h3>
        <div className="partners-list">
          {partners.map((partner, index) => (
            <div key={index} className="partner-badge" style={{ backgroundColor: partner.color }}>
              <span className="partner-name">{partner.name}</span>
              <span className="partner-trips">{partner.trips}</span>
              <button className="partner-add-btn">+</button>
            </div>
          ))}
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            defaultValue="Anu"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone number</label>
          <input
            type="tel"
            defaultValue="+91 7698954623"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email ID</label>
          <input
            type="email"
            defaultValue="Anu01@gmail.com"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Location</label>
          <input
            type="text"
            defaultValue="Bangalore"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Age</label>
          <input
            type="number"
            defaultValue="29"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Gender</label>
          <select className="form-input">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Social Media Link 1</label>
          <input
            type="url"
            defaultValue="www.facebook.com/travelplace.lkt1"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Social Media Link 2</label>
          <input
            type="url"
            defaultValue="www.instagram.com/TravelLeisure"
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

const EssentialsSection = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">My essentials</h2>
      
      <div className="essentials-form">
        <div className="form-group full-width">
          <label className="form-label">Card Name</label>
          <input
            type="text"
            defaultValue="jyoo"
            className="form-input"
          />
        </div>

        <div className="form-group full-width">
          <label className="form-label">Card Number</label>
          <div className="card-input-wrapper">
            <input
              type="text"
              defaultValue="5784 9968 6789 0234"
              className="form-input"
            />
            <div className="card-logo">
              <div className="mastercard-circle red"></div>
              <div className="mastercard-circle yellow"></div>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Expiry</label>
            <input
              type="text"
              defaultValue="04 / 26"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">CCV Code</label>
            <input
              type="text"
              defaultValue="654"
              className="form-input"
            />
          </div>

          <div className="form-group coupon-group">
            <label className="form-label">Coupon Code</label>
            <div className="coupon-input-wrapper">
              <input
                type="text"
                defaultValue="GODFREY-20-OFF"
                className="form-input"
              />
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatisticsPanel = ({ userName }) => {
  return (
    <div className="statistics-panel">
      <h3 className="stats-title">My Statistics</h3>
      
      <div className="user-info">
        <div className="user-avatar-large">
          <img 
            src={`https://ui-avatars.com/api/?name=${userName}&background=f97316&color=fff`} 
            alt={userName} 
          />
        </div>
        <div className="user-details">
          <p className="user-name-large">{userName}</p>
          <p className="user-age">29</p>
        </div>
      </div>

      <div className="stats-list">
        <div className="stat-item">
          <p className="stat-label">Countries Visited</p>
          <p className="stat-value">21</p>
        </div>

        <div className="stat-item">
          <p className="stat-label">Iteneries Viewed</p>
          <p className="stat-value">144</p>
        </div>

        <div className="stat-item">
          <p className="stat-label">Iteneries Planned</p>
          <p className="stat-value">35</p>
        </div>
      </div>
    </div>
  );
};

const ComingSoonSection = ({ title }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">{title}</h2>
      <div className="coming-soon">
        <p>Coming Soon...</p>
      </div>
    </div>
  );
};

export default UserProfileMenu;