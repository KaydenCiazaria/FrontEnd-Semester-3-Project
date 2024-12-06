// src/components/AuthButtons.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AvatarMenu.css";

const AvatarMenu = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleLogout = () => {
    alert("You've logged out."); // Display logout alert
    navigate("/"); // Navigate to the homepage
  };
  return (
    <div
      className="box-menu"
      onClick={handleLogout}
      style={{ cursor: "pointer" }}
    >
      <div className="hamburger">---</div>
      <div className="image-placeholder">
        <img src="" alt={"User Images"} className="user-image" />
      </div>
    </div>
  );
};

export default AvatarMenu;
