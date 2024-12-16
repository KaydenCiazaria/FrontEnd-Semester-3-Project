import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './PropertySchedule.css';
import RenterInformation from '../components/RenterInformation/RenterInformation';
import { useParams } from 'react-router-dom';

const PropertySchedule = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [reservationData, setReservationData] = useState({
    '2024-11-01': {
      renterName: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      numberOfGuests: 4,
      message: 'Late check-in request',
    },
    '2024-11-05': {
      renterName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '987-654-3210',
      numberOfGuests: 2,
      message: 'Extra bed',
    },
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // Formats to YYYY-MM-DD
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const reservation_end = 'http://localhost:8080/api/reservation/view_owner_reservation';
    const user_end = 'http://localhost:8080/api/users/getuserinfo';
  
    const fetchReservations = async () => {
      try {
        
        const getreservations = await fetch(reservation_end, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            villaId: id
          })
        });
  
        if (!getreservations.ok) {
          throw new Error(`Error fetching reservations: ${getreservations.status}`);
        }
  
        const reservations = await getreservations.json();
  
        const userFetch = reservations.map(async (reservation) => {
          const userResponse = await fetch(user_end, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: reservation.userId
            })
          });
  
          if (!userResponse.ok) {
            throw new Error(`Error fetching user details: ${userResponse.status}`);
          }

          const userInfo = await userResponse.json();
          return { ...reservation, userInfo };
        });
  
        const fullReserve = await Promise.all(userFetch);
  
        const formattedReservations = fullReserve.reduce((acc, reservation) => {
          const { createdOn, userInfo, message, numberOfGuests } = reservation;
          const formedDate = createdOn.split('T')[0];
          acc[formedDate] = {
            renterName: userInfo.firstName + ' ' + userInfo.lastName,
            email: userInfo.email,
            phoneNumber: userInfo.phone_num,
            numberOfGuests: numberOfGuests,
            message: message,
          };
          return acc;
        }, {});
  
        setReservationData(formattedReservations);
  
      } catch (error) {
        console.error(`Error fetching reservations: ${error}`);
      }
    };
  
    fetchReservations();
  }, []);

  return (
    <div className="property-schedule-container">
      <div className="schedule-content">
        {/* Calendar Component */}
        <div className="calendar-container">
          <Calendar
            onClickDay={handleDateChange}
            tileClassName={({ date }) => {
              const formattedDate = formatDate(date);
              return reservationData[formattedDate] ? 'reserved-date' : null;
            }}
          />
        </div>

        {/* Renter Information Component */}
        <RenterInformation
          selectedDate={selectedDate}
          reservationData={reservationData}
        />
      </div>
    </div>
  );
};

export default PropertySchedule;
