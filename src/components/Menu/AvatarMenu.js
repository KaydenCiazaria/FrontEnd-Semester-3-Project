import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AvatarMenu.css";

const AvatarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsOpen(!isOpen); // Toggle the dropdown
  };

  const handleLogout = () => {
    alert("You've logged out."); // Display logout alert
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div className="avatar-menu">
      <div className="menu-container" onClick={handleMenuClick}>
        <div className="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="user-image">
          <img
            src="https://via.placeholder.com/40" /* Placeholder image for the user */
            alt="User"
          />
        </div>
      </div>
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item" onClick={handleLogout}>
            Log out
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
