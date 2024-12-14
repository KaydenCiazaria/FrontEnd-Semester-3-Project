// src/components/Header.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import AvatarMenu from "../Menu/AvatarMenu";
import "./Header.css";
import logo from '../../assets/images/logo.png';

const HeaderLoggedIn = ({ type }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation();
  const typeName = location.state?.type || "";

  const handleInformation = () => {
    if (location.pathname.startsWith("/headerLoggedIn/property")) {
      navigate("/headerLoggedIn/notificationOwner", { state: { type: "Notification" } });
    } else {
      navigate("/headerLoggedIn/notificationRenter", { state: { type: "Notification" } }); // use id later
    }
  };

  // Function to handle logo click with conditional navigation
  const handleLogoClick = () => {
    if (location.pathname.startsWith("/headerLoggedIn/property")) {
      navigate("/headerLoggedIn/property", { state: { type: "My Property" } });
    } else {
      navigate("/headerLoggedIn/");
    }
  };

  return (
    <div className="header">
      <div
        className="logo"
        onClick={handleLogoClick} // Call the new function here
        style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickable area
      >
        <img src={logo} alt="VillaBooking Logo" />
        <span>VillaBooking.com</span>
      </div>
      {typeName ? (
        <div className="user-name"><h1>{typeName}</h1></div>
      ) : (
        <SearchBar />
      )}
      <div
        className="notification"
        onClick={handleInformation}
        style={{ cursor: "pointer" }}
      >
        🔔
      </div>
      <AvatarMenu />
    </div>
  );
};

export default HeaderLoggedIn;
