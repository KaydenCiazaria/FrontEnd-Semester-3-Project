import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AvatarMenu.css";
import Pop_Logout from ".././PopUps/PopLogout/PopLogout"; // Import the Pop_Logout component

const AvatarMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for logout modal
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsOpen(!isOpen); // Toggle the dropdown
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true); // Show the Pop_Logout modal
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false); // Close the Pop_Logout modal
  };

  return (
    <div className="avatar-menu">
      {/* Avatar + Menu */}
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

      {/* Dropdown */}
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item" onClick={handleLogoutClick}>
            Log out
          </div>
        </div>
      )}

      {/* Pop_Logout */}
      {showLogoutModal && <Pop_Logout closeModal={closeLogoutModal} />}
    </div>
  );
};

export default AvatarMenu;
