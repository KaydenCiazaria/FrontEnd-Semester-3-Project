import React from "react";
import NotificationCard from '../components/NotificationCard/NotificationCard';
import "./Notification.css";

const villas = [
  {
    type: 'reserved-villas',
    date: '5 December - 10 December 2024',
    title: 'Beauvida Villa',
    price: 'Rp. 200.000/Night',
    address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan'
  },
  {
    type: 'villa-approval',
    date: '5 December - 10 December 2024',
    title: 'Jakarta Villa',
    price: 'Rp. 200.000/Night',
    address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan'
  },
  {
    type: 'villa-rate',
    date: '5 December - 10 December 2024',
    title: 'Bekasi Villa',
    price: 'Rp. 200.000/Night',
    address: 'Jl. Prasopaca Raya no.20, Harapan Indah, Bekasi'
  },
  // Add more villa objects as needed
];

const Notification = () => {
  return (
    <div className="notification-background">
      <div className="user-type-placeholder">
        <div className="user-type-placeholder">
          <label>
            <input type="radio" name="userType" value="renter" /> Renter
          </label>
          <label>
            <input type="radio" name="userType" value="owner" /> Owner
          </label>
        </div>
      </div>
      <div className="content-box"> 
      {villas.map((currentVilla, index) => (
          <NotificationCard key={index} villa={currentVilla} /> // the logic something like this
        ))}
      </div>
    </div>
  );
};

export default Notification;
