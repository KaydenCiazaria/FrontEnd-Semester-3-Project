import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopVerification from ".././PopUps/PopVerification/PopVerification";
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

  // Function to determine the modal component
  const renderModal = () => {
    if (villa.type === "villa-approval") {
      return <PopVerification closeModal={closeModal} />;
    }
    return null; // No modal for other types
  };

  // Function to handle button actions
  const buttonFunction = () => {
    if (villa.type === "villa-approval") {
      handleOpenModal();
    } else {
      navigate("/headerLoggedIn/reservationDetail", {
        state: { villa, type: "Reservation Detail" },
      });
    }
  };

  // Function to determine card content
  const renderContent = () => {
    if (villa.type === "reserved-villas") {
      return (
        <div className="rate-paragraph">
          <div>
            <h3>{villa.title}</h3>
            <p>Price: {villa.price}</p>
            <p>Address: {villa.address}</p>
            <p>Reserved Dates: {villa.date}</p>
            <p>Message from user: {villa.message}</p>
            <p>Verification Code: {villa.verificationCode}</p>
          </div>
          <button onClick={buttonFunction}>More Information!</button>
        </div>
      );
    } else if (villa.type === "villa-approval") {
      return (
        <div className="rate-paragraph">
          <div>
            <h3>{villa.title}</h3>
            <p>{villa.title} has been reserved.</p>
          </div>
          <div>
            <button onClick={buttonFunction}>Reservation Code</button>
          </div>
        </div>
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
