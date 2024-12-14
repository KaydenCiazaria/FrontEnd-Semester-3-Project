import React, { useState, useEffect } from "react";
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import "./Notification.css";
import axios from 'axios';

const NotificationOwner = () => {
  const [villas, setVillas] = useState([]); // Initialize as an empty array
  const [villaOwnerid, setvillaOwnerid] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("jwtToken");
  const [OwnedVillas,setOwnedVillas] = useState("");

  useEffect(() => {
    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    axios.post(
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
        console.log("fetching Owner id", response.data); 
        const villaOwnerid = response.data.data[0]?.toString();
        setvillaOwnerid(villaOwnerid);
      })
      .catch((err) => {
        console.error("Error fetching user ID:", err);
        setError("Failed to fetch user ID.");
      });
  }, [token]);

  useEffect(() => {
    if (!villaOwnerid) return;
  
    axios.post(
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
        const villaIds = response.data.map((villa) => villa.id);
        console.log("fetching List of Villa IDs", villaIds);
        setOwnedVillas(villaIds); // Set the array of IDs
      })
      .catch((err) => {
        console.error("Error fetching user ID:", err);
        setError("Failed to fetch user ID.");
      });
  }, [villaOwnerid,token]);

  useEffect(() => {
    if (!OwnedVillas || OwnedVillas.length === 0) return;
  
    const fetchReservations = async () => {
      try {
        // Use Promise.all to fetch reservations for all villa IDs
        const reservationRequests = OwnedVillas.map((villaId) =>
          axios.post(
            "/api/reservation/view_owner_reservation",
            { villaId }, // Single villa ID per request
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )
        );
  
        // Wait for all requests to complete
        const responses = await Promise.all(reservationRequests);
  
        // Combine all reservation results
        const combinedReservations = responses.flatMap((response) =>
          response.data.map((reservation) => ({
            id: reservation.id,
            villaId: reservation.villaId,
          }))
        );
  
        console.log("Fetching reservation list", combinedReservations);
        setReservations(combinedReservations);
      } catch (err) {
        console.error("Error fetching reservations:", err);
        setError("Failed to fetch reservations.");
      }
    };
  
    fetchReservations();
  }, [OwnedVillas, token]);  
  
  // still need to fetch villas based on the fetched reservation.villaId
  

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

export default NotificationOwner;
