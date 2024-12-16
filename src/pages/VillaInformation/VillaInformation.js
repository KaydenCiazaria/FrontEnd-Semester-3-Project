import React from 'react';
import { useLocation } from "react-router-dom";
import FormReservation from '../../components/Form/FormReservation'; 
import './VillaInformation.css';

const VillaInformation = () => {
  const location = useLocation();
  const { villa } = location.state; // Assumes villa data is passed from the previous page

  return (
    <div className="villa-container">
      <div className="villa-header">
        <img src={villa.imageUrl} alt={villa.name} className="villa-image" />
        <div className="villa-details">
          <h1>{villa.name}</h1>
          <p className="villa-rating">Rating: {villa.rating}</p>
          <p><strong>Address:</strong> {villa.address}</p>
          <p><strong>Short Description:</strong> {villa.description}</p>
          <p><strong>Tags:</strong> {villa.tags.join(', ')}</p>
          <p><strong>Price:</strong> ${villa.price}</p>
        </div>
      </div>
      <div className="form-section">
        <h2>Reserve Now!</h2>
        <FormReservation />
      </div>
    </div>
  );
};

export default VillaInformation;
