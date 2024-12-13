import React, { useState } from "react";
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import "./Notification.css";

const reservationsUser = [
  {
    type: 'reserved-villas',
    date: '5 December - 10 December 2024',
    title: 'Beauvida Villa',
    price: 'Rp. 200.000/Night',
    address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan',
    status: 'confirmed',
  },
  {
    type: 'villa-rate',
    date: '5 December - 10 December 2024',
    title: 'Bekasi Villa',
    price: 'Rp. 200.000/Night',
    address: 'Jl. Prasopaca Raya no.20, Harapan Indah, Bekasi',
    status: 'finished',
  },
];

const reservationsOwner = [
  {
    type: 'villa-approval',
    date: '5 December - 10 December 2024',
    title: 'Jakarta Villa',
    price: 'Rp. 200.000/Night',
    address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan'
  },
];

const Notification = () => {
  const [userType, setUserType] = useState("renter"); // State to toggle between renter and owner

  // Handle radio button change
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  // Determine which reservations to display
  const reservationsToShow = userType === "renter" ? reservationsUser : reservationsOwner;

  return (
    <div className="notification-background">
      <div className="user-type-placeholder">
        <label>
          <input
            type="radio"
            name="userType"
            value="renter"
            checked={userType === "renter"}
            onChange={handleUserTypeChange}
          />
          Renter
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="owner"
            checked={userType === "owner"}
            onChange={handleUserTypeChange}
          />
          Owner
        </label>
      </div>
      <div className="content-box">
        {reservationsToShow.map((currentReservation, index) => (
          <NotificationCard key={index} reservation={currentReservation} />
        ))}
      </div>
    </div>
  );
};

export default Notification;
