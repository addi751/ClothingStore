import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaQuoteLeft, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Feedback from '../components/Testimonial'
// import Footer from '../components/Footer'

const Home = () => {
  
  const navigate = useNavigate();
  
  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigates to the product detail page
  };

 //hero section
  const heroSectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 20px',
    background: 'linear-gradient(135deg, #EFE8C2, #F7F3E7)', // Attractive gradient background
    fontFamily: 'Euclid Circular A, sans-serif', // Custom font
  };

  const heroContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'left',
    color: '#6F6A42', // Text color
  };

  const heroImageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#6F6A42', // Image background color
    borderRadius: '15px',
    overflow: 'hidden',
    padding: '20px',
  };

  const heroImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px', // Rounded image corners
    objectFit: 'cover',
  };

  const buttonStyle = {
    backgroundColor: '#6F6A42', // Button background color
    color: '#FFFFFF', // Button text color
    padding: '12px 30px',
    borderRadius: '8px', // Rounded corners
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    marginTop: '20px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#55513D',
    transform: 'scale(1.05)',
  };


  // bestselling section
  const products = [
    { id: 1, name: 'Summer Wind T-shirt', price: '$31.99', rating: 4.2, image: '/images/IMG-20240723-WA0029.jpg' },
    { id: 2, name: 'Tailored Jacket', price: '$41.03', rating: 5.0, image: '/images/IMG-20240723-WA0021.jpg' },
    { id: 3, name: 'Formal Classic Suit', price: '$50.00', rating: 4.0, image: '/images/IMG-20240723-WA0027.jpg' },
    { id: 4, name: 'Classic Top', price: '$24.54', rating: 3.8, image: '/images/IMG-20240723-WA0024.jpg' },
    { id: 5, name: 'White Solid T-shirt', price: '$42.09', rating: 5.0, image: '/images/IMG-20240723-WA0029.jpg' },
    { id: 6, name: 'Formal Jeans', price: '$38.99', rating: 5.0, image: '/images/IMG-20240723-WA0023.jpg' },
    { id: 7, name: 'Product 7', price: '$38.99', rating: 5.0, image: '/images/IMG-20240723-WA0027.jpg' },
    { id: 8, name: 'Product 8', price: '$56.59', rating: 5.0, image: '/images/IMG-20240723-WA0025.jpg' },
  ];

  // State to manage hover for each product button
  const [hoverStates, setHoverStates] = useState(Array(products.length).fill(false));

  // State to manage hover for the "See More" button
  const [seeMoreHover, setSeeMoreHover] = useState(false);

  // Slick Carousel settings
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const carouselItemStyle = {
    padding: '15px',
    transition: 'transform 0.3s',
  };

  const carouselImageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    transition: 'transform 0.3s', 
  };

  const headingStyle = {
    color: '#6F6A42',
    fontFamily: 'Libre Baskerville, serif',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '4rem',
  };

  const productNameStyle = {
    textAlign: 'center',
    fontFamily: 'Libre Baskerville, serif',
  };

  const priceRatingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10px',
    marginTop: '10px',
    fontFamily: 'Libre Baskerville, serif',
  };

  const priceStyle = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  };

  const ratingStyle = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginLeft: '10px',
  };

  const separatorStyle = {
    height: '20px',
    borderLeft: '1px solid #ccc',
    margin: '0 10px',
  };

  // Function to handle hover events
  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  // Reusable button style with hover effect
  const getButtonStyle = (isHovered) => ({
    backgroundColor: isHovered ? '#d3d3d3' : 'white',
    color: '#6F6A42',
    width: '50%',
    border: '1px solid #224F34',
    padding: '12px 24px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    display: 'block',
    margin: '20px auto',
    transition: 'background-color 0.3s ease',
  });

  //bestselling2 section
  const products1 = {
    sale: [
      { id: 1, name: 'Discounted T-shirt', price: '$19.99', rating: 4.5, image:'/images/IMG-20240723-WA0029.jpg' },
      { id: 2, name: 'Sale Jacket', price: '$35.00', rating: 4.8, image: '/images/IMG-20240723-WA0021.jpg' },
      { id: 3, name: 'Bargain Suit', price: '$45.00', rating: 4.0, image: '/images/IMG-20240723-WA0027.jpg' },
      { id: 4, name: 'Special Top', price: '$29.99', rating: 4.3, image: '/images/IMG-20240723-WA0024.jpg' },
      { id: 5, name: 'Promo T-shirt', price: '$20.00', rating: 4.2, image:  '/images/IMG-20240723-WA0029.jpg' },
      { id: 6, name: 'Sale Jeans', price: '$30.00', rating: 4.6, image: '/images/IMG-20240723-WA0023.jpg' },
    ],
    hot: [
      { id: 7, name: 'Hot Item 1', price: '$25.99', rating: 5.0, image: '/images/IMG-20240723-WA0027.jpg'  },
      { id: 8, name: 'Hot Item 2', price: '$30.00', rating: 4.9, image: '/images/IMG-20240723-WA0025.jpg' },
      { id: 9, name: 'Hot Item 3', price: '$22.50', rating: 4.7, image: '/images/IMG-20240723-WA0029.jpg' },
      { id: 10, name: 'Hot Item 4', price: '$18.99', rating: 4.8, image: '/images/IMG-20240723-WA0021.jpg' },
    ],
    newArrival: [
      { id: 11, name: 'New T-shirt', price: '$31.99', rating: 4.2, image: '/images/IMG-20240723-WA0027.jpg' },
      { id: 12, name: 'New Jacket', price: '$41.03', rating: 5.0, image: '/images/IMG-20240723-WA0024.jpg' },
      { id: 13, name: 'New Suit', price: '$50.00', rating: 4.0, image:  '/images/IMG-20240723-WA0029.jpg' },
      { id: 14, name: 'New Top', price: '$24.54', rating: 3.8, image: '/images/IMG-20240723-WA0023.jpg'},
    ],
    accessories: [
      { id: 15, name: 'Accessory 1', price: '$12.99', rating: 4.2, image: '/images/IMG-20240723-WA0027.jpg'  },
      { id: 16, name: 'Accessory 2', price: '$15.99', rating: 4.5, image:  '/images/IMG-20240723-WA0025.jpg' },
      { id: 17, name: 'Accessory 3', price: '$19.99', rating: 4.7, image: 'https://via.placeholder.com/200' },
      { id: 18, name: 'Accessory 4', price: '$22.50', rating: 4.3, image: 'https://via.placeholder.com/200' },
    ],
  };

  const [key, setKey] = useState('sale'); // Default selected tab

