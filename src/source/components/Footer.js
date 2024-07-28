import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h4>About Us</h4>
                    <p>Learn more about our company, values, and mission. We aim to provide the best shopping experience.</p>
                </div>
                <div className="footer-section links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <p>Email: support@shoppingwebsite.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Shopping St, Commerce City, Country</p>
                </div>
                <div className="footer-section social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ShoppingWebsite. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer