import React from 'react';
import '../styling/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerColumn">
          <h3>Contact Us</h3>
          <p>123 Mobile Street, Tech City</p>
          <p>support@mobilestore.com</p>
          <p>Toll Free: 1-800-123-4567</p>
          <p>Hours: Mon-Sat 9AM-6PM</p>
        </div>
        <div className="footerColumn">
          <h3>Quick Links</h3>
          <p><a href="/shipping">Shipping Policy</a></p>
          <p><a href="/returns">Returns & Refunds</a></p>
          <p><a href="/faq">FAQ</a></p>
          <p><a href="/contact">Contact Us</a></p>
        </div>
        <div className="footerColumn">
          <h3>Shop By Category</h3>
          <p><a href="/smartphones">Smartphones</a></p>
          <p><a href="/accessories">Accessories</a></p>
          <p><a href="/tablets">Tablets</a></p>
          <p><a href="/wearables">Wearables</a></p>
        </div>
        <div className="footerColumn">
          <h3>Stay Connected</h3>
          <div className="newsletterBox">
            <input type="email" placeholder="Your Email Address" />
            <button type="submit">Subscribe</button>
          </div>
          <div className="socialLinks">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Mobile Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;