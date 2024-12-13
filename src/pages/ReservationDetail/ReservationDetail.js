import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PopRate from "../.././components/PopUps/PopRate/PopRate";
import "./ReservationDetail.css"; // Custom CSS for styling

const ReservationDetail = () => {
  const location = useLocation();
  const { reservation } = location.state || {}; // Retrieve reservation from state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle the case where reservation is undefined
  if (!reservation) {
    return <p>No reservation details available.</p>;
  }

  return (
    <div className="reservation-detail-container">
      <div className="reservation-detail-card">
        <div className="villa-image-container">
          {reservation.image ? (
            <img src={reservation.image} alt={reservation.title} className="villa-image" />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className="villa-info-container">
          <div className="villa-info-left">
            <h3>{reservation.title}</h3>
            <p>Date: {reservation.date}</p>
            <p>Check-in time: 14:00 WIB</p>
            <p>Check-out time: 12:00 WIB<br /></p>
            <p>Address: {reservation.address}</p>
          </div>
          <div className="villa-info-right">
            <h3>Check-in Now?</h3>
            <p>Status: {reservation.status || "N/A"}</p>
            <button onClick={handleOpenModal}>Show code</button>
          </div>
        </div>  
      </div>
      {isModalOpen && <PopRate closeModal={closeModal} />}
    </div>
  );
};

export default ReservationDetail;
