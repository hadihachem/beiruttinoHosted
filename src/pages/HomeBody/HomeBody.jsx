import React from 'react';
import './HomeBody.css';
import { Link } from 'react-router-dom';
import { imageLinks } from '../../assets/S3Bucket/5beansAssets';

const HomeBody = () => {
    return (
        <>
            <div className="home-container">
                <img src={imageLinks.header} alt="Beiruttino Banner" />

                <div className="home-buttons-wrapper">
                    <div className="home-buttons">
                        <a
                            href="https://wa.me/96170059598"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn primary"
                        >
                            <img
                                src="https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/jmjs/Beiruttino/Vector.png"
                                alt="WhatsApp"
                            />
                            START AN ORDER
                        </a>

                        <Link to="/about" className="btn secondary">
                            EXPLORE
                        </Link>
                    </div>
                </div>
            </div>

            <div className="home-container2">
                <img src={imageLinks.frame13} alt="Beiruttino Craft" />

                <div className="section2-wrapper">
                    <img src={imageLinks.section2} alt="Beiruttino Biscotti" />

                    <div className="section2-overlay">
                        <h2>WE CRAFT BISCOTTI</h2>
                        <p>
                            Inspired by the baking heritage of Prato, Tuscany, Beiruttino Biscotti are crafted using a classic twice-baked method that delivers a distinctive crunch and rich almond flavor. Every detail reflects our commitment to quality and tradition.
                        </p>
                        <Link to="/about">DISCOVER OUR STORY</Link>
                    </div>
                </div>
            </div>

            <div className="home-container3">
                <img src={imageLinks.logo2} alt="Beiruttino Logo" />
                <img src={imageLinks.frame88} alt="Beiruttino Collection" />
            </div>

            <div className="home-container4">
                <img src={imageLinks.section4} alt="Beiruttino Experience" />
            </div>
        </>
    );
};

export default HomeBody;