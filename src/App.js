import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EmailVerification from './components/EmailVerification';
import { AuthProvider } from './context/AuthContext';
const App = () => {
  return (
    <div className="App">
      <header className='welcome-header'>
        <h1>Welcome to KL University Portal</h1>
      </header>
    
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/verify/:token" element={<EmailVerification />} />
        </Routes>
      </AuthProvider>
    </Router>
    </div>
  );
};

export default App;
