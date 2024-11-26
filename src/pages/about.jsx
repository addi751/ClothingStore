import React from 'react';
import Slider from 'react-slick'; 
const About = () => {

 
  const sectionStyle = {
    padding: '50px 0',
    marginBottom: '90px', 
  };

  const topStyle = {
    ...sectionStyle,
    marginTop: '70px', 

  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#224F34',
    textAlign: 'left', 
    fontFamily: 'Poppins, sans-serif',
  };

  const centerHeadingStyle = {
    ...headingStyle,
    textAlign: 'center', 
  };

  const paragraphStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginRight: '10px',
    lineHeight: '1.8',
    color: '#6F6A42',
  };

  const imageStyle = {
    width: '90%',
    height: '400px',
    marginTop: '70px',
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0)',
    transition: 'transform 0.3s ease-in-out',
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div>
      {/* About Us Section */}
      <section className="container" style={topStyle}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 style={headingStyle}>About Us</h2>
            <p style={paragraphStyle}>
              Welcome to Logo – your ultimate destination for cool and trendy fashion! 
              At Logo, we are dedicated to providing the latest styles that resonate 
              with the vibrant and dynamic spirit of today's youth. Our collection is 
              carefully curated to ensure that every piece embodies the cutting-edge 
              trends and timeless coolness that define your unique style.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="/images/IMG-20240723-WA0024.jpg"
              alt="About Us"
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="container-fluid" style={{ backgroundColor: '#f0f0f0', padding: '60px 0', marginBottom: '50px' }}>
        <h2 style={centerHeadingStyle}>Our Mission</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <img
              src="/images/IMG-20240723-WA0026.jpg"
              alt="Our Mission"
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="col-lg-6">
            <p style={paragraphStyle}>
              Our mission is simple: to inspire and empower youngsters to express themselves 
              through fashion. Whether you're looking for the perfect outfit for a night out, 
              a casual day at school, or anything in between, Logo has you covered. We believe 
              in fashion as a form of self-expression, and our diverse range of clothing is 
              designed to cater to every mood and moment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="container" style={sectionStyle}>
        <h2 style={centerHeadingStyle}>Our Team</h2>
        <Slider {...{ dots: true, infinite: true, slidesToShow: 3, slidesToScroll: 1, autoplay: true, arrows: false }}>
          <div>
            <img
              src="/images/fashionable-young-woman-standing-front-blue-backdrop.jpg"
              alt="Team Member 1"
              style={{ ...imageStyle, width: '400px', height: '500px', margin: '0 auto', padding: '10px' }}
            />
          </div>
          <div>
            <img
              src="/images/pleased-young-brunette-caucasian-girl-looks-side.jpg"
              alt="Team Member 2"
              style={{ ...imageStyle, width: '400px', height: '500px', margin: '0 auto', padding: '10px' }}
            />
          </div>
          <div>
            <img
              src="/images/front-view-smiley-woman-posing-while-holding-glasses.jpg"
              alt="Team Member 3"
              style={{ ...imageStyle, width: '400px', height: '500px', margin: '0 auto', padding: '10px' }}
            />
          </div>
          <div>
            <img
              src="/images/smiling-brunette-girl-posing-with-coat.jpg"
              alt="Team Member 4"
              style={{ ...imageStyle, width: '400px', height: '500px', margin: '0 auto', padding: '10px' }}
            />
          </div>
          <div>
            <img
              src="/images/young-serious-thoughtful-teen-girl-doubt-concept.jpg"
              alt="Team Member 5"
              style={{ ...imageStyle, width: '400px', height: '500px', margin: '0 auto', padding: '10px' }}
            />
          </div>
        </Slider>
      </section>

       {/* Newsletter Section */}
      <section className="container-fluid" style={{ backgroundColor: 'white', padding: '60px 0', marginBottom: '50px' }}>
        <div className="container">
          {/* Heading and Paragraph */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={centerHeadingStyle}>Stay Updated</h2>
            <p style={{ ...paragraphStyle, maxWidth: '1000px', margin: '0 auto' }}>
              Sign up for our newsletter to get the latest updates on new arrivals and exclusive deals.
            </p>
          </div>

          {/* Black Block with Input and Button */}
          <div
            style={{
              backgroundColor: '#6F6A42',
              borderRadius: '10px',
              padding: '30px',
              maxWidth: '1100px',
              margin: '0 auto', 
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'left', marginBottom: '20px' }}>
              <h3 style={{ color: 'white', marginBottom: '10px', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Subscribe Now</h3>
              <p style={{ color: 'white', marginBottom: '0px' }}>
                Enter your email address and stay connected with the latest trends.
              </p>
            </div>

            <div style={{ position: 'relative', top: '20px', margin: '0 auto', display: 'flex', width: '70%', height: '60px', fontFamily: 'Poppins, sans-serif' }}>
              <input
                type="email"
                placeholder="Enter email address"
                style={{
                  padding: '15px',
                  width: '100%',
                  border: 'none',
                  borderRadius: '10px', 
                  paddingRight: '150px', 
                  fontSize: '1rem',
                }}
              />
              <button
                style={{
                  position: 'absolute',
                  right: '10px', 
                  top: '8px', 
                  height: 'calc(90% - 10px)', 
                  backgroundColor: '#6F6A42',
                  color: 'white',
                  padding: '0 40px', 
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginRight: '10px', 
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
