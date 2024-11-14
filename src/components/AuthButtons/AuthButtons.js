// src/components/AuthButtons.js
import React from 'react';
import './AuthButtons.css';

const AuthButtons = () => {
  return (
    <div className="auth-buttons">
      <button className="login-button">Log In</button>
      <button className="register-button">Register</button>
    </div>
  );
};

export default AuthButtons;