//banner section
const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Set a deadline for the offer
    const deadline = new Date().getTime() + 86400000; // 1 day in milliseconds

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      // Calculate time left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      // Update countdown state
      setCountdown({ days, hours, minutes });

      // Clear interval if countdown ends
      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0 });
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

//productshowcase section
const products2 = [
  {
    id: 1,
    name: 'Beenish Mumtaz',
    image: '/images/model2.jpg',
  },
  {
    id: 2,
    name: 'Maria Shabbir',
    image: '/images/model3.jpg',
  },
  {
    id: 3,
    name: 'Aryan Khan',
    image: '/images/model4.jpg',
  },
];

//testimonial section
const testimonials = [
  { id: 1, name: 'Beenish Mumtaz', feedback: 'I absolutely love the quality and style of the clothing. The fit is perfect!', rating: 5, image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Maria Shabbir', feedback: 'The customer experience was exceptional from start to finish. Highly recommend!', rating: 4.5, image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Ayra Khan', feedback: 'The clothes I bought are fashionable and comfortable. Will shop again!', rating: 4.8, image: 'https://via.placeholder.com/100' },
  { id: 4, name: 'Ayra Khan', feedback: 'The clothes I bought are fashionable and comfortable. Will shop again!', rating: 4.8, image: 'https://via.placeholder.com/100' },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="star full-star" style={{ color: '#ffc107' }} />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key={i} className="star half-star" style={{ color: '#ffc107' }} />);
    } else {
      stars.push(<FaRegStar key={i} className="star empty-star" style={{ color: '#ffc107' }} />);
    }
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
      {stars}
    </div>
  );
};

const [activeSlide, setActiveSlide] = useState(0); // Track the current slide

const settings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'ease-in-out',
  beforeChange: (current, next) => setActiveSlide(next), // Update active slide index before change
};

