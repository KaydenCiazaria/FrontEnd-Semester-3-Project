import React from "react";
import "./PopLogout.css";
import { useNavigate } from "react-router-dom";

const PopLogout = ({ closeModal }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirect to <Home /> on 'Yes'
    closeModal();
  };

  return (
    <div className="pop-logout-overlay">
      <div className="pop-logout-container">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <h2>Are you sure?</h2>
        <div className="logout-button-group">
          <button className="logout-button yes-button" onClick={handleLogout}>
            Yes
          </button>
          <button className="logout-button no-button" onClick={closeModal}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopLogout;
