import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      review: 'Amazing experience! The trip to Bali was perfectly organized and exceeded all expectations.',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      rating: 5,
      review: 'Professional service and great value for money. Will definitely book again!',
      image: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      name: 'Emma Williams',
      location: 'London, UK',
      rating: 5,
      review: 'The European tour was spectacular. Every detail was taken care of beautifully.',
      image: 'https://i.pravatar.cc/150?img=3'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Travelers Say</h2>
          <p>Real experiences from real travelers</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="review">{testimonial.review}</p>
              <div className="reviewer">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="reviewer-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
