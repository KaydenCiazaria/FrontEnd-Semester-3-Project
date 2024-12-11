import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './VillaCard.css';

const VillaCard = ({ villa }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    // Check if the current URL contains "headerLoggedIn"
    if (location.pathname.startsWith("/headerLoggedIn")) {
      navigate("/headerLoggedIn/villaInformation", { state: { villa } }); // Navigate to the specific path
    } else {
      navigate("/VillaInformation", { state: { villa } }); // Default navigation
    }
  };

  return (
    <div
      className="villa-card"
      onClick={handleNavigation}
      style={{ cursor: "pointer" }}
    >
      <img src={villa.image} alt={`${villa.title} Image`} className="villa-image" />
      <div className="villa-details">
        <h3>{villa.title}</h3>
        <p>Price: {villa.price}</p>
        <p>Rating: {villa.rating} ⭐</p>
        <p>Address: {villa.address}</p>
        <p>Tags: {villa.tags.join(", ")}</p>
      </div>
    </div>
  );
};

export default VillaCard;
