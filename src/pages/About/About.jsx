import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const sectionsRef = useRef([]);
    const cardsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = window.innerHeight * 0.8;

            sectionsRef.current.forEach(section => {
                if (section) {
                    const sectionTop = section.getBoundingClientRect().top;
                    if (sectionTop < triggerBottom) {
                        section.classList.add('visible');
                    }
                }
            });

            cardsRef.current.forEach(card => {
                if (card) {
                    const cardTop = card.getBoundingClientRect().top;
                    if (cardTop < triggerBottom) {
                        card.classList.add('visible');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const addToSectionsRef = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    const addToCardsRef = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <div className="about-page">
            {/* Decorative Elements */}
            <div className="floating-ornament">
                <span style={{ fontSize: '2rem' }}>👑</span>
            </div>
            <div className="floating-ornament">
                <span style={{ fontSize: '2rem' }}>✨</span>
            </div>
            <div className="floating-ornament">
                <span style={{ fontSize: '2rem' }}>⭐</span>
            </div>
            <div className="floating-ornament">
                <span style={{ fontSize: '2rem' }}>🍪</span>
            </div>

            <section className="purpose-section">
                <h5 className="purpose-label">OUR PURPOSE</h5>

                <div className="purpose-main">
                    <div className="purpose-text">
                        <h1>Crafted with Care.</h1>
                        <h1>Made to be Shared</h1>
                    </div>

                    <div className="purpose-image">
                        <img src="https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/jmjs/Beiruttino/ChatGPT+Image+Jan+10%2C+2026%2C+11_01_01+AM+1.png" alt="Beiruttino logo" />
                    </div>
                </div>

                <p className="purpose-description">
                    At Beiruttino, great food begins with intention. We focus on quality
                    ingredients, careful craftsmanship, and consistency in every detail
                    creating simple moments meant to be shared.
                </p>
                <div className="purpose-chips">
                    <div className="purpose-chip">Quality</div>
                    <div className="purpose-chip">Service</div>
                    <div className="purpose-chip">Care</div>
                </div>

            </section>


            {/* Main Content */}
            <div className="about-content">
                {/* Heritage Section */}
                <div className="about-section" ref={addToSectionsRef}>
                    <div className="about-text">
                        <h2>QUALITY</h2>
                        <p>
                            Quality is never an accident. It comes from thoughtful choices, attention to detail, and a commitment to doing things the right way. We focus on consistency, refinement, and respect for the process in everything we create.
                        </p>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/jmjs/Beiruttino/Frame+19.png"
                            alt="Vintage baking tools and recipe books"
                            className="styled-image"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/600x600/1A1A1A/FFFFFF?text=Heritage+Craftsmanship';
                            }}
                        />
                    </div>
                </div>

                {/* Craftsmanship Section */}
                <div className="about-section reverse" ref={addToSectionsRef}>
                    <div className="about-image">
                        <img
                            src="https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/jmjs/Beiruttino/Frame+19+(1).png"
                            alt="Master baker crafting biscuits"
                            className="styled-image"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/600x600/1A1A1A/FFFFFF?text=Master+Craftsmanship';
                            }}
                        />
                    </div>
                    <div className="about-text">
                        <h2>SERVICE</h2>
                        <p>
Service means being reliable, approachable, and thoughtful in everything we do. From how our products are made to how they are shared, we believe good service builds trust and lasting relationships.                        </p>
                        
                    </div>
                </div>

                {/* Innovation Section */}
                <div className="about-section" ref={addToSectionsRef}>
                    <div className="about-text">
                        <h2>CARE</h2>
                        
                        <p>
                            Care is at the heart of Beiruttino. We care about our ingredients, our craft, and the people who enjoy our products. It’s this care that turns simple food into meaningful moments.</p>
                        <p>
                            We work directly with sustainable farms worldwide, ensuring fair trade practices
                            and supporting local communities. Every Beiruttino biscuit represents not just
                            culinary excellence, but ethical responsibility.
                        </p>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/jmjs/Beiruttino/Frame+19+(2).png"
                            alt="Sustainable ingredients and packaging"
                            className="styled-image"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/600x600/1A1A1A/FFFFFF?text=Sustainable+Luxury';
                            }}
                        />
                    </div>
                </div>
            </div>



        </div>
    );
};

export default About;