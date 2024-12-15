import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './PropertySchedule.css';
import RenterInformation from '../components/RenterInformation/RenterInformation';

const PropertySchedule = () => {
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
