// src/components/NotificationCard.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import './NotificationCard.css';

const NotificationCard = ({ villa }) => {
  const navigate = useNavigate();

  const handleInformation = () => {
    navigate("/headerLoggedIn/reservationDetails", { state: { villa, type: "Reservation Details" } }); // use id later
  };

  return (
    <div className="NotificationCard">
      <img src={villa.image} alt= "woi" className="villa-image" />
      <h3>{villa.title}</h3>
      <p>Price: {villa.price}</p>
      <p>Address: {villa.address}</p>
      <p>Reserved Dates: {villa.date}</p>
      <button onClick={handleInformation}>Details</button>
    </div>
  );
};

export default NotificationCard;
