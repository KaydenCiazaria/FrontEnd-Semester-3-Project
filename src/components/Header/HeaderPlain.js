// src/components/Header.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';
import logo from '../../assets/images/logo.png';

const HeaderPlain = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="header">
      <div 
        className="logo" 
        onClick={() => navigate("/")} // Navigate to home on click
        style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickable area
      >
        <img src={logo} alt="VillaBooking Logo" />
        <span>VillaBooking.com</span>
      </div>
    </div>
  );
};

export default HeaderPlain;
