import React, { useState } from 'react';

const RenterInformation = ({ selectedDate, reservationData }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');
  const [verificationMessageColor, setVerificationMessageColor] = useState('');
  const hardcodedVerificationCode = '12345'; // Hardcoded code for verification

  const handleVerification = () => {
    if (verificationCode === hardcodedVerificationCode) {
      setVerificationMessage('Verification Success!');
      setVerificationMessageColor('green');
    } else {
      setVerificationMessage('Verification Failed');
      setVerificationMessageColor('red');
    }
  };

  return (
    <div className="renter-info-container">
      <h3>Information</h3>
      {selectedDate ? (
        <div>
          <p>
            <strong>Date: </strong>{selectedDate.toDateString()}
          </p>
          {reservationData[selectedDate.toISOString().split('T')[0]] ? (
            <>
              <p>
                <strong>Name: </strong>{reservationData[selectedDate.toISOString().split('T')[0]].renterName}
              </p>
              <p>
                <strong>Email: </strong>{reservationData[selectedDate.toISOString().split('T')[0]].email}
              </p>
              <p>
                <strong>Phone Number: </strong>{reservationData[selectedDate.toISOString().split('T')[0]].phoneNumber}
              </p>
              <p>
                <strong>Number of Guests: </strong>{reservationData[selectedDate.toISOString().split('T')[0]].numberOfGuests}
              </p>
              <p>
                <strong>Message: </strong>{reservationData[selectedDate.toISOString().split('T')[0]].message}
              </p>

              {/* Verification Button and Input */}
              <div className="verification-container">
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter Verification Code"
                />
                <button className="verify-button" onClick={handleVerification}>
                  Verify Renter
                </button>
                {verificationMessage && (
                  <p style={{ color: verificationMessageColor }}>{verificationMessage}</p>
                )}
              </div>
            </>
          ) : (
            'No reservation for this date.'
          )}
        </div>
      ) : (
        <p>Select a date to view renter information.</p>
      )}
    </div>
  );
};

export default RenterInformation;
