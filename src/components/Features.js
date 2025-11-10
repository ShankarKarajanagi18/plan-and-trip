import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🌍',
      title: 'Best Destinations',
      description: 'Carefully curated destinations from around the world'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive pricing with no hidden fees'
    },
    {
      icon: '🛡️',
      title: 'Safe & Secure',
      description: 'Your safety is our top priority'
    },
    {
      icon: '🎯',
      title: 'Easy Booking',
      description: 'Simple and hassle-free booking process'
    },
    {
      icon: '⭐',
      title: 'Top Rated',
      description: 'Thousands of satisfied travelers'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>We make your travel dreams come true</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
