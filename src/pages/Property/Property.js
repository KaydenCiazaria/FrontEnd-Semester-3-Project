import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyList from '../../components/PropertyList/PropertyList';
import PropertyInformation from '../../components/PropertyInformation/PropertyInformation';
import './Property.css';

const properties = [
  {
    date: '5 December - 10 December 2024',
    image: 'image-path',
    title: 'Beauvida Villa',
    price: 'Rp. 200.000/Night',
    address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan',
    status: 'confirmed',
    tags: ['Whatever'],
  },
  {
    date: '5 December - 10 December 2024',
    image: 'image-path',
    title: 'Bekasi Villa',
    price: 'Rp. 200.000/Night',
    address: 'Jl. Prasopaca Raya no.20, Harapan Indah, Bekasi',
    status: 'finished',
    tags: ['Whatever'],
  },
];

const Property = () => {
  const navigate = useNavigate();

  // Set default property to the first property in the list if available
  const [selectedProperty, setSelectedProperty] = useState(
    properties.length > 0 ? properties[0] : null
  );

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div>
      <div>
        <h1>Your Villa!</h1>
        {/* Show message if no properties are available */}
        {properties.length === 0 ? (
          <p>Please add your property</p>
        ) : (
          <div className="properties-container">
            {properties.map((currentProperty, index) => (
              <PropertyList
                key={index}
                property={currentProperty}
                onClick={handlePropertyClick}
              />
            ))}
          </div>
        )}
      </div>
      {/* Conditionally render PropertyInformation if a property is selected */}
      {selectedProperty && (
        <div className="property-information-container">
          <PropertyInformation property={selectedProperty} />
        </div>
      )}
    </div>
  );
};

export default Property;
