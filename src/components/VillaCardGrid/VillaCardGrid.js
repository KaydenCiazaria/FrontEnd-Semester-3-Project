import React from 'react';
import VillaCard from '../VillaCard/VillaCard'; // Ensure the path to VillaCard is correct
import './VillaCardGrid.css'; // Import the CSS file for styling

const VillaCardGrid = ({ villas }) => {
  return (
    <div className="villa-card-grid">
      {villas.map((villa, index) => (
        <VillaCard key={index} villa={villa} />
      ))}
    </div>
  );
};

export default VillaCardGrid;