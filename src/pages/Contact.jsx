import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        console.log('Form submitted successfully:', formData);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setLoading(false);
      }, 2000);
    } else {
      setErrors(validationErrors);
      setSuccessMessage('');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Us</h2>
      {successMessage && <p style={successMessageStyle}>{successMessage}</p>}
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Name</label>
          <div style={inputWrapperStyle}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter your name"
            />
          </div>
          {errors.name && <span style={errorStyle}>{errors.name}</span>}
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Email</label>
          <div style={inputWrapperStyle}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter your email"
            />
          </div>
          {errors.email && <span style={errorStyle}>{errors.email}</span>}
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Message</label>
          <div style={inputWrapperStyle}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="Your message here..."
            />
          </div>
          {errors.message && <span style={errorStyle}>{errors.message}</span>}
        </div>

        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

const containerStyle = {
  maxWidth: '600px',
  margin: '60px auto',
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 5px 30px rgba(255, 204, 102, 1)',
  background: 'linear-gradient(to left, #6F6A42 ,#EFE8C2 ',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '30px',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '2.5rem',
  color: '#224F34',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputGroupStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  fontFamily: 'Poppins, sans-serif',
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '5px',
  overflow: 'hidden',
  transition: 'border-color 0.3s',
};

const inputStyle = {
  padding: '10px',
  fontFamily: 'Poppins, sans-serif',
  border: 'none',
  width: '100%',
  fontSize: '1rem',
  outline: 'none',
};

const textareaStyle = {
  padding: '10px',
  fontFamily: 'Poppins, sans-serif',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '100%',
  height: '150px',
  fontSize: '1rem',
  outline: 'none',
};

const buttonStyle = {
  padding: '10px',
  fontFamily: 'Poppins, sans-serif',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#6F6A42',
  color: '#ffffff',
  fontSize: '1.2rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const successMessageStyle = {
  color: 'green',
  textAlign: 'center',
  fontSize: '1.1rem',
  marginBottom: '20px',
};

const errorStyle = {
  color: 'red',
  fontSize: '0.9rem',
  marginTop: '5px',
};

// Hover for input and textarea
const inputFocusStyle = {
  borderColor: '#6F6A42',
};

export default ContactPage;
