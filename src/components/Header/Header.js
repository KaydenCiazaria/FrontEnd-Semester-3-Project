import React from 'react';
import { useNavigate } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import AuthButtons from '../AuthButtons/AuthButtons';
import './Header.css';
import logo from '../../assets/images/logo.png'; // Import the logo

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div 
        className="logo" 
        onClick={() => navigate("/")} 
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="VillaBooking Logo" />
        <span>VillaBooking.com</span>
      </div>
      <SearchBar />
      <div
        className="list-your-properties"
        onClick={() => navigate("headerLoggedIn/property", {state: { type: "My Property" } })}
        style={{cursor: "pointer"}}
      >
        List your Properties?
      </div>

      <AuthButtons />
    </div>
  );
};

export default Header;
