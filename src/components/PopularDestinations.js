import React from 'react';
import DestinationCard from './DestinationCard';
import './PopularDestinations.css';

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      price: 899,
      rating: 4.8,
      tours: 15
    },
    {
      id: 2,
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
      price: 699,
      rating: 4.9,
      tours: 12
    },
    {
      id: 3,
      name: 'Tokyo',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      price: 1099,
      rating: 4.7,
      tours: 18
    },
    {
      id: 4,
      name: 'Santorini',
      country: 'Greece',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
      price: 799,
      rating: 4.9,
      tours: 10
    },
    {
      id: 5,
      name: 'Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
      price: 999,
      rating: 4.6,
      tours: 14
    },
    {
      id: 6,
      name: 'Maldives',
      country: 'Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
      price: 1299,
      rating: 5.0,
      tours: 8
    }
  ];

  return (
    <section className="popular-destinations">
      <div className="container">
        <div className="section-header">
          <h2>Popular Destinations</h2>
          <p>Explore our most loved travel destinations around the world</p>
        </div>
        
        <div className="destinations-grid">
          {destinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
