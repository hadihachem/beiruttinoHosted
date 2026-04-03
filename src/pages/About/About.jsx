import React, { useEffect, useRef } from 'react';
import './About.css';
import { imageLinks } from '../../assets/S3Bucket/5beansAssets';

const About = () => {
    const sectionsRef = useRef([]);
    const cardsRef = useRef([]);
    const qualityRef = useRef(null);
    const serviceRef = useRef(null);
    const careRef = useRef(null);

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
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const addToSectionsRef = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            // Force make the section visible before scrolling
            sectionRef.current.classList.add('visible');
            
            // Small delay to ensure any layout shifts are accounted for
            setTimeout(() => {
                sectionRef.current.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                    inline: 'nearest'
                });
            }, 100);
        }
    };

    return (
        <div className="about-page">
            <section className="purpose-section">
                <h5 className="purpose-label">OUR PURPOSE</h5>

                <div className="purpose-main">
                    <div className="purpose-text">
                        <h1>Crafted with Care.</h1>
                        <h1>Made to be Shared</h1>
                    </div>

                    <div className="purpose-image">
                        <img src={imageLinks.beruttinoSmallVec || "https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/jmjs/Beiruttino/beruttinoSmallVec.png"} alt="Beiruttino logo" />
                    </div>
                </div>

                <p className="purpose-description">
                    At Beiruttino, great food begins with intention. We focus on quality
                    ingredients, careful craftsmanship, and consistency in every detail
                    creating simple moments meant to be shared.
                </p>
                <div className="purpose-chips">
                    <div className="purpose-chip" onClick={() => scrollToSection(qualityRef)}>
                        Quality
                    </div>
                    <div className="purpose-chip" onClick={() => scrollToSection(serviceRef)}>
                        Service
                    </div>
                    <div className="purpose-chip" onClick={() => scrollToSection(careRef)}>
                        Care
                    </div>
                </div>
            </section>

            <div className="about-content">
                <div className="about-section" ref={(el) => {
                    qualityRef.current = el;
                    addToSectionsRef(el);
                }}>
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
                        />
                    </div>
                </div>

                <div className="about-section reverse" ref={(el) => {
                    serviceRef.current = el;
                    addToSectionsRef(el);
                }}>
                    <div className="about-image">
                        <img
                            src="https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/jmjs/Beiruttino/Frame+19+(1).png"
                            alt="Master baker crafting biscuits"
                            className="styled-image"
                        />
                    </div>
                    <div className="about-text">
                        <h2>SERVICE</h2>
                        <p>
                            Service means being reliable, approachable, and thoughtful in everything we do. From how our products are made to how they are shared, we believe good service builds trust and lasting relationships.
                        </p>
                    </div>
                </div>

                <div className="about-section" ref={(el) => {
                    careRef.current = el;
                    addToSectionsRef(el);
                }}>
                    <div className="about-text">
                        <h2>CARE</h2>
                        <p>
                            Care is at the heart of Beiruttino. We care about our ingredients, our craft, and the people who enjoy our products. It's this care that turns simple food into meaningful moments.
                        </p>
                        <p>
                            We work directly with sustainable farms worldwide, ensuring fair trade practices
                            and supporting local communities. Every Beiruttino biscuit represents not just
                            culinary excellence, but ethical responsibility.
                        </p>
                    </div>
                    <div className="about-image2">
                        <img
                            src="https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/jmjs/Beiruttino/Group+157.png"
                            alt="Sustainable ingredients and packaging"
                            className="styled-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;