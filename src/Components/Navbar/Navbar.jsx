import { useState, useEffect } from 'react';
import "./Navbar.css";
import { imageLinks } from "../../assets/S3Bucket/5beansAssets";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const getActiveMenuFromPath = (pathname) => {
        switch(pathname) {
            case "/":
                return "home";
            case "/about":
                return "about";
            default:
                return "home";
        }
    };

    const activeMenu = getActiveMenuFromPath(location.pathname);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        closeMobileMenu();
    }, [location]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <Link to="/" className="logo-link">
                        <div className="logo-wrapper">
                            <img src={imageLinks.logo} alt="Beiruttino Logo" className="logo-image" />
                        </div>
                    </Link>
                    
                    <div className="nav-links">
                        <Link 
                            to="/" 
                            className={`nav-link ${activeMenu === "home" ? "active" : ""}`}
                        >
                            Biscotti
                        </Link>
                        <Link 
                            to="/about" 
                            className={`nav-link ${activeMenu === "about" ? "active" : ""}`}
                        >
                            Purpose
                        </Link>

                    </div>
                    
                    <button 
                        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
                        onClick={toggleMobileMenu} 
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <div className="mobile-logo">
                        <img src={imageLinks.logo} alt="Beiruttino Logo" />
                        <span>BEIRUTTINO</span>
                    </div>
                    <button className="mobile-close" onClick={closeMobileMenu}>×</button>
                </div>
                <div className="mobile-menu-body">
                    <Link to="/" onClick={closeMobileMenu} className={activeMenu === "home" ? "active" : ""}>
                        Biscotti
                    </Link>
                    <Link to="/about" onClick={closeMobileMenu} className={activeMenu === "about" ? "active" : ""}>
                        Purpose
                    </Link>
                </div>
            </div>
            
            <div className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
        </>
    );
};

export default Navbar;