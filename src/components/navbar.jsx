import React from 'react';
import { Link } from 'react-router-dom'; 
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ 
      background: 'linear-gradient(135deg, #EFE8C2, #F7F3E7)', 
    }}>
      <div className="container d-flex justify-content-between align-items-center">
        
        
        <Link className="navbar-brand fw-bold" to="/" style={{ color: '#224F34', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '1.9rem' }}>
          LOGO
        </Link>
        
        {/*  navbar for mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links: */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center" style={{ gap: '20px', marginLeft: '400px' }}> {/* Added margin-left */}
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/" 
                style={{ 
                  color: '#224F34', 
                  fontFamily: 'Poppins', 
                  fontWeight: 'bold', 
                  fontSize: '1.2rem',
                  textDecoration: 'none', 
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                onMouseOut={(e) => e.currentTarget.style.color = '#224F34'}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/shop" 
                style={{ 
                  color: '#224F34', 
                  fontFamily: 'Poppins', 
                  fontWeight: 'bold', 
                  fontSize: '1.2rem',
                  textDecoration: 'none', 
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                onMouseOut={(e) => e.currentTarget.style.color = '#224F34'}
              >
                SHOP
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/about" 
                style={{ 
                  color: '#224F34', 
                  fontFamily: 'Poppins', 
                  fontWeight: 'bold', 
                  fontSize: '1.2rem',
                  textDecoration: 'none', 
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                onMouseOut={(e) => e.currentTarget.style.color = '#224F34'}
              >
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/contact" 
                style={{ 
                  color: '#224F34', 
                  fontFamily: 'Poppins', 
                  fontWeight: 'bold', 
                  fontSize: '1.2rem',
                  textDecoration: 'none', 
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                onMouseOut={(e) => e.currentTarget.style.color = '#224F34'}
              >
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/cart" className="nav-link position-relative" style={{ color: '#224F34', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' }}>
            {/* Cart Icon */}
            <BsBag size={25} />
            {/*  Badge for number of items in cart */}
            <span className="position-absolute top-50 start-50  badge rounded-pill bg-danger">
              3
            </span>
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/login" className="btn btn-outline-success" style={{ 
            color: '#224F34', 
            width: '80px',
            border: '2px solid ',
            borderColor: '#224F34', 
            fontWeight: 'bold', 
            fontSize: '1.2rem', 
          }}>
            Login
          </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
