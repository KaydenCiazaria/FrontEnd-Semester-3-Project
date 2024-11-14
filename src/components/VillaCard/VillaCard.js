// src/components/VillaCard.js
import React from 'react';
import './VillaCard.css';

const VillaCard = ({ villa }) => {
  return (
    <div className="villa-card">
      <img src={villa.image} alt={villa.title} className="villa-image" />
      <h3>{villa.title}</h3>
      <p>Price: {villa.price}</p>
      <p>Rating: {villa.rating} ⭐</p>
      <p>Address: {villa.address}</p>
      <p>Tags: {villa.tags.join(', ')}</p>
      <button className="reserve-button">Reserve Now</button>
    </div>
  );
};

export default VillaCard;
