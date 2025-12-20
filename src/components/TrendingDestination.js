import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './TrendingDestination.css';


const TrendingDestination = ({ showMenuIcon = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [infoModalDestination, setInfoModalDestination] = useState(null);
  const [likedDestinations, setLikedDestinations] = useState({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // New state for detailed card view
  const [showDetailedCard, setShowDetailedCard] = useState(false);
  const [detailedCardIndex, setDetailedCardIndex] = useState(0);


  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAuth();


  const menuCategories = [
    { id: 1, name: 'Beaches', icon: '🏝️' },
    { id: 2, name: 'Deserts', icon: '🌵' },
    { id: 3, name: 'Mountains', icon: '⛰️' },
    { id: 4, name: 'Iconic Cities', icon: '🏛️' }
  ];


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
      price: 1200,
      detailedInfo: 'Seoul is the capital of South Korea and a fascinating blend of ancient traditions and cutting-edge technology. Visit historic palaces like Gyeongbokgung, explore vibrant neighborhoods like Myeongdong and Hongdae, and experience world-class cuisine from street food to fine dining.'
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
      price: 1500,
      detailedInfo: 'Singapore is a modern marvel featuring iconic landmarks like Marina Bay Sands, Gardens by the Bay, and Sentosa Island. Experience diverse cultures in neighborhoods like Chinatown, Little India, and Kampong Glam while enjoying world-class shopping and dining.'
    },
    {
      id: 3,
      name: 'Nara, Japan',
      description: "A cultural haven with ancient temples and picturesque gardens",
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80',
      distance: '1.2 M',
      visitors: '50',
      rating: '15',
      icon: '⛩️',
      price: 1400,
      detailedInfo: 'Nara, Japan\'s first permanent capital, is home to friendly deer that roam freely in Nara Park. Visit the impressive Todai-ji Temple housing a giant bronze Buddha, explore traditional gardens, and witness the beauty of cherry blossoms in spring.'
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
      price: 1100,
      detailedInfo: 'Taipei combines modern skyscrapers with traditional temples and vibrant night markets. Visit the iconic Taipei 101, explore historic temples, soak in hot springs at Beitou, and savor authentic Taiwanese street food at bustling night markets like Shilin and Raohe.'
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
      price: 1000,
      detailedInfo: 'Hangzhou is famous for the scenic West Lake, a UNESCO World Heritage site surrounded by temples, pagodas, and gardens. Experience traditional tea culture at the Longjing Tea plantations, explore ancient Buddhist temples, and enjoy the natural beauty that has inspired poets for centuries.'
    }
  ];


  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };


  const handleNext = () => {
    setCurrentIndex((prev) => (prev === prev === destinations.length - 1 ? 0 : prev + 1));
  };


  const handleBookNow = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    navigate(`/trip-planner/${destinations[currentIndex].id}`, {
      state: { destination: destinations[currentIndex] }
    });
  };


  const handleLoginRedirect = () => {
    setShowLoginModal(false);
    navigate('/login');
  };


  const handleCategoryClick = (category) => {
    setIsMenuOpen(false);
    navigate(`/destinations/${category.name.toLowerCase()}`);
  };


  const handleInfoClick = (destination) => {
    setInfoModalDestination(destination);
    setShowInfoModal(true);
  };


  const handleLikeClick = (destinationId) => {
    setLikedDestinations(prev => ({
      ...prev,
      [destinationId]: !prev[destinationId]
    }));
  };


  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };


  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };


  const handleSearchSubmit = (e) => {
    e.preventDefault();


    const trimmedQuery = searchQuery.trim();


    if (!trimmedQuery) {
      alert('Please enter a search term');
      return;
    }


    setIsSearchOpen(false);
    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    setSearchQuery('');
  };

  // New handler for clicking on card to show detailed view
  const handleCardClick = (index) => {
    const position = (index - currentIndex + destinations.length) % destinations.length;
    if (position > destinations.length / 2) {
      return;
    }
    const isCenter = position === 0;
    if (isCenter) {
      setDetailedCardIndex(index);
      setShowDetailedCard(true);
    }
  };

  // Navigation handlers for detailed card view
  const handleDetailedCardPrev = () => {
    setDetailedCardIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const handleDetailedCardNext = () => {
    setDetailedCardIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  // Book now handler for detailed card view
  const handleDetailedCardBookNow = () => {
    if (!isLoggedIn) {
      setShowDetailedCard(false);
      setShowLoginModal(true);
      return;
    }
    navigate(`/trip-planner/${destinations[detailedCardIndex].id}`, {
      state: { destination: destinations[detailedCardIndex] }
    });
  };


  const getCardStyle = (index) => {
    let position = (index - currentIndex + destinations.length) % destinations.length;
    if (position > destinations.length / 2) {
      position = position - destinations.length;
    }
    const isCenter = position === 0;
    const scale = isCenter ? 1 : 0.86 - Math.abs(position) * 0.07;
    const translateX = position * 220;
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


  // Background slideshow images (from public folder)
  const bgImages = ['/influeLogin.jpg', '/daybg.jpg', '/tdbg.jpg'];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % bgImages.length);
    }, 6000); // change every 6s
    return () => clearInterval(id);
  }, []);


  return (
    <>
      <section className="trending-destination">
        {/* Background slideshow (crossfade) */}
        <div className="bg-slideshow" aria-hidden="true">
          {bgImages.map((img, i) => (
            <div
              key={img}
              className={`bg-slide ${i === bgIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        {showMenuIcon && (
          <div className={`left-sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="sidebar-menu-items">
              {menuCategories.map((category, index) => (
                <div
                  key={category.id}
                  className={`sidebar-menu-item ${index === 3 ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="sidebar-icon">{category.icon}</div>
                  <div className="sidebar-name">{category.name}</div>
                </div>
              ))}
            </div>
            <div className="sidebar-close-btn" onClick={() => setIsMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                <path d="M15 9L9 15M9 9L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        )}


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
                  onClick={() => handleCardClick(index)}
                >
                  <div className="card-image-container">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="card-image"
                    />


                    {/* Info and Like Icons */}
                    <div className="card-action-icons">
                      <button
                        className="icon-btn info-icon-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInfoClick(destination);
                        }}
                        aria-label="Show information"
                      >
                        <img src="/info.png" alt="Info" />
                      </button>
                      <button
                        className={`icon-btn like-icon-btn ${likedDestinations[destination.id] ? 'liked' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLikeClick(destination.id);
                        }}
                        aria-label={likedDestinations[destination.id] ? "Unlike" : "Like"}
                      >
                        <img src="/like.png" alt="Like" />
                      </button>
                    </div>


                    <div className="icon-badge">
                      <span className="destination-icon">{destination.icon}</span>
                    </div>


                    <div className="stats-container">
                      <div className="stat-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{destination.distance}</span>
                      </div>


                      <div className="stat-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{destination.visitors}</span>
                      </div>


                      <div className="stat-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" strokeWidth="2" />
                          <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" />
                        </svg>
                        <span>{destination.rating}</span>
                      </div>
                    </div>


                    <div className="card-content">
                      <div className="location-info">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="10" r="3" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="22.08" x2="12" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Plan your SMART trip</span>
          </button>
        </div>


        <div className="side-buttons">
          <button className="side-btn search-btn" aria-label="Search" onClick={handleSearchOpen}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>


          <button className="side-btn chat-btn" aria-label="Chat">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>


          <button className="side-btn menu-btn" aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Detailed Card View Modal */}
        {showDetailedCard && (
          <div className="detailed-card-overlay" onClick={() => setShowDetailedCard(false)}>
            <div className="detailed-card-modal" onClick={(e) => e.stopPropagation()}>


              <button className="detailed-nav-arrow detailed-nav-left" onClick={handleDetailedCardPrev}>
                ‹
              </button>

              <div className="detailed-card-content">
                <div className="detailed-card-image-container">
                  <img
                    src={destinations[detailedCardIndex].image}
                    alt={destinations[detailedCardIndex].name}
                    className="detailed-card-image"
                  />

                  {/* Action Icons */}
                  <div className="detailed-card-action-icons">
                    <button
                      className="detailed-icon-btn detailed-info-icon-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleInfoClick(destinations[detailedCardIndex]);
                      }}
                    >
                      <img src="/info.png" alt="Info" />
                    </button>
                    <button
                      className={`detailed-icon-btn detailed-like-icon-btn ${likedDestinations[destinations[detailedCardIndex].id] ? 'liked' : ''
                        }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLikeClick(destinations[detailedCardIndex].id);
                      }}
                    >
                      <img src="/like.png" alt="Like" />
                    </button>
                  </div>

                  {/* Bottom Content */}
                  <div className="detailed-card-bottom">
                    <div className="detailed-location-info">
                      <h2 className="detailed-location-name">{destinations[detailedCardIndex].name}</h2>
                      <p className="detailed-location-description">
                        {destinations[detailedCardIndex].description}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="detailed-plan-trip-btn" onClick={handleDetailedCardBookNow}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="3.27 6.96 12 12.01 20.73 6.96"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="12"
                      y1="22.08"
                      x2="12"
                      y2="12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Plan your SMART trip</span>
                </button>
              </div>

              <button className="detailed-nav-arrow detailed-nav-right" onClick={handleDetailedCardNext}>
                ›
              </button>

              {/* Bottom Right Icons */}
              <div className="detailed-bottom-icons">
                <button className="detailed-bottom-icon-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="2" />
                    <polyline points="9 22 9 12 15 12 15 22" stroke="white" strokeWidth="2" />
                  </svg>
                </button>
                <button className="detailed-bottom-icon-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" />
                    <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" />
                    <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}


        {/* Info Modal */}
        {showInfoModal && infoModalDestination && (
          <div className="info-modal-overlay" onClick={() => setShowInfoModal(false)}>
            <div className="info-modal" onClick={(e) => e.stopPropagation()}>
              <button className="info-modal-close" onClick={() => setShowInfoModal(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div className="info-modal-content">
                <div className="info-modal-icon">{infoModalDestination.icon}</div>
                <h2>{infoModalDestination.name}</h2>
                <p className="info-modal-description">{infoModalDestination.detailedInfo}</p>
                <div className="info-modal-stats">
                  <div className="info-stat">
                    <span className="info-stat-label">Distance</span>
                    <span className="info-stat-value">{infoModalDestination.distance}</span>
                  </div>
                  <div className="info-stat">
                    <span className="info-stat-label">Visitors</span>
                    <span className="info-stat-value">{infoModalDestination.visitors}K+</span>
                  </div>
                  <div className="info-stat">
                    <span className="info-stat-label">Price from</span>
                    <span className="info-stat-value">${infoModalDestination.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Detailed Card View Modal */}
        {showDetailedCard && (
          <div className="detailed-card-overlay" onClick={() => setShowDetailedCard(false)}>
            <div className="detailed-card-wrapper" onClick={(e) => e.stopPropagation()}>

              {/* Left Panel with Details */}
              <div className="detailed-left-panel">
                <h2 className="panel-title">Why {destinations[detailedCardIndex].name.split(',')[1]?.trim() || destinations[detailedCardIndex].name} Suits You</h2>

                <div className="panel-icons">
                  <div className="panel-icon-item">{destinations[detailedCardIndex].icon}</div>
                  <div className="panel-icon-item">⛩️</div>
                </div>

                <div className="panel-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#f59e0b" strokeWidth="2" />
                    <circle cx="12" cy="10" r="3" stroke="#f59e0b" strokeWidth="2" />
                  </svg>
                  <span>{destinations[detailedCardIndex].name.split(',')[1]?.trim() || destinations[detailedCardIndex].name}</span>
                  <span className="panel-temp">6°C 🌙</span>
                </div>

                <div className="panel-ratings">
                  <div className="rating-item">
                    <span className="rating-label">User Rating</span>
                    <div className="rating-stars">
                      <span className="stars">⭐⭐⭐⭐</span>
                      <span className="rating-value">4.0</span>
                    </div>
                  </div>
                  <div className="rating-item">
                    <span className="rating-label">Safety Rating</span>
                    <div className="rating-stars">
                      <span className="stars">⭐⭐⭐⭐⭐</span>
                      <span className="rating-value">5.0</span>
                    </div>
                  </div>
                </div>

                <p className="panel-description">
                  {destinations[detailedCardIndex].detailedInfo}
                  <button className="read-more-btn">Read More..</button>
                </p>

                <div className="panel-best-time">
                  <h4>Best time to visit</h4>
                  <div className="time-slots">
                    <span className="time-slot">Mar - Apr</span>
                    <span className="time-divider">|</span>
                    <span className="time-slot">Oct - Nov</span>
                  </div>
                </div>

                <div className="panel-stats">
                  <div className="stat-item">
                    <span className="stat-label">People Visited</span>
                    <span className="stat-value">5M+</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Top Activities For You</span>
                    <span className="stat-value">2K+</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Itineraries Available</span>
                    <span className="stat-value">55+</span>
                  </div>
                </div>
              </div>

              {/* Left Navigation Arrow */}
              <button className="detailed-nav-arrow detailed-nav-left" onClick={handleDetailedCardPrev}>
               ←
              </button>

              {/* Main Destination Card */}
              <div className="detailed-destination-card">
                <div className="detailed-card-image-container">
                  <img
                    src={destinations[detailedCardIndex].image}
                    alt={destinations[detailedCardIndex].name}
                    className="detailed-card-image"
                  />

                  {/* Card Action Icons - Top Right */}
                  <div className="detailed-card-icons">
                    <button
                      className={`detailed-action-icon like-icon ${likedDestinations[destinations[detailedCardIndex].id] ? 'liked' : ''
                        }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLikeClick(destinations[detailedCardIndex].id);
                      }}
                    >
                      <img src="/like.png" alt="Like" />
                    </button>
                    <button
                      className="detailed-action-icon info-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleInfoClick(destinations[detailedCardIndex]);
                      }}
                    >
                      <img src="/info.png" alt="Info" />
                    </button>
                  </div>

                  {/* Bottom Text Content with Gradient */}
                  <div className="detailed-card-bottom-content">
                    <h3 className="detailed-card-title">{destinations[detailedCardIndex].name}</h3>
                    <p className="detailed-card-desc">{destinations[detailedCardIndex].description}</p>
                  </div>
                </div>
              </div>

              {/* Right Navigation Arrow */}
              <button className="detailed-nav-arrow detailed-nav-right" onClick={handleDetailedCardNext}>
              →
              </button>

              {/* Plan Trip Button - Below Card */}
              <button className="detailed-plan-btn" onClick={handleDetailedCardBookNow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="3.27 6.96 12 12.01 20.73 6.96"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="12"
                    y1="22.08"
                    x2="12"
                    y2="12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Plan your SMART trip</span>
              </button>

              {/* Bottom Right Action Icons */}
              <div className="detailed-bottom-actions">
                <button className="detailed-bottom-btn back-btn" onClick={() => setShowDetailedCard(false)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 12H5M12 19l-7-7 7-7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="detailed-bottom-btn menu-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}


        {/* Login Modal */}
        {showLoginModal && (
          <div className="login-required-overlay" onClick={() => setShowLoginModal(false)}>
            <div className="login-required-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-icon-container">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="url(#gradient)" strokeWidth="2" />
                  <path d="M12 8v4M12 16h.01" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#764ba2" />
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


      {/* Search Overlay */}
      {isSearchOpen && (
        <div
          className="search-overlay"
          style={{
            backgroundImage: "url('/search.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="search-overlay-content">
            <button className="search-close-btn" onClick={handleSearchClose} aria-label="Close search">
              ×
            </button>
            <h2 className="search-overlay-title">Explore the World</h2>
            <form onSubmit={handleSearchSubmit} className="search-overlay-form">
              <div className="search-input-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="search-input-icon">
                  <circle cx="11" cy="11" r="8" stroke="#667eea" strokeWidth="2" />
                  <path d="m21 21-4.35-4.35" stroke="#667eea" strokeWidth="2" />
                </svg>
                <input
                  type="text"
                  className="search-overlay-input"
                  placeholder="Where do you want to go? (e.g., Paris, beaches, food tours)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="search-submit-btn" aria-label="Search">
                  →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


    </>
  );
};


export default TrendingDestination;
