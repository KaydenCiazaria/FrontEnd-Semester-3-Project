// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import AvatarMenu from "../Menu/AvatarMenu";
import "./Header.css";

const HeaderLoggedIn = ({ type }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation();
  const typeName = location.state?.type || "";

  const handleInformation = () => {
    navigate("/headerLoggedIn/notification", { state: { type: "Notification" } }); // use id later
  };

  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => navigate("headerLoggedIn/")} // Navigate to home on click
        style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickable area
      >
        <img src="/path/to/logo.png" alt="VillaBooking Logo" />
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
