import React from 'react';
import './TravelPackages.css';

const TravelPackages = () => {
  const packages = [
    {
      id: 1,
      title: 'Beach Paradise',
      duration: '7 Days / 6 Nights',
      destinations: ['Maldives', 'Bali', 'Phuket'],
      price: 1499,
      features: ['5★ Hotels', 'All Meals', 'Private Transfer', 'Tour Guide'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
    },
    {
      id: 2,
      title: 'European Discovery',
      duration: '10 Days / 9 Nights',
      destinations: ['Paris', 'Rome', 'Barcelona'],
      price: 2299,
      features: ['4★ Hotels', 'Breakfast', 'City Tours', 'Museum Tickets'],
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800'
    },
    {
      id: 3,
      title: 'Asian Adventure',
      duration: '12 Days / 11 Nights',
      destinations: ['Tokyo', 'Bangkok', 'Singapore'],
      price: 1899,
      features: ['3★ Hotels', 'Breakfast', 'Airport Transfer', 'City Guide'],
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800'
    }
  ];

  return (
    <section className="travel-packages">
      <div className="container">
        <div className="section-header">
          <h2>Featured Packages</h2>
          <p>Hand-picked travel packages for your perfect getaway</p>
        </div>
        
        <div className="packages-grid">
          {packages.map(pkg => (
            <div key={pkg.id} className="package-card">
              <div className="package-image">
                <img src={pkg.image} alt={pkg.title} />
                <div className="package-duration">{pkg.duration}</div>
              </div>
              
              <div className="package-content">
                <h3>{pkg.title}</h3>
                <div className="destinations">
                  {pkg.destinations.join(' → ')}
                </div>
                
                <ul className="features-list">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
                
                <div className="package-footer">
                 
                  <button className="btn-book-package">Plan Your SMART Trip</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;
