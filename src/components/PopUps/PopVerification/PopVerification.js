import React, { useState } from "react";
import "./PopVerification.css";

const PopVerification = ({ closeModal }) => {
  const [verificationCode, setVerificationCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the verification logic here, e.g., API call to verify the code
    console.log("Verification code submitted:", verificationCode);
    closeModal(); // Close the modal after submitting
  };

  return (
    <div className="pop-verification-overlay">
      <div className="pop-verification-container">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <h2>Verify Renter</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Verification Code:</label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="verify-submit-button">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopVerification;
