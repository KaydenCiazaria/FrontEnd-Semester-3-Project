import React from 'react';
import './PropertyList.css';

const PropertyList = ({ property, onClick }) => {
  return (
    <div className="property-item" onClick={() => onClick(property)}>
      <div className="property-image">
        {property.image}
      </div>
    </div>
  );
};

export default PropertyList;
