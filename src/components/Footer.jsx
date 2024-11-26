import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail(''); 
  };

  const footerStyle = {
    backgroundColor: '#6F6A42', 
    color: '#f8f9fa', 
    padding: '60px 0', 
    borderTop: '1px solid #444',
    fontFamily: 'Poppins, sans-serif',
  };

  const footerTitleStyle = {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    marginBottom: '20px',
    color: '#f8f9fa', 
  };

  const linkStyle = {
    color: '#ccc', 
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  const socialIconStyle = {
    marginRight: '15px',
    color: '#ccc',
    fontSize: '1.5rem',
    transition: 'color 0.3s ease',
  };

  const inputFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const inputStyle = {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#444',
    color: '#fff',
  };

  const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#f8f9fa',
    color: '#333',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const socialContainerStyle = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-start',
    marginTop: '20px',
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 style={footerTitleStyle}>LOGO</h5>
            {/* <p style={{ color: '#ccc', lineHeight: '1.8' }}>
              Your go-to store for the latest fashion trends. We bring you the best clothing with the finest quality.
            </p> */}
            <h5 style={footerTitleStyle} className="mt-4">Follow Us</h5>
            <div style={socialContainerStyle}>
              <a href="https://facebook.com" style={socialIconStyle}>
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" style={socialIconStyle}>
                <FaTwitter />
              </a>
              <a href="https://instagram.com" style={socialIconStyle}>
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" style={socialIconStyle}>
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-2 col-md-6 mb-4 ">
            <h5 style={footerTitleStyle}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#products" style={linkStyle}>Products</a></li>
              <li><a href="#overview" style={linkStyle}>Overview</a></li>
              <li><a href="#pricing" style={linkStyle}>Pricing</a></li>
              <li><a href="#releases" style={linkStyle}>Releases</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 style={footerTitleStyle}>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#shop" style={linkStyle}>Shop</a></li>
              <li><a href="#contact" style={linkStyle}>Contact</a></li>
              <li><a href="#news" style={linkStyle}>News</a></li>
              <li><a href="#support" style={linkStyle}>Support</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 style={footerTitleStyle}>Stay Up To Date</h5>
            <form onSubmit={handleSubmit} style={inputFormStyle}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center py-4" style={{ borderTop: '1px solid #444', marginTop: '40px' }}>
          <p className="text-muted mb-0">
            &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
