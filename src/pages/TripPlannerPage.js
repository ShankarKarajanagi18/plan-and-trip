import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Step1SelectLocation from './steps/Step1SelectLocation';
import Step2SelectDates from './steps/Step2SelectDates';
import Step3AddActivities from './steps/Step3AddActivities';
import Step4TripReviews from './steps/Step4TripReviews';
import Step5TripItinerary from './steps/Step5TripItinerary';
import './TripPlannerPage.css';

const TripPlannerPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // const { user } = useAuth();  // Commented out - not used yet
    // const selectedDestination = location.state?.destination;  // Commented out - not used yet


    const [currentStep, setCurrentStep] = useState(1);
    const [startDate, setStartDate] = useState('8 Dec 2024');
    const [endDate, setEndDate] = useState('10 Jan 2025');
    const [selectedLocations] = useState([
        'Shibuya Crossing',
        'Roppongi Hills',
        'Shinjuku Kabukicho'
    ]);

    const [events] = useState([
        // BEACHES
        {
            id: 1,
            title: 'Waikiki Beach',
            date: 'Year Round',
            location: 'Hawaii',
            price: 'FREE Entry Fee',
            distance: '5 km from Honolulu',
            rating: 4.9,
            ratingCount: 1250,
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500',
            isFavorite: false,
            category: 'Beaches'
        },
        {
            id: 2,
            title: 'Maldives Beach Resort',
            date: 'Year Round',
            location: 'Maldives',
            price: '¥15,000',
            distance: '2 km from Airport',
            rating: 5.0,
            ratingCount: 890,
            image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500',
            isFavorite: false,
            category: 'Beaches'
        },
        {
            id: 3,
            title: 'Bali Beaches',
            date: 'Year Round',
            location: 'Indonesia',
            price: 'FREE Entry Fee',
            distance: '10 km from Denpasar',
            rating: 4.8,
            ratingCount: 2100,
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500',
            isFavorite: false,
            category: 'Beaches'
        },

        // ICONIC CITIES
        {
            id: 4,
            title: 'Shibuya Crossing',
            date: 'Year Round',
            location: 'Tokyo',
            price: 'FREE Entry Fee',
            distance: '8 km from Tokyo Station',
            rating: 4.8,
            ratingCount: 3281,
            image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500',
            isFavorite: true,
            category: 'Iconic Cities'
        },
        {
            id: 5,
            title: 'Akihabara',
            date: 'Year Round',
            location: 'Tokyo',
            price: 'FREE Entry Fee',
            distance: '4 km from Tokyo Station',
            rating: 4.7,
            ratingCount: 2195,
            image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500',
            isFavorite: false,
            category: 'Iconic Cities'
        },
        {
            id: 6,
            title: 'Ginza Shopping District',
            date: 'Year Round',
            location: 'Tokyo',
            price: '¥10,000 Shopping',
            distance: '2 km from Tokyo Station',
            rating: 4.7,
            ratingCount: 1850,
            image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=500',
            isFavorite: false,
            category: 'Iconic Cities'
        },
        {
            id: 7,
            title: 'Shinjuku Kabukicho',
            date: 'Year Round',
            location: 'Tokyo',
            price: 'FREE Entry Fee',
            distance: '12 km from Tokyo Station',
            rating: 4.6,
            ratingCount: 1688,
            image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500',
            isFavorite: false,
            category: 'Iconic Cities'
        },
        {
            id: 8,
            title: 'Roppongi Hills',
            date: 'Year Round',
            location: 'Tokyo',
            price: 'FREE Entry Fee',
            distance: '8 km from Tokyo Station',
            rating: 4.8,
            ratingCount: 2156,
            image: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=500',
            isFavorite: false,
            category: 'Iconic Cities'
        },

        // DESERTS
        {
            id: 9,
            title: 'Sahara Desert Tour',
            date: 'October - April',
            location: 'Morocco',
            price: '¥25,000',
            distance: '500 km from Marrakech',
            rating: 4.9,
            ratingCount: 756,
            image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500',
            isFavorite: false,
            category: 'Deserts'
        },
        {
            id: 10,
            title: 'Dubai Desert Safari',
            date: 'Year Round',
            location: 'Dubai',
            price: '¥12,000',
            distance: '45 km from Dubai',
            rating: 4.7,
            ratingCount: 1920,
            image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=500',
            isFavorite: false,
            category: 'Deserts'
        },
        {
            id: 11,
            title: 'Atacama Desert',
            date: 'Year Round',
            location: 'Chile',
            price: '¥18,000',
            distance: '100 km from San Pedro',
            rating: 5.0,
            ratingCount: 645,
            image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500',
            isFavorite: false,
            category: 'Deserts'
        },

        // ADVENTURE
        {
            id: 12,
            title: 'Mount Fuji Hiking',
            date: 'July - September',
            location: 'Japan',
            price: '¥5,000',
            distance: '100 km from Tokyo',
            rating: 4.9,
            ratingCount: 1850,
            image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=500',
            isFavorite: false,
            category: 'Adventure'
        },
        {
            id: 13,
            title: 'Skydiving Experience',
            date: 'Year Round',
            location: 'New Zealand',
            price: '¥30,000',
            distance: '20 km from Queenstown',
            rating: 5.0,
            ratingCount: 567,
            image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500',
            isFavorite: false,
            category: 'Adventure'
        },
        {
            id: 14,
            title: 'Amazon Rainforest Trek',
            date: 'May - October',
            location: 'Brazil',
            price: '¥35,000',
            distance: '50 km from Manaus',
            rating: 4.8,
            ratingCount: 423,
            image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500',
            isFavorite: false,
            category: 'Adventure'
        },
        {
            id: 15,
            title: 'Northern Lights Tour',
            date: 'December - March',
            location: 'Iceland',
            price: '¥22,000',
            distance: '40 km from Reykjavik',
            rating: 4.9,
            ratingCount: 1234,
            image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=500',
            isFavorite: false,
            category: 'Adventure'
        }
    ]);

    const steps = [
        { number: 1, label: 'Select Location' },
        { number: 2, label: 'Select Dates' },
        { number: 3, label: 'Add Travel Buddies' },
        { number: 4, label: 'Trip Reviews' },
        { number: 5, label: 'Trip Preferences' }
    ];

    const handleDateChange = (type, value) => {
        if (type === 'start') setStartDate(value);
        if (type === 'end') setEndDate(value);
    };

    const handleToggleFavorite = (id) => {
        console.log('Toggled favorite:', id);
    };

    const handleStepClick = (stepNumber) => {
        setCurrentStep(stepNumber);
    };

    const handleSelectDates = () => {
        setCurrentStep(2);
    };

    // FIXED: Added navigation to trip summary
    const handleNext = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep + 1);
        } else {
            // Navigate to Trip Plan Summary when on step 5
            navigate('/trip-summary');
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        } else {
            navigate(-1);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <Step1SelectLocation events={events} onToggleFavorite={handleToggleFavorite} />;
            case 2:
                return <Step2SelectDates startDate={startDate} endDate={endDate} events={events} onToggleFavorite={handleToggleFavorite} onDateChange={handleDateChange} />;
            case 3:
                return <Step3AddActivities events={events} onToggleFavorite={handleToggleFavorite} />;
            case 4:
                return <Step4TripReviews />;
            case 5:
                return <Step5TripItinerary />;
            default:
                return <Step1SelectLocation events={events} onToggleFavorite={handleToggleFavorite} />;
        }
    };

    return (
        <div className="trip-planner-page">
            {/* Header */}
            <div className="planner-header">
                <div className="header-logo">
                    
                </div>
            </div>

            {/* Step Navigation */}
            <div className="step-navigation">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className={`step-item ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
                        onClick={() => handleStepClick(step.number)}
                    >
                        <div className="step-number">{step.number}</div>
                        <div className="step-label">{step.label}</div>
                    </div>
                ))}
            </div>

            <div className="planner-content">
                {/* Left Panel - Dynamic Step Content */}
                <div className="events-panel">
                    <div className="events-scroll-area">
                        {renderStepContent()}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="nav-buttons">
                        <button className="nav-btn back-btn" onClick={handleBack}>Back</button>
                        <button className="nav-btn next-btn" onClick={handleNext}>
                            {currentStep === 5 ? 'Create my SMART Trip plan' : 'Next'}
                        </button>
                    </div>
                </div>

                {/* Right Panel - Summarization */}
                <div className="summary-panel">
                    <button className="close-btn" onClick={() => navigate(-1)}>✕</button>
                    <h2>Summarization</h2>

                    <div className="summary-scroll-area">
                        {/* Select Location Section */}
                        <div className="summary-section">
                            <h3>Select Location</h3>
                            {selectedLocations.map((location, index) => (
                                <div key={index} className="location-item">
                                    <span>{location}</span>
                                    <button className="remove-btn">❤️</button>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <button
                            className={`summary-btn ${currentStep >= 2 ? 'completed' : ''}`}
                            onClick={handleSelectDates}
                        >
                            + Select Dates
                        </button>
                        <button
                            className={`summary-btn ${currentStep >= 3 ? 'completed' : ''}`}
                            onClick={() => setCurrentStep(3)}
                        >
                            + Add Travel Partner
                        </button>
                        <button
                            className={`summary-btn ${currentStep >= 4 ? 'completed' : ''}`}
                            onClick={() => setCurrentStep(4)}
                        >
                            + Trip Details
                        </button>
                        <button
                            className={`summary-btn ${currentStep >= 5 ? 'completed' : ''}`}
                            onClick={() => setCurrentStep(5)}
                        >
                            + Final Step
                        </button>
                    </div>

                    <button className="chat-fab">💬</button>
                    <button className="menu-fab">☰</button>
                </div>
            </div>
        </div>
    );
};

export default TripPlannerPage;
