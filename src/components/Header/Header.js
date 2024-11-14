// src/components/Header.js
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import AuthButtons from '../AuthButtons/AuthButtons';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="VillaBooking Logo" />
        <span>VillaBooking.com</span>
      </div>
      <SearchBar />
      <AuthButtons />
    </div>
  );
};

export default Header;
