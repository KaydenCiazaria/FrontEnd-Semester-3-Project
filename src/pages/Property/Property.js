import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropertyInformation from '../../components/PropertyInformation/PropertyInformation';
import './Property.css';
import VillaExample1 from '../../assets/images/VillaExample1.jpg';
import VillaExample2 from '../../assets/images/VillaExample2.jpg';
import VillaExample3 from '../../assets/images/VillaExample3.webp';
import VillaExample4 from '../../assets/images/VillaExample4.avif';
import VillaExample5 from '../../assets/images/VillaExample5.webp';

const Property = () => {
  const [error, setError] = useState("");
  const [villaOwnerid, setVillaOwnerid] = useState(null);
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    // Fetch villa owner ID
    axios
      .post(
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
    axios
      .post(
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
        const villaList = response.data.map((villa) => ({
          title: villa.villa_name,
          villadescription: villa.villa_desc,
          address: villa.address,
          price: villa.price,
          occupancy: villa.occupancy,
          availableDate: villa.availableDate,
          imgpath: villa.imagePath ? 
          villa.imagePath[0] === "1" ? VillaExample1 :
          villa.imagePath[0] === "2" ? VillaExample2 :
          villa.imagePath[0] === "3" ? VillaExample3 :
          villa.imagePath[0] === "4" ? VillaExample4 :
          villa.imagePath[0] === "5" ? VillaExample5 :
          villa.imagePath[0] : VillaExample1,
          villarating: villa.review_rating,
          villacomment: villa.review_comment,
          location: villa.locationName,
        }));
        console.log(villaList);
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

  const handleNext = () => {
    if (properties.length === 0 || !selectedProperty) return;
    const currentIndex = properties.indexOf(selectedProperty);
    const nextIndex = (currentIndex + 1) % properties.length;
    setSelectedProperty(properties[nextIndex]);
  };

  const handlePrev = () => {
    if (properties.length === 0 || !selectedProperty) return;
    const currentIndex = properties.indexOf(selectedProperty);
    const prevIndex = (currentIndex - 1 + properties.length) % properties.length;
    setSelectedProperty(properties[prevIndex]);
  };

  return (
    <div>
      <h1>Your Villas</h1>
      {error && <p className="error-message">{error}</p>}
      {properties.length === 0 ? (
        <p>Please add your property.</p>
      ) : (
        <div className="properties-container">
          {/* Previous Villa Button */}
          <button onClick={handlePrev} className="navigation-button left">
            ▶
          </button>

          {/* Main Villa Image */}
          <div className="main-villa-container">
            {selectedProperty && (
              <img
                src={selectedProperty.imgpath}
                alt={selectedProperty.title}
                className="main-villa-image"
              />
            )}
          </div>

          {/* Next Villa Button */}
          <button onClick={handleNext} className="navigation-button right">
            ◀
          </button>
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
