import React, { useState, useEffect } from "react";
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import "./Notification.css";
import axios from 'axios';

const Notification = () => {
  const [villas, setVillas] = useState([]); // Initialize as an empty array
  const [userId, setUserId] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    // Fetch user ID first
    axios.post(
      "/api/users/auth/getusersId",
      { token },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log("fetching user id", response.data); 
        const userId = response.data.data[0]?.toString();
        setUserId(userId); // Set userId for the next request
      })
      .catch((err) => {
        console.error("Error fetching user ID:", err);
        setError("Failed to fetch user ID.");
      });
  }, [token]);

  useEffect(() => {
    if (!userId) return;
  
    // Fetch reservation data
    axios.post(
      `/api/reservation/view_user_reservation`,
      { userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        const villaIds = response.data.map(reservation => reservation.villaId);
        console.log("Villa IDs:", villaIds);
  
        if (villaIds.length > 0) {
          // Fetch each villa by ID
          Promise.all(
            villaIds.map(id =>
              axios.post(
                `/api/villa/view_user_villa`,
                { villaId: id },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                  },
                }
              )
            )
          )
            .then(responses => {
              const villas = responses.map(res => res.data);
              setVillas(villas);
            })
            .catch(err => {
              console.error("Error fetching villas:", err);
              setError("Failed to fetch villas.");
            });
        }
      })
      .catch((err) => {
        console.error("Error fetching reservations:", err);
        setError("Failed to fetch reservations.");
      });
  }, [userId, token]);
  

  return (
    <div className="notification-background">
      <div className="content-box">
        {villas && villas.length > 0 ? (
          villas.map((villa, index) => (
            <NotificationCard
              key={index}
              villa={{
                type: villa.reservation_status ? 'reserved-villas' : 'villa-approval',
                date: `${villa.createdOn} - ${villa.updatedOn}`,  // Replace with proper date logic
                title: villa.villa_name, // Assuming villa has a title property
                price: villa.price ? `Rp. ${villa.price}/Night` : 'Rp. 200.000/Night', // Adjust price if needed
                address: villa.address // Assuming villa has an address property
              }}
            />
          ))
        ) : (
          <div>No villas found</div>
        )}
      </div>
    </div>
  );
};

export default Notification;
