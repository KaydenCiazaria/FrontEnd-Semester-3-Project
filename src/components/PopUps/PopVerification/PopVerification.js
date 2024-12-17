import React, { useState } from "react";
import "./PopVerification.css";

const PopVerification = ({ closeModal }) => {
  const [verifyCode, setVerificationCode] = useState("");
  const [rating, setRating] = useState(3); // Default slider value

  const handleSliderChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem("jwtToken");
    const endpoint = "http://localhost:8080/api/reservation/verifyReview";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          verification_code: verifyCode,
          userRate: rating
        })
      })

      if (!response.ok) {
        throw new Error(`${response.status}`)
      }

      console.log("Rating Submitted");
      alert(`Reservation verified!`);
      closeModal();

    } catch (error) {
      console.error(`Error submitting form: ${error}`)
      alert("Reservation not found, please double check the verification code.");
    }
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
              value={verifyCode}
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
                step="1"
                value={rating}
                onChange={handleSliderChange}
                className="slider"
              />
              <span className="rating-display">{rating}</span>
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
