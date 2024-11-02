import React, { useState } from 'react';
import { register } from '../api';
import { Link } from 'react-router-dom'; // Don't forget to import Link
import './auth.css';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      if (response && response.data) {
        alert('Registration successful! Please check your email for verification.');
      } else {
        alert('Unexpected error. Please try again.');
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Register</button>
        <div className="auth-link">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;