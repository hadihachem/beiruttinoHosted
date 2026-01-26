import React from 'react';
import './HomeBody.css';
import { Link } from 'react-router-dom';
import { imageLinks } from '../../assets/S3Bucket/5beansAssets';

const HomeBody = () => {
    return (
        <>
            <div className="home-container">
                <img src={imageLinks.header} alt="" />

                <div className="home-buttons-wrapper">
                    <div className="home-buttons">
                        {/* WhatsApp button with icon inside */}
                        <a
                            href="https://wa.me/961XXXXXXXX"
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

                        <a href="/about" className="btn secondary">
                            EXPLORE
                        </a>
                    </div>
                </div>
            </div>


            <div className="home-container2">
                <img src={imageLinks.frame13} alt="" />
                <img src={imageLinks.section2} alt="" />

            </div>

            <div className="home-container3">
                <img src={imageLinks.logo2} alt="" />
                <img src={imageLinks.frame88} alt="" />

            </div>
            <div className="home-container4">
                <img src={imageLinks.section4} alt="" />

            </div>
        </>
    );
};

export default HomeBody;