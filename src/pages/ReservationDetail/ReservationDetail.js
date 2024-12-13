import React from "react";
import { useLocation } from "react-router-dom";
import "./ReservationDetail.css"; // Custom CSS for styling

const ReservationDetail = () => {
  const location = useLocation();
  const { villa } = location.state || {}; // Retrieve villa from state

  // Handle the case where villa is undefined
  if (!villa) {
    return <p>No villa details available.</p>;
  }

  return (
    <div className="reservation-detail-container">
      <div className="reservation-detail-card">
        <div className="villa-image-container">
          <img src={villa.image} alt={villa.title} className="villa-image" />
        </div>
        <div className="villa-info-container">
          <div className="villa-info-left">
            <h3>{villa.title}</h3>
            <p>Date: {villa.date}</p>
            <p>Check-in time</p>
            <p>Address: {villa.address}</p>
          </div>
          <div className="villa-info-right">
            <p>Interested in booking?</p>
            <button>Book Now</button>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default ReservationDetail;
