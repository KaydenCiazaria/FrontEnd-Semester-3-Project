import React, { useState } from "react";
import "./AuthButtons.css";
import PopLogin from ".././PopUps/PopLogin/PopLogin"; // Import the PopLogin component

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

      {/* Render PopLogin when isLoginOpen is true */}
      {isLoginOpen && <PopLogin closeModal={closeModal} />}
    </div>
  );
};

export default AuthButtons;
