import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerStyles.css';

const SellerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Mock authentication - in a real app, this would be an API call
    if (formData.email === 'seller@example.com' && formData.password === 'password123') {
      // Save seller info in localStorage (this would be a token in a real app)
      localStorage.setItem('sellerLoggedIn', 'true');
      localStorage.setItem('sellerEmail', formData.email);
      
      // Show success message
      const successToast = document.createElement('div');
      successToast.className = 'toast toast-success';
      successToast.textContent = 'Login successful!';
      document.body.appendChild(successToast);
      
      // Remove toast after 3 seconds
      setTimeout(() => {
        document.body.removeChild(successToast);
        // Navigate to seller dashboard
        navigate('/seller/dashboard');
      }, 3000);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="seller-login-container">
      <div className="seller-login-card">
        <h2>Seller Login</h2>
        <form onSubmit={handleSubmit} className="seller-login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-helper-text">
          Demo credentials: seller@example.com / password123
        </p>
      </div>
    </div>
  );
};

export default SellerLogin;