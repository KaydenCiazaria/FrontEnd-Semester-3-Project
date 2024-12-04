// src/components/VillaCard.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import './VillaCard.css';

const VillaCard = ({ villa }) => {
  const navigate = useNavigate();
  return (
    <div className="villa-card"
    onClick={() => navigate("/VillaInformation")}
    style={{ cursor: "pointer" }}
    >
      <img src={villa.image} alt={villa.title + " Image"} className="villa-image" />
      <h3>{villa.title}</h3>
      <p>Price: {villa.price}</p>
      <p>Rating: {villa.rating} ⭐</p>
      <p>Address: {villa.address}</p>
      <p>Tags: {villa.tags.join(', ')}</p>
    </div>
  );
};

export default VillaCard;
