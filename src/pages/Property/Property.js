import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyList from '../../components/PropertyList/PropertyList';
import PropertyInformation from '../../components/PropertyInformation/PropertyInformation';
import './Property.css';
import VillaExample from '../../assets/images/VillaExample.jpg';

const properties = [
  {
    date: '5 December - 10 December 2024',
    image: require('../../assets/images/VillaExample.jpg'),
    title: 'Beauvida Villa',
    price: 'Rp. 200.000/Night',
    address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan',
    status: 'confirmed',
    tags: ['Swimming Pool', '3 bedrooms', '2 toilets', 'BBQ'],
  },
  {
    date: '5 December - 10 December 2024',
    image: 'image-path-2',
    title: 'Bekasi Villa',
    price: 'Rp. 200.000/Night',
    address: 'Jl. Prasopaca Raya no.20, Harapan Indah, Bekasi',
    status: 'finished',
    tags: ['Garden', '4 bedrooms', '3 toilets', 'BBQ'],
  },
  {
    date: '10 December - 15 December 2024',
    image: 'image-path-3',
    title: 'Serenity Villa',
    price: 'Rp. 300.000/Night',
    address: 'Jl. Serene No.5, Bali',
    status: 'confirmed',
    tags: ['Ocean View', '3 bedrooms', '1 toilet', 'BBQ'],
  },
];

const Property = () => {
  const navigate = useNavigate();

  // Set default property to the first property in the list if available
  const [selectedProperty, setSelectedProperty] = useState(
    properties.length > 0 ? properties[0] : null
  );

  const handlePropertyClick = (index) => {
    setSelectedProperty(properties[index]);
  };

  const handleNext = () => {
    const currentIndex = properties.indexOf(selectedProperty);
    const nextIndex = (currentIndex + 1) % properties.length;
    setSelectedProperty(properties[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = properties.indexOf(selectedProperty);
    const prevIndex = (currentIndex - 1 + properties.length) % properties.length;
    setSelectedProperty(properties[prevIndex]);
  };

  return (
    <div>
      <h1>Your Villa!</h1>
      {/* Show message if no properties are available */}
      {properties.length === 0 ? (
        <p>Please add your property</p>
      ) : (
        <div className="properties-container">
          {/* Previous Villa Button */}
          <button onClick={handlePrev} className="navigation-button left">▶</button>
          
          {/* Main Villa Image */}
          <div className="main-villa-container">
            <img 
              src={selectedProperty.image} 
              alt={selectedProperty.title} 
              className="main-villa-image"
            />
          </div>
          
          {/* Next Villa Button */}
          <button onClick={handleNext} className="navigation-button right">◀</button>
        </div>
      )}

      {/* Property Description */}
      {selectedProperty && (
        <div className="property-information-container">
          <PropertyInformation property={selectedProperty} />
        </div>
      )}
    </div>
  );
};

export default Property;
