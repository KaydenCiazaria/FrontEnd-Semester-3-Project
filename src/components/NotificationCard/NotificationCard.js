import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopRate from ".././Pop_Ups/PopRate";
import PopVerification from ".././Pop_Ups/PopVerification";
import "./NotificationCard.css";

const NotificationCard = ({ villa }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to determine the modal component, as all modal is open, this determine which one is closed
  const renderModal = () => {
    if (villa.type === "villa-approval") {
      return <PopVerification closeModal={closeModal} />;
    } else if (villa.type === "villa-rate") {
      return <PopRate closeModal={closeModal} />;
    }
    return null; // No modal for other types
  };

  // Function to determine button text
  const getButtonText = () => {
    if (villa.type === "reserved-villas") {
      return "View Reservation Details";
    } else if (villa.type === "villa-approval") {
      return "Approve Villa";
    } else if (villa.type === "villa-rate") {
      return "Rate Villa";
    } else {
      return "Details";
    }
  };

  return (
    <div className="NotificationCard">
      <img src={villa.image} alt="Villa" className="villa-image" />
      <h3>{villa.title}</h3>
      <p>Price: {villa.price}</p>
      <p>Address: {villa.address}</p>
      <p>Reserved Dates: {villa.date}</p>
      <button
        onClick={
          villa.type === "villa-approval" || villa.type === "villa-rate"
            ? handleOpenModal
            : () => navigate("/headerLoggedIn/reservationDetails", { state: { villa, type: "Reservation Details" } })
        }
      >
        {getButtonText()}
      </button>

      {/* Render the modal if open */}
      {isModalOpen && renderModal()}
    </div>
  );
};

export default NotificationCard;
