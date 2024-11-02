import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const register = (userData) => axios.post(`${API_URL}/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const verifyEmail = (token) => axios.get(`${API_URL}/verify/${token}`);
