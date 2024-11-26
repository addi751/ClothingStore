import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa'; 

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.loginContainer}>
        <h2 style={styles.heading}>Login</h2>
        <p style={styles.description}>Please enter your Login and your Password</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Username/Email Input */}
          <div style={styles.inputGroup}>
            <FaUser style={styles.icon} />
            <input
              type="text"
              name="username"
              placeholder="Username or Email"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <FaLock style={styles.icon} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          {/* Forgot Password */}
          <a href="/forgot-password" style={styles.forgotPasswordLink}>Forgot password?</a>

          {/* Login Button */}
          <button type="submit" style={styles.loginButton}>Login</button>

          {/* Sign-up with Google */}
          <button style={styles.googleButton}>
            <img src="/images/google-icon.png" alt="Google" style={styles.googleIcon} />
            Sign-up with Google
          </button>
        </form>

        {/* Register Link */}
        <p style={styles.registerText}>
          Not a member? <a href="/register" style={styles.registerLink}>Register</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundImage: 'url(/images/leaves-8641550_1280.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
  },
  loginContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '400px',
  },
  heading: {
    fontSize: '2rem',
    color: '#224F34',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.1rem',
    color: '#6F6A42',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    marginRight: '10px',
    color: '#6F6A42',
  },
  input: {
    border: 'none',
    outline: 'none',
    flexGrow: '1',
    padding: '10px',
    fontSize: '1rem',
    background: 'transparent',
  },
  forgotPasswordLink: {
    display: 'block',
    marginBottom: '20px',
    color: '#007bff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  forgotPasswordLinkHover: {
    color: '#0056b3',
  },
  loginButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#224F34',
    color: 'white',
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  loginButtonHover: {
    backgroundColor: '#1d3e2b',
  },
  googleButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: 'white',
    color: '#444',
    fontSize: '1.1rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  googleIcon: {
    width: '20px',
    height: '20px',
  },
  registerText: {
    marginTop: '20px',
    color: '#6F6A42',
  },
  registerLink: {
    color: '#007bff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  registerLinkHover: {
    color: '#0056b3',
  },
};

export default Login;
