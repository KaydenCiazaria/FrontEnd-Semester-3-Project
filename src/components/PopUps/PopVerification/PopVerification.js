import React, { useState } from "react";
import "./PopVerification.css";

const PopVerification = ({ closeModal }) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [rating, setRating] = useState(2.5); // Default slider value

  const handleSliderChange = (e) => {
    setRating(parseFloat(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Verification Code:", verificationCode);
    console.log("Rating Submitted:", rating);
    // Perform your combined API call or logic here
    alert(`Verification Code: ${verificationCode}, Rating: ${rating.toFixed(1)}`);
    closeModal(); // Close the modal after submitting
  };

  return (
    <div className="pop-verification-overlay">
      <div className="pop-verification-container">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <h2>Verify Renter and Rate Your Stay</h2>

        <form onSubmit={handleSubmit}>
          {/* Verification Input */}
          <div className="form-group">
            <label>Verification Code:</label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
          </div>

          {/* Rating Slider */}
          <div className="form-group">
            <label>Rate Your Stay:</label>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={rating}
                onChange={handleSliderChange}
                className="slider"
              />
              <span className="rating-display">{rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="verify-submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopVerification;