const getBackgroundColor = (index) => {
  const middleIndex = 1; // The middle block will always be at index 1
  if (index === (activeSlide + middleIndex) % testimonials.length) {
    return '#EFE8C2'; 
  }
    return '#fff'; 
};



    return (
      
      <>
      <section className="container-fluid" style={heroSectionStyle}>
        <div className="row align-items-center">

          <div className="col-lg-6" style={heroContentStyle}>
            <h1 className="display-4 fw-bold" style={{ fontSize: '2.5rem' }}>Discover Amazing Products</h1>
            <h4 className="my-4" style={{ fontSize: '1.5rem', color: '#6F6A42' }}>Find the perfect item that suits your style</h4>
            <a
              href="#"
              className="btn btn-primary btn-lg"
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              Explore Now
            </a>
          </div>
  
          <div className="col-lg-6 text-center" style={heroImageContainerStyle}>
            <img
              src="/images/IMG-20240723-WA0030.jpg" 
              alt="Product Image"
              style={heroImageStyle}
            />
          </div>
        </div>
      </section>
   
   {/* bestselling section */}
   <div className="container-fluid my-5">

      <div className="text-center mb-5">
        <h2 style={headingStyle}>Best Selling</h2>
        <p className="text-black">Get in on the trend with our curated selection of best-selling styles</p>
      </div>

      {/* React Slick Carousel */}
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={product.id}>
            <div style={carouselItemStyle}>
              <div 
                style={{ 
                  transform: hoverStates[index] ? 'scale(1.05)' : 'scale(1)', 
                  transition: 'transform 0.3s',
                  overflow: 'hidden'
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={carouselImageStyle}
                />
              </div>
            </div>
            <div className="text-center" style={productNameStyle}>
              <h5>{product.name}</h5>
              <div style={priceRatingStyle}>
                <span style={priceStyle}>{product.price}</span>
                <div style={separatorStyle} />
                <span style={ratingStyle}>{product.rating} ⭐</span>
              </div>
            </div>
            <button
              style={getButtonStyle(hoverStates[index])}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              View Product
            </button>
          </div>
        ))}
      </Slider>

      {/* See More Button */}
      <div className="text-center mt-4 p-5">
        <a
          href="#"
          className="btn"
          style={getButtonStyle(seeMoreHover)} 
          onMouseEnter={() => setSeeMoreHover(true)}
          onMouseLeave={() => setSeeMoreHover(false)}>
          See More <i className="bi bi-arrow-right"></i> 
        </a>
      </div>
    </div>
        {/* bestselling2 section */}
    <div className="container my-5">

      <h2 className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem', color: '#6F6A42', fontFamily: 'Poppins' }}>
        Best Selling
      </h2>

      {/* Links for Categories */}
      <div className="text-center mb-4">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setKey('sale'); }} 
          style={{ 
            margin: '0 15px', 
            color: key === 'sale' ? '#224F34' : 'black', 
            textDecoration: key === 'sale' ? 'underline' : 'none', 
            fontWeight: key === 'sale' ? 'bold' : 'normal' 
          }}
        >
          Sale
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setKey('hot'); }} 
          style={{ 
            margin: '0 15px', 
            color: key === 'hot' ? '#224F34' : 'black', 
            textDecoration: key === 'hot' ? 'underline' : 'none', 
            fontWeight: key === 'hot' ? 'bold' : 'normal' 
          }}
        >
          Hot
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setKey('newArrival'); }} 
          style={{ 
            margin: '0 15px', 
            color: key === 'newArrival' ? '#224F34' : 'black', 
            textDecoration: key === 'newArrival' ? 'underline' : 'none', 
            fontWeight: key === 'newArrival' ? 'bold' : 'normal' 
          }}
        >
          New Arrival
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setKey('accessories'); }} 
          style={{ 
            margin: '0 15px', 
            color: key === 'accessories' ? '#224F34' : 'black', 
            textDecoration: key === 'accessories' ? 'underline' : 'none', 
            fontWeight: key === 'accessories' ? 'bold' : 'normal' 
          }}
        >
          Accessories
        </a>
      </div>

      {/* Products for the selected category */}
      <div className="row">
        {products1[key].map((product) => ( 
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div 
              className="card border-0 rounded"
              style={{ overflow: 'hidden', transition: 'transform 0.3s', cursor: 'pointer' }}
            >
              <div 
                style={{ 
                  transition: 'transform 0.3s',
                  overflow: 'hidden'
                }}
                className="zoom-image-container"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top img-fluid"
                  style={{
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '10px 10px 0 0',
                    transition: 'transform 0.3s ease', 
                  }} 
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} 
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} 
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title" style={{ fontSize: '1.5rem', fontFamily: 'Libre Baskerville', fontWeight: 'bold' }}>{product.name}</h5>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <p className="card-text" style={{ fontSize: '1.2rem', fontFamily: 'Libre Baskerville', fontWeight: 'bold', margin: '0 10px 0 0' }}>{product.price}</p>
                  <div style={{ height: '20px', borderLeft: '1px solid #ccc', margin: '0 10px' }} />
                  <p className="card-rating" style={{ fontSize: '1.2rem', fontFamily: 'Libre Baskerville', fontWeight: 'bold', margin: '0' }}>{product.rating} ⭐</p> {/* Removed the "Rating:" text */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-4">
        <a href="#" className="btn btn-secondary">
          See More <i className="bi bi-arrow-right"></i> 
        </a>
      </div>
    </div>

{/* banner section */}
<div className="container-fluid" style={{ background: 'linear-gradient(to right, #EFE8C2, #FFF)', padding: '40px 0' }}>
      <div className="row justify-content-center align-items-center text-center">

        <div className="col-lg-6 col-md-12">
          <img 
            src="/images/model1.png" 
            alt="Exclusive Offer" 
            className="img-fluid" 
            style={{ borderRadius: '10px', marginBottom: '20px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
          />
        </div>

        <div className="col-lg-6 col-md-12">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#6F6A42', fontFamily: 'Euclid Circular A' }}>Exclusive Offer</h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', color: '#6F6A42', fontFamily: 'Euclid Circular A' }}>
            Unlock the unlimited style upgrade with our exclusive offer. Enjoy savings of up to 40% off on your latest New Arrivals.
          </p>

          <div className="d-flex justify-content-center mb-4">
            {['Days', 'Hours', 'Minutes'].map((label, index) => (
              <div key={label} className="mx-3 text-center" style={{ 
                background: 'white', 
                padding: '15px', 
                borderRadius: '10px', 
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
                transition: 'transform 0.3s' ,
                autoplay: true,
              }}>
                <h4 style={{ margin: '0', fontWeight: 'bold', color: '#224F34' }}>
                  {countdown[label.toLowerCase()]} 
                </h4>
                <small style={{ color: '#224F34' }}>{label}</small>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="#" 
              className="btn btn-primary btn-lg" 
              style={{ backgroundColor: '#6F6A42', color: 'white', transition: 'background-color 0.3s', borderRadius: '5px', border: 'none'}}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5c5a3a')} 
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6F6A42')} 
            >
              Shop Now <i className="bi bi-arrow-right"></i> 
            </a>
          </div>
        </div>
      </div>
    </div>
{/* productshowcase section */}
<div className="container my-5">
      <h2 className="fw-bold text-center mb-4" style={{ color: '#6F6A42', fontFamily: 'Poppins' }}>OUR TEAM</h2>
      <p className="text-center mb-5" style={{ color: '#6F6A42', fontFamily: 'Poppins' }}>
        Meet with our team members.
      </p>

      <div className="row">
        {products2.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div 
              className="card shadow border-light rounded text-center"
              style={{ 
                transition: 'transform 0.3s, box-shadow 0.3s', 
                cursor: 'pointer',
                border: 'none' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)'; 
              }} 
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; 
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)'; 
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top img-fluid"
                style={{ borderRadius: '10px 10px 0 0', height: '500px', objectFit: 'cover' }} 
              />
              <div className="card-body" style={{ backgroundColor: '#f8f9fa', borderRadius: '0 0 10px 10px' }}>
                <h5 className="card-title" style={{ fontFamily: 'Libre Baskerville', fontWeight: 'bold', fontSize: '1.5rem' }}>{product.name}</h5>
                <p className="card-text" style={{ fontFamily: 'Libre Baskerville', fontSize: '1rem' }}>{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-4">
        <a 
          href="#" 
          className="btn btn-primary btn-lg" 
          style={{ 
            backgroundColor: '#6F6A42', 
            color: 'white', 
            transition: 'background-color 0.3s',
            borderRadius: '5px',
            border: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5c5a3a')} 
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6F6A42')} 
        >
          See More
        </a>
      </div>
    </div>
{/* testimonial section */}
<div className="container my-5">
      <h2 className="fw-bold text-center mb-4">What Our Customers Say</h2>
      <p className="text-center text-muted mb-5">
        Real experiences shared by our valued customers.
      </p>
      <Slider {...settings1}>
        {testimonials.map((testimonial, index) => {
          const backgroundColor = getBackgroundColor(index);

          return (
            <div key={testimonial.id} className="p-4">
              <div
                className="testimonial-card shadow-sm rounded text-center p-4"
                style={{
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  height: '100%',
                  backgroundColor, 
                }}
              >
                <FaQuoteLeft className="quote-icon mb-3" style={{ fontSize: '2rem', color: '#ff5722' }} />
                <p className="testimonial-feedback mb-4">"{testimonial.feedback}"</p>
                <div className="testimonial-author">
                  <h5 className="author-name mb-0">{testimonial.name}</h5>
                  <div className="testimonial-rating mt-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    </>
  );
};

        // <BestSelling2 />
        // <Banner />
        // <ProductShowcase />
        // <Feedback />
        // <Footer />

   
export default Home

