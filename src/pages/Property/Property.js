import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropertyList from '../../components/PropertyList/PropertyList';
import PropertyInformation from '../../components/PropertyInformation/PropertyInformation';
import './Property.css';
import axios from 'axios';

const Property = () => {
  const [error, setError] = useState("");
  const [villaOwnerid, setVillaOwnerid] = useState(null);
  const [properties, setProperties] = useState([]); // Initialize as an array
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    // Fetch villa owner ID
    axios.post(
      "/api/villa_owner/auth/getVillaOwnerId",
      { token },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        const ownerId = response.data.data[0]?.toString();
        setVillaOwnerid(ownerId);
      })
      .catch((err) => {
        console.error("Error fetching user ID:", err);
        setError("Failed to fetch user ID.");
      });
  }, [token]);

  useEffect(() => {
    if (!villaOwnerid) return;

    // Fetch villas for the owner
    axios.post(
      "/api/villa/view_owner_villa",
      { villaOwnerid },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        const villaList = response.data.map(villa => ({
          title: villa.villa_name,
          villadescription: villa.villa_desc,
          address: villa.address,
          price: villa.price,
          occupancy: villa.occupancy,
          availableDate: villa.availableDate,
          imgpath: villa.imagePath,
          villarating: villa.review_rating,
          villacomment: villa.review_comment,
          location: villa.locationName,
        }));
        setProperties(villaList);
        if (villaList.length > 0) {
          setSelectedProperty(villaList[0]); // Set the first property as default
        }
      })
      .catch((err) => {
        console.error("Error fetching villas:", err);
        setError("Failed to fetch villas.");
      });
  }, [villaOwnerid, token]);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div>
      <h1>Your Villas!</h1>
      {/* Display error message if exists */}
      {error && <p className="error">{error}</p>}
      
      {/* Display properties or fallback message */}
      {properties.length === 0 ? (
        <p>Please add your property</p>
      ) : (
        <div className="properties-container">
          {properties.map((property, index) => (
            <PropertyList
              key={index}
              property={property}
              onClick={() => handlePropertyClick(property)}
            />
          ))}
        </div>
      )}
      
      {/* Display selected property information */}
      {selectedProperty && (
        <div className="property-information-container">
          <PropertyInformation property={selectedProperty} />
        </div>
      )}
    </div>
  );
};

export default Property;
