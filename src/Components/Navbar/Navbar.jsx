import { useState } from 'react';
import "./Navbar.css";
import { imageLinks } from "../../assets/S3Bucket/5beansAssets";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/" onClick={() => setMenu("home")}>
                    <div className="logo-container">
                        <img src={imageLinks.logo}></img>
                    </div>
                </Link>
                
                {/* Hamburger Menu Button (Mobile Only) */}
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
                
                <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <li>
                        <Link to="/" onClick={() => { setMenu("home"); setMobileMenuOpen(false); }} className={menu === "home" ? "active" : ""}>
                            <span>Biscotti</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => { setMenu("about"); setMobileMenuOpen(false); }} className={menu === "about" ? "active" : ""}>
                            <span>Purpose</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;