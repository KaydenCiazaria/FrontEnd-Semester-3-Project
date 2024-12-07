// src/components/AuthButtons.js
import React from 'react';
import './AuthButtons.css';
import { useNavigate } from "react-router-dom";

const AuthButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-buttons">
      <button className="login-button" onClick={() => navigate("headerLoggedIn/")}>login</button> 
      {/* change to pop up later */}
      <button className="register-button" onClick={() => navigate("headerPlain/register")}>Register</button>
    </div>
  );
};

export default AuthButtons;