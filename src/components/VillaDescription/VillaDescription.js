// src/components/VillaDescription.js
import React from 'react';
import './VillaDescription.css';

const VillaDescription = ({ villa }) => {
  return (
    <div className="villa-description-container">
      <div className="villa-image-container">
        <img src={villa.image} alt={villa.title} className="villa-image" />
      </div>
      <div className="villa-info-container">
        <h3>{villa.title}</h3>
        <p>Price: {villa.price}</p>
        <p>Rating: {villa.rating} ⭐</p>
        <p>Address: {villa.address}</p>
        <p>Tags: {villa.tags.join(', ')}</p>
      </div>
    </div>
  );
};

export default VillaDescription;
