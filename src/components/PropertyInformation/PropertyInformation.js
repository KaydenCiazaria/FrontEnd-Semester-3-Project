import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PropertyInformation.css';

const PropertyInformation = ({ property }) => {
  const navigate = useNavigate();

  // Separated navigation handler functions with passed state
  const handleAddProperty = () => {
    navigate("/headerLoggedIn/propertyAdd", {
      state: { type: "Add Property" },
    });
  };

  const handleEditProperty = () => {
    navigate("/headerLoggedIn/propertyEdit", {
      state: { property, type: "Edit Property" },
    });
  };

  const handleViewSchedule = () => {
    navigate("/headerLoggedIn/propertySchedule", {
      state: { property, type: "Schedule" },
    });
  };

  return (
    <div className="property-information-container">
      <div className="property-info-container">
        <h2>Property Details</h2>
        <p><strong>Title:</strong> {property?.title || "N/A"}</p>
        <p><strong>Price:</strong> {property?.price || "N/A"}</p>
        <p><strong>Address:</strong> {property?.address || "N/A"}</p>
        <p><strong>Tags:</strong> {property?.tags?.join(', ') || "No tags available"}</p>
      </div>
      <div className="buttons-container">
        <button className="info-button" onClick={handleAddProperty}>
          Add new Property
        </button>
        <button className="info-button" onClick={handleEditProperty}>
          Edit your Properties?
        </button>
        <button className="info-button" onClick={handleViewSchedule}>
          See your property schedule
        </button>
      </div>
    </div>
  );
};

export default PropertyInformation;
