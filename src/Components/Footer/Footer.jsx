import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { imageLinks } from '../../assets/S3Bucket/5beansAssets';

const Footer = () => {

        const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-links-section">
                        <div className="footer-links">
                            <ul>
                                <li>
                                    <Link to="/">
                                        <span className="link-icon">→</span>
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about">
                                        <span className="link-icon">→</span>
                                        <span>Purpose</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-section">
                        <div className="contact-info">
                            <h3>Contact Us</h3>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <span className="contact-icon">✉️</span>
                                    <span>support@beiruttino.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © {currentYear} <strong>Beiruttino</strong> Luxury Biscuits. All rights reserved.
                    </div>
                </div>
            </div>
            <div className="footer-brand-section">
                <img src={imageLinks.logo} alt="Beiruttino Logo" />
            </div>
        </footer>
    );
};

export default Footer;