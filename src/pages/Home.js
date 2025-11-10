import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import TrendingDestination from '../components/TrendingDestination';
import './Home.css';

const Home = () => {
  const trendingRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (trendingRef.current) {
        trendingRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <div ref={trendingRef}>
        <TrendingDestination />
      </div>
    </div>
  );
};

export default Home;
