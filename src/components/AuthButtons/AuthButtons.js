import React, { useState } from "react";
import "./AuthButtons.css";
import Pop_Login from ".././Pop_Ups/Pop_Login/Pop_Login"; // Import the Pop_Login component

const AuthButtons = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to handle modal visibility

  const handleLoginClick = () => {
    setIsLoginOpen(true); // Open the login modal
  };

  const closeModal = () => {
    setIsLoginOpen(false); // Close the modal
  };

  return (
    <div className="auth-buttons">
      <button className="login-button" onClick={handleLoginClick}>
        Login
      </button>
      <button
        className="register-button"
        onClick={() => window.location.href = "headerPlain/register"} // Direct navigation for Register
      >
        Register
      </button>

      {/* Render Pop_Login when isLoginOpen is true */}
      {isLoginOpen && <Pop_Login closeModal={closeModal} />}
    </div>
  );
};

export default AuthButtons;
