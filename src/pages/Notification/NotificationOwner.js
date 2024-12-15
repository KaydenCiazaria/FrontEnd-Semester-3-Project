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
  const [OwnedVillas, setOwnedVillas] = useState("");
  const [ReservedOwnedVillas, setReservedOwnedVillas] = useState([]);

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
  }, [villaOwnerid, token]);

  useEffect(() => {
    if (!OwnedVillas || OwnedVillas.length === 0) return;
  
    const fetchReservations = async () => {
      try {
        // Fetch reservations for all villa IDs
        const reservationRequests = OwnedVillas.map((villaId) =>
          axios.post(
            "/api/reservation/view_owner_reservation",
            { villaId },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )
        );
  
        const responses = await Promise.all(reservationRequests);
  
        // Combine all reservation results
        const combinedReservations = responses.flatMap((response) =>
          response.data.map((reservation) => ({
            id: reservation.id,
            villaId: reservation.villaId,
            messagefromuser: reservation.message,
            verificationCode: reservation.verificationCode
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
  
  useEffect(() => {
    if (!reservations || reservations.length === 0) return;
  
    const fetchReservedVillas = async () => {
      try {
        // Fetch villa details for each reservation
        const villaRequests = reservations.map((reservation) =>
          axios.post(
            "/api/villa/view_user_villa",
            { villaId: reservation.villaId },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )
        );
  
        const villaResponses = await Promise.all(villaRequests);
  
        // Combine villa details with reservation data
        const combinedVillas = villaResponses.map((response, index) => {
          const { villa_name, villa_desc, price } = response.data;
          const verificationCode = reservations[index]?.verificationCode
          const messagefromuser = reservations[index]?.messagefromuser; // Get the message from reservation
          return { villa_name, villa_desc, price, messagefromuser,verificationCode };
        });
  
        console.log("Fetching List of Reserved Villas", combinedVillas);
        setReservedOwnedVillas(combinedVillas);
      } catch (err) {
        console.error("Error fetching reserved villas:", err);
        setError("Failed to fetch reserved villas.");
      }
    };
  
    fetchReservedVillas();
  }, [reservations, token]);
  
  return (
    <div className="notification-background">
      <div className="content-box">
        {ReservedOwnedVillas && ReservedOwnedVillas.length > 0 ? (
          ReservedOwnedVillas.map((villa, index) => (
            <NotificationCard
              key={index}
              villa={{
                type: 'reserved-villas', // Keeping 'reserved-villas' as the type
                date: `${villa.createdOn} - ${villa.updatedOn}`,  // Replace with proper date logic
                title: villa.villa_name, // Use the villa name from the response
                price: villa.price ? `Rp. ${villa.price}/Night` : 'Rp. 200.000/Night', // Adjust price as needed
                address: villa.villa_desc, // Assuming villa_desc is the address or description of the villa
                message: villa.messagefromuser, // Add the message from the reservation
                verificationCode : villa.verificationCode
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
