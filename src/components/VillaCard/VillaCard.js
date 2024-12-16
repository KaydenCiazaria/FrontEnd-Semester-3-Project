import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './VillaCard.css';

const VillaCard = ({ villa }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    // Determine the navigation path based on current location
    const basePath = location.pathname.startsWith("/headerLoggedIn")
      ? `/headerLoggedIn/villaInformation/${villa.id}`
      : `/VillaInformation/${villa.id}`;

    navigate(basePath, { state: { villa } });
  };

  return (
    <div
      className="villa-card"
      onClick={handleNavigation}
      style={{ cursor: "pointer" }}
      aria-label={`View details for ${villa.title}`}
    >
      <img 
        src={villa.image} 
        alt={`${villa.title} Image`} 
        className="villa-image" 
      />
      <div className="villa-details">
        <h3 className="villa-title">{villa.title}</h3>
        <p className="villa-price">Price: {villa.price}</p>
        <p className="villa-rating">Rating: {villa.rating} ⭐</p>
        <p className="villa-address">Address: {villa.address}</p>
        <p className="villa-tags">Tags: {villa.tags}</p>
      </div>
    </div>
  );
};

export default VillaCard;
