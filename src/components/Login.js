import React, { useState, useContext } from 'react';
import { login } from '../api';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './auth.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login: userLogin } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      if (response && response.data) {
        userLogin(response.data);
        alert('Login successful!');
      } else {
        alert('Unexpected error. Please try again.');
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        <div className="auth-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;