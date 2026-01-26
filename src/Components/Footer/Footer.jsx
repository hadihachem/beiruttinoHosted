import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
        <footer className="footer">
            {/* Decorative Element */}
            <div className="footer-decoration">
                🍪
            </div>

            <div className="footer-content">
                {/* Top Section */}
                <div className="footer-top">
                    {/* Brand Section */}


                    {/* Quick Links Section */}
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
                                        <span>About Us</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>


                    </div>

                    {/* Contact & Newsletter Section */}
                    <div className="contact-section">
                        <div className="contact-info">
                            <h3>Contact Us</h3>
                            <div className="contact-details">
                                {/* <div className="contact-item">
                                    <span className="contact-icon">📍</span>
                                    <span>123 Luxury Avenue<br />Beirut, Lebanon</span>
                                </div> */}
                                {/* <div className="contact-item">
                                    <span className="contact-icon">📞</span>
                                    <span>+961 1 234 567</span>
                                </div> */}
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
                        © 2026 <strong>Beiruttino</strong> Luxury Biscuits. All rights reserved.
                    </div>

                </div>
                
            </div>
            <div className="footer-brand-section">
                    <img src="https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/jmjs/Beiruttino/Group+156.png" alt="Beiruttino Logo" />
                </div>
        </footer>
    );
};

export default Footer;