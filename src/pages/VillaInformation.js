// src/pages/VillaInformation.js
import React from 'react';
import { useLocation } from "react-router-dom";
import VillaDescription from '../components/VillaDescription/VillaDescription';
import FormReservation from '../components/Form/FormReservation'; 
import './VillaInformation.css';

const VillaInformation = () => {
  const location = useLocation(); // Access the current URL and information
  const { villa } = location.state; // Accessing the state passed from VillaCard.js

  return (
    <div className="parent">
      <VillaDescription villa={villa} /> {/* Display the villa details */}
      <FormReservation /> 
    </div>
  );
};

export default VillaInformation;
