import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopRate from ".././PopUps/PopRate/PopRate";
import PopVerification from ".././PopUps/PopVerification/PopVerification";
import "./NotificationCard.css";

const NotificationCard = ({ reservation }) => {
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

  // Function to determine the modal component
  const renderModal = () => {
    if (reservation.type === "villa-approval") {
      return <PopVerification closeModal={closeModal} />;
    } else if (reservation.type === "villa-rate") {
      return <PopRate closeModal={closeModal} />;
    }
    return null; // No modal for other types
  };

  // Function to handle button actions
  const buttonFunction = () => {
    if (reservation.type === "villa-approval" || reservation.type === "villa-rate") {
      handleOpenModal();
    } else {
      navigate("/headerLoggedIn/reservationDetail", {
        state: { reservation, type: "Reservation Detail" },
      });
    }
  };

  // Function to determine card content
  const renderContent = () => {
    if (reservation.type === "reserved-villas") {
      return (
        <>
          <h3>{reservation.title}</h3>
          <p>Price: {reservation.price}</p>
          <p>Address: {reservation.address}</p>
          <p>Reserved Dates: {reservation.date}</p>
          <button onClick={buttonFunction}>More Information!</button>
        </>
      );
    } else if (reservation.type === "villa-approval") {
      return (
        <>
          <h3>{reservation.title}</h3>
          <p>{reservation.title} has been reserved.</p>
          <button onClick={buttonFunction}>Approve Reservation</button>
        </>
      );
    } else if (reservation.type === "villa-rate") {
      return (
        <>
          <h3>{reservation.title}</h3>
          <p>Rate {reservation.title} to share your experience.</p>
          <button onClick={buttonFunction}>Rate Now</button>
        </>
      );
    }
    return null;
  };

  return (
    <div className="NotificationCard">
      {renderContent()}
      {/* Render the modal if open */}
      {isModalOpen && renderModal()}
    </div>
  );
};

export default NotificationCard;
