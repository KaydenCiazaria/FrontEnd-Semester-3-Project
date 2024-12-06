// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import AvatarMenu from "../Menu/AvatarMenu";
import "./Header.css";

const HeaderLoggedIn = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => navigate("/")} // Navigate to home on click
        style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickable area
      >
        <img src="/path/to/logo.png" alt="VillaBooking Logo" />
        <span>VillaBooking.com</span>
      </div>
      <SearchBar />

      <div
        className="notification"
        onClick={() => navigate("/headerLoggedIn/notification")}
        style={{ cursor: "pointer" }}
      >
        🔔
      </div>
      <AvatarMenu />
    </div>
  );
};

export default HeaderLoggedIn;
