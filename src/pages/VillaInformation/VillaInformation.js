import React from 'react';
import { useLocation } from "react-router-dom";
import FormReservation from '../../components/Form/FormReservation'; 
import './VillaInformation.css';

const VillaInformation = () => {
  const location = useLocation(); // Access the current URL and information
  const { villa } = location.state; // Accessing the state passed from VillaCard.js

  return (
    <div className="villa-container">
      <div className="villa-info">
        {/* Image of the Villa */}
        <div className="villa-image-container">
          <img src={villa.image} alt={villa.name} className="villa-image" />
        </div>

        {/* Villa Details */}
        <div className="villa-details">
          <h1>{villa.title}</h1>
          <p className="rating">Rating: {villa.rating}⭐</p>
          <div className="info-item">
            <span className="label">Address:</span>
            <span className="value">{villa.address}</span>
          </div>
          <div className="info-item">
            <span className="label">Short Description:</span>
            <span className="value">{villa.shortDescription}</span>
          </div>
          <div className="info-item">
            <span className="label">Tags:</span>
            <span className="value">{villa.tags.join(", ")}</span>
          </div>
          <div className="info-item">
            <span className="label">Price:</span>
            <span className="value">{villa.price}</span>
          </div>
        </div>
      </div>
      
      {/* Add Reserve Now heading inside the form container */}
      <div className="reserve-heading">
        <h2>Reserve Now!</h2>
      </div>
      
      {/* Form Component */}
      <FormReservation />
    </div>
  );
};

export default VillaInformation;
