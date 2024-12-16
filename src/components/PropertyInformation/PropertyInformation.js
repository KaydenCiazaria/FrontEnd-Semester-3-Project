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
    navigate(`/headerLoggedIn/propertyEdit/${property.id}`, {
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
      {/* Add New Property button positioned at the top right */}
      <button className="info-button add-button" onClick={handleAddProperty}>
        Add new Property
      </button>
      
      <div className="property-info-container">
        <h2>Property Details</h2>
        <p><strong>Title:</strong> {property?.title || "N/A"}</p>
        <p><strong>Price:</strong> {property?.price || "N/A"}</p>
        <p><strong>Address:</strong> {property?.address || "N/A"}</p>
        <p><strong>Tags:</strong> {property?.tags?.join(', ') || "No tags available"}</p>
      </div>

      {/* Action buttons container */}
      <div className="buttons-container">
        <button className="info-button edit-button" onClick={handleEditProperty}>
          Edit
        </button>
        <button className="info-button schedule-button" onClick={handleViewSchedule}>
          Schedule
        </button>
      </div>
    </div>
  );
};

export default PropertyInformation;