
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InfluencerDashboard.css';

const InfluencerDashboard = () => {
    const navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(2); // Third item open by default
    const [activeCategory, setActiveCategory] = useState('General');

    const dashboardStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/influencerbg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    };

    const testimonials = [
        {
            name: 'Mark Davidson',
            role: 'Influencer',
            avatar: 'https://i.pravatar.cc/150?img=12',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            icon: 'thumbs-up'
        },
        {
            name: 'Hanna Wilson',
            role: 'Influencer',
            avatar: 'https://i.pravatar.cc/150?img=5',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            icon: 'heart'
        },
        {
            name: 'Emily',
            role: 'Traveller',
            avatar: 'https://i.pravatar.cc/150?img=9',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            icon: 'thumbs-up'
        }
    ];

    const influencers = [
        { name: 'Yoona', role: 'Traveler', badge: false, image: 'https://i.pravatar.cc/150?img=1' },
        { name: 'Yoona', role: 'Traveler', badge: false, image: 'https://i.pravatar.cc/150?img=2' },
        { name: 'Shimate', role: 'Influncer', badge: true, image: 'https://i.pravatar.cc/150?img=3' },
        { name: 'Nahi', role: 'Traveler', badge: true, image: 'https://i.pravatar.cc/150?img=4' },
        { name: 'XuaShi', role: 'Influncer', badge: true, image: 'https://i.pravatar.cc/150?img=5' },
        { name: 'Cathay', role: 'Travel', badge: true, image: 'https://i.pravatar.cc/150?img=6' },
        { name: 'Rebecca', role: 'Influncer', badge: true, image: 'https://i.pravatar.cc/150?img=7' },
        { name: 'XuaShi', role: 'Travel', badge: true, image: 'https://i.pravatar.cc/150?img=8' },
        { name: 'Yami', role: 'Influncer', badge: true, image: 'https://i.pravatar.cc/150?img=9' }
    ];

    const faqs = [
        {
            question: 'How do I Become an influencer on your platform?',
            answer: 'To become an influencer on Plan & Trip, click the "Join as Influencer" button and fill out the application form with your details, travel experience, and social media profiles. Our team will review your application within 3-5 business days. Once approved, you can start creating itineraries, sharing travel tips, and building your community.'
        },
        {
            question: 'Which platform do you support?',
            answer: 'Plan & Trip is a web-based platform accessible from any device with a browser. We support desktop, tablet, and mobile devices. You can also connect your Instagram, YouTube, and other social media accounts to showcase your travel content and grow your influence.'
        },
        {
            question: 'How can I find influencers that match my criteria?',
            answer: 'On our platform, you can use the search tool to filter the list of influencers based on the industry or niche you\'re interested in. We provide detailed filters that help you identify individuals with expertise and alignment with your business goals.'
        },
        {
            question: 'How do I know if an influencer is a reliable choice?',
            answer: 'All influencers on Plan & Trip are verified and rated by our community. You can check their profile to see their experience level, number of successful trips organized, traveler reviews, completion rate, and badges earned. We also display their response time and booking success rate to help you make informed decisions.'
        },
        {
            question: 'How will I earn after becoming an influencer?',
            answer: 'As a Plan & Trip influencer, you earn through multiple streams: commission on every itinerary sold (15-25%), tips from satisfied travelers, paid collaborations with travel brands, and bonuses for high-performing content. Top influencers can also join our exclusive ESOP program and earn equity in the company. Payments are processed monthly via bank transfer or PayPal.'
        },
        {
            question: 'What are some tips for using an influencer platform?',
            answer: 'To succeed on our platform: 1) Create detailed, authentic itineraries based on your real experiences, 2) Respond promptly to traveler inquiries, 3) Share high-quality photos and videos, 4) Engage with your community regularly, 5) Keep your availability calendar updated, 6) Collect and showcase positive reviews, and 7) Participate in our monthly challenges to increase visibility.'
        }
    ];


    return (
        <div className="influencer-dashboard" style={dashboardStyle}>
            <div className="dashboard-overlay"></div>

            <div className="dashboard-content">
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">Earn While You Explore! 🌍✈️</h1>
                        <p className="hero-description">
                            Turn your passion for travel into a rewarding career! With the Plan & trip
                            Influencer Program, you can create inspiring itineraries based on your own
                            adventures, connect with a global audience, and help fellow travellers craft
                            unforgettable journeys. The more your itineraries sell, the more you earn!
                        </p>
                        <h2 className="hero-subtitle">Start sharing, start earning</h2>
                        <button className="apply-button" onClick={() => navigate('/apply-influencer')}>
                            Apply Now!
                        </button>
                    </div>

                    <div className="hero-images">
                        <div className="image-card card-1">
                            <img src="influencer-1.jpg" alt="Travel" />
                            <p className="image-caption">@travelwithme</p>
                        </div>
                        <div className="image-card card-2">
                            <img src="influencer-2.jpg" alt="Adventure" />
                            <p className="image-caption">@adventureseeker</p>
                        </div>
                        <div className="image-card card-3">
                            <img src="influencer-3.jpg" alt="Explorer" />
                            <p className="image-caption">@wanderlust</p>
                        </div>
                    </div>
                </div>

                {/* How to Become Influencer Section */}
                <section className="become-influencer-section">
                    <h2 className="section-title">How to become influencer</h2>

                    <div className="become-grid">
                        <div className="become-card blue">
                            <div className="become-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                                    <path d="M6 21v-2c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M17 10l2 2 3-3" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3>Request Your Influencer Profile</h3>
                            <p>Fill in your details, and let our team assess the right fit for you! We're looking for authentic travellers who align with our values and want to be part of a growing community of responsible explorers.</p>
                        </div>

                        <div className="become-card pink">
                            <div className="become-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M9 9h6M9 12h6M9 15h3" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3>Create Inspiring Itineraries</h3>
                            <p>Craft practical travel plans tailored to different needs, share expert tips, and guide fellow travellers. Build your personal brand and earn more as you grow. Plus, top influencers get the chance to join our exclusive ESOP program!</p>
                        </div>

                        <div className="become-card peach">
                            <div className="become-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3>Build A Travel Community</h3>
                            <p>Connect with like-minded travellers, plan expeditions, and lead adventures —whether it's hiking, road trips, or unique getaways. And the best part? You earn for every effort you put in!</p>
                        </div>

                        <div className="become-card light-blue">
                            <div className="become-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3>Share Your Knowledge</h3>
                            <p>Write engaging blogs, create insightful articles, or produce interactive videos to establish yourself as a top travel influencer. The higher your influencer level, the better your earning potential!</p>
                        </div>


                    </div>
                </section>

                {/* Success Stories Section */}
                <section className="testimonials-section">
                    <h2 className="section-title">Success Stories</h2>
                    <p className="section-subtitle">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                    </p>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="testimonial-header">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                                    <div className="testimonial-info">
                                        <h3>{testimonial.name}</h3>
                                        <p>{testimonial.role}</p>
                                    </div>
                                    <div className={`testimonial-icon ${testimonial.icon}`}>
                                        {testimonial.icon === 'heart' ? '❤️' : '👍'}
                                    </div>
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                            </div>
                        ))}
                    </div>

                    <button className="show-more-btn orange">Show More</button>
                </section>

                {/* Influencer of Month Section */}
                <section className="influencer-month-section">
                    <h2 className="section-title">Influencer of month</h2>

                    <div className="influencer-scroll">
                        {influencers.map((influencer, index) => (
                            <div key={index} className="influencer-card-small">
                                <img src={influencer.image} alt={influencer.name} />
                                <h4>{influencer.name} {influencer.badge && '⭐'}</h4>
                                <p>{influencer.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Weekly Highlight Section */}
                {/* Weekly Highlight Section */}
                <section
                    className="weekly-highlight-section"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/userlogin.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="weekly-highlight-overlay"></div>

                    <div className="weekly-highlight-content">
                        <h2 className="section-title-white">Weekly Highlights</h2>

                        <div className="highlight-grid">
                            <div className="highlight-card">
                                <div className="highlight-badge">Travel</div>
                                <div className="highlight-avatars">
                                    <img src="https://i.pravatar.cc/80?img=11" alt="User 1" />
                                    <img src="https://i.pravatar.cc/80?img=12" alt="User 2" />
                                    <img src="https://i.pravatar.cc/80?img=13" alt="User 3" />
                                </div>
                                <h3>Mudit Helped 5 Number Of Travelers This Week.</h3>
                                <button className="check-out-btn">Check Out</button>
                                <div className="highlight-reactions">
                                    <span className="reaction-icon">👍</span>
                                    <span className="reaction-icon">❤️</span>
                                </div>
                            </div>

                            <div className="highlight-card">
                                <div className="highlight-badge">Influencer</div>
                                <div className="highlight-featured">
                                    <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400" alt="Trekking" />
                                    <img src="https://i.pravatar.cc/120?img=14" alt="Ashwani" className="featured-avatar" />
                                </div>
                                <h3>Ashwani Led Trekkers To Climb Highest Mountain Of Karnataka</h3>
                                <button className="check-out-btn">Check Out</button>
                                <div className="highlight-reactions">
                                    <span className="reaction-icon">👍</span>
                                    <span className="reaction-icon">❤️</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* FAQ Section */}
                <section className="faq-section">
                    <h2 className="section-title">Frequently asked questions</h2>

                    <div className="faq-categories">
                        {['General', 'General', 'General', 'General'].map((cat, idx) => (
                            <button
                                key={idx}
                                className={`faq-category-btn ${activeCategory === cat && idx === 0 ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                                <button className="faq-question" onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}>
                                    <span>{faq.question}</span>
                                    <span className="faq-icon">{activeFAQ === index ? '▲' : '▼'}</span>
                                </button>
                                {activeFAQ === index && faq.answer && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Floating Action Buttons */}
            <div className="floating-actions">
                <button className="fab-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2" />
                    </svg>
                </button>
                <button className="fab-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <line x1="4" y1="6" x2="20" y2="6" stroke="white" strokeWidth="2" />
                        <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" />
                        <line x1="4" y1="18" x2="20" y2="18" stroke="white" strokeWidth="2" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default InfluencerDashboard